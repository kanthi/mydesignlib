# DESIGN — Wakehaul

## Overview
- Audience: Shippers booking ocean and road lots, not last-mile parcels.
- Single CTA: Request the kit
- Emotion: Forward, industrial, salt-and-asphalt — a coral hull on black water.
- Create this feeling through:
  - Black board (`surface-ink`) with rounded photo cells, not a cream lookbook
  - Coral `surface-haul` as the only saturated fill (containers, tape, pouch)
  - Double-chevron wake mark, never a letter E
  - Aerial ship and truck as the thesis images

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Industrial logistics — coral on black
- Signature element: Double chevron + Wakehaul on coral containers

## Colors (semantic)
- surface-ink: `#101114` — board and type on coral
- surface-haul: `#E4452F` — hull, tape, pouch, cards. Never a gradient.
- surface-sea: `#163544` — optional water field
- surface-paper: `#F3F1EC`
- surface-page: `#0C0D10`
- text-primary: `#F3F1EC` on dark pages; `#111` on paper
- text-on-haul: `#FFFFFF`
- text-secondary: `#8B8E94`
- action-primary: `#E4452F`
- action-ink: `#FFFFFF`
- Usage: one coral object per cluster. Do not tint photographs coral.

## Typography
- Display / wordmark: Sora 600, tracking `-0.03em`, title case Wakehaul
- Spec: IBM Plex Mono
- Body: Sora 400, leading 1.55
- Scale: display clamp 2.3–3.4rem / base 1.05 / sm 0.82 / xs 0.72

## Space
- wrap: min(1120px, 100% - 2.4rem)
- board: min(1180px, 100% - 1.2rem)
- section-y: clamp(3rem, 6vw, 4.8rem)
- Board: 2 columns, 12px gap, 16px cell radius

## Layout and responsiveness
### Compact
- Board stacks; nav drawer
### Expanded
- 2×4 board: ship lockup, poster strip, road truck, tablet, yard truck, tape, cards, pouch

## Shape
- Cell radius 16px
- Buttons 8px (industrial)
- Mark: two right-pointing chevrons, equal stroke, no rounding on the tips

## Components
### Buttons
- Primary: haul fill, white type; hover `#C93A27`; focus 2px white ring on dark; active 0.97
### Mark
- Clear space = height of one chevron. Never outline in grey. Never as a loading spinner.

## Motion
- 220ms; none under reduced-motion

## Content
- Sentence case except the wordmark. `desk@wakehaul.example`
- Fictional carrier. Not EchoFreight.

## Ban list
- Inter display, purple, emoji, real shipping lines, scraped EchoFreight art, letter-E mark

## Accessibility
- White on coral only
- Tap ≥ 44px
