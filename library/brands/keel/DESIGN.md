# DESIGN — Keel

## Overview
- Audience: someone checking the mark on the board.
- The page is the board. No bar, no second page, no headline above it.
- Emotion: a cerulean field and a warm paper ground.
- Create this feeling through:
  - Eight cells, two columns, four equal rows, no gap.
  - `surface-field` is the lockup, the filled icon, the front card, and swatch 01.
  - `surface-paper` is the browser cell, the icon cell, and swatch 02.
  - The mark is two offset rounded links. It is not a copied triangular knot.
  - Sora for the word, the names, and the swatch lines.
  - The word “keel” is HTML or SVG. Photographs stay unmarked.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Identity board
- Signature element: the link, warm white, left of the lowercase word.

## Colors (semantic)
- surface-field: `#0F4A72` — lockup, filled icon, front card, envelope, swatch 01. Not body text on paper.
- surface-paper: `#E6E1D6` — browser cell, icon cell, swatch 02.
- surface-deep: `#0C3342` — swatch 03 only.
- surface-white: `#F7F8F6` — swatch 04, the lined icon fill, the letter sheet.
- surface-card: `#E4DDD4` — the card cell ground.
- text-ink: `#16344A` — names on paper and white.
- text-muted: `#5E6B73` — swatch lines on paper and white, the letter body.
- on-field: `#F3F0E8` — the word and the mark on `surface-field`.

## Typography
- Sora only.
- Wordmark: 600, lowercase, tracking -0.03em, sized with the cell.
- Swatch name: 600, about 22px on a desktop cell.
- Swatch lines: 400, 12px, line-height 1.45.
- No uppercase except the swatch indexes 01–04.

## Layout
- Grid is 2 × 4. Each cell uses aspect-ratio 897 / 512.
- Order: lockup, browser, icons, plinth, shirt, letter, cards, palette.
- The same order on a narrow screen. Do not stack the board.
- Palette inside the last cell: 01 full height on the left half. 02 the top of the right half. 03 and 04 split the bottom of the right half.

## Components
### Link
- Two rounded links, offset, one filled compound. `currentColor`.
- On the field it is `on-field`. On paper it is `surface-field`.
- Clear space equals the stroke. Do not outline the word.

### Browser
- A floating window on `surface-paper`, chrome only: dots, a tab reading keel, a plus, a toolbar, the address keel.example.
- No page body inside the window.

### Icons
- Two squircles, radius 22%. Filled field with an on-field mark. Paper fill, 1.5px field stroke, field mark.
- Small, centered, no hover scale.

### Swatches
- Name at the top left. HEX, RGB, and CMYK at the bottom left. Index at the bottom right.
- 01 Harbor, 02 Paper, 03 Deep, 04 White.

### Photographs
- Plinth, shirt, and the desk ground are photographs. The lockup on the box, the shirt, the letter, and the envelope is HTML.

## Motion
- The board does not move.

## Ban list
- The reference wordmark, a triangular twin-loop knot, a letter K as the mark.
- A bar, a footer, a type essay, or a fifth row.
- Words painted into the photographs.

## Accessibility
- The lockup word is the h1.
- Light type on field and deep. Ink on paper and white.
