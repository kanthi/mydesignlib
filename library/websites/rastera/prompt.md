# Rebuild prompt — Rastera (`rastera`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/rastera/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Procedural pixel matrix and canvas motion primitives showcase featuring 9 real-time particle dissolution looks, subpixel dither rasterization, live text playground, and multi-framework integration specs.

## Title
Rastera — Reactive Pixel Matrix & Motion Primitives

## Description meta
Watch text materialize out of pixels. Nine distinct procedural raster looks by toggling one prop. Lightweight canvas motion primitives for modern web engineers.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-void: #08090b;
  --bg-surface: #0f1115;
  --bg-card: #15181f;
  --bg-card-hover: #1c212a;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-highlight: rgba(34, 197, 94, 0.35);
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent-lime: #22c55e;
  --accent-lime-glow: rgba(34, 197, 94, 0.25);
  --accent-cyan: #00f2fe;
  --accent-amber: #f59e0b;
  --accent-purple: #a855f7;
  --font-display: 'Syne', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --max-width: 1280px;
  --transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-bar
  - a: RASTERA v1.0.4 → #
  - ul .nav-links
    - li: Playground
    - li: 9 Presets
    - li: Architecture
    - li: Component API
  - button: Copy Snippet
- main
  - section #hero .hero-section
    - h1: Watch text materialize out of pure pixels.
    - p: Then watch it happen 8 more ways by changing one prop. Pixel Reveal is the premiere motion primitive from Rastera — subpixel bitmap dissolution rendered at 120 FPS.
    - button: MATERIALIZE
    - button: SIGNAL
    - button: TYPEWRITER
    - button: DISSOLVE
    - button: RAIN
    - button: RADIATE
    - button: IMPULSE
    - button: GLITCH
    - button: FLOW
    - button: Replay [Space]
  - section #architecture .bento-section
    - h2: Engineered for 120 FPS Subpixel Motion
    - h3: Dual-Buffer Offscreen Raster
    - p: Text glyphs are painted once to an in-memory offscreen canvas buffer to extract subpixel alpha coordinates. Zero layout reflow or DOM tree recreation during particle updates.
    - h3: 3.1 kB Zero Dependencies
    - p: No heavy 3D runtimes or bloated WASM payloads. Pure deterministic Canvas 2D math running effortlessly at 60–120 FPS on all modern devices.
    - h3: Full Accessibility Fallback
    - p: Automated screen-reader mirroring with invisible semantic HTML nodes. Honors prefers-reduced-motion by rendering instant crisp typography without flashing.
  - section #presets .presets-section
    - h2: Nine Looks. One Prop.
  - section #api .code-section
    - h2: Component API & Integration
    - button: React / Next.js
    - button: Vanilla JS
    - button: Vue 3
    - button: Copy Code
    - table .props-table
      - th: Prop
      - th: Type
      - th: Default
      - th: Description
      - td: preset
      - td: 'materialize' | 'signal' | 'typewriter' | 'dissolve' | 'rain' | 'radiate' | 'impulse' | 'glitch' | 'flow'
      - td: 'materialize'
      - td: Procedural particle dissolution mode.
      - td: text
      - td: string
      - td: Required
      - td: The text string to rasterize and reveal.
      - td: pixelSize
      - td: number
      - td: 5
      - td: Grid resolution dimension in logical pixels (2–14).
      - td: duration
      - td: number
      - td: 1.0
      - td: Animation playback time in seconds.
      - td: color
      - td: string
      - td: '#22c55e'
      - td: Hex or CSS color string for active phosphor particles.
      - td: trigger
      - td: 'mount' | 'scroll' | 'hover' | 'manual'
      - td: 'mount'
      - td: Event trigger mode for starting the pixel reveal.
  - section .cta-section
    - h2: Add Pixel Reveal to your stack today.
    - p: Single-file install via npm, pnpm, or CLI package generator.
    - a: Open Playground → #hero
    - a: Read Spec → #api
- footer
  - a: Playground → #hero
  - a: Presets → #presets
  - a: API Docs → #api

## Fields
Keep these controls, including ids and placeholders.
- input[text] #customTextInput placeholder='Type anything to test reveal...'
- input[range] #pixelSizeSlider
- input[range] #durationSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-glow.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
