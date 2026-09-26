# Rebuild prompt — Calyx (`calyx`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/calyx/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Climate-ops identity — navy-to-lime aurora, open-hex cup mark, social frames, proportion palette, posters, hanging cube sign.

## Title
Calyx — Brand identity system

## Description meta
Fictional climate-ops studio identity. Navy-to-lime aurora, open-hex cup mark, social frames, palette bars, posters, cube sign.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #EDEEEA;
  --surface-paper: #F7F7F4;
  --surface-navy: #03162C;
  --surface-teal: #2A4D4F;
  --surface-sea: #2F7A67;
  --accent-lime: #7AC216;
  --accent-lime-hover: #68A812;
  --muted-shade: #C5C7C0;
  --ghost-white: #F3F4F1;
  --frost: #B8B9C0;
  --mortar: #D4D5D1;
  --text-primary: #0C1418;
  --text-on-dark: #F7F7F4;
  --text-secondary: #5C6560;
  --font-ui: "Manrope", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.3rem, 5vw, 3.4rem);
  --text-3xl: clamp(1.5rem, 3vw, 2.1rem);
  --section-y: clamp(3.2rem, 6vw, 5rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.2rem);
  --radius: 8px;
  --radius-card: 16px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-header
  - a: calyx → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Photography → #photo
    - a: Rules → #rules
  - a: Kit → #board
  - a: Request the kit → mailto:kit@calyx.example
- main #main
  - section .intro
    - p: Brand identity · climate ops
    - h1: A cup that holds the available light.
    - p: Calyx is a fictional studio for teams that need the certificate of a system — navy shade, teal mass, a lime flare — without a leaf cliché.
  - section #board
    - article .phone
    - article .phone
    - article .phone
    - h3: Color palette by usage proportion
    - p: Color palette calyx
    - article .poster
      - h4: the hold goes on
      - p: for the desk, the floor, the hour you get back
    - article .poster.mark-only
    - article .poster
      - h4: calyx
      - p: Hold the light. Return the hours.
  - section #mark .system
    - h2: Logo system
    - p: Open hex cup. Clear space is half the mark height. The wordmark is always lowercase calyx.
    - h3: Clear space
    - p: Dashed frame = 0.5× mark. Do not crop into it. Minimum 24px digital, 12mm print.
    - h3: Lockups
  - section #color .system
    - h2: Color
    - p: Teal and sea carry the mass. Lime is the flare — one bar, the button, the mark on navy. Never a full-page lime.
  - section #type .system
    - h2: Typography
    - p: Manrope for the word and the page. IBM Plex Mono for hex, URLs, and units.
  - section #photo .system
    - h2: Photography & art direction
    - p: Aurora is the only color field. People are black-and-white, brim-shadowed, still. Signs live in real rooms with hard sun.
    - figure
      - figcaption: Field — aurora only, no extra geometry
    - figure
      - figcaption: Editorial — brim, grain, no smile
  - section #rules .system
    - h2: Do’s and don’ts
    - p: One mark, three lockups, the aurora as photography. Everything else is noise.
    - article .do
      - h3: Do
      - ul
        - li: Use the cup mark in lime on navy, white on aurora, navy on paper.
        - li: Keep the wordmark lowercase and optically tight.
        - li: Let teal/sea dominate charts; lime is one bar.
        - li: Photograph signs in rooms with a single hard light.
    - article .dont
      - h3: Don’t
      - ul
        - li: Rebuild the mark as an interlocking S or a leaf.
        - li: Rotate, outline-shadow, or set the mark in mid-grey.
        - li: Fill a page with lime or a CSS rainbow mesh.
        - li: Set body copy in lime, or drop Inter on the wordmark.
- footer
  - a: calyx → #top

## Images in the page
- `aurora.jpg`
- `aurora.jpg — Aurora field post`
- `portrait.jpg — Editorial hat portrait`
- `portrait-dark.jpg — Dark editorial crop`
- `cube.jpg — Hanging cube sign with aurora face and open-hex mark in a sunlit interior`
- `aurora.jpg — Navy to lime aurora field`
- `portrait.jpg — Black and white portrait with wide-brim hat`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `aurora.jpg`
- `cube.jpg`
- `index.html`
- `portrait-dark.jpg`
- `portrait.jpg`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
