# DESIGN — Assay

## Overview
- Audience: Hiring leads who do not trust resumes
- Single job: Present a talent-intelligence identity (mark, color, photo, site)
- Emotion: Warm proof — analog future, not startup gloss
- Create this feeling through:
  - Charcoal, cream, sage, rust fields (never purple SaaS)
  - Peak mark in a rounded square (tested, not an arrow-U)
  - 1970s gold-hour photography: mountains, terminals, suits
  - Signal green only as a play/action pip

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Analog-future proof
- Signature element: Peak mark on rust/sage/charcoal + Kodak-gold plates

## Colors (semantic)
- `surface-charcoal` `#1F1E1B` — primary lockup field
- `surface-cream` `#F3EEE6` — paper, reverse lockup
- `surface-sage` `#6E908C` — third field
- `surface-rust` `#C46222` — fourth field, mark plate
- `action-signal` `#6FE01A` — play pip only, never a page
- `text-primary` `#141311`
- `text-on-field` `#F3EEE6`
- `text-muted` `#6B675F`
Usage: one field per lockup cell. Signal never as type color on cream. Rust type only as large display on cream.

## Typography
- Wordmark / UI: Sora 600–700, tracking `0.04em`, all caps for lockups
- Display: Sora 600, `-0.03em`, sentence case for the site hero
- Body: Source Serif 4 400–600, leading 1.6, measure ≤ 48ch
- Scale: display `clamp(2.4rem, 5vw, 3.8rem)` / 3xl `2rem` / base `1.05rem` / xs `0.7rem`

## Space
- `section-y` `clamp(3.2rem, 6vw, 5rem)`
- `wrap` `min(1160px, 100% - 2.4rem)`
- Board gap `10px`; cell radius `14px`

## Layout and responsiveness
### Compact (< ~720px)
- Board 1 column; nav hamburger; CTAs stack
### Medium (720–1100px)
- Board 2 columns
### Expanded (≥ 1100px)
- Board as poster: lockups | photos+mark | profile, then site+plates

## Shape & elevation
- Lockup cells `14px` (soft product, not Helikon mosaic)
- Site chrome `10px`
- One soft shadow on the whole board

## Components
### Buttons
- Primary: charcoal + cream type, 8px, Sora
- Ghost: 1px cream/charcoal hairline
- States: hover lift 1px; focus 2px rust ring; active `scale(0.97)`
### Nav
- Sticky cream; peak + Assay; links muted; kit CTA right
### Lockup
- Peak mark 28–36px + ASSAY word, tracking 0.08em
### Social card
- HTML, not a screenshot. Fictional @assay

## Motion
- `220ms` / `cubic-bezier(0.22, 1, 0.36, 1)`
- Reduced motion: off

## Iconography
- Peak mark only. No emoji. Signal pip is a circle, not a logo.

## Content
- Sentence case body; lockups caps
- CTAs: “See the standard”, “Request the kit”
- Fictional only. No Supahumans, Bright Studios, real ATS names

## Ban list
- Supahumans / Danielgbright / ByBright
- Inter display, purple gradients, 3 equal feature cards as the only pattern
- Copying the reference U-arrow
- Scraped 70s stills

## Accessibility
- Cream on charcoal and charcoal on cream meet body contrast
- Signal green never as small text
- Focus visible; 44px taps; reduced motion
