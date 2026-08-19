# DESIGN — Flint

## Overview
- Audience: Founders hiring a product designer
- Single CTA: Contact me
- Emotion: Hot, direct, finished — not a soft studio deck
- Create this feeling through:
  - Full-bleed vermilion hero fading into white
  - One portrait as the thesis, not a badge row
  - Left-rail pip labels + stacked work slabs
  - Syne display, not Inter; orange only as field and pip

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Vermilion folio
- Signature element: Portrait dissolving into the work list

## Colors (semantic)
- `surface-page` `#FFFFFF`
- `surface-vermilion` `#F23B12` — hero field only
- `surface-vermilion-deep` `#C21F00` — hero gradient floor
- `text-primary` `#111111`
- `text-secondary` `#6A6A6A`
- `border-default` `#E8E8E8`
- `action-primary` `#111111` — Contact / View work pills
- `action-accent` `#F23B12` — pip, View All disc
Usage: vermilion is the hero, not a button fill (except the small View All disc). Ink pills on white.

## Typography
- Display: Syne 700–800 — H1/H2
- Body / UI: Outfit 400–600
- Scale: display `clamp(2.6rem, 6vw, 4.4rem)` / 3xl `clamp(1.8rem, 3vw, 2.4rem)` / base `1.02rem` / xs `0.72rem`
- Rules: display leading 1.02, tracking −0.04em; body 1.55, measure ≤ 48ch

## Space
- `section-y` `clamp(3.5rem, 7vw, 5.5rem)`
- `wrap` `min(1040px, 100% - 2.5rem)`
- Work gap `2rem`; rail `7.5rem` on expanded

## Layout and responsiveness
### Compact (< ~720px)
- Single column; hide rail labels; nav hamburger; hero type under the face
### Medium (720–1023px)
- Rail collapses; work full width
### Expanded (≥ 1024px)
- Left rail (pip + label) + content; hero type over the chest

## Shape & elevation
- Page corners `20px` if framed; inner work `12px`
- Pills `999px` on CTAs only
- Shadow: one soft lift on work images, none on text cards

## Components
### Buttons
- Primary: `action-primary` + white type + pill + Outfit 600
- View All: `action-accent` disc, white type
- Ghost work: dark pill “View work”
- States: hover lift 1px; focus 2px vermilion ring; active `scale(0.97)`
### Nav
- Logo left; links center; Contact me right with chat mark
- Compact: hamburger
### Work slab
- Full-bleed mock, then title + one line + View work
- Not a 3-card grid
### Testimonial
- Photo 88px, quote, name, role; prev/next squares
### Service
- 2×2; gray stone icon + title + 2-line body
- Do not add a fifth card

## Motion
- `220ms` / `cubic-bezier(0.22, 1, 0.36, 1)`
- Testimonial swap: opacity
- Reduced motion: off

## Iconography
- Flint flake mark (SVG). Service stones as simple gray volumes.
- No emoji. No Red Dot / iF / Cannes marks.

## Content
- First person. Buttons start with a verb.
- Fictional work and clients only. No Pixlio, GlowUp, Sarah Lee from the reference.

## Ban list
- Pixlio / skmehedi / mezario / real award logos
- Inter display, purple gradients, centered-only hero
- Three equal cards as the only work pattern
- Scraped mockup market screens

## Accessibility
- White type on vermilion meets large-text contrast
- Focus visible; 44px taps; reduced motion
