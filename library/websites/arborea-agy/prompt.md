# Rebuild prompt — Arborea (`arborea-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/arborea-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Biomorphic AI cognitive reasoning engine. Features a sunlit glasshouse rainforest video background, frosted glass prompt console with simulated voice/attachment inputs, staged entrance choreography, and real-time reasoning telemetry.

## Title
Arborea — The Thinking Engine Shaped For What Counts

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --ink: #111111;
  --muted: #4e5952;
  --card: rgba(255, 255, 255, 0.46);
  --shell: 1120px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- section .hero
  - header .nav
    - a: Arborea → #
    - nav #site-menu .nav__nav “Main Navigation”
      - ul .nav__links
        - li: API & Docs
        - li: Architecture
        - li: Benchmarks
        - li: Research
      - a: Request Access → #request
    - button: Request Access
  - h1: The thinking engine shaped for what counts.
  - p: Arborea is an AI system that reasons through every problem carefully before answering. Plug into the API, launch in minutes, and ship reasoning you can really rely on.
  - form #reasoning-form .prompt.rise
    - label: Ask Arborea
- button: ✕
- h3: Request Arborea 3.0 API Access
- p: Deploy production-grade reasoning infrastructure with sub-12ms token latency and formal logic verification.
- form #access-form
  - label: Work Email
  - label: Intended Application
  - option: Autonomous Agent Tool Use
  - option: High-Stakes Mathematical Synthesis
  - option: Biotech & Life Science Deduction
  - option: Enterprise Codebase Analysis
  - button: Generate API Key →

## Fields
Keep these controls, including ids and placeholders.
- textarea #prompt-input placeholder='How do rainforests preserve complex cognitive equilibrium?'
- input[email] #access-email placeholder='engineer@company.com'
- select #access-usecase

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/poster.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
