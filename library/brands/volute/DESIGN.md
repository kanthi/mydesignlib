# DESIGN — Volute

## Overview
- Audience: Architects using a spatial model to mass a building before the site is poured.
- Single CTA: Request the kit
- Emotion: Quiet stone, measured light — a hall you can walk, then a drawing of how it was found.
- Create this feeling through:
  - Travertine colonnade as the lockup field, not a flat color tile
  - One hexagonal-spiral mark (a volute), never Ovreal’s three-cube
  - Construction drawing of that mark on a pale grid
  - Black card, watch, and three campaign stills

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Architectural spatial — stone and line
- Signature element: Spiral-hex mark + Volute wordmark in raking light

## Colors (semantic)
- surface-stone: `#C4A882` — warm field, never a full-page wash
- surface-ink: `#141414` — cards, campaign bars, watch chrome
- surface-paper: `#F3F1EC` — page and construction drawing
- surface-line: `#D9D4CC` — grid
- text-primary: `#161513`
- text-on-stone: `#F7F3EC`
- text-secondary: `#6B665E`
- action-primary: `#141414`
- action-ink: `#F7F3EC`
- Usage: stone is photography; ink is type and cards. Do not mix gold gradients.

## Typography
- Display / wordmark: Syne 600–700, tracking `-0.03em`
- Spec: IBM Plex Mono
- Body: Syne 400, leading 1.55
- Scale: display clamp 2.3–3.5rem / base 1.05 / sm 0.82

## Space
- wrap: min(1120px, 100% - 2.4rem)
- board: min(1180px, 100% - 1.2rem)
- section-y: clamp(3rem, 6vw, 4.8rem)
- Board: 2 columns, 10px gap, 0 radius on inner photos (flush stone)

## Layout and responsiveness
### Compact: stack board; nav drawer
### Expanded: 2×3 board — colonnade lockup, construction, card, watch, spiral search, campaign trio

## Shape
- Cards 10px. Search pill 999px. Mark is line + nodes, not a filled blob.

## Components
### Buttons
- Primary: ink fill, paper type; hover `#2A2A2A`; focus 2px stone ring; active 0.97
### Mark
- Hex spiral, 6 nodes. Clear space = mark width. Never fill the spiral solid.

## Motion
- 220ms; none under reduced-motion

## Content
- Sentence case except the wordmark. `hall@volute.example`
- Fictional spatial studio. Not Ovreal.

## Ban list
- Inter display, purple, emoji, Houston addresses, scraped Ovreal art, three-cube copy

## Accessibility
- Paper type on ink bars
- Tap ≥ 44px
