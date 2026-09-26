# Rebuild prompt — Tellur (`tellur`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Education
- Folder: `library/websites/tellur/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Geological exploration and deep-time chronostratigraphy platform: interactive Three.js 3D Earth globe with purple atmosphere, counter-rotating orbit vectors, six eras timeline table, and field guides.

## Title
Tellur — Layers Hold Tales of Time

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #050508;
  --surface: #0b0c12;
  --card: #10121a;
  --purple: #522dff;
  --purple-light: #7c5cff;
  --purple-glow: rgba(82, 45, 255, 0.45);
  --text: #ffffff;
  --text-muted: #8b8ea0;
  --text-dim: #545768;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.18);
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Instrument Serif', Georgia, serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #header .header
  - a: Tellur → #
  - nav .nav-pill-container “Navigation”
    - a: Course → #course
    - a: Field Guides → #guides
    - a: Geology → #geology
    - a: Plans → #plans
    - a: Live Tour → #tour
  - a: Sign Up → #signup
- section .hero
  - h1: Layers hold tales of time
  - p: Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet.
  - a: Start Digging → #geology
- section #geology .section-eras
  - h3: Cenozoic
  - p: Grasslands, ice ages, and the rapid radiation of mammals.
  - h3: Mesozoic
  - p: Dinosaurs walk a slowly splitting supercontinent beneath greenhouse skies.
  - h3: Paleozoic
  - p: Life crawls ashore; immense ancient forests are compressed into coal seams.
  - h3: Proterozoic
  - p: Oxygen floods the atmosphere; the first complex eukaryotic cells emerge.
  - h3: Archean
  - p: Proto-continents seed themselves across a boiling, iron-rich primeval ocean.
  - h3: Hadean
  - p: A molten planet cools beneath relentless bombardment and primordial degassing.
- section #guides .section-guides
  - h2: Guides for every ground
  - a: Igneous Extrusive Basaltic Plateaus & Dykes Rapid subaerial cooling resulting in columnar hexagonal jointing and high-density volcanic glass matrices. → #guide-basalt
  - a: Sedimentary Chemical Limestone Karst Formations Millennia of carbonic acid percolation carving subterranean canyon networks and fossilized biogenic reefs. → #guide-carbonate
  - a: Metamorphic Foliated Gneiss & Mica Schist Belts Extreme directional pressure and heat recrystallizing granite into aligned tectonic banding. → #guide-schist
- footer .footer
  - a: Course Syllabus → #course
  - a: Chronostratigraphy → #geology
  - a: Privacy → #privacy

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
