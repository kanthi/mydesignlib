# Rebuild prompt — Voidtrace (`voidtrace`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Cybersecurity / Privacy / Developer
- Folder: `library/websites/voidtrace/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Security software and zero-footprint privacy infrastructure: monumental condensed typography, warm sage/parchment ground, interactive footprint wiper CLI terminal, four-vector forensic erasure bento, threat matrix, and signature chromatic risograph landscape footer with edge-to-edge wordmark.

## Title
Voidtrace — Security Software That Erases Your Digital Footprint

## Description meta
Autonomous zero-footprint security software. Kernel-level memory vaporization, RAM-only route switching, and forensic residue purging.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
```css
:root {
  --bg-ground: #E2E8DE;
  --bg-surface: #EDF2EA;
  --bg-surface-elevated: #FFFFFF;
  --bg-card: #FFFFFF;
  
  --ink-900: #101413;
  --ink-800: #1D2321;
  --ink-700: #303835;
  --ink-500: #5C6763;
  --ink-400: #889590;
  --ink-200: #CBD5CD;
  --ink-100: #E6EDE4;

  --accent-amber: #D96A25;
  --accent-cyan: #265C4B;
  --accent-lime: #10B981;
  --accent-red: #EF4444;

  --border-light: rgba(16, 20, 19, 0.12);
  --border-dark: #101413;

  --font-display: "Anton", "Barlow Condensed", -apple-system, sans-serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```
