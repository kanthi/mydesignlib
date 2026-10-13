# Rebuild prompt — Vaultra (`vaultra`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech / SaaS
- Folder: `library/websites/vaultra/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modern financial infrastructure and payment acceleration platform: luminous sky-gradient hero with connected rails console, editorial value manifesto with highlighted inline tags, 6-card metric results bento, floating real-time alerts card, atmospheric cloud intelligence banner, platform integrations dock, and split contact FAQ.

## Title
Vaultra — Modern Financial Infrastructure · Slash Friction, Boost Capital

## Description meta
Eliminate payment waste in real time — freeing up working capital you can immediately reinvest into growth, not defense.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
```css
:root {
  --bg-page: #FFFFFF;
  --bg-subtle: #F7F8FD;
  --bg-card: #FFFFFF;
  --bg-card-tint: #F3F4FE;
  
  --primary: #523EFF;
  --primary-hover: #412EE6;
  --primary-light: #7565FF;
  --primary-soft: #978BFF;
  --primary-pale: #BAB2FF;
  --primary-glow: rgba(82, 62, 255, 0.18);

  --ink-900: #0E121E;
  --ink-800: #1E2433;
  --ink-700: #333C4E;
  --ink-600: #4B5569;
  --ink-400: #8591A5;
  --ink-200: #E2E6EF;
  --ink-100: #F1F4F9;

  --accent-red: #EF4444;
  --accent-green: #10B981;
  --accent-amber: #F59E0B;
  --accent-cyan: #06B6D4;

  --border-light: rgba(14, 18, 30, 0.08);
  --border-focus: rgba(82, 62, 255, 0.35);

  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```
