# Rebuild prompt — Sonarium (`sonarium`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/sonarium/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Living brand identity system for a European philharmonic and experimental music centre in Ghent: fluid swooping soundwave mark inspired by composer John Cage graphic scores and oscilloscope audio waveforms, real-time interactive soundwave synthesizer across 4 musical genres, dual architectural and sonic color palette, and concert season poster exhibition.

## Title
Sonarium — Living Brand Identity System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-limestone: #EAE6DC;
  --color-brick: #B84A39;
  --color-oak: #C49A6C;
  --color-charcoal: #141416;
  --color-cobalt: #2440ED;
  --color-chartreuse: #D6F547;
  --color-violet: #8B3DFF;
  --color-coral: #FF5500;
  --color-magenta: #FF007F;
  --bg-page: #EAE6DC;
  --text-dark: #141416;
  --border-subtle: rgba(20, 20, 22, 0.12);
  --font-display: 'Inter', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: SONARIUM → #hero
  - ul .nav-links
    - li: Living Identity
    - li: John Cage Notation
    - li: Physical Artifacts
    - li: Concert Posters
  - a: Export Mark SVG → → assets/sonarium-mark.svg
- main #hero
  - section .hero-section
    - h1: Alive in every moment. Past, present & future.
    - p: Shifting away from historic architectural clichés and rigid musical staves toward a generative representation of music as an organic, living acoustic wave.
    - h3: The Living Oscilloscope Ribbon
    - button: Baroque
    - button: Avant-Garde
    - button: Modern Jazz
    - button: Electronic
  - section #origins .section-origins
    - h2: From Rigid Clefs to Fluid Waves
    - p: Traditional cultural venues often rely on predictable symbols: five-line staffs, treble clefs, or historical building silhouettes.
    - p: For Sonarium, the identity draws directly from composer John Cage’s indeterminate graphic scores (such as Fontana Mix and Aria) paired with the physical electrical waveforms captured by an analogue oscilloscope.
  - section #artifacts .section-artifacts
    - h2: Physical Brand Artifacts
  - section #posters .section-posters
    - h2: Concert Season Exhibition Posters
- footer .site-footer

## Images in the page
- `assets/sonarium-genres.svg — John Cage graphic notation and generative genre soundwaves`
- `assets/sonarium-posters.svg — Sonarium concert season posters exhibition`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #densitySlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/sonarium-genres.svg`
- `assets/sonarium-lockup.svg`
- `assets/sonarium-mark.svg`
- `assets/sonarium-posters.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
