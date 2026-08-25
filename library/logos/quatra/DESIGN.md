# DESIGN — Quatra

## Overview
- Audience: After-hours cultural foundations booking night programs in transit halls.
- Single CTA: Request the mark
- Emotion: Dusk in a station — magenta heat on black tile, a four-kite mark that reads at 20 metres.
- Create this feeling through:
  - Navy-to-magenta `dusk` field as the only gradient (never on white paper)
  - Four-kite mark with a **square** counter (not a diamond hole)
  - All-caps Plus Jakarta wordmark with wide tracking
  - Metro, tote, cards, phone — not a SaaS dashboard

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Night-economy dusk
- Signature element: Four kites + QUATRA on a magenta-navy field

## Colors (semantic)
- surface-ink: `#0B0B14` — board, stations
- surface-dusk-a: `#1A0B2E` — navy
- surface-dusk-b: `#7A2BB0` — violet
- surface-dusk-c: `#E23B7A` — magenta
- surface-paper: `#EFEBE6`
- text-primary: `#F4F1EC` on dark; `#111` on paper
- text-secondary: `#8E8894`
- action-primary: `#E23B7A`
- action-ink: `#FFFFFF`
- Usage: gradient only on dusk fields. Paper stays flat.

## Typography
- Display / wordmark: Plus Jakarta Sans 700, uppercase, tracking `0.14em`
- Spec: IBM Plex Mono
- Body: Plus Jakarta Sans 400
- Scale: display clamp 2.2–3.2rem / base 1.05 / sm 0.82

## Space
- wrap: min(1120px, 100% - 2.4rem)
- board: min(1180px, 100% - 1.2rem)
- Board: 2 columns, 8px gap

## Layout
### Compact: stack
### Expanded: 2×3 — dusk lockup, cards, station, posters, tote, phone

## Shape
- Cards 14px. Mark: four kites, square counter, no rounding on the tips.

## Components
### Buttons
- Primary: magenta fill; hover `#C43268`; focus 2px paper ring; active 0.97
### Mark
- Clear space = one kite height. Never outline in grey. Never add a fifth petal.

## Motion
- 220ms; none under reduced-motion

## Content
- Wordmark always QUATRA. `desk@quatra.example`
- Fictional night foundation. Not Soieve.

## Ban list
- Inter, indigo-on-white SaaS purple, emoji, scraped Soieve art, diamond counter copy

## Accessibility
- White mark on dusk only
- Tap ≥ 44px
