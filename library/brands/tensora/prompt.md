# Rebuild prompt — Tensora (`tensora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Developer
- Folder: `library/brands/tensora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Efficient AI model architecture brand system: interlocking tensor mark, radiant fuchsia-rose aura, architectural billboard, stationery suite, and mobile runtime UI.

## Title
Tensora — Brand Identity & Design System

## Description meta
Visual identity system for Tensora: the architecture of efficient AI. Logomark geometry, radiant fuchsia aura, color tokens, and applications.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #fbf8f5;
  --bg-surface: #ffffff;
  --bg-warm: #f6efe8;
  --ink: #140e1b;
  --muted: #6e6277;
  --faint: #a59baf;
  --border: rgba(20, 14, 27, 0.08);
  --border-strong: rgba(20, 14, 27, 0.16);
  --fuchsia: #e11d48;
  --rose: #f472b6;
  --lilac: #a855f7;
  --champagne: #fff9f5;
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --shadow-sm: 0 4px 16px rgba(20, 14, 27, 0.04);
  --shadow-lg: 0 20px 45px rgba(20, 14, 27, 0.08);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: Tensora → #
  - nav .nav-links
    - a: Exhibits → #applications
    - a: Logo Stack → #logostack
    - a: Color Tokens → #palette
    - a: Typography → #typography
    - a: Construction → #geometry
  - button: Download Kit
- main
  - h1: The Architecture of Efficient AI
  - p: Visual identity system for Tensora. Engineering autonomous tensor optimization for leaner, faster models through mathematical clarity and luminous warmth.
  - a: View Application Exhibits ↓ → #applications
  - button: Request Vector Package
  - section #applications
    - h2: Brand Applications & Spatial Design
    - h3: Master Brand Aura & Lockup
    - p: The primary mark situated on the grain-diffused fuchsia, rose, and lilac ambient aura field.
    - h2: The Architecture of efficient AI
    - p: Continuously optimize model architectures in real time
    - h3: Monumental Outdoor Facade
    - p: Large-scale architectural installation communicating the foundational efficiency thesis.
    - h3: Embossed Cardstock & Identity
    - p: 600gsm cotton cardstock with blind debossed tensor patterns and soft gradient edges.
    - h3: Intelligence Refined.
    - p: Autonomous optimization for leaner, faster models.
    - h3: Typographic & Geometry Card
    - p: Dual-field brand messaging combining high-contrast serif/sans typography with macro vector geometry.
    - h5: Optimize Model
    - p: Smarter weights, greater efficiency
    - h3: Mobile Optimization Console
    - p: Interface ergonomics applying the radiant gradient for high-priority telemetry triggers.
    - h3: Modular Campaign Posters
    - p: Wild-posting campaign communicating model distillation through concise, uncompromising axioms.
  - section #logostack
    - h2: The 4-Tier Logo Stack
    - h3: 01. Primary Lockup
    - p: For site headers, billboards, keynote displays, and master brand packaging.
    - h3: 02. Compact Header
    - p: Reduced horizontal alignment for application toolbars and email signatures.
    - h3: 03. Standalone Glyph
    - p: App icon launcher, social avatars, hardware engraving, and favicon marks.
    - h3: 04. 16px Favicon
    - p: Optically bolstered single-color stroke for pixel-scale browser tabs.
  - section #palette
    - h2: Color Palette & Tokens
  - section #typography
    - h2: Typeface Specifications
    - p: Geometric, contemporary, and balanced. Used for hero headlines, billboard display statements, and the primary brand wordmark.
    - p: Engineered for dense technical UI, developer documentation, and mathematical optimization metrics.
  - section #geometry
    - h2: The Interlocking Tensor Lattice
    - p: The logomark represents mathematical tensor dimensions reducing toward high-efficiency nodes. Four quadrants rotate symmetrically around a central void with 90° rounded vertices, expressing continuous data flow without friction.
    - ul
      - li: ✦ Clear Space: Minimum $1X$ padding equal to 50% mark radius
      - li: ✦ Stroke Width: 8px vector weight on 100×100 grid matrix
      - li: ✦ Vertex Radius: Continuous G2 curvature at corners
- button: ×
- h3: Download Tensora Kit
- p: Vector assets in SVG, EPS, PDF format and design token exports.
- a: Download Vector Mark (SVG) → data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23F472B6'/%3E%3Cstop offset='50%25' stop-color='%23E11D48'/%3E%3Cstop offset='100%25' stop-color='%23A855F7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke='url(%23g)' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M50 20 V42 H28'/%3E%3Cpath d='M80 50 H58 V28'/%3E%3Cpath d='M50 80 V58 H72'/%3E%3Cpath d='M20 50 H42 V72'/%3E%3C/g%3E%3C/svg%3E
- button: Copy Design Tokens JSON
- p: Sample brand specification · personal static archive
- footer
  - p: Autonomous AI model architecture & continuous tensor optimization. Visual identity system and design tokens guide.
  - h4: Exhibits
  - ul
    - li: Radiant Aura
    - li: Billboard Facade
    - li: Stationery Cards
    - li: Mobile Dashboard
  - h4: Specifications
  - ul
    - li: 4-Tier Logo Stack
    - li: Color Tokens
    - li: Typography
    - li: Lattice Construction
  - h4: Assets
  - ul
    - li: Vector SVG
    - li: Print EPS
    - li: Figma Kit
    - li: Tokens JSON

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
