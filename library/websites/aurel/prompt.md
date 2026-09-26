# Rebuild prompt — Aurel (`aurel`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/aurel/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Premium motion fashion site — 100vh sections, GSAP layered reveals, Lenis smooth scroll, AI campaign assets. Built from Motion Sites research principles.

## Title
Aurel — Future forward fashion

## Description meta
Premium motion fashion template. Research-driven: 100vh sections, layered GSAP reveals, AI-generated assets — not generic AI slop.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #050505;
  --ink: #f4f4f2;
  --muted: #8a8a86;
  --line: #222;
  --accent: #e8e4dc;
  --font: "Space Grotesk", system-ui, sans-serif;
  --serif: "Instrument Serif", Georgia, serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #nav .nav
  - a: Aurel → #top
  - button: Menu
  - nav .nav-links
    - a: Story → #story
    - a: Shop → #shop
    - a: Looks → #looks
    - a: Journal → #journal
  - a: Shop now → #contact
- section #top .vh.hero
  - p: Beyond trends · Built for tomorrow
  - h1: Future Forward Fashion
  - p: Drop 08 · SS26
- section #story .vh.manifesto
  - p: We design forms that move — silhouettes engineered for motion, materials chosen for light, collections that refuse the ordinary.
  - p: Est. fictional atelier · Sample template
- section #shop .split
  - h2: Shop now
  - p: Precision lines and quiet hardware. The SS26 edit pairs sculptural outerwear with kinetic accessories.
  - a: Explore the edit → → #contact
- section .split
  - h2: Human finished
  - p: Every surface is intentional. AI drafts the draft — we finish with taste: spacing, type, and the last 10% that sells expensive.
  - a: View campaign → → #looks
- section #looks .looks
  - h2: Selected looks
  - p: Campaign stills generated for this sample — original assets, not stock from the tutorial video.
  - figure .look.wide.reveal
    - figcaption: 01 · VelocitySS26
  - figure .look.reveal
    - figcaption: 02 · SignalSS26
- section #contact .vh.cta
  - h2: Make it feel expensive
  - p: Layered motion. Distinct assets. Hierarchy that sells.
  - a: Start the edit → mailto:hello@aurel.example
- p: Research applied from the Motion Sites / Viktor Oddy workflow covered in the tweet: 100vh sections, Pinterest→AI asset pipeline, layered GSAP reveals (not laggy scrub), distinctive type (Space Grotesk + Instrument Serif — not default Inter purple-gradient slop), micro-interactions, and reduced-motion support. Libs: gsap + ScrollTrigger, lenis (MIT/open).
- footer
  - a: hello@aurel.example → mailto:hello@aurel.example

## Images in the page
- `hero-car.jpg — Aurel form study`
- `model.jpg — Aurel campaign portrait`
- `hero-car.jpg — Look 01`
- `model.jpg — Look 02`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `hero-car.jpg`
- `index.html`
- `model.jpg`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
