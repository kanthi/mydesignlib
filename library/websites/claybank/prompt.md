# Rebuild prompt — Claybank (`claybank`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/claybank/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Design-led building company identity — pale blue and brick red, dual wordmark, brick-wave pattern, editorial frames, project grid.

## Title
Claybank — Building company

## Description meta
Design-led residential building company. Brick, river, and craft in contemporary homes. Fictional identity sample.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --blue: #c5d9dc;
  --blue-deep: #a8c4c8;
  --brick: #9c3a2e;
  --brick-deep: #7e2e24;
  --brick-soft: #b85a4c;
  --cream: #f3efe8;
  --ink: #2a1814;
  --white: #f7f4ef;
  --serif: "Fraunces", Georgia, "Times New Roman", serif;
  --sans: "Hanken Grotesk", system-ui, -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #nav .nav
  - a: Clay → #top
  - nav .nav-links
    - a: About → #about
    - a: Projects → #projects
    - a: Capabilities → #capabilities
    - a: Contact → #contact
  - button: Menu
  - a: Bank → #top
- main #top
  - section .hero
    - h1: In-house craftsmanship and a network of trusted specialist partners ensure every detail of your design is realised with precision.
  - section .pattern-band.pattern-wave.tile “Brick wave pattern”
  - section #about
    - p: About
    - h2: A design-led building company for contemporary homes
    - p: Claybank pairs construction craft with commercial clarity. We build for people who care about architectural detail — homes that sit lightly in the landscape and hold up under close looking. The identity of the work is brick and water: sturdy forms, fluid process.
    - p: Before a single sentence is read, the brand should already feel intentional — patterned like brick courses that bend with a river’s patience. Rigid units. Fluid movement. Built to flex from site boards to publications without losing itself.
  - section #projects .projects
    - p: Projects
    - h2: Selected work
    - p: New builds and careful extensions — each one a threshold between landscape and interior.
    - a: Meadow Barn New build · 2025 → #contact
    - a: Estuary House Extension · 2024 → #contact
    - a: Clay Court New build · 2024 → #contact
  - section .editorial “Identity applications”
    - article .print.a
    - article .print.b
    - article .print.c
    - p: The pattern scales from a quiet edge detail to a dense field — framing imagery like a plan or elevation, or opening like a die-cut threshold into the home.
  - section #capabilities
    - p: Capabilities
    - h2: From groundworks to the last fitting
    - article .cap
      - h3: New build homes
      - p: Full delivery of contemporary residential projects with design intent held through every trade package.
    - article .cap
      - h3: Extensions & renovations
      - p: Careful additions that read as part of the original idea — not a bolted-on afterthought.
    - article .cap
      - h3: Specialist coordination
      - p: A trusted network for joinery, brickwork, glass, and landscape — sequenced for precision, not haste.
    - article .cap
      - h3: Client partnership
      - p: Clear commercial focus with room for craft. You always know the next decision and why it matters.
  - section #contact .contact
    - p: Contact
    - h2: Let’s talk about your site
    - p: Tell us about the plot, the drawings, or the idea that isn’t drawn yet. We work with architects, designers, and private clients.
    - a: hello@claybank.example → mailto:hello@claybank.example
    - p: Building company · Sample template Riverside counties
- footer

## Images in the page
- `house-1.jpg`
- `interior-2.jpg`
- `house-2.jpg`
- `house-1.jpg — Contemporary rural house in open landscape`
- `house-1.jpg — Meadow Barn house exterior`
- `interior-1.jpg — Interior living space with countryside view`
- `house-2.jpg — Brick corner and window detail`
- `interior-2.jpg — Built-in shelf niche interior detail`
- `interior-2.jpg — Interior framed by brick pattern`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `house-1.jpg`
- `house-2.jpg`
- `index.html`
- `interior-1.jpg`
- `interior-2.jpg`
- `pattern.jpg`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
