# Rebuild prompt — Aevum (`aevum`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS / Developer
- Folder: `library/websites/aevum/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cinematic dark luxury AI automation platform: animated preloader with 0-100% counter, orbiting beacon, and iris-reveal transition, floating frosted glass pill navigation, monumental 3D carved stone aperture sculpture with cursor parallax, statement metrics with animated count-up bars, interactive rotary radar dial breakdown for legacy integration friction, 3x3 isometric glass integration hub with glowing active states, 4-quadrant AI Agent operator bento with skeumorphic interactive widgets, template marketplace grid with corner-bracket triggers, expandable FAQ accordion, and closing CTA with enterprise security badges.

## Title
Aevum — Turn complex workflows into autonomous operations.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables:

```css
:root {
  --bg-void: #070709;
  --bg-surface: #0e1015;
  --bg-surface-elevated: #151820;
  --bg-glass: rgba(18, 20, 26, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glass: rgba(255, 255, 255, 0.14);
  --border-active: rgba(56, 189, 248, 0.5);
  --ink-primary: #ffffff;
  --ink-secondary: #8e929b;
  --ink-dim: #5c606b;
  --accent-cyan: #38bdf8;
  --accent-emerald: #10b981;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```
