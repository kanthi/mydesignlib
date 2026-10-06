# DESIGN — Phosphor

## Overview
- Audience: a small team watching work arrive, move, and turn into a note.
- Single CTA: Click to generate
- Emotion: six quiet diagrams on a black field, one lamp awake.
- Create this feeling through:
  - The 1600×1000 view is only the board. No bar, no wordmark, no footer in that frame.
  - Page is `surface-page`. Cards are `surface-card`. Nothing else is a surface.
  - `accent-phosphor` is the only chromatic color, and only as a nick: folder, center person, 60% bar, bolt, chips, spark, lamp cone.
  - Titles sit on the lower part of each card, over the art. Collaborate’s title sits in the tall card’s lower field, under the hex cluster.
  - Motion is three slow loops: lamp cone, bolt glow, hex pulse. Nothing else moves.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Phosphor board
- Signature element: a yellow cone from a small lamp in the monitor card’s top-right corner.

## Plan gate
- The board is the whole first screen. Do not add a headline, a nav, or a second grid.
- Near-black plus one yellow is the system. Not cream, not a serif, not a purple gradient.
- Illustrations stay flat SVG and CSS. No photos, no room interior, no glass stack.

## Colors (semantic)
- surface-page: `#000000` — the field. Not `#0a0a0a` unless the black needs to lift on a bad display. Never a gray page.
- surface-card: `#141414` — every card. Flat. No white radial wash.
- surface-raise: `#1C1C1C` — tiles, the 60% panel, side nodes.
- text-primary: `#F3F3EE` — card titles and the note. Not for paragraphs.
- text-secondary: `#8A8A84` — the one gray line under each title.
- border-default: `rgba(255,255,255,0.06)` — card edge only.
- line-quiet: `rgba(255,255,255,0.20)` — diagram wires. Not yellow.
- accent-phosphor: `#E6FF55` — lamp cone, glows, the 60% bar, the bolt, the folder, the center person, chips, spark. Never a page wash. Never 13px body copy.
- on-accent: `#141414` — label when a control fills with phosphor.

## Typography
- Display and body: Manrope.
- Card title: 16px / 600 / 1.25, tracking -0.02em.
- Card line: 13px / 400 / 1.4, `text-secondary`. One sentence.
- Generate label: 12.5px / 500.
- No uppercase labels. No serif. No wordmark in the board.

## Space
- Board is `100vh`. Inset `clamp(28px, 8.6vh, 96px)` by `clamp(28px, 7.4vw, 128px)`.
- Column gap and row gap: 18px.
- Title block: 22px from the left, 18px from the bottom.
- The footer is the next thing after the board, so a 1600×1000 shot does not include it.

## Layout and responsiveness
### Compact (< 800px)
- One column, page scrolls. Order: capture, collaborate, monitor, automate, process, generate.
- Collaborate keeps a taller minimum. The footer follows the stack.
### Expanded (≥ 800px)
- Three columns, `1fr 1.558fr 1fr`. The center column is the wide one.
- Side columns: two equal cards.
- Center top (collaborate) flex 1.689. Center bottom (process) flex 1.
- The first screen ends at the board. Footer is below that fold.

## Shape & elevation
- Card radius 22px. Tiles 12px. Spark 16px. Generate control is a pill.
- No drop shadow on the cards. A 1px inset hairline is enough.
- Glow stays on the lamp, the bolt, the center hex, and the yellow folder.

## Components
### Cards
- Six. Title, then one gray sentence. No icon beside the title.
- Hover: border `rgba(230,255,85,0.28)`. No lift.
- The generate control is the only button.

### Generate control
- Pill, min-height 36px, 1px `text-primary` stroke, transparent fill.
- Idle label: “Click to generate”. A pointer rests on the lower-right of the pill.
- Pressed: fill `accent-phosphor`, text `on-accent`, `aria-pressed=true`. The card shows one line: “Twelve files became one note.”
- A second click clears the note and returns the pill to idle. The control does not navigate.
- States: default, hover (phosphor stroke), focus (2px phosphor ring, offset 3px), pressed.

### Footer
- One line, below the fold: “Sample template · board@phosphor.example”.
- The address is a `mailto:`. It is not in the 1600×1000 frame.

### Illustrations
- Capture: four tiny file tiles along the top, thin wires into a small upload tile, a phosphor folder-plus under it.
- Collaborate: seven pointy hexes (two, three, two) plus a smaller hex on each side, joined by a thin line. Only the center person is phosphor. The title sits in the lower field of this taller card.
- Monitor: lamp in the top-right, cone aimed at a panel that reads 60% with a phosphor bar. Thin stepped lines to a node on each side.
- Automate: phosphor bolt in a circle, two dark side nodes, a few specks. No room, no walls.
- Process: rounded device, a capsule on each side, phosphor chips on top, a few phosphor rules inside.
- Generate: document node, phosphor spark tile, folder node, three dots, a stem, then the pill.
- Loops, only under `prefers-reduced-motion: no-preference`: lamp cone 9.5s alternate, bolt glow 4.8s, hex pulse 5.6s. Ease-in-out. No bounce.
- Reduced motion: those three animations are absent. Cone, bolt, and center hex stay visible at rest.

## Iconography
- Drawn in the card. 1.3px stroke, round caps, except the filled bolt, person, folder, and spark.
- One phosphor yellow. No emoji. No icon font.

## Content
- Sentence case. The generate control is the verb.
- Fictional board only. Contact `board@phosphor.example`.
- Do not name another product or studio.

## Ban list
- A top bar, in-board wordmark, or footer inside the first viewport.
- Purple, cream page, serif display, emoji, photos, a second bento.
- Card shadows, glass gradients, a hero headline, a drawn room behind the bolt.
- Real trademarks.

## Accessibility
- The page name is an h1 for assistive tech only. Card titles are h2.
- The generate control is a button and points at the note with `aria-controls`.
- Phosphor yellow is not used for 13px body copy.
- Focus visible. Reduced motion leaves every mark on screen.
