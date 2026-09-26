# Rebuild prompt — Arris (`arris`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/arris/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Civic-edge identity — crimson field, true black, ridge mark, wayfinding cube, tote, cards, and stationery.

## Title
Arris — Brand identity system

## Description meta
Fictional civic-edge identity. Crimson, true black, charcoal, warm paper. Ridge mark, wayfinding cube, stationery.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-crimson: #c70024;
  --surface-ink: #000000;
  --surface-charcoal: #2c2c2c;
  --surface-paper: #f4f1ec;
  --surface-page: #e8e6e1;
  --text-primary: #111111;
  --text-on-field: #ffffff;
  --text-secondary: #5c5c5c;
  --action-primary: #c70024;
  --action-ink: #ffffff;
  --font-ui: "Outfit", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.4rem, 5vw, 3.6rem);
  --section-y: clamp(3.2rem, 6vw, 5rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1200px, 100% - 1.2rem);
  --radius: 8px;
  --radius-app: 22%;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: arris → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Voice → #voice
    - a: Rules → #rules
  - a: Kit → #board
  - a: Request the kit → mailto:kit@arris.example
- main
  - section .intro
    - p: Brand identity · civic envelope
    - h1: The edge that holds the building.
    - p: Arris is a fictional practice for facade corners, copings, and wayfinding. Crimson field, true black, a ridge that reads from the street.
  - section #board
  - section #mark .system
    - p: Mark
    - h2: A ridge, not a letter.
    - p: Two planes meeting. Clear space is one cap-height of the word. Never add a drop shadow, never rotate, never set in mid-grey.
  - section #color .system
    - p: Color
    - h2: Crimson or black. Not both as fill.
    - p: One saturated field. The rest of the kit is ink, charcoal, and paper.
  - section #type .system
    - p: Type
    - h2: Outfit for the street. Mono for the spec.
    - article .card
      - h3: Wordmark
      - p: arris
      - p: Outfit 700, lowercase, tracking −0.04em. Always with the ridge, never stretched.
    - article .card
      - h3: Spec
      - p: #C70024 · 20 mm clear · 1:1 mark
      - p: IBM Plex Mono for hex, drawings, and edge schedules.
  - section #voice .system
    - p: Voice
    - h2: Name the joint.
    - article
      - h3: Specific
      - p: Say coping, arris, and soffit. Do not say “solutions for the built environment.”
    - article
      - h3: Short
      - p: One clause. If it needs a comma, it needs a drawing instead.
    - article
      - h3: Civic
      - p: Written for the person on the pavement, not the pitch deck.
  - section #rules .system
    - p: Rules
    - article .card
      - h3: Do
      - ul
        - li: Set the ridge in white on crimson, or crimson on paper.
        - li: Keep the cube sign: one face mark, one face arrow.
        - li: Use true black for long text on paper.
    - article .card
      - h3: Don’t
      - ul
        - li: Outline the ridge in grey or add a glow.
        - li: Set crimson type on black.
        - li: Replace the ridge with a letter A.
- footer
  - a: arris → #top

## Images in the page
- `sign.jpg — Crimson and white wayfinding cube with an arrow on a concrete wall`
- `tote.jpg — White tote with crimson handles on a metal bench`
- `desk.jpg — White letterhead and crimson envelope on corrugated metal`
- `phone.jpg — Person in a black jacket holding a phone with a crimson screen`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `cards.jpg`
- `desk.jpg`
- `index.html`
- `phone.jpg`
- `preview.jpg`
- `sign.jpg`
- `tote.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
