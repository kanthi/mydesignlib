# Rebuild prompt — Mire Plates (`mire-plates`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/mire-plates/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Four-plate presentation of the Mire sheet-film portfolio — full-page darkroom spreads of fiber prints, with no navigation, buttons, or type on the photographs.

## Title
Mire Plates — Four plates from the sheet

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Newsreader", "Iowan Old Style", Palatino, serif;
  --font-body: "Figtree", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #1C2422;
  --surface-paper: #E4E0D4;
  --surface-paper-deep: #D5D0C2;
  --text-on-dark: #E6E2D8;
  --text-on-paper: #1A1E1C;
  --text-muted: #8E9892;
  --text-muted-paper: #5C615C;
  --action-primary: #E4572E;
  --selenium: #C4A574;
  --status-danger: #8E2E2A;
  --line-dark: rgba(230, 226, 216, 0.16);
  --line-paper: rgba(26, 30, 28, 0.16);
  --text-word: clamp(3.6rem, 7vw, 6.4rem);
  --text-display: clamp(2.2rem, 4vw, 3.3rem);
  --text-xl: clamp(1.35rem, 2vw, 1.7rem);
  --text-lg: 1.2rem;
  --text-base: 1.0625rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-word: 0.92;
  --leading-display: 1.05;
  --leading-body: 1.6;
  --tracking-word: -0.03em;
  --tracking-display: -0.02em;
  --tracking-label: 0.14em;
  --wrap: min(1180px, calc(100% - 3rem));
  --radius: 2px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- main
  - section .plate “Plate 01, cover”
    - p: 01/ 04
    - figure .print
    - p: Photographer · Grayharbor
    - h1: Ida Voss
    - p: She photographs harbors, weather, and rooms that are still in use, working alone on 4×5 sheet film from a room above a chandlery.
    - p: Mire · studio@mire.example
  - section .plate “Plate 02, opening pair”
    - figure .print
    - figure .print
  - section .plate “Plate 03, galley and headland”
    - figure .print
    - figure .print
  - section .plate “Plate 04, tide, shed, and lamp”
    - figure .print
    - figure .print
    - figure .print

## Images in the page
- `assets/frame-slip.jpg — Two working boats tied to a wet wooden dock at blue hour, ropes coiled in the foreground.`
- `assets/frame-slip.jpg — Working boats moored beside a wet dock under a blue-hour sky.`
- `assets/frame-nets.jpg — Coiled fishing nets and a rusted iron cleat on wet dock planks.`
- `assets/frame-room.jpg — A boat galley with an enamel kettle, a yellow oilskin, and breakfast dishes by a fogged port window.`
- `assets/frame-weather.jpg — A small green hut on a rocky headland as waves break along the shore.`
- `assets/frame-tide.jpg — Barnacled pilings and wooden ladders standing in harbor mud at low tide.`
- `assets/frame-door.jpg — A weathered wooden shed standing at the end of an empty dock.`
- `assets/frame-lamp.jpg — A skiff moored beside a wet dock under a single sodium lamp at night.`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/frame-door.jpg`
- `assets/frame-lamp.jpg`
- `assets/frame-nets.jpg`
- `assets/frame-room.jpg`
- `assets/frame-slip.jpg`
- `assets/frame-tide.jpg`
- `assets/frame-weather.jpg`
- `assets/portrait.jpg`
- `index.html`
- `mire-plates.pdf`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
