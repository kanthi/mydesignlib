# Rebuild prompt — Nuclid (`nuclid`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Developer
- Folder: `library/brands/nuclid/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Mint-core compute identity: hex-nucleus orbit mark, glass token, kiosk, neon lockup on forest.

## Title
Nuclid mark construction

## Description meta
Fictional mint-core compute identity. Hex-nucleus 3-orbit mark, forest well, glass token, Manrope wordmark.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #111413;
  --surface-charcoal: #111413;
  --surface-forest: #0d2a24;
  --surface-teal: #178a96;
  --surface-mint: #7dffc2;
  --surface-mist: #d5ded9;
  --surface-white: #f7fbf9;
  --text-primary: #f7fbf9;
  --text-on-mint: #0d2a24;
  --text-secondary: #8aa39a;
  --action-primary: #7dffc2;
  --font-ui: "Manrope", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.4rem, 5vw, 3.8rem);
  --text-3xl: clamp(1.55rem, 3vw, 2rem);
  --section-y: clamp(3.2rem, 6vw, 5.2rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.2rem);
  --radius: 8px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to specimen → #board
- header .site-header
  - a: Nuclid → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Applications → #apps
    - a: Rules → #rules
  - a: Specimen → #board
  - a: Request the kit → mailto:kit@nuclid.example
- main
  - section .intro
    - p: Brand identity · isolated compute
    - h1: The nucleus you can hold.
    - p: Nuclid is a fictional runtime for sandboxed compute. Mint field, forest well, three orbits around a hexagonal core.
  - section #board
    - p: Nuclid
    - p: Nuclid
  - section #mark .system
    - p: Mark
    - h2: Three orbits. One hex core.
    - p: NCL-3: ellipses at 0°, 60°, and 120° around CORE-HEX. Clear space is one cap-height of the N. Never fill the orbits into clover lobes.
    - article .note
      - h3: Orbits
      - p: Three strokes, never filled. Ratio 22 : 8.5 in a 64 unit box. Code NCL-3.
    - article .note
      - h3: Nucleus
      - p: Pointy hex, radius 5. Not a circle, not a rounded square. Code CORE-HEX.
    - article .note
      - h3: Beads
      - p: One electron per orbit. Do not add a fourth. Do not drop them in lockups under 16px.
  - section #color .system
    - p: Color
    - h2: Mint or forest. Teal is a bar.
    - p: One light field. One dark field. Teal never becomes a second lockup.
  - section #type .system
    - p: Type
    - h2: Manrope for the core. Mono for the spec.
    - p: Sentence-case wordmark. Never all-caps, never outlined as a logo, never tracked above 0.02em.
    - article .card
      - h3: Wordmark
      - p: Nuclid
      - p: Manrope 700, tracking −0.045em. Always with the mark, never stretched.
    - article .card
      - h3: Spec
      - p: #7DFFC2 · NCL-3 · CORE-HEX
      - p: IBM Plex Mono for hex, orbit codes, and kit labels.
    - article .card
      - p: Hold the core.
      - p: Every process is a nucleus. Isolate it, then let it orbit.
      - p: kit@nuclid.example · 20 mm clear
  - section #apps .system
    - p: Applications
    - h2: Glass, kiosk, neon, room.
    - p: The mark lives in the hand, on the pedestal, as light, and on a wall you walk toward.
    - figure .app-token
      - figcaption: Glass token · CORE-HEX
    - figure
      - figcaption: Lab kiosk
    - figure .wide
      - figcaption: Orbit hall
  - section #voice .system
    - p: Voice
    - h2: Nucleus. Orbit. Isolate.
    - article
      - h3: Lab
      - p: Say nucleus, orbit, isolate, core. Do not say platform, stack, or suite.
    - article
      - h3: Short
      - p: One clause. If it needs a comma, it needs a diagram instead.
    - article
      - h3: Held
      - p: The identity is an object. Write as if the token is already in the hand.
  - section #rules .system
    - p: Rules
    - article .do
      - h3: Do
      - ul
        - li: Set the mark in charcoal on mint, or mint on forest.
        - li: Keep the hex nucleus. Three orbits, three beads.
        - li: Composite the mark onto glass in code, not in the photograph.
        - li: Use Manrope sentence-case for Nuclid.
    - article .dont
      - h3: Don’t
      - ul
        - li: Fill the orbits into a three-lobe clover.
        - li: Rotate the mark in a lockup.
        - li: Set mint type on teal, or charcoal type on forest.
        - li: Bleed teal as a second lockup field.
- footer
  - a: Nuclid → #top

## Images in the page
- `token.jpg — Silhouette of a hand holding a square glass token against a mint field`
- `kiosk.jpg — Silhouetted arm reaching toward a standing kiosk in a mint-lit room`
- `portrait.jpg — Silhouette portrait in profile against a mint studio field`
- `token.jpg — Glass token held in silhouette against mint`
- `kiosk.jpg — Kiosk in a mint room`
- `room.jpg — Dark exhibition hall with mint nebula ceiling and a figure facing a blank wall`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `kiosk.jpg`
- `portrait.jpg`
- `preview.jpg`
- `room.jpg`
- `token.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
