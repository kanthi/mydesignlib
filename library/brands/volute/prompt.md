# Rebuild prompt — Volute (`volute`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Product
- Folder: `library/brands/volute/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Spatial-AI identity — travertine hall, hexagonal spiral mark, construction grid, black card, watch, campaign stills.

## Title
Volute — Visual identity

## Description meta
Fictional spatial-AI identity. Travertine hall, hexagonal spiral mark, construction drawing, black card, watch, campaign stills.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-stone: #c4a882;
  --surface-ink: #141414;
  --surface-paper: #f3f1ec;
  --surface-line: #d9d4cc;
  --text-primary: #161513;
  --text-on-stone: #f7f3ec;
  --text-secondary: #6b665e;
  --action-primary: #141414;
  --action-ink: #f7f3ec;
  --font-ui: "Syne", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.3rem, 5vw, 3.5rem);
  --section-y: clamp(3rem, 6vw, 4.8rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.2rem);
  --radius: 10px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Volute → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Voice → #voice
    - a: Rules → #rules
  - a: Kit → #board
  - a: Request the kit → mailto:hall@volute.example
- main
  - section .intro
    - p: Visual identity · spatial studio
    - h1: Mass the hall before you pour.
    - p: Volute is a fictional spatial model for architects. Travertine, raking light, a hexagonal spiral that records how the volume turns.
  - section #board
    - article .cap
      - p: Mass it before you pour
    - article .cap
      - p: The hall, then the drawing
    - article .cap
      - p: See the joint. Build it.
  - section #mark .system
    - p: Mark
    - h2: A spiral that still reads as a hex.
    - p: Line and nodes only. Clear space is the mark’s width. Never fill the spiral solid. Never redraw it as three cubes.
  - section #color .system
    - p: Color
    - h2: Stone is the photograph. Ink is the card.
  - section #type .system
    - p: Type
    - h2: Syne for the hall. Mono for the grid.
    - article .card
      - h3: Wordmark
      - p: Volute
      - p: Syne 700. Always with the spiral. Never a .ai suffix.
    - article .card
      - h3: Spec
      - p: GRID 28 · NODE 1.6 · #141414
      - p: IBM Plex Mono for construction notes.
  - section #voice .system
    - p: Voice
    - h2: Name the volume.
    - article
      - h3: Measured
      - p: Say hall, joint, and pour. Do not say “reimagine reality.”
    - article
      - h3: Quiet
      - p: One sentence, then the drawing. Light does the rest.
    - article
      - h3: Civic
      - p: Written for the person who will walk the colonnade, not the pitch.
  - section #rules .system
    - p: Rules
    - article .card
      - h3: Do
      - ul
        - li: Set the mark in paper on stone photos, or ink on paper.
        - li: Keep the construction drawing on a 28px grid.
        - li: Use the search pill only on the spiral plate.
    - article .card
      - h3: Don’t
      - ul
        - li: Fill the spiral or turn it into a cube cluster.
        - li: Add gold gradients over the hall.
        - li: Use a live street address or a real architect’s name.
- footer
  - a: Volute → #top

## Images in the page
- `hall.jpg — Travertine colonnade with long raking shadows`
- `ribbed.jpg — Dark ribbed metal`
- `watch.jpg — Black square watch on a boom arm`
- `spiral.jpg — Wooden spiral staircase with a slit of daylight`
- `campaign-a.jpg — Brutalist interior volumes`
- `campaign-b.jpg — Geometric concrete planes`
- `campaign-c.jpg — Stone corridor in perspective`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `campaign-a.jpg`
- `campaign-b.jpg`
- `campaign-c.jpg`
- `hall.jpg`
- `index.html`
- `preview.jpg`
- `ribbed.jpg`
- `spiral.jpg`
- `watch.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
