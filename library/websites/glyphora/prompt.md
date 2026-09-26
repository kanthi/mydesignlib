# Rebuild prompt — Glyphora (`glyphora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/glyphora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-craft editorial typography studio featuring 4 signature whisper-quiet kinetic text primitives: character stagger rise, word blur-to-focus roll, hairline underline scrub, and masked phrase lift.

## Title
Glyphora — High-Craft Editorial Typography & Subtle Motion Studio

## Description meta
Explore four signature subtle text animation primitives for modern editorial design. Zero-layout-shift kinetic typography crafted for high-prestige web experiences.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-paper: #fbfaf8;
  --bg-paper-alt: #f3f1ec;
  --bg-dark: #121316;
  --border-paper: rgba(18, 19, 22, 0.08);
  --border-strong: rgba(18, 19, 22, 0.18);
  --text-ink: #121316;
  --text-ink-secondary: #52555e;
  --text-ink-muted: #8e929d;
  --accent-copper: #c86446;
  --accent-copper-soft: rgba(200, 100, 70, 0.1);
  --accent-cobalt: #2d46b9;
  --font-serif: 'Instrument Serif', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --max-width: 1240px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-bar
  - a: G Glyphora Type Studio Specimen → #
  - ul .nav-menu
    - li: Specimen
    - li: Manifesto
    - li: 4 Primitives
    - li: Lab Playground
  - button: Copy CSS
  - a: Test in Lab → #lab
- main
  - section #hero .hero
    - h1: Subtle text animations can make a simple page feel special.
    - button: 01 // CHAR STAGGER
    - button: 02 // WORD BLUR-ROLL
    - button: 03 // UNDERLINE TRACE
    - button: 04 // MASKED LIFT
    - button: Replay [Space]
  - section #manifesto .manifesto-section
    - p: We believe typography should breathe before it speaks. In a modern web landscape saturated with aggressive motion, the quietest transitions command the deepest focus.
  - section #primitives .primitives-section
    - h2: Whisper-Quiet Typography Primitives
    - h3: Damped Letter Rise
    - p: Each character lifts from a masked clipping boundary with exponential spring easing. Zero layout shift.
    - h3: Blur-to-Focus Dissolve
    - p: Words emerge from a gentle 10px Gaussian haze into crisp editorial ink on scroll progression.
    - h3: Hairline Velocity Scrub
    - p: Precision SVG stroke drawn along the typographic baseline, calibrated to user reading pace.
    - h3: Dual-Line Slip
    - p: Multi-line editorial phrases slip out of baseline masks with staggered micro-delays.
  - section #lab .lab-section
    - h3: Interactive Laboratory
    - p: Type your custom copy below to test the kinetic effect in real-time.
    - button: Trigger Reveal
    - button: Copy CSS Keyframes
    - button: Copy
- footer
  - a: Specimen → #hero
  - a: Manifesto → #manifesto
  - a: Primitives → #primitives

## Fields
Keep these controls, including ids and placeholders.
- input[text] #labTextInput
- input[range] #staggerSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/paper-grain.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
