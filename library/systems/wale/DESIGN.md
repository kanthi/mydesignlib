# DESIGN — Wale

## Overview
- Audience: Designers lifting a commerce footer, not a full store.
- Single CTA: none — this page is the footer
- Emotion: Loud knit shop — one orange slab, one giant name.
- Create this feeling through:
  - Full-bleed `surface-haul` orange, black type, no white card
  - Serif invitation “Stay in the know”
  - Three uppercase link columns
  - Wordmark cropped at the baseline so it feels bigger than the viewport

## Source of truth
- This file + CSS `:root` in `index.html`.

## Aesthetic commitment
- Name: Commerce footer — orange field
- Signature element: Cropped WALE wordmark

## Colors
- surface-haul: `#E85A32` — the whole page
- text-primary: `#111111`
- text-secondary: `#2A1810` at 70%
- Usage: no second fill. Links stay black.

## Typography
- Invite: Fraunces 500, clamp 2.4–3.4rem
- Columns: Barlow Condensed 600, uppercase, tracking 0.08em, 0.78rem
- Heads: Barlow Condensed 600, 0.9rem, tracking 0.12em
- Wordmark: Archivo Black, ~28vw, tracking -0.04em, line-height 0.72, overflow hidden

## Space
- wrap: min(1120px, 100% - 3rem)
- Column gap 2.5rem
- Wordmark hangs into the bottom edge (negative margin)

## Layout
### Compact: invite, then three columns stacked, legal, wordmark
### Expanded: 1.2fr + 3 × 1fr; legal under invite

## Components
- Links: underline on hover, 44px min-height
- Locale: button, “EN”, 44px
- Focus: 2px black ring

## Content
- Fictional sock shop. `desk@wale.example`
- Not Outway.

## Ban list
- Inter, purple, Outway name, flag emoji as the locale control
