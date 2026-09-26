# Rebuild prompt — Mercy Choir (`mercy-choir`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/mercy-choir/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Brutalist-romantic brand-direction studio with tilted Didone headlines, marble-choir SVG statuary, and a midnight-blue floral manifesto.

## Title
Mercy Choir — E-commerce & Brand Direction for a New Era

## Description meta
Mercy Choir is a fictional brand-direction studio: cult-like digital flagships, brand concepts and communication strategies. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,700;6..96,900&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --bone:#D8D5D0; --bone2:#CFCCC6; --ink:#161412; --paper:#F2EFE9;
  --abyss:#0C2A49; --abyss2:#123A61; --mist:#DCE9F5; --blush:#E9CDBD;
  --disp:'Bodoni Moda',serif; --serif:'Instrument Serif',serif; --grot:'Space Grotesk',sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .topbar
  - a: MERCY CHOIR → #top
  - a: FOR A TOUCH OF MERCY ↗ → #contact
- main #top
  - section .hero
    - p: The times
    - p: They are a-Changin‘
    - h1: (E)Commerce & Brand Direction for a new era. Driven by pragmatism. Guided by voices in the roaring ‘20s.
    - p: SCROLL
  - section .abyss
    - p: WE MIX PRAGMATIC THINKING AND ROMANTICISM TO DELIVER CULT-LIKE DIGITAL FLAGSHIPS, BRAND CONCEPTS & COMMUNICATION STRATEGIES.
    - p: (a) — Study of motion, halftone on black. (b) — Choir mark, studio glyph.
    - p: ROMANCE IS A STRATEGY. WE DIRECT BRANDS LIKE THEATRE — EVERY PIXEL ON STAGE.
    - a: VIEW THE WORK → #work
  - section #work .caps
    - p: 01 — WHAT WE DO
    - h2: Three crafts, one stage.
    - h3: Digital Flagships
    - p: Cult-like e-commerce and marketing sites — art-directed, motion-rich, built to convert the faithful.
    - a: ENQUIRE → → #contact
    - h3: Brand Concepts
    - p: Naming, identity and verbal worlds for launches and rebirths. Pragmatic systems, romantic surfaces.
    - a: ENQUIRE → → #contact
    - h3: Comms Strategies
    - p: Campaigns and content choreography across the roaring ‘20s feed — timed like opening nights.
    - a: ENQUIRE → → #contact
  - section .index
    - p: 02 — SELECTED ENGAGEMENTS
    - h2: Recent nights at the theatre.
  - section .voices
    - p: 03 — VOICES
    - blockquote: “They direct a brand the way a conductor directs a choir — every voice louder together.”
  - section #contact .final
    - p: 04 — CURTAIN CALL
    - h2: For a touch of mercy.
    - a: BOOK AN OPENING NIGHT → #top
    - p: hello@mercychoir.example · Antwerp & elsewhere
- footer
  - a: BACK TO TOP ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
