# DESIGN — Quittance

## Overview
- Audience: operators who hire specialists through agents and will not wire until the work is accepted.
- Single CTA: Get early access
- Emotion: the money sits still until the job is done
- Create this feeling through:
  - A cornflower wash behind a white directory (product-as-proof)
  - Near-black fills for the only verb (`action-primary`) — never a blue button on blue
  - Settled chips and tabular prices as the proof language
  - Receipt-notch mark, not a four-point star

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Wash and ledger
- Signature element: bonded-agent directory floating in the wash, hire-on-accept on every card

## Colors (semantic)
- surface-page: #F4F6FB
- surface-wash: #4E6FE8 → #A9BDF8 (hero field only)
- surface-paper: #FFFFFF
- text-primary / ink: #12141C
- text-secondary / muted: #5A6472
- text-on-wash: #FFFFFF
- border-default / line: #E6E8EF
- action-primary: #12141C — the only filled button
- on-action: #FFFFFF
- chip: #EEF2FF
- chip-ink: #3B4FCC
- status-danger: #C43C32 — errors only
- Usage:
  - Wash is the hero field, never a full-site gradient.
  - Action is black. Ice/blue is chips and the wash, never a CTA fill.
  - Do not introduce a second accent.

## Typography
- Display: Instrument Sans — H1, H2, wordmark, buttons
- Body: Instrument Sans
- Label: IBM Plex Mono — prices, settled counts, handles
- Scale: display clamp(2.4rem, 5.2vw, 3.6rem) / 3xl clamp(1.7rem, 3vw, 2.2rem) / xl 1.2rem / base 1rem / sm 0.875rem / xs 0.72rem
- Rules: display leading 1.08, tracking −0.035em, `text-wrap: balance`. Body 1.55, measure ≤ 42ch. Metrics `tabular-nums`.

## Space
- section-y: clamp(4rem, 8vw, 6.5rem)
- wrap: 1120px + page-pad 1.25rem
- Directory max 1040px, overlapping the wash by ~4rem

## Layout and responsiveness
### Compact (< ~720px)
- Single column; hamburger; directory sidebar becomes a select; cards stack; CTA last
### Medium (~720–1100px)
- Directory 1 column of cards; sidebar stays
### Expanded (≥ ~1100px)
- Nav inline; directory sidebar + 2-column cards

## Shape & elevation
- Wash: 0. Directory: 20px. Cards: 16px. Buttons: pill. Inputs: 12px.
- One soft elevation on the directory (`0 24px 60px rgba(18,20,28,.12)`). Cards: hairline only.

## Components
### Buttons
- Primary: `action-primary` + `on-action`, pill, min-height 44px, Instrument 600
- Hover: lift 1px; focus 2px wash ring; active scale 0.97
- Secondary: ink fill on cards (hire); ghost on wash
- One primary per view
### Nav
- Quiet on wash. Wordmark left, links centre, Get access right. Compact: menu.
### Directory cards
- Avatar initial, name + verified, handle · craft, settled chip, 3-line brief, from/ready/moved, View + Hire
- Never three equal marketing icon cards as the only proof
### Inputs
- Height 44px; search in directory; focus = 2px `chip-ink`

## Motion
- Directory settles 16px / 240ms. Wash is static.
- Reduced-motion: opacity only.

## Iconography
- Inline SVG, 1.5px stroke, 16/18. CurrentColor. No emoji.

## Content
- Sentence case. Buttons start with a verb (`Get early access`, `Hire — escrow on accept`).
- Hold / settle / receipt / manager — not unleash, seamless, agentic.
- Fictional agents only. `@quittance.example`.

## Ban list
- Inter/Roboto as display, purple mesh, `#6366F1` as the wash
- Blue filled buttons on the wash
- Real trademarks (Tender, USDC, Base-the-chain-as-logo, Stripe)
- Four-point star lockup from the reference
- Scraped media, lorem, Acme

## Accessibility
- White on wash and white on black meet contrast
- Visible focus; tap ≥44px compact
- Reduced motion honored
