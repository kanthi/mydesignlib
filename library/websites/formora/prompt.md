# Rebuild prompt — Formora (`formora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/formora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Creative workspace hero — warm atelier with cube character family, serif headline, orange CTAs, personas and product sections.

## Title
Formora — Everyone is on Formora

## Description meta
Creative workspace where people think, create, and build. Fictional product sample with original hero art.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --ink: #1c1916;
  --muted: #6b635a;
  --cream: #f3ebe0;
  --paper: #faf6f0;
  --orange: #e36a3a;
  --orange-deep: #cf5528;
  --line: rgba(28, 25, 22, 0.1);
  --serif: "Instrument Serif", Georgia, serif;
  --sans: Inter, system-ui, -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #top .hero
  - a: Formora → #top
  - h1: Everyone is on Formora.
  - p: From ambitious ideas to production-ready work — where people come to think, create, and build.
  - a: Get started → #cta
  - a: See what’s possible → #family
- section #family .family
  - p: The Formora family
  - h2: A crew for every kind of maker
  - p: Researchers, builders, storytellers, and operators — same canvas, different crafts.
  - article .persona
    - h3: The scholars
    - p: Capture research, notes, and references without losing the plot.
  - article .persona
    - h3: The explorers
    - p: Map possibilities, then turn discoveries into shippable work.
  - article .persona
    - h3: The craftspeople
    - p: Design, write, and compose with tools that stay out of the way.
  - article .persona
    - h3: The storytellers
    - p: Ship narratives, demos, and launches with the whole cast in sync.
- section #product .features
  - p: Platform
  - h2: Think. Create. Build.
  - p: One workspace from first sketch to production — calm, collaborative, fast.
  - article .feat
    - h3: Shared atelier
    - p: Canvases, docs, and builds side by side — no more tab archaeology.
  - article .feat
    - h3: Production-ready
    - p: Export, review, and handoff paths that respect real shipping constraints.
  - article .feat
    - h3: Human by design
    - p: AI assists without erasing authorship. You stay in the director’s chair.
- section #cta .cta
  - h2: Join the studio
  - p: Start free. Invite your crew when you’re ready.
  - a: Get started → mailto:hello@formora.example
  - a: Book a walkthrough → mailto:hello@formora.example?subject=Demo
- p: Sample template with original AI hero art. Typefaces: Instrument Serif & Inter (OFL). Motion is pure CSS — no proprietary Framer runtime required.
- footer
  - a: hello@formora.example → mailto:hello@formora.example
- button: Close ✕
- a: Family → #family
- a: Product → #product
- a: Get started → #cta
- a: Contact → mailto:hello@formora.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `hero.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
