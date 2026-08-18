# DESIGN — Giltbook

## Overview
- Audience: households and freelancers who want a money book, not another bank app.
- Single CTA: Open a giltbook
- Emotion: a quiet paper ledger that already knows the numbers
- Create this feeling through:
  - Page field is `surface-page` ledger cream, never cool white
  - Section titles in `font-display`; last word italic (company / we do / questions)
  - `action-primary` gilt only on primary buttons and the gold mosaic tile
  - 2×3 mosaic on `surface-ink` mixing pastel tiles and photographs
  - Product proof is an HTML/CSS phone ledger — not a stock screenshot

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Ledger-paper finance
- Signature element: italic serif last-word + 2×2 pastel mosaic + gilt phone

## Plan gate
- Subject: a small household ledger
- Uniqueness: book vernacular (gilt, folio, line items), not a transferable SaaS shell
- Default-cluster: cream + serif is briefed; gilt gold replaces terracotta; Literata not Fraunces/Cormorant

## Colors (semantic)
- surface-page / paper: #F3EEE4 — whole marketing field
- surface-raised: #F8F4EC — cards, FAQ rows, values
- surface-ink: #1B1915 — mosaic band + product CTA
- text-primary / ink: #1B1915
- text-on-ink: #F3EEE4
- text-secondary / muted: #6A6358
- border-default / line: #E3DACB
- action-primary / gilt: #A67C24 — mosaic gold, phone card, FAQ mark — not a full button fill
- on-action: #1B1915
- tile-lilac: #D8C6EE — mission tile
- tile-peach: #F0B7A6 — vision tile
- tile-gold: #E6C75E — social-proof tile
- status-danger: #B23A2F — errors only
- Usage:
  - Gilt is a gold leaf (mosaic, phone card, FAQ mark), never a full-bleed background
  - Pastel tiles live only inside the mosaic
  - Muted is body under 18px, never headlines

## Typography
- Display: Literata — H1/H2/wordmark; italic for last-word accents
- Body: Karla — nav, leads, UI, FAQ
- Scale: display clamp(2.4rem, 5.2vw, 3.55rem) / 3xl clamp(1.85rem, 3.2vw, 2.45rem) / xl 1.2rem / lg 1.05rem / base 1rem / sm 0.875rem / xs 0.72rem
- Rules: H1 leading 1.08, tracking −0.02em; body 1.6 / 38–46ch; labels 0.78rem / 0.06em

## Space
- section-y: clamp(4.25rem, 9vw, 6.75rem)
- wrap: min(1080px, 100% − 2.5rem)
- gap scale: 8 / 12 / 16 / 24 / 32 / 48

## Layout and responsiveness
### Compact (< ~720px)
- Single column; page pad 1.15rem; hamburger nav; mosaic 1-col; team stacks; phone mock scales to 260px
- CTAs full-width, min-height 44px
### Medium (~720–1023px)
- Hero copy | portrait; mosaic 2×2; values 3-col; team 3-col
### Expanded (≥ ~1024px)
- Nav inline; hero 12-col (copy 6 / photo 5); mosaic max 880px; CTA split copy | phone

## Shape & elevation
- radius-card: 18px — mosaic tiles, values, FAQ, team frames
- radius-pill: 999px — nav CTA, primary buttons
- radius-phone: 32px
- Shadow: one soft plate on mosaic photos (`0 18px 40px rgba(27,25,21,0.18)`); none on cream cards

## Components
### Buttons
- Primary: `surface-raised` + `line` hairline + ink + `radius-pill` + Karla 500 (quiet ledger, not gilt fill)
- On ink: translucent cream fill + cream hairline
- Hover: ink/8% wash; active scale 0.97
- Focus: 2px ink ring, 3px offset (cream ring on ink)
- Gilt fill is reserved for the gold mosaic tile and the phone card
### Nav
- Wordmark left; 4–5 links centre (expanded); Contact pill right
- Compact: menu button ≥44px; drawer with same links + primary
### Mosaic tiles
- 2×3 on `surface-ink`; mix of pastel + photo; 18px radius; 16px gap
- Do not turn this into three equal icon cards
### Values cards
- Raised cream, numbered 01–03, hairline; body muted
### Team cards
- Photo 4:5, 18px; name Karla 600; role muted; social as 20px SVG
### FAQ
- First row open (`surface-ink` + `text-on-ink`); others raised
- Button is the whole row, min-height 52px; chevron rotates
### Phone ledger
- HTML/CSS only; tabular-nums; name + balance + gilt card + 3 line items

## Motion
- Accordion 220ms height/opacity; chevron 180ms
- Hover lift ≤3px on mosaic photos
- Reduced-motion: no lift; accordion instant

## Iconography
- 1.5px stroke SVG, `currentColor`. No emoji. Wordmarks are type, not fake logos.

## Content
- Sentence case. Buttons: Open a giltbook / Start a ledger
- Specific household numbers, not “streamline finances”
- Fictional only: Giltbook, hello@giltbook.example
- Partners as text: Quill, Oakmint, Folio, Vellum, Nock

## Ban list
- Sivoro, Sivabo, Torivo, David Laid, Glimx
- vision, Greenish, Glossy, Ebooks, Proline, Flash
- Inter display; Syne / Sora / Epilogue / Instrument Sans
- Purple SaaS; real fintech marks; Framer/Webflow URLs

## Accessibility
- Contrast: ink on paper; cream on ink; ink on gilt
- Visible focus; tap ≥44px
- FAQ `button` + `aria-expanded`; reduced-motion honored
