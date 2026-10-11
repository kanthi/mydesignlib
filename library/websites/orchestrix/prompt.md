# Rebuild prompt — Orchestrix (`orchestrix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS / Developer
- Folder: `library/websites/orchestrix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous AI stack orchestration platform: signature floating pill nav, high-precision interactive 3D isometric architectural stack (Agents, Models, Data tiers with orbital satellites, pulsing data buses, and 3D parallax tilt), interactive live execution pipeline simulator, 4-pillar autonomous architecture bento grid, model routing & latency benchmark calculator, live telemetry metrics bar, transparent pricing matrix with billing toggle, and interactive FAQ accordion.

## Title
Orchestrix — Your whole stack, running on autopilot.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables:

```css
:root {
  --bg: #f5f7fa;
  --bg-gradient: linear-gradient(180deg, #f8fafd 0%, #f1f4f9 100%);
  --surface: #ffffff;
  --surface-subtle: #f8fafc;
  --surface-border: #e2e8f0;
  --surface-border-subtle: #edf2f7;
  --ink-950: #0d1120;
  --ink-800: #1e293b;
  --ink-600: #475569;
  --ink-400: #94a3b8;
  --ink-300: #cbd5e1;
  --blue-600: #2b41f7;
  --blue-700: #1d33d8;
  --blue-500: #3b82f6;
  --blue-400: #60a5fa;
  --blue-100: #dbeafe;
  --blue-50: #eff6ff;
  --emerald-500: #10b981;
  --emerald-50: #ecfdf5;
  --amber-500: #f59e0b;
  --indigo-500: #6366f1;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.05);
  --shadow-card: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
  --shadow-nav: 0 12px 36px -8px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02);
  --shadow-btn: 0 12px 28px -4px rgba(43, 65, 247, 0.42);
  --shadow-float: 0 25px 50px -12px rgba(15, 23, 42, 0.12);
}
```
