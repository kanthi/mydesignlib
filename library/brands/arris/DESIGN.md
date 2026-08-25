# DESIGN — Arris

## Overview
- Audience: Architects and civic clients specifying facade edges, corners, and wayfinding.
- Single CTA: Request the kit
- Emotion: Sharp, civic, unsentimental — a red field and a ridge that reads at 40 metres.
- Create this feeling through:
  - Crimson `surface-crimson` as a full-bleed lockup field, never a gradient
  - One geometric ridge mark (folded Λ), never an outline-only icon soup
  - Black / charcoal / warm paper as the rest of the kit
  - Mockups at street scale (cube sign, tote, cards) not app dashboards

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Swiss civic — crimson field
- Signature element: Ridge mark + lowercase Outfit wordmark on `#C70024`

## Colors (semantic)
- surface-crimson: `#C70024` — primary field, cards, phone, envelope. Not a tint wash.
- surface-ink: `#000000` — true black fields and type on paper
- surface-charcoal: `#2C2C2C` — secondary field
- surface-paper: `#F4F1EC` — stationery, cream card
- surface-page: `#E8E6E1` — page ground
- text-primary: `#111111`
- text-on-field: `#FFFFFF`
- text-secondary: `#5C5C5C`
- action-primary: `#C70024` — same as crimson; buttons on paper
- action-ink: `#FFFFFF`
- Usage: crimson or black, not both as competing fills in one small object.

## Typography
- Display / wordmark: Outfit 600–700, lowercase, tracking `-0.03em`
- Spec: IBM Plex Mono 400, tabular hex
- Body: Outfit 400, leading 1.55
- Scale: display clamp 2.4–3.6rem / 3xl 2rem / base 1.05 / sm 0.85 / xs 0.72

## Space
- wrap: min(1120px, 100% - 2.4rem)
- board: min(1200px, 100% - 1.2rem)
- section-y: clamp(3.2rem, 6vw, 5rem)
- Board cells: 0 gap, 2×4 on expanded; stack on compact

## Layout and responsiveness
### Compact
- Board stacks; nav drawer; color chips full width
### Expanded
- Board 2 columns × 4 rows matching the specimen order: lockup, sign, marks, palette, tote, cards, stationery, phone

## Shape
- App icon: 22% radius rounded square
- Cards: 14px
- Buttons: 999px or 8px — use 8px (civic, not consumer pill)
- No drop shadows on color fields; photo cells may have none

## Components
### Buttons
- Primary: crimson, white type; hover darker `#A8001E`; focus lemon-not-used, use 2px black ring; active scale 0.97
### Mark
- Ridge path only. Clear space = cap-height of the word. Never rotate, never add a drop shadow, never recolor to mid-grey.

## Motion
- 220ms; none under reduced-motion

## Content
- Sentence case except the wordmark (lowercase). `kit@arris.example`
- Fictional civic envelope practice. Not Ambeker.

## Ban list
- Inter display, purple, emoji, real city seals, scraped Ambeker art, copying their exact arch-A

## Accessibility
- White on crimson only; never crimson type on black
- Tap ≥ 44px
