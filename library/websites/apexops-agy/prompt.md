# Rebuild prompt — ApexOps (`apexops-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/apexops-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous AI operations overview triptych. Features container-query (cqw/cqh) responsive coordinate scaling, warm light operational palette with safety-orange accents, 24-bar live visibility telemetry, conversational workflow prompts, and a 2D canvas converging decision-flow shader.

## Title
ApexOps — Autonomous AI Operations Overview

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --aspect: 1.5204255;
  --page: #f0f0f0;
  --surface: #ffffff;
  --panel: #fffaf6;
  --ink: #282828;
  --muted: #777777;
  --orange: #ff6900;
  --orange-soft: #ffdfca;
  --green: #4d8c35;
  --weight-regular: 400;
  --weight-body: 475;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-display: 600;
  --weight-card-title: 600;
  --weight-bold: 700;
  --card-title-size: 1.86cqw;
  --card-title-tracking: -.125cqw;
  --feature-title-size: 2.17cqw;
  --feature-title-tracking: -.09cqw;
  --cards-height: 33.81cqw;
  --cards-scale: min(1, calc(60cqh / var(--cards-height)));
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- main .viewport “ApexOps AI operations overview”
  - section .scene
    - section .cards “Product benefits”
      - article .card
        - h2: Instant Visibility
        - p: Real-time data across your operations.
      - article .card
        - p: How can I help you automate?
        - h2: Autonomous Workflows
        - p: Automate processes with Apex AI.
      - article .card
        - h2: Faster Decisions
        - p: Turn insights into action instantly.

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
