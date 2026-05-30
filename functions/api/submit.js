// Cloudflare Pages Function — POST /api/submit
// Required environment variables (set in Cloudflare Pages dashboard):
//   GOOGLE_SHEET_URL — Google Apps Script Web App URL (writes rows to Google Sheet)
//   RESEND_API_KEY   — Resend API key
//   FROM_EMAIL       — e.g. hello@sowingkindness.org.sg
//   NOTIFY_EMAIL     — organiser email, e.g. sowingkindnesssocietysg@gmail.com

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    // ── Validate required fields ──────────────────────────────
    const missing = ['childName','age','language','ageGroup','parentName','parentEmail']
      .filter(f => !data[f]);
    if (missing.length) {
      return json({ ok: false, error: `Missing fields: ${missing.join(', ')}` }, 400);
    }

    // ── 1. Save to Google Sheet via Apps Script ───────────────
    const gsRes = await fetch(env.GOOGLE_SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow',
    });

    const gsJson = await gsRes.json().catch(() => ({ ok: false }));
    if (!gsJson.ok) {
      console.error('Google Sheets error:', gsJson);
      return json({ ok: false, error: 'Could not save your submission. Please try again.' }, 500);
    }

    // ── 2. Confirmation email → parent ────────────────────────
    await sendEmail(env, {
      to:      data.parentEmail,
      subject: 'Registration Received — Sowing Kindness Storytelling Competition 2026',
      html:    confirmationHtml(data),
    });

    // ── 3. Notification email → organiser ─────────────────────
    if (env.NOTIFY_EMAIL) {
      await sendEmail(env, {
        to:      env.NOTIFY_EMAIL,
        subject: `New Entry: ${data.childName} · ${data.ageGroup === '3-4' ? 'Cat A' : 'Cat B'} · ${data.language}`,
        html:    notificationHtml(data),
      });
    }

    return json({ ok: true });

  } catch (err) {
    console.error('Submit error:', err);
    return json({ ok: false, error: 'Server error. Please try again.' }, 500);
  }
}

// ── CORS preflight ────────────────────────────────────────────
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

async function sendEmail(env, { to, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL || 'hello@sowingkindness.org.sg',
      to,
      subject,
      html,
    }),
  });
  if (!res.ok) console.error('Resend error:', await res.text());
}

// ── Email templates ───────────────────────────────────────────
function row(label, value, shade) {
  const bg = shade ? 'background:#EEF6E3;' : '';
  return `<tr>
    <td style="${bg}padding:10px 14px;font-weight:bold;width:38%;font-size:14px">${label}</td>
    <td style="${bg}padding:10px 14px;font-size:14px">${value}</td>
  </tr>`;
}

function confirmationHtml(d) {
  const cat = d.ageGroup === '3-4'
    ? 'Category A — Age 3 to 4 (3-minute story)'
    : 'Category B — Age 5 to 6 (5-minute story)';
  return `
<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1B2A1B">
  <div style="background:#2C6B2C;padding:32px 40px;text-align:center">
    <h1 style="color:#fff;font-size:22px;margin:0">Sowing Kindness Society</h1>
    <p style="color:rgba(255,255,255,.8);margin:6px 0 0;font-size:13px">Inter-Centres Storytelling Competition 2026</p>
  </div>
  <div style="padding:36px 40px">
    <h2 style="color:#2C6B2C;font-size:20px;margin:0 0 16px">Registration Received! ♥</h2>
    <p style="font-size:15px;line-height:1.6">Dear ${d.parentName},</p>
    <p style="font-size:15px;line-height:1.6">Thank you for registering <strong>${d.childName}</strong> for the Sowing Kindness Storytelling Competition 2026. We have received your entry and will be in touch.</p>
    <table style="width:100%;border-collapse:collapse;margin:24px 0;border:1px solid #e0e0e0">
      ${row('Child', d.childName, true)}
      ${row('Age Category', cat, false)}
      ${row('Language', d.language, true)}
      ${row('Deadline', '20 September 2026, 11.59 PM', false)}
    </table>
    <p style="font-size:14px;color:#6B7866">Questions? Email us at <a href="mailto:contact@sowingkindness.org.sg" style="color:#2C6B2C">contact@sowingkindness.org.sg</a></p>
    <p style="font-size:15px;margin-top:28px">With kindness,<br><strong>The Sowing Kindness Society Team</strong></p>
  </div>
  <div style="background:#FBF3E5;padding:18px 40px;text-align:center;font-size:12px;color:#6B7866">
    Sowing Kindness Society Singapore &nbsp;·&nbsp; contact@sowingkindness.org.sg
  </div>
</div>`;
}

function notificationHtml(d) {
  const cat = d.ageGroup === '3-4' ? 'Category A (Age 3–4)' : 'Category B (Age 5–6)';
  const videoCell = d.videoLink
    ? `<a href="${d.videoLink}" style="color:#2C6B2C">${d.videoLink}</a>`
    : '—';
  const sgTime = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' });
  return `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
  <div style="background:#2C6B2C;padding:20px 28px">
    <h2 style="color:#fff;margin:0;font-size:16px">New Competition Entry</h2>
  </div>
  <div style="padding:28px">
    <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e0e0e0">
      ${row('Child Name', d.childName, true)}
      ${row('Age', d.age, false)}
      ${row('Category', cat, true)}
      ${row('Language', d.language, false)}
      ${row('School / Centre', d.school || '—', true)}
      ${row('Story Title', d.storyTitle || '—', false)}
      ${row('Video Link', videoCell, true)}
      ${row('Parent Name', d.parentName, false)}
      ${row('Parent Email', `<a href="mailto:${d.parentEmail}">${d.parentEmail}</a>`, true)}
      ${row('Parent Mobile', d.parentMobile || '—', false)}
      ${row('Submitted', sgTime, true)}
    </table>
  </div>
</div>`;
}
