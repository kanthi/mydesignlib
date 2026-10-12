# DESIGN — Nimbrel

## Overview
- Audience: someone reading a studio identity on one board.
- The page is the board. No site nav, no second page, no title above the grid.
- Emotion: a clear blue field, white cards, and a stippled sky.
- Create this feeling through:
  - Two columns on a grey ground. Four cards each. Gaps stay even.
  - `blue` is the only chromatic colour: type, mark, pills, and the hill.
  - The mark is an arch. It is not a framed triangle.
  - Plus Jakarta Sans for the word, the headlines, and the hex labels.
  - The word “Nimbrel” is HTML. Photographs are not used. The sky, hill, and star are generated stipple.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Identity board
- Signature element: the arch, left of the word, on a halftone field.

## Colors (semantic)
- blue: `#0A5CFE` — wordmark, headlines, body on white, filled icon field, primary swatch, solid pills.
- blue-soft: `#3C7DFF` — gradient stops and the monolith edge.
- field: `#D9D9D9` — the ground behind the cards.
- white: `#FFFFFF` — cards, the app squircle, swatch 01.
- black: `#000000` — the large neutral swatch only.
- on-blue: `#FFFFFF` — type and the arch on `blue`.

Neutrals on the palette, top to bottom where they appear: `#FFFFFF`, `#CCCCCC`, `#999999`, `#666666`, `#333333`, `#000000`.

Blues on the palette, top to bottom: `#CEDEFF`, `#9DBFFF`, `#6C9CFE`, `#3C7DFF`, `#0A5CFE`, `#094ACC`, `#063698`, `#042666`, `#021233`.

## Typography
- Plus Jakarta Sans only.
- Wordmark: 700, title case, tracking -0.04em.
- Headlines: 800, uppercase, tracking -0.045em.
- Body on the intro card: 500, about 13px, blue, line-height 1.45.
- Hex labels: 600, about 11px.
- No other typeface.

## Layout
- Board aspect 1117 / 1200, grey padding, 16px gaps.
- Left, top to bottom: halftone lockup, intro with the hill, strategy banner, process.
- Right, top to bottom: blue icon field, three-step card, palette, browser chrome.
- Left banner is shorter than the palette. Left process is taller than the browser. Tops of row three align. Bottoms of the board align.
- Below 860px the left column stacks, then the right column: lockup, intro, banner, process, icon, steps, palette, browser.

## Components
### Arch
- A thick arch, open at the bottom, `currentColor`.
- On the wordmark it sits in a blue rounded square, white arch.
- On the icon field the square is a white squircle and the arch is blue.
- Clear space equals the stroke of the arch. Do not add a second symbol.

### Browser
- Chrome only: lights, a tab reading “Home - Nimbrel”, back, forward, reload, the address `nimbrel.studio`.
- No page body inside the window.

### Palette
- Three flush columns. Left is white over four greys, label `#FFFFFF`. Middle is four greys over black, label `#000000`. Right is nine blues, label `#0A5CFE` on the primary band.

## Bans
- Do not set the name, the domain, or the tab to the reference studio.
- Do not draw a triangle inside a rectangular frame.
- Do not add a second page, a footer credit, or a designer handle.
- Contact, if a mail link is ever added, is `desk@nimbrel.example`.
