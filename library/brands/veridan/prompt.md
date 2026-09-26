# Rebuild prompt — Veridan (`veridan`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Developer
- Folder: `library/brands/veridan/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-conviction decision intelligence brand identity with dynamic 4-blade decision vortex mark, electric vermilion field, kinetic telemetry ray matrices, 4-tier responsive stack, and 3-step stress test suite.

## Title
Veridan — Brand Identity System & Decision Intelligence Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-vermilion: #FF4D30;
  --color-forest: #0B422B;
  --color-solar-gold: #F5A81C;
  --color-coral: #FF5538;
  --color-jade-teal: #149377;
  --color-lime-citron: #E2F738;
  --color-ecru: #F3F2EE;
  --color-white: #FFFFFF;
  --color-dark-surface: #071D15;
  --color-border-subtle: rgba(255, 255, 255, 0.12);
  --font-serif: 'Instrument Serif', 'Fraunces', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'Space Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .specimen-header
  - a: 4 Touchpoint Posters → #posters
  - a: Responsive Stack → #stack
  - a: Stress Test Suite → #stress
  - a: Color Tokens → #tokens
  - button: Copy Master SVG
- main
  - section #posters .posters-hero-section
    - h2: Stop reading the chart. Start making the call.
    - h2: Stop reading the chart. Start making the call.
    - h2: Stop reading the chart. Start making the call.
  - section #stack .identity-stage-section
    - h2: The 4-Tier Responsive Logo Stack
    - p: Engineered to maintain unmistakable recognition from 60ft highway billboards down to 16px smartwatch notification icons.
  - section #stress .stress-test-section
    - h2: The 3-Step Logo Stress Test Suite
    - p: Rigorous empirical verification testing silhouette dominance, cognitive retention, and micro-scale legibility.
    - h3: 1. The Gaussian Blur Test
    - p: Drag the slider below to simulate extreme peripheral vision and optical blur. The 4-blade vortex silhouette must remain distinguishable at 20px blur.
    - h3: 2. The 5-Second Recall Test
    - p: Tests subconscious retention. Viewers memorize the single visual hook (interlocking beveled turbine) in under 5 seconds.
    - button: Start 5-Sec Memory Timer
    - h3: 3. The 16px Scalability Test
    - p: Zoom into the 16x16 grid. The uniform 24-unit blade thickness and 12-unit square core prevent muddy pixel decay.
  - section #tokens .color-tokens-section
    - h2: Semantic Brand Tokens
    - p: Click any swatch to copy value directly to clipboard.
- footer .specimen-footer

## Images in the page
- `assets/telemetry-rays.svg`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #blurSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo-mark.svg`
- `assets/logo-primary.svg`
- `assets/logo-white.svg`
- `assets/telemetry-rays.svg`
- `images/editorial-coast.jpg`
- `images/editorial-hero.jpg`
- `images/editorial-poster.jpg`
- `images/yellow-coat-pier.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
