# Rebuild prompt — Ascendia (`ascendia`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Wellness
- Folder: `library/brands/ascendia/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-performance group fitness brand identity system: 8-spoke radiating asterisk mark with negative-space upward arrow, 5u by 12u proportional construction grid specifications, high-velocity athletic action photography, tactile stationery business card mockup, digital workout telemetry card, and multi-scale stress testing suite.

## Title
Ascendia — Brand Identity System & Guidelines

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --lime-primary: #9FE814;
  --lime-bright: #B8F23E;
  --olive-dark: #212E18;
  --charcoal-forest: #172012;
  --canvas-bg: #141613;
  --board-bg: #EAE8E3;
  --text-muted: #8E928A;
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - h1: Ascendia
  - nav .nav-actions
    - button: Export SVG
    - button: Copy #9FE814
- main .board-container
  - section .panel-construction
  - section .panel-athlete
    - h3: Elevate Every Rep
    - p: ASCENDIA GROUP ATHLETICS
  - section .panel-stationery
  - section #emblemTile .panel-emblem
  - section .panel-digital
  - h2: Multi-Scale Responsive Stress Test
  - p: The Ascendia mark synthesizes an 8-spoke kinetic sunburst with an upward-pointing arrow formed strictly within negative space. The 5u by 5u proportion integrates seamlessly with the 12u wordmark.
  - ul .rules-list
    - li: Always maintain at least 1u clear-space padding around all sides.
    - li: Negative arrow must always point exactly upwards (0° zenith).
    - li: Primary color lockup uses Electric Lime (#9FE814) with Dark Olive (#212E18).
    - li: Monochrome executions permitted in black on white or white on black.

## Images in the page
- `assets/athlete.jpg — Ascendia High-Performance Group Fitness Athlete`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #scaleSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `assets/athlete.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
