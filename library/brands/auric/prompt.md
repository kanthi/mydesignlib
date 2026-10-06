# Rebuild prompt — Auric (`auric`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/auric/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Haute horology and avant-garde luxury geometric identity suite featuring four mathematically pure vector marks presented on liquid metallic silk substrates, backed by the 3-step logo stress test suite.

## Title
Auric — Haute Horology & Geometric Identity System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #07080a;
  --surface: #0f1117;
  --surface-border: rgba(255, 255, 255, 0.08);
  --surface-hover: rgba(255, 255, 255, 0.04);
  --text: #f0f2f5;
  --text-muted: #8a909d;
  --accent: #d4af37;
  --font-display: 'Cinzel', serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: Auric → #
  - a: Marks → #specimens
  - a: Stress Tests → #stress-test
  - a: Identity → #lockups
  - a: Design System → DESIGN.md
  - button: Copy SVG
- main .container
  - section .hero-specimen
    - h1: The Auric Suite
    - p: A master collection of four mathematically pure luxury marks presented on high-contrast liquid metallic silk substrates. Engineered for instant subconscious recognition.
    - button: 01 Vesica Star
    - button: 02 Triple Wave
    - button: 03 Inscribed Diamond
    - button: 04 Radial Chevron
    - button: Amber
    - button: Cobalt
    - button: Emerald
    - button: Bronze
    - button: Obsidian
    - button: Grid Blueprint
  - section #specimens
    - h2: The Four Emblems
    - p: Tactile specimens engineered for horology crowns, sovereign emblems, and digital avant-garde hardware.
    - h3: Vesica Star
    - p: Interlocking lenticular rings with central floating 4-pointed astroid sparkle.
    - h3: Triple Wave
    - p: 3×2 modular rhythm with 144px radius quarter-circle tangent arch cuts.
    - h3: Inscribed Diamond
    - p: Outer square, 45° diamond, and 40% concentric center square with axis channels.
    - h3: Radial Chevron
    - p: 17-fold radial symmetry (21.18° intervals) of sharp centripetal chevron wedges.
  - section #stress-test .stress-suite-section
    - h2: The 3-Step Logo Stress Test Suite
    - p: Real-time diagnostic verification matrix proving cognitive silhouette dominance, rapid mental recall, and 16px micro-scale legibility.
    - h3: Gaussian Blur Test
    - p: Validates that the silhouette dominates subconscious memory even when fine lines blur into high-frequency diffraction.
    - label: RADIUS: 0px
    - h3: 5-Second Recall Test
    - p: Measures mental imprint. Unfamiliar viewers can sketch the single visual hook accurately after a 5-second flash exposure.
    - button: Start 5-Sec Exposure
    - h3: 16px Favicon Scalability
    - p: Verifies optical stroke balance at smartwatch notification and browser tab dimensions without muddy gray clumping.
    - p: Optical Clarity Score: 98.4% at 16×16px grid. Zero anti-aliasing color bleed.
  - section #lockups .lockup-section
    - h2: Brand Identity System
    - p: Horological lockup, tactile packaging foil, and typography specifications.
- footer

## Images in the page
- `assets/mark-1-vesica-star.svg — Active Auric Mark`
- `assets/mark-1-vesica-star.svg — Vesica Star`
- `assets/mark-2-triple-wave.svg — Triple Wave`
- `assets/mark-3-inscribed-diamond.svg — Inscribed Diamond`
- `assets/mark-4-radial-chevron.svg — Radial Chevron`
- `assets/mark-1-vesica-star.svg — Blur Test`
- `assets/mark-1-vesica-star.svg — Recall Mark`
- `assets/mark-1-vesica-star.svg — 16px`
- `assets/mark-1-vesica-star.svg — 24px`
- `assets/mark-1-vesica-star.svg — 32px`
- `assets/mark-1-vesica-star.svg — 48px`
- `assets/mark-1-vesica-star.svg — 64px`
- `assets/mark-1-vesica-star.svg — Lockup Mark`
- `assets/mark-1-vesica-star.svg — Tactile Mark`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #blurSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/mark-1-vesica-star.svg`
- `assets/mark-2-triple-wave.svg`
- `assets/mark-3-inscribed-diamond.svg`
- `assets/mark-4-radial-chevron.svg`
- `assets/substrate-amber.jpg`
- `assets/substrate-bronze.jpg`
- `assets/substrate-cobalt.jpg`
- `assets/substrate-emerald.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
