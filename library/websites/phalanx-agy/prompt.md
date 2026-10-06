# Rebuild prompt — Phalanx (`phalanx-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/phalanx-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Red-team cybersecurity & distributed defense infrastructure. Features fixed fullscreen black stage, right-side looping red matrix circuitry video, dual SVG color-grade filter pipeline, left-locked monospaced typography, and real-time defense telemetry stats.

## Title
Phalanx — Security Built Into Every System Layer

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --s: min(100vw / 1505, 100vh / 700);
  --red: #c81b1c;
  --red-hover: #b01617;
  --ink: #ffffff;
  --sub: #e6e6e6;
  --lab: #949494;
  --bx: 60;
  --by: 36;
  --bs: 44;
  --h1y: -12.5;
  --suby: 167.5;
  --numy: 19;
  --laby: 74;
  --font-sg: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-jb: 'JetBrains Mono', monospace;
  }

  :root {
  --s: clamp(0.82px, min(100vw / 900, 100vh / 1200), 1.25px);
  --bx: 56; --by: 33; --bs: 40;
  --h1y: -10.25; --suby: 137.4; --numy: 15.6; --laby: 60.7;
  }

  :root {
  --s: min(100vw / 430, 100vh / 620, 1.02px);
  --bx: 26; --by: 21; --bs: 34;
  --h1y: -7.1; --suby: 108; --numy: 13; --laby: 50;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav .main-nav
    - a: Home → #top
    - a: Resources → #resources
    - a: Benefits → #benefits
    - a: Contact → #contact
  - button: Secure system
- section .hero
  - h1: Security built into every system layer
  - p: Engineered to stay resilient, controlled, and uncompromised under pressure.
  - button: Secure system
- section .stats
- button: Secure system →

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/poster.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
