# Rebuild prompt — Keel (`keel`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/keel/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Eight-cell identity board: a link mark and lowercase word on a cerulean field, browser chrome, app icons, a plinth, a shirt, a letter, cards, and a four-part palette.

## Title
Keel — Brand identity

## Description meta
Keel identity board. A link mark, a lowercase word, and four colors.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-field: #0F4A72;
  --surface-paper: #E6E1D6;
  --surface-deep: #0C3342;
  --surface-white: #F7F8F6;
  --surface-card: #E4DDD4;
  --surface-ledge: #D9D3C9;
  --text-ink: #16344A;
  --text-muted: #5E6B73;
  --on-field: #F3F0E8;
  --font: "Sora", "Avenir Next", sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- main .board
  - h1: keel
  - figure .cell.shot
  - figure .cell.shot
  - article .sheet
    - p: Keel desk desk@keel.example
    - p: 9 October
    - p: The crew meets at nine. The mark stays with the word.
  - article .card.card-back
    - p: Keel desk desk@keel.example keel.example
  - article .card.card-front
  - p: HEX: #0F4A72 RGB: 15 74 114 CMYK: 87 35 00 55
  - p: HEX: #E6E1D6 RGB: 230 225 214 CMYK: 00 02 07 10
  - p: HEX: #0C3342 RGB: 12 51 66 CMYK: 82 23 00 74
  - p: HEX: #F7F8F6 RGB: 247 248 246 CMYK: 00 00 01 03

## Images in the page
- `assets/plinth.jpg — A blank navy box on a round plinth, with leaves and seed pods.`
- `assets/tee.jpg — A white mannequin in a plain navy t-shirt.`
- `assets/desk.jpg`
- `assets/qr.png — Code for keel.example`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/desk.jpg`
- `assets/plinth.jpg`
- `assets/qr.png`
- `assets/tee.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
