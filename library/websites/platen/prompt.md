# Rebuild prompt — Platen (`platen`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/platen/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Hand-built interface kit specimen reel on a black field: seven glass cards covering typography, speed, notes, parts, modes, and checks.

## Title
Platen — Crafted by humans

## Description meta
Platen is a fictional interface kit. Seven glass cards on a black reel: type, paint, notes, parts, modes, care, and checks.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font: "Instrument Sans", "Avenir Next", sans-serif;
  --surface-field: #000000;
  --surface-cream: #F4F1EA;
  --surface-ink: #141416;
  --text-on-dark: #FFFFFF;
  --text-on-light: #1C1C1E;
  --text-muted: #8E8E93;
  --edge-green: #3DFF8A;
  --status-amber: #E2A23A;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 700ms;
  --card-w: min(760px, 72vw);
  --gap: 22px;
  }

  :root { --card-w: 82vw; }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to the set → #kit
- section #top .stage “Kit cards”
  - h1: Crafted by humans
  - article #card-care .card.heart
    - h2: Clean code. Built with care.
  - article #card-type .card.frost
    - h2: Polished type that reads well and looks right on any device.
  - article #card-paint .card.green
    - h2: Paint, held short. Smooth loading, crisp taps, fewer jumps.
    - p: 0.2sFirst paint
  - article #card-notes .card.cream
    - h2: Notes in plain text, for simple and flexible editing.
  - article #card-parts .card.frost
    - h2: Quickly add parts that feel smooth and native.
    - button: Python
    - button: PHP
    - button: Go
    - button: Ruby
    - button: C
    - p: Clean parts, small motion, and the feeling of a native control. Less assembly. More shipping.
  - article #card-modes .card.ink
    - h2: Light and dark, built to export one or both, and kept lean.
  - article #card-checks .card.frost
    - h2: Stop chasing markup. Clean tags, real links, pictures kept light.
  - a: platen → #kit
- section #kit .set
  - p: The set
  - h2: Seven cards. Nothing borrowed.
  - ol .index
    - li: 01Type — a glass letter, weight and line-height in the margin.
    - li: 02Paint — the number on the green card, held short.
    - li: 03Notes — plain text, a yellow spine, three tabs.
    - li: 04Parts — languages in one black pill.
    - li: 05Modes — one switch, light or dark.
    - li: 06Care — a heart on a dark rim.
    - li: 07Checks — a dark banner and three rows still working.
- p: The reel is the kit. Write if you want the seven cards on your own bench.
- a: Open the kit → mailto:hello@platen.example
- footer .foot
  - a: platen → #top
  - a: hello@platen.example → mailto:hello@platen.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
