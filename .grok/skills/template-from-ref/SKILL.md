---
name: template-from-ref
description: >
  Turn one visual reference into an Omnia-format study package: hub, replica, brand
  guidelines, GSAP landing page, social kit, merch and stationery, and a logo reveal.
  Works for an X post, a screenshot, a scroll video, a fragment, or a branding board.
  Use when the user pastes an X/Twitter URL, design image, Framer/Webflow/Figma case,
  or asks to ship a template, landing page, animated hero, or identity kit from a reference.
  Use when the user runs /template-from-ref or /tfr.
when-to-use: >
  /template-from-ref, /tfr, tfr, template from ref, ship a template from a reference
---

# Template from reference

Slash: `/template-from-ref`. Short alias: `/tfr`.

Antigravity loads the same package from [`.agents/skills/template-from-ref/SKILL.md`](../../../.agents/skills/template-from-ref/SKILL.md) (`/tfr` is [`.agents/skills/tfr/SKILL.md`](../../../.agents/skills/tfr/SKILL.md)). Keep the folder shape and the done-when list aligned. The tool table in each file matches that agent.

Ship **one** study package per reference, in the same shape as [`library/brands/omnia/`](../../../library/brands/omnia/). Open that folder before building and match its hub, replica, and extended pages. A landing-page reference, a video, a fragment, and a brand board all get this same package. Do not ship a single `library/websites/<id>/index.html` instead.

Do not run the archived aesthetic route (`design-system-first`, `anti-slop-frontend`, `clean-interface`, `premium-site`, `interface-craft`, `ship-template`).

Privacy, analytics, and local preview follow `docs/OPERATIONS.md`. Load the imagine skill before `image_gen` or `image_edit`.

## Grok Build, not Grok Bot

This skill runs inside Grok Build. Use these tools and paths:

| Step | Do this |
|------|---------|
| X post | `x_thread_fetch` on the status id. If rate-limited, `https://api.fxtwitter.com/<user>/status/<id>` |
| Images | `?name=orig` on `pbs.twimg.com` (else `:large`) |
| Video | Highest mp4 from `video.twimg.com` |
| Reference files | `/tmp/xmedia/<slug>/` only. Never commit the reference image or video |
| See a picture | `read_file` on it. Crop, zoom, and sample hex with PIL |
| Video understanding | One subagent describes the motion, then `ffmpeg` frames every 0.5–1s into `/tmp/xmedia/<slug>/ref-frames/`. `ffmpeg` on `PATH`, or `~/.cache/ms-playwright/ffmpeg-*` |
| Case-study link | `web_fetch` |
| Long build | `spawn_subagent` with the folder contract below. It writes only inside `library/brands/<id>/`. It does not edit `data/catalog.json`, `data/files.json`, or git |
| Preview | Caddy. `~/.config/mydesignlib-portal/serve.sh --url`. Do not start `python3 -m http.server` |
| Shots | `/usr/bin/chromium` against the Caddy URL. `compare.png` and the export PNGs are part of the package |
| Delivery | Parent prepends `data/catalog.json` and `data/files.json`. The portal zips from `files.json` |

Write `/tmp/xmedia/<slug>/SPEC.md` before building: section layout, copy, closest free fonts, palette, radii, spacing, imagery style, and every motion with timing.

## What you are making

A practice study, the way Omnia is. Keep the reference’s **name**. Redraw the mark as SVG. Credit the author and the post URL on the hub and in `README.md`, and say it is for practice. Photographs in the reference become SVG/CSS constructions, or new `image_gen` / `image_edit` frames in the same role. Do not paste reference pixels into the folder.

A fragment (hero, footer, card) is still a full package: the replica shows the fragment faithfully, and the landing, guidelines, social, merch, and reveal complete the system in that same language.

Check `data/catalog.json` and `library/` so the id does not collide.

## Folder

`library/brands/<id>/`. Catalog `type` is `brand`.

```
index.html                 # hub. Two groups: A — Replica, B — Extended system
preview.jpg                # 1600×900 catalog thumb of the hub or the board
prompt.md                  # concept, palette, type, deliverable list
README.md                  # tree, credit, Caddy URL. No per-item LICENSE
replica/
  index.html               # the board, or the full reference page
  styles.css
  board.js                 # when the board is scripted
  assets/                  # symbol, wordmark, lockups (horizontal, stacked, mono, reverse), app icon. Hand-built SVG
  fonts/                   # OFL woff2, closest free faces
  exports/board.png
  exports/compare.png      # reference beside the replica
extended/
  shared.css               # :root tokens (color, type, gradients)
  guidelines.html          # clearspace, min size, color + WCAG pairs, type scale, imagery, do/don't
  landing.html             # full page, GSAP + ScrollTrigger, reduced motion, 320–1600
  social.html              # 3 posts 1080×1080 and 1 story 1080×1920
  merch.html               # letterhead, envelope, tote, tees, ID badge. HTML/SVG mockups
  email-signature.html
  reveal.html              # GSAP logo-reveal timeline, replay control
  assets/                  # same marks the extended pages use
  fonts/
  vendor/gsap.min.js
  vendor/ScrollTrigger.min.js
  exports/                 # hero PNG for each hub card, plus reveal webm under 8MB
```

Every HTML file, including `email-signature.html`, copies the robots, googlebot, and gtag block from `docs/OPERATIONS.md`.

Hub cards match Omnia: thumbnail, title, one-line description, link. Group A links to the replica and to `compare.png`. Group B links to guidelines, landing, social, merch, and reveal. Each card image is a real export, not a placeholder.

`replica/assets/` and `extended/assets/` hold the same mark set: symbol, wordmark, horizontal lockup, stacked lockup, mono, reverse, app icon, favicon. Guidelines cover construction, clearspace, minimum size, color ramps with contrast pairs, type scale, how imagery is used, and do/don’t.

Landing is a real page in the identity (hero, proof, product sections, final CTA), with scroll-driven GSAP. Split headline lines in HTML. Vendor the GSAP files (copy from `library/brands/omnia/extended/vendor/` or the matching public min build). `prefers-reduced-motion: reduce` shows the finished state and skips the timeline. Three.js only when the reference needs it.

Tokens live in `extended/shared.css` `:root`. Replica colors match those tokens. Wrap regions with `<!-- SECTION: name -->` … `<!-- /SECTION: name -->`.

`prompt.md` reads like Omnia’s: what the system is, the palette with hex, the type, and the deliverable list. `README.md` lists the tree, credits the author and the post, and gives the Caddy path `library/brands/<id>/`.

## Verify

```bash
BASE="$(~/.config/mydesignlib-portal/serve.sh --url | tr -d '[:space:]')"
# if Caddy is down: ~/.config/mydesignlib-portal/serve.sh --bg
```

Confirm **200** for the hub, `preview.jpg`, `replica/`, `replica/exports/compare.png`, and each extended HTML page.

Capture with Chromium against that base URL, `--force-prefers-reduced-motion` for stills so intro animations are visible:

- `replica/exports/compare.png` and `replica/exports/board.png`
- one PNG per extended hub card (guidelines, landing, social, merch, reveal)
- `extended/exports/` webm of the reveal, under 8MB
- `preview.jpg` at 1600×900, JPEG quality about 84

Open `compare.png` and fix obvious gaps before registering. If browser tools are available, click through the hub and the landing CTAs, check the console, and run axe-core when Playwright is available. Say what you could not check.

Confirm the shipped folder contains no reference jpg/mp4/png from `/tmp/xmedia`. The reference name and the author credit on the hub and README are supposed to be there.

## Register and report

Parent only. Prepend `data/catalog.json` (`type: brand`, `featured: true`, today’s date, an existing category, `meta.primaryColor`, `meta.typography`, `meta.assets`). Prepend `data/files.json` with `prompt: true` and paths relative to the item folder. Surgical edit. Do not run `append_catalog.py`, `scripts/index-template-files.py`, or `scripts/write-template-prompts.py`.

Do not commit unless asked.

Reply with the Caddy hub URL, what the replica matches, the extended pages, `compare.png`, where it falls short, and one concrete next pass.

## Done when

- [ ] Hub matches Omnia’s two groups and every card opens a finished page
- [ ] Replica matches the reference; `compare.png` reviewed
- [ ] Guidelines, landing, social (3 + story), merch, email signature, and reveal all exist
- [ ] Marks are redrawn SVG; reference media stayed in `/tmp`
- [ ] Every HTML page has the OPERATIONS head block
- [ ] HTTP 200 for hub, replica, extended pages, `preview.jpg`, `compare.png`
- [ ] Catalog and `files.json` prepended by the parent
