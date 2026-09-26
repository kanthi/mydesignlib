# Rebuild prompt — Arvok (`arvok`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Fintech
- Folder: `library/brands/arvok/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Fintech identity system: asymmetric apex mark with transit bar and spark, 135° ascent gradient, tokens, type, and CSS-built applications.

## Title
Arvok — Brand Identity System

## Description meta
Arvok is a fictional fintech brand identity: apex mark, ascent gradient, tokens, typography and applications. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --navy:#060B2E; --cobalt:#1C4DF1; --azure:#3E8BFC; --cyan:#3AE0D8;
  --ice:#F3F6FF; --white:#fff; --ink:#0A1030;
  --grad:linear-gradient(135deg,#1C4DF1 0%,#0A1A5C 48%,#060B2E 72%,#0E5F74 110%,#3AE0D8 135%);
  --grot:'Space Grotesk',sans-serif; --serif:'Instrument Serif',serif; --mono:'IBM Plex Mono',monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .wrap
  - nav .nav “Primary”
    - a: arvok → #top
    - a: Construction → #construction
    - a: Color → #color
    - a: Type → #type
    - a: Applications → #applications
    - a: Get assets → #downloads
- main #top
  - section .wrap
    - h1: arvok
    - p: Built for your next phase of ascent.
  - section #construction .block.wrap
    - p: 01 — The mark
    - h2: The Apex Transit.
    - p: Ambition is the climb; momentum is the line that carries you through. An asymmetric peak crossed by a rounded transit bar, sparked above the summit.
    - p: FIG. 01 — CONSTRUCTION / 8PX GRID
    - ul .callouts
      - li: ALeft blade — 64° ascent, load-bearing edge
      - li: BTransit bar — 14px rounded, overshoots left
      - li: CSpark — detached triangle, one unit above peak
    - p: FIG. 02 — CLEARSPACE = 1 SPARK
    - p: FIG. 03 — MINIMUM SIZE
    - figure
      - figcaption: 64px print
    - figure
      - figcaption: 32px UI
    - figure
      - figcaption: 16px favicon
  - section #color .block.wrap
    - p: 02 — Color
    - h2: The ascent gradient.
    - p: Light travels lower-left to upper-right at 135° — from institutional navy, through momentum cobalt, to signal cyan.
    - p: #060B2E · depth
    - p: #1C4DF1 · core
    - p: #3E8BFC · hover
    - p: #3AE0D8 · spark
    - p: #F3F6FF · ground
  - section #type .block.wrap
    - p: 03 — Typography
    - h2: Geometric voice.
    - p: DISPLAY — SPACE GROTESK 700
    - p: Climb into your next phase.
    - p: AaBbCc 0123456789 → −12% tracking on headlines
    - p: ACCENT — INSTRUMENT SERIF ITALIC
    - p: ascent, with composure.
    - p: Pull-quotes & tagline at large sizes only
  - section #applications .block.wrap
    - p: 04 — Applications
    - h2: Out in the world.
    - p: Every touchpoint is rebuilt in pure CSS/SVG — no photography, no stock, all system.
    - h4: GROWTH INFRA FOR AMBITIOUS COMPANIES
    - p: Capital, tooling and guidance — one system. arvok.example
    - p: 418 Meridian Ave, Suite 9 New Lys, NY 10013 +1 (555) 018-4400 dana@arvok.example
    - p: ARVOK — GROWTH INFRASTRUCTURE
    - h3: Built for your next phase of ascent.
    - p: One relationship for capital, tooling, and counsel. Arvok underwrites ambitious companies with systems that move at the speed of the climb — reporting you can read, partners you can reach, momentum you can keep.
    - p: ARVOK.EXAMPLE · EST. 2026 · SAMPLE IDENTITY
    - p: White / Gradient
    - p: White / Navy
    - p: Navy / White
    - p: Cobalt / Ice
    - a: ↓ logo-mark.svg → assets/logo-mark.svg
    - a: ↓ logo-primary.svg → assets/logo-primary.svg
- footer .wrap
  - a: Back to top ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo-mark.svg`
- `assets/logo-primary.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
