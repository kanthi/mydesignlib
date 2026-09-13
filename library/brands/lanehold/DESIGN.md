# DESIGN — Lanehold

## Overview
- Audience: Shippers who need a transporter and a forwarder in one desk
- Single job: Present the written brand (vision, promise, idea) then the visual system
- Emotion: Quiet competence, green on charcoal
- Create this feeling through:
  - Lime theses on forest fields — words first, mark second
  - Sweeping ribbon bands as the only decoration
  - Clasp mark (two arcs that couple), not a wheel
  - Photo of lanes, yards, and canopy — no people-stock smiles

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Forest freight deck
- Signature element: Lime all-caps theses on charcoal + ribbon bands

## Colors (semantic)
- `surface-ink` `#0C1612` — cover, dark slides
- `surface-deep` `#0F2E24` — definition fields
- `surface-forest` `#145C3C` — mission/idea slides
- `surface-lime` `#3DDB6A` — theses, mark, ribbon
- `surface-mist` `#C5D4CC` — ribbon mid, type on dark
- `surface-paper` `#F2F4F2` — page chrome
- `text-primary` `#0C1612`
- `text-on-dark` `#E8F5EC`
Usage: lime is type on dark or the mark. Never a full-page fill. Forest is a field, not body text on paper.

## Typography
- Display / theses: Barlow Condensed 600–700, tracking `0.02em`, all caps
- Body: IBM Plex Sans 400–500
- Scale: display `clamp(2.2rem, 5vw, 3.6rem)` / slide `clamp(1.6rem, 3.2vw, 2.4rem)` / base `1rem` / xs `0.72rem`
- Theses leading 1.05; body 1.55, measure ≤ 52ch

## Space
- `section-y` `clamp(2.5rem, 5vw, 4rem)`
- `wrap` `min(1120px, 100% - 2.4rem)`
- Deck gap `12px`; slide radius `4px`

## Layout and responsiveness
### Compact (< ~720px)
- Slides stack; contents list; nav hamburger
### Medium (720–1100px)
- 2-col deck
### Expanded (≥ 1100px)
- 2-col guideline poster, then system

## Shape & elevation
- Slides `4px` (almost sharp)
- Ribbon: SVG arcs, no drop shadow
- One soft lift on the whole deck

## Components
### Buttons
- Primary: lime on ink, 4px, Plex 600
- Ghost: 1px mist hairline
- States: hover lift 1px; focus 2px lime ring; active `scale(0.97)`
### Nav
- Sticky paper; clasp + Lanehold; jump to Definition / Mark / Color / Type
### Slide
- Full-bleed field; thesis centered or left; optional ribbon
### Contents row
- Number + label + circle chevron

## Motion
- `220ms` / `cubic-bezier(0.22, 1, 0.36, 1)`
- Reduced motion: off

## Iconography
- Clasp mark only. Ribbon is not an icon.
- No emoji. No real carrier marks.

## Content
- Theses first. Body explains once.
- Fictional only. No Euroteam, Vadim, Carazan, real carriers.

## Ban list
- Euroteam / 4-petal wheel lookalike
- Inter, purple, 3 equal feature cards as the only pattern
- Red Dot or real logistics trademarks
- Scraped truck livery

## Accessibility
- Lime on ink meets large-text contrast; body on forest uses mist
- Focus visible; 44px taps; reduced motion
