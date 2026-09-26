# Rebuild prompt — Quatra (`quatra`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: logo · Studio
- Folder: `library/logos/quatra/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Night-economy logo — four kites with a square counter, magenta-navy dusk, metro totem, cards, tote, phone.

## Title
Quatra — Logo

## Description meta
Fictional night-economy mark. Four kites, square counter, magenta-navy dusk, metro and tote applications.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-ink: #0b0b14;
  --dusk-a: #1a0b2e;
  --dusk-b: #7a2bb0;
  --dusk-c: #e23b7a;
  --surface-paper: #efebe6;
  --text-primary: #f4f1ec;
  --text-secondary: #8e8894;
  --action-primary: #e23b7a;
  --action-ink: #fff;
  --font-ui: "Plus Jakarta Sans", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --dusk: radial-gradient(120% 90% at 20% 0%, #2a1460 0%, #1a0b2e 38%, #7a2bb0 62%, #e23b7a 100%);
  --text-display: clamp(2.2rem, 5vw, 3.2rem);
  --section-y: clamp(3rem, 6vw, 4.8rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.2rem);
  --radius: 8px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Quatra → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Rules → #rules
  - a: Kit → #board
  - a: Request the mark → mailto:desk@quatra.example
- main
  - section .intro
    - p: Logo design · night economy
    - h1: Four kites. One dusk.
    - p: Quatra is a fictional foundation for after-hours programs in transit halls. A square-counter mark on magenta heat, never a diamond hole.
  - section #board
    - figure .poster
      - figcaption: Quatra
    - figure .poster
      - figcaption: Mark
    - figure .poster
      - figcaption: Foundations after dark
  - section #mark .system
    - p: Mark
    - h2: A square in the center. Four kites out.
    - p: Not a diamond hole. Clear space is one kite. Never a fifth petal. Never an outline in grey.
  - section #color .system
    - p: Color
    - h2: Gradient on dusk fields only.
  - section #type .system
    - p: Type
    - h2: Wide caps. Never title case.
    - article .card
      - h3: Wordmark
      - p: Quatra
      - p: Plus Jakarta Sans 800, tracking 0.16em. Always with the kites.
    - article .card
      - h3: Spec
      - p: COUNTER □ · KITE 4 · #E23B7A
      - p: IBM Plex Mono for hex and clear space.
  - section #rules .system
    - p: Rules
    - article .card
      - h3: Do
      - ul
        - li: White mark on dusk. Magenta mark on paper.
        - li: Keep the station totem as one dusk slab.
        - li: Track the wordmark. Do not kern it tight.
    - article .card
      - h3: Don’t
      - ul
        - li: Punch a diamond in the center.
        - li: Run the gradient on letterhead.
        - li: Add a fifth kite or a smile.
- footer
  - a: Quatra → #top

## Images in the page
- `station.jpg — Metro hall with two escalators and a central totem`
- `horizon.jpg — Figure on a dusk ridge`
- `tote.jpg — Black tote with magenta straps on a mesh fence`
- `phone.jpg — Phone standing with a navy-to-magenta dusk screen`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `cards.jpg`
- `horizon.jpg`
- `index.html`
- `phone.jpg`
- `preview.jpg`
- `station.jpg`
- `tote.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
