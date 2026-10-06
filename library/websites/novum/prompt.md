# Rebuild prompt — Novum (`novum`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Education
- Folder: `library/websites/novum/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Swiss poster university template rooted in the International Typographic Style: ultra-bold neo-grotesque typography, rigid hairline grid systems, stepped architectural photo mosaic, live WebGL liquid wave refraction shader, rector's welcome, modular faculty curriculum columns, and panoramic faculty directory.

## Title
Novum — University of Design, Science and Society

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-white: #FFFFFF;
  --bg-black: #080808;
  --bg-card: #F4F4F3;
  --text-black: #000000;
  --text-white: #FFFFFF;
  --text-muted: #666666;
  --border-black: #000000;
  --border-light: #E5E5E5;
  --font-swiss: 'Space Grotesk', -apple-system, sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .swiss-nav
  - a: NOVUM → #
  - nav
    - ul .nav-menu
      - li: Programmes
      - li: Admissions
      - li: Research
      - li: News
      - li: About
      - li: Overview
  - a: Apply → #programmes
- section .hero-mosaic
- section .meta-bar
  - a: Find a programme → #programmes
  - a: Open days → #about
- section .brand-masthead
  - h1: NOVUM
- section #quote .dark-rector-section
  - blockquote: “We do not teach subjects. We teach people to make things that last.”
- section #programmes .programmes-section
  - p: Bachelor's, Master's and Doctoral programmes across four faculties. Every programme is taught in English, in studio groups of twenty or fewer, with a project for a real client in the final year.
  - button: Bachelor's
  - button: Master's
  - button: Doctorate
  - button: Short courses
  - h3: Architecture
  - ul .faculty-course-list
    - li: Spatial Systems 180 ECTS
    - li: Tectonic Structures 180 ECTS
    - li: Urban Morphology 180 ECTS
  - h3: Visual Communication
  - ul .faculty-course-list
    - li: Swiss Typographic Systems 120 ECTS
    - li: Editorial Form & Print 120 ECTS
    - li: Algorithmic Design 120 ECTS
  - h3: Economics
  - ul .faculty-course-list
    - li: Public Value Design 180 ECTS
    - li: Societal Infrastructure 180 ECTS
    - li: Platform Governance 180 ECTS
  - h3: Computer Science
  - ul .faculty-course-list
    - li: Interactive Graphics & WebGL 120 ECTS
    - li: Autonomous Machine Agents 120 ECTS
    - li: Cryptographic Protocols 120 ECTS
- section #people .people-section
  - h2: PEOPLE
  - p: The people who run Novum, teach its studios and answer your questions. Every one of them reads their own email.
  - a: anna.lindgren@novum.example → mailto:anna.lindgren@novum.example
  - a: jonas.holm@novum.example → mailto:jonas.holm@novum.example
  - a: ingrid.solberg@novum.example → mailto:ingrid.solberg@novum.example
  - a: marco.bellini@novum.example → mailto:marco.bellini@novum.example
  - a: elena.navarro@novum.example → mailto:elena.navarro@novum.example
  - a: freja.lindqvist@novum.example → mailto:freja.lindqvist@novum.example
  - a: sofia.herrera@novum.example → mailto:sofia.herrera@novum.example
  - a: matteo.ricci@novum.example → mailto:matteo.ricci@novum.example
  - a: nils.berg@novum.example → mailto:nils.berg@novum.example
- footer .swiss-footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
