# Rebuild prompt — Crag (`crag`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/crag/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
1981 alpine racing identity: rust and charcoal print kit, hatched CRAG wordmark, pixel chevron, ridgeline, 3482m.

## Title
Crag Team — Brand identity system

## Description meta
Fictional 1981 alpine racing identity. Rust and charcoal print kit: hatched CRAG wordmark, pixel chevron, ridgeline, 3482m.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Big+Shoulders+Display:wght@700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #dcd9d4;
  --surface-paper: #e8e4dc;
  --surface-rust: #d44f30;
  --surface-rust-deep: #c24328;
  --surface-ink: #292e2a;
  --text-primary: #292e2a;
  --text-on-rust: #292e2a;
  --text-on-ink: #d44f30;
  --text-secondary: #6a6862;
  --action-primary: #d44f30;
  --font-display: "Big Shoulders Display", "Arial Narrow", sans-serif;
  --font-body: "Barlow", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(3.2rem, 8vw, 7.5rem);
  --text-3xl: clamp(2rem, 4vw, 2.6rem);
  --section-y: clamp(3rem, 6vw, 5rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.2rem);
  --radius: 8px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Crag → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Kit → #apps
    - a: Voice → #voice
  - a: Specimen → #board
  - a: Request the kit → mailto:kit@crag.example
- main
  - section .intro
    - p: Brand identity · alpine racing · 1981
    - h1: The ridge at racing speed.
    - p: Crag Team is a fictional alpine racing club. Two inks, one hatched letter, a pixel chevron that reads from the valley floor.
  - section #board
    - article .cell.poster.grain
      - h2: CRAG TEAM
      - p: We race the long line, not the shortest. Two inks. The hatched R is the only letter allowed to open onto the field.
    - article .cell.arrow-cell.grain
    - article .cell.rise-cell.grain
    - article .cell.alt-cell.grain
  - section #mark .system
    - h2: Mark
    - p: A three-stack pixel chevron. Equal squares, no rounding. It is an arrow, a ridge, and a bib stamp.
  - section #color .system
    - h2: Color
    - p: Two inks. The studio wall is not a brand color.
  - section #type .system
    - h2: Type
    - p: Condensed display for racing distance. Mono for codes. Body stays out of the posters.
    - h3: Display
    - p: Crag
    - p: Big Shoulders Display 800–900 · tracking −0.06em
    - h3: Spec
    - p: CRG-81042 · 3482m · 1981
    - p: IBM Plex Mono · tabular
  - section #apps .system
    - h2: Kit
    - p: Bib, pennant, same two inks. No photography in the system.
  - section #voice .system
    - h2: Voice
    - p: Terse workshop English. Named things, numbered things.
    - article
      - h3: Race
      - p: Take the long line. Do not cut the switchback for a prettier time.
    - article
      - h3: Print
      - p: Two inks. Hatch one letter. If it needs a third color, it is not Crag.
    - article
      - h3: Peak
      - p: Crag Horn, 3482 metres. A fictional ridge. Never a real summit badge.
  - section #rules .system
    - h2: Rules
    - h3: Do
    - ul
      - li: Hatch only the R
      - li: Stack TEAM beside the G on posters
      - li: Keep pixels square
      - li: Put codes in Plex Mono
    - h3: Don’t
    - ul
      - li: Outline the wordmark
      - li: Set CRAG in white
      - li: Round the chevron
      - li: Add a real mountain’s height
- footer
  - a: Crag → #top

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
