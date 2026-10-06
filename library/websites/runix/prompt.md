# Rebuild prompt — Runix (`runix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/runix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Rust GPUI component library showcase with exact 4-act procedural 3D animation (1 SEED -> 2 GROW -> 3 STACK -> 4 FLIP): interactive timeline scrubber, live component countup from 0 to 1,272, real-time light/dark theme flip, axonometric desktop app layer stack, and interactive Rust component playground with 43 categories.

## Title
Runix · GPUI Components

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-page: #F4F0E4;
  --bg-surface: #EAE4D4;
  --bg-elevated: #DFD7C4;
  --text-main: #181816;
  --text-muted: #6E6D64;
  --text-subtle: #989688;
  --border-subtle: rgba(24, 24, 22, 0.12);
  --border-strong: rgba(24, 24, 22, 0.25);
  --accent-amber: #D97706;
  --accent-glow: rgba(217, 119, 6, 0.15);
  --wireframe-stroke: #181816;
  --canvas-bg: #F4F0E4;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: RUNIX GPUI COMPONENTS → #stage
  - button: ◐
- main #stage
  - section .animation-stage-section
    - h1: Start with one cell.
    - button: 1 SEED
    - button: 2 GROW
    - button: 3 STACK
    - button: 4 FLIP
    - button: PAUSE ||
  - section .section-monolith-brand
    - p: A high-performance component library for GPUI, in light and dark. Every component runs live in native desktop apps and browser WebAssembly with sub-millisecond frame budgets.
  - section .section-playground
    - h2: Interactive Component Registry
    - article .component-specimen-card
      - h3: Buttons & Actions
      - button: gpui::button()
      - button: Ghost
      - button: </> view gpui div! macro
    - article .component-specimen-card
      - h3: ColorPicker & Palette
      - button: </> view gpui div! macro
    - article .component-specimen-card
      - h3: Continuous Sliders
      - button: </> view gpui div! macro
    - article .component-specimen-card
      - h3: FileTree Workspace
      - button: </> view gpui div! macro
    - article .component-specimen-card
      - h3: CodeEditor View
      - button: </> view gpui div! macro
    - article .component-specimen-card
      - h3: SankeyFlow Diagram
      - button: </> view gpui div! macro
- footer .site-footer

## Fields
Keep these controls, including ids and placeholders.
- input[color]
- input[range]

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/runix-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
