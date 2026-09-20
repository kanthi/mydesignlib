# DESIGN — Crag Team

## Overview
- Audience: Art directors and kit buyers looking at a 1980s alpine racing identity
- Single CTA: Request the kit
- Emotion: Dusty racing orange on charcoal — a print shop that still smells of solvent
- Create this feeling through:
  - Two fields only: `surface-rust` and `surface-ink`, never a third fill on one sheet
  - Ultra-condensed 4-letter wordmark with one hatched letter (the R)
  - Pixel chevron mark, line-art ridgeline, corner wayfinding arrows
  - Paper grain + 45° hatch. No photos, no gloss, no drop shadows

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Athletic print — rust and charcoal
- Signature element: Condensed CRAG lockup with hatched R, plus a three-stack pixel chevron

## Colors (semantic)
- surface-page: `#DCD9D4` — studio ground around the board
- surface-paper: `#E8E4DC` — unprinted stock
- surface-rust: `#D44F30` — primary print field
- surface-rust-deep: `#C24328` — hatch, overprint
- surface-ink: `#292E2A` — charcoal field and lettering
- text-primary: `#292E2A`
- text-on-rust: `#292E2A` — wordmark sits *on* rust, never white
- text-on-ink: `#D44F30`
- text-secondary: `#6A6862`
- action-primary: `#D44F30`
- Usage:
  - Rust or ink as a full bleed; do not tint either
  - White is not a brand color — only the studio wall
  - Never put rust type on rust; never put ink type on ink without hatch/knockout

## Typography
- Display / wordmark: Big Shoulders Display 800–900, uppercase, tracking `-0.06em`
- Body: Barlow 400–500, 1.5
- Spec / codes: IBM Plex Mono 400, tabular
- Scale: display clamp 3.2–7.5rem / 3xl 2.4rem / xl 1.4 / base 1 / sm 0.82 / xs 0.68
- Rules: wordmark always 4 letters + vertical TEAM; codes like `CRG-81042`; no sentence-case logos

## Space
- section-y: `clamp(3rem, 6vw, 5rem)`
- wrap: `min(1120px, 100% - 2.4rem)`
- board: `min(1180px, 100% - 1.2rem)`
- Board gap: 10–12px, never flush-bleed between cells (studio air)

## Layout and responsiveness
### Compact (< ~720px)
- Board stacks poster → arrow → rise → altitude; nav drawer
### Expanded
- Board: poster spans 3 right-hand rows (arrow, rise, altitude)

## Shape & elevation
- Radius 0 on print cells. 8px only on UI chrome (nav, buttons)
- No shadows on prints. Grain is the only texture

## Components
### Buttons
- Primary: rust fill, ink type, 8px radius, Barlow 600
- Hover: `surface-rust-deep`; focus 2px ink ring; active scale 0.97
### Mark
- Pixel chevron: 3 stacked V’s of equal squares. Never round the pixels. Never recolor to mid-grey
- Wordmark: hatch only the R counter at 45°. Do not hatch every letter
### Print cells
- Corner arrows on rust posters. Moon + ridgeline on “rise”. Altitude is one number + `m`

## Motion
- 240ms; hatch/grain static; reveal opacity + 14px
- reduced-motion: opacity only

## Iconography
- Pixel chevron, corner arrows, sun disc, crescent, ridgeline — all 1.6–2px line or hard squares
- No emoji; no outlined-and-filled mix in one cell

## Content
- Voice: terse, athletic, 1981 workshop English
- Peak is fictional **Crag Horn · 3482m**. Not Fuji, not 3776
- `kit@crag.example`

## Ban list
- Fuji / 3776 / FJI- / kargul / real team crests
- Inter display, purple, white-on-orange wordmarks, photos of real peaks
- Three equal cards as the board

## Accessibility
- Ink on rust ≥ contrast for display (large type)
- UI chrome on paper uses ink on paper
- Tap ≥ 44px; reduced motion honored
