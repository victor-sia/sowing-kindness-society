# Sowing Kindness Society — Story Ideas

Approved scope: Victor approved the presented plan with “continue” and “contiue” on 4 October 2026 (approval references Sentinel_2a2db927426c8191944dc50353df2e87 and Sentinel_c071603774608191ab731ac88c8447dc). Production publishing was subsequently approved on 4 October 2026 (see approval below).

## Purpose
Help parents of children aged 3–6 choose a kindness story and support their child in creating a video, using the committee's Storytelling_Starter_Pack_English_Chinese.pdf. These are optional ideas, not required scripts or new competition rules.

## Stack and content
Use existing Astro 6, TypeScript, Tailwind 4, BaseLayout and design tokens. No new dependency or backend changes. Preserve all ten English and ten supplied Chinese records (title, action, sample story, prop, parent prompt) in their original order and substantive wording. Preserve guidance on first-person real/imagined stories, children's own words, age-appropriate structure and adult-assisted light paper props without small loose parts. The original PDF has been visually checked across all four pages and stays unchanged.

## Pages and layout
Add /story-ideas/ and /zh/story-ideas/ with shared typed bilingual data and a shared component. Introductory parent guidance, ten numbered native details/summary cards (first open), a download of the original PDF and CTA to the existing language-appropriate registration/video-link flow. Add a Competition dropdown item and guidance links on English/Chinese competition and submission pages; submission guidance opens in a separate tab to preserve form state.

## Design and assets
Preserve the site's cream #FBF3E5, forest #2C6B2C, sage #D9EAC6, orange #E58A37 and ink #1B2A1B palette. Lora headings and Nunito Sans body; left-aligned, generous line spacing, constrained reading widths. Native disclosures with large tap targets and visible focus. Two-column introduction on desktop, single-column mobile, straightforward numbered idea list. Use a newly generated ChatGPT illustration of two children thinking up a kindness story, with the homepage artwork as style inspiration only. Use a new rounded organic crop with an offset sage blob behind it, preserving generous space around faces and the thought cloud. Add localized descriptive alt text, intrinsic dimensions and responsive sizing. Move the unchanged parent guidance below the hero into a responsive three-column panel. No new animation. Shared tokens are reused; new styles are scoped. Source PDF copied unchanged to public/downloads/Storytelling_Starter_Pack_English_Chinese.pdf.

## Files
New: src/lib/storyIdeas.ts, src/components/StoryIdeas.astro, src/pages/story-ideas.astro, src/pages/zh/story-ideas.astro, original public/downloads PDF.
Existing: src/components/Nav.astro, src/pages/competition.astro, src/pages/zh/competition.astro, src/pages/submit.astro, src/pages/zh/submit.astro.

## Done and verification
Build with npm run build and git diff --check. Preview with npm run dev -- --port 4399. Check both languages at desktop/mobile widths, keyboard disclosures, navigation/language/CTA links, all twenty records and PDF byte identity. Capture local previews/screenshots and report any limitations. Do not submit forms. No unrelated WATCH, dates, rules, forms, security, analytics or deployment changes. No commit, push, publish or deployment without separate approval.

## Approved hero refinement — 4 October 2026
Victor requested “add a suitable image follow the same style like the front page hero image in blob shape” (approval reference Sentinel_312cc3f476d081918038c36395e0eb3d). This bounded visual update applies to both languages; preserve all approved story records, copy, links and PDF. This initial interpretation was superseded by Victor’s correction below. Verify image load, crop, localized alt text and responsive layout at 320, 390, 768 and 1280 pixels. Build and refresh the local production preview on port 4400; capture desktop/mobile review screenshots. Production publishing was subsequently approved (see below).

## Approved correction — newly generated story-thinking illustration
Victor clarified: “regenerate a suitable image via chatgtpt showing character(s) thinking using the same cartoon style ... with room for another blob shape overlap to cropped. Not re-using existing image.” Create brand-new artwork using built-in ChatGPT image generation, using the original homepage pixels only as stylistic reference. Use public/illustrations/story-ideas-thinking.webp and a new CSS organic crop with a second overlapping sage shape, not the homepage mask. Localized alt text describes thinking children and an imagined heart-shaped seedling. Preserve approved EN/ZH content and PDF. Validate both languages, image load and crop, build and desktop/mobile previews. Commit and publishing were subsequently approved (see below).

## Production approval — 4 October 2026
Victor explicitly requested “upload to production” (Sentinel_32e0316071c881919b24c7c52262048c). Publish this approved bilingual Story Ideas feature, including the newly generated thinking-character illustration, original PDF and scoped navigation/competition/registration links. Recheck final build and local dev preview, commit the scoped files and push origin/main (victor-sia/sowing-kindness-society) through the existing Cloudflare/GitHub Pages workflow. Verify the exact deployed commit, both production routes, image, PDF and links. No unrelated changes or push to the celina remote.

## Approved Chinese content alignment — 8 October 2026
Victor confirmed (Sentinel_cc5aa04a08a08191873823b921102576): “yes change the date and description to align to english, and publish. after that, check any other differences from chinese and english, if yes make the chinese similar to english and publish”. First correct both occurrences of 2026年9月20日 in the Chinese submission page to 2026年12月7日 and publish. Then compare corresponding bilingual pages, metadata, forms, dates, rules and links with English as the authoritative content, preserving valid localization and unrelated work. Correct substantive Chinese discrepancies, build and preview, publish to origin/main and verify affected production pages. No domain or hosting changes.

## Chinese alignment completed — 8 October 2026
Reviewed all 17 corresponding English/Chinese routes, including metadata, forms, rules, dates, article content and links. Aligned Chinese home/about/contact copy; competition and consent dates; missing rules on rounds, prizes and media/data terms; Watch video/channel content; all three articles' omitted passages, related-story sections and social metadata; and Chinese navigation labels. Added a localized Chinese calendar download using the confirmed 7 December 2026 deadline. Preserved Chinese upload-interface instructions, Story Ideas source data/PDF and all English page content.

Validation: Astro built all 35 routes; git diff --check passed. Compared submission/contact field schemas, Watch URLs, internal Chinese links, article block/list structure and metadata. No old Chinese September deadline remains. Browser preview covered all 17 Chinese routes at desktop width and six at phone width; key screenshots were visually reviewed. A separate production preview passed console, mobile menu and language-switch checks. Existing desktop homepage decorative overflow is identical in English and Chinese (14 pixels at 1280), with no phone overflow. No forms were submitted.

Follow-up findings outside this Chinese alignment: English consent and article CTAs still contain TBD; English event calendar URLs/download still use 20 September; the homepage event card says ages 4–12 in both languages while competition rules say 3–6; English article body CTAs generate numeric relative links due to map(renderSection). These existing inconsistencies were preserved for separate review. The English-only /connect/ page has no Chinese counterpart.
