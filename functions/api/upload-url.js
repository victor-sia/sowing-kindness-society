// Cloudflare Pages Function — POST /api/upload-url
// Generates a short-lived R2 presigned PUT URL so the browser can upload
// directly to R2 without routing through this Worker (avoids 100 MB body limit).
//
// Required env vars (Cloudflare Pages → Settings → Environment Variables):
//   R2_ACCOUNT_ID       — Cloudflare account ID (from R2 dashboard)
//   R2_ACCESS_KEY_ID    — R2 API token Access Key ID
//   R2_SECRET_ACCESS_KEY — R2 API token Secret Access Key
//   R2_BUCKET_NAME      — e.g. sks-videos
//   R2_PUBLIC_URL       — public bucket URL, e.g. https://videos.sowingkindness.org.sg
//                         (or leave blank to use R2 endpoint directly)

const CORS = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
const EXPIRES = 3600; // presigned URL valid for 1 hour

export async function onRequestPost({ request, env }) {
  const { filename, contentType } = await request.json();
  if (!filename || !contentType) {
    return json({ ok: false, error: 'filename and contentType required' }, 400);
  }

  // Build a safe, unique key:  submissions/2026-05-30/1717056000000-mei-lin.mp4
  const date  = new Date().toISOString().split('T')[0];
  const safe  = filename.toLowerCase().replace(/[^a-z0-9._-]/g, '-');
  const key   = `submissions/${date}/${Date.now()}-${safe}`;

  try {
    const uploadUrl = await presignedPut({
      accountId:       env.R2_ACCOUNT_ID,
      accessKeyId:     env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
      bucket:          env.R2_BUCKET_NAME,
      key,
      contentType,
      expiresIn:       EXPIRES,
    });

    // The public URL the client will reference after upload
    const publicBase = env.R2_PUBLIC_URL
      ? env.R2_PUBLIC_URL.replace(/\/$/, '')
      : `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${env.R2_BUCKET_NAME}`;
    const videoUrl = `${publicBase}/${key}`;

    return json({ ok: true, uploadUrl, videoUrl, key });
  } catch (err) {
    console.error('upload-url error:', err);
    return json({ ok: false, error: 'Could not generate upload URL.' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// ── Helpers ───────────────────────────────────────────────────

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: CORS });
}

// ── AWS Signature V4 presigned PUT URL ────────────────────────
// R2 is S3-compatible; endpoint: https://<accountId>.r2.cloudflarestorage.com

async function presignedPut({ accountId, accessKeyId, secretAccessKey, bucket, key, contentType, expiresIn }) {
  const region  = 'auto';
  const service = 's3';
  const host    = `${accountId}.r2.cloudflarestorage.com`;

  const now      = new Date();
  const datetime = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const date     = datetime.slice(0, 8);

  const credential    = `${accessKeyId}/${date}/${region}/${service}/aws4_request`;
  const signedHeaders = 'content-type;host';

  // 1 ── Canonical query string (params must be sorted)
  const params = new URLSearchParams({
    'X-Amz-Algorithm':     'AWS4-HMAC-SHA256',
    'X-Amz-Credential':    credential,
    'X-Amz-Date':          datetime,
    'X-Amz-Expires':       String(expiresIn),
    'X-Amz-SignedHeaders': signedHeaders,
  });
  // URLSearchParams sorts alphabetically, which is what AWS requires
  const canonicalQuery = params.toString();

  // 2 ── Canonical headers
  const canonicalHeaders = `content-type:${contentType}\nhost:${host}\n`;

  // 3 ── Canonical request
  const canonicalRequest = [
    'PUT',
    `/${bucket}/${key}`,
    canonicalQuery,
    canonicalHeaders,
    signedHeaders,
    'UNSIGNED-PAYLOAD',
  ].join('\n');

  // 4 ── String to sign
  const crHash = await sha256Hex(canonicalRequest);
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    datetime,
    `${date}/${region}/${service}/aws4_request`,
    crHash,
  ].join('\n');

  // 5 ── Derived signing key
  const kDate    = await hmac(`AWS4${secretAccessKey}`, date);
  const kRegion  = await hmac(kDate, region);
  const kService = await hmac(kRegion, service);
  const kSigning = await hmac(kService, 'aws4_request');

  // 6 ── Signature
  const sigBuf = await hmacRaw(kSigning, stringToSign);
  const sig    = hex(sigBuf);

  params.set('X-Amz-Signature', sig);
  return `https://${host}/${bucket}/${key}?${params.toString()}`;
}

// Web Crypto helpers
async function sha256Hex(data) {
  const buf = await crypto.subtle.digest('SHA-256', enc(data));
  return hex(buf);
}

async function hmac(key, data) {
  const raw = await hmacRaw(key, data);
  return raw; // returns ArrayBuffer
}

async function hmacRaw(key, data) {
  const k  = typeof key === 'string' ? enc(key) : key;
  const ck = await crypto.subtle.importKey('raw', k, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return crypto.subtle.sign('HMAC', ck, enc(data));
}

const enc = s => new TextEncoder().encode(s);
const hex = b => Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
