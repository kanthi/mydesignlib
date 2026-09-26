# Rebuild prompt — Thought (`thought`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/thought/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Electric minimalist brand identity system — light slate blue (#7366FF), pitch black, and white palette, quadfoil star emblem, digital billboard display, logo construction grid, 3-variant business cards, specs card, mobile splash screen, tote bag, and depth card stack.

## Title
Thought — Brand Identity System

## Description meta
Thought brand identity template. Light slate blue, pitch black, and white. Quadfoil star emblem, logo construction grid, business cards, collateral.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-blue: #7366FF;
  --surface-blue-hover: #5E50EC;
  /* Light Theme Defaults */
  --surface-page: #F2F3F7;
  --surface-card: #FFFFFF;
  --surface-card-subtle: #E8EAEF;
  --border-color: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(115, 102, 255, 0.4);
  --text-primary: #0F0F14;
  --text-muted: #64647A;
  --text-on-blue: #FFFFFF;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.06);
  --dur: 200ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - nav .header-nav
    - a: Collateral Grid → #specimens
    - a: Interactive Specimen → #tester
    - a: Design Doc → DESIGN.md
  - button: ☀️ Light
  - button: Copy Brand Kit
- section .hero
  - h1: Thought Identity Specimen
  - p: Editorial, high-precision visual identity system powered by electric slate blue (#7366FF), pure white, and quadfoil geometry.
- main #specimens .grid-container
  - h4: Typeface
  - h3: Thought
- section #tester .section-tester
  - h2: Interactive Brand Tester
  - p: Test the Thought emblem and wordmark on different brand surfaces.
  - h2: Thought
- footer .footer

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
