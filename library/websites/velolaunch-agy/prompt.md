# Rebuild prompt — VeloLaunch (`velolaunch-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/velolaunch-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Natural language application builder launchpad. Features full-bleed dawn mountain landscape video loop, calibrated 1560x1008 reference scale coordinate canvas, glassmorphic prompt composer card with custom chips, model selector, and vibrant orange action send circle.

## Title
VeloLaunch — Describe an app. We'll build it.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --u: min(0.06410256vw, 0.12400794vh);
  --vu: 0.09920635vh;
  --inset-top: 41;
  --inset-bottom: 74;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav
  - a: VeloLaunch → #top
  - nav .nav-links
    - a: Features → #features
    - a: Examples → #examples
    - a: Pricing → #pricing
    - a: Docs → #docs
  - button: Get Started
- main .hero
  - h1: Describe an app. We'll build it.
- footer .proof

## Fields
Keep these controls, including ids and placeholders.
- textarea placeholder='A modern fintech onboarding flow with automated KYC checks and bank statement OCR...'

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
