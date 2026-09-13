# DESIGN — Calyx

## Overview
- Audience: operators and spatial teams commissioning a climate-ops studio identity.
- Single CTA: Request the kit
- Emotion: the work is a cup that holds light — navy shade, lime flare.
- Create this feeling through:
  - Aurora field (`surface-aurora`) only on lockup, posters, and sign faces — never a site-wide mesh
  - Lime (`accent-lime`) as one proportion bar and the action fill, not every surface
  - Open-hex cup mark (calyx), never an interlocking S
  - B&W editorial photography against the wash; no smiling-team stock

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Aurora cup
- Signature element: open-hex calyx mark on a navy→teal→lime wash

## Plan gate
- Layout: intro → 2×3 specimen board (lockup, social, browser, palette bars, posters, cube) → mark rules → type → photography → dos/don’ts
- Uniqueness: cup mark + aurora proportion bars (teal/sea dominate; lime is the flare). Not a generic green-startup leaf.
- Default-cluster: close to black+acid green — differentiated by sea/teal as the large bars, Manrope wordmark, physical cube sign.

## Colors (semantic)
- surface-page: `#EDEEEA`
- surface-paper: `#F7F7F4`
- surface-navy: `#03162C` — aurora dark, type on lime
- surface-teal: `#2A4D4F` — largest brand bar
- surface-sea: `#2F7A67` — second bar
- accent-lime: `#7AC216` — flare, primary button, never full-page
- muted-shade: `#C5C7C0`
- ghost-white: `#F3F4F1`
- frost: `#B8B9C0`
- text-primary: `#0C1418`
- text-on-dark: `#F7F7F4`
- text-secondary: `#5C6560`
- Usage: lime never as a paragraph color on paper. Navy type on lime only at display sizes. Aurora is photography/gradient, not a CSS rainbow on every card.

## Typography
- Display / wordmark: Manrope 600–700, lowercase, tracking −0.04em
- Body: Manrope 400–500, leading 1.55
- Spec: IBM Plex Mono — hex, clear-space units, URLs
- Scale: display `clamp(2.3rem, 5vw, 3.4rem)` / 3xl `clamp(1.5rem, 3vw, 2.1rem)` / base `1rem` / sm `0.85rem` / xs `0.72rem`

## Space
- wrap: `min(1120px, 100% - 2.4rem)`
- board: `min(1180px, 100% - 1.2rem)`
- section-y: `clamp(3.2rem, 6vw, 5rem)`
- Board gap: 10px grey mortar (`#D4D5D1`)

## Layout and responsiveness
### Compact (< ~720px)
- Board stacks; social phones in a row that scrolls; posters stack; hamburger
### Expanded
- Board 2 columns × 3 rows matching the specimen: lockup | social, browser | palette, posters | cube

## Shape & elevation
- Cards 16px. Browser chrome 18px. Phones 22px. Buttons 8px (studio, not consumer pill).
- No drop shadow on color fields. Cube photo is the only deep image.

## Components
### Buttons
- Primary: `accent-lime` on `surface-navy` type? No — lime fill, navy type (`text-primary` if contrast fails then navy `#03162C`)
- Contrast: navy `#03162C` on lime. Hover darken lime to `#68A812`. Focus 2px navy ring. Active scale 0.97
### Mark
- Open hex cup. Clear space = 0.5× mark height. Min 24px digital, 12mm print.
- Never rotate, never add a drop shadow, never recolor to mid-grey. Lime on navy, white on aurora, navy on paper.
### Social frames
- 3:4 cards in rounded device chrome; gradient / editorial / dark crop. Heart/comment as 1.4px stroke icons, not emoji.

## Motion
- 220ms `--ease`. Reduced-motion: off.

## Iconography
- Mark is the only symbol. UI icons: 1.6px stroke, `currentColor`.

## Content
- Sentence case; wordmark lowercase `calyx`
- Buttons: Request the kit
- `kit@calyx.example` — fictional. No original agency name or designer handle.

## Ban list
- Inter as display; purple mesh; leaf/sprout clichés; interlocking-S lookalike; real vendor marks; scraped board art

## Accessibility
- Navy on lime and white on navy only for lockups
- Tap ≥ 44px; skip link; reduced motion
