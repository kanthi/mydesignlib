# Rebuild prompt — Lanehold (`lanehold`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Services
- Folder: `library/brands/lanehold/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Freight identity — lime theses on charcoal, clasp mark, ribbon bands, forest lanes.

## Title
Lanehold — Brand identity system

## Description meta
Fictional freight identity. Lime theses on charcoal, clasp mark, ribbon bands, forest lanes.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-ink: #0C1612;
  --surface-deep: #0F2E24;
  --surface-forest: #145C3C;
  --surface-lime: #3DDB6A;
  --surface-mist: #C5D4CC;
  --surface-paper: #F2F4F2;
  --text-primary: #0C1612;
  --text-on-dark: #E8F5EC;
  --font-display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "IBM Plex Sans", system-ui, sans-serif;
  --text-display: clamp(2.2rem, 5vw, 3.6rem);
  --text-slide: clamp(1.6rem, 3.2vw, 2.4rem);
  --text-base: 1rem;
  --text-xs: 0.72rem;
  --section-y: clamp(2.5rem, 5vw, 4rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.6rem);
  --radius: 4px;
  --deck-gap: 12px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --wrap: min(1120px, 100% - 1.5rem); --board: min(1180px, 100% - 0.9rem); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Lanehold → #top
  - nav .nav-links “Primary”
    - a: Definition → #definition
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Photo → #photo
    - a: Apply → #apply
  - a: Read the theses → #definition
  - a: Request the kit → mailto:desk@lanehold.example
- main
  - section .intro
    - p: Brand identity system · freight desk
    - h1: Words first. Then the clasp.
    - p: Lanehold is a fictional transporter and forwarder in one desk. The written brand was finished before the mark existed.
  - section #definition .deck-section
    - article .slide.on-ink.cover
      - h2: Brand Guidelines
      - p: Issued for the desk · lanehold.example
    - article .slide.on-ink
      - ol .toc
        - li: 01 Definition of the brand ›
        - li: 02 Clasp mark ›
        - li: 03 Color ›
        - li: 04 Type ›
        - li: 05 Photo ›
        - li: 06 Applications ›
    - article .slide.on-deep.divider
      - h3: 01. Definition of the brand
    - article .slide.on-ink.thesis
      - h3: The lane holds. The load moves.
    - article .slide.on-forest.mission
      - h3: We run the truck and the paper from one desk.
      - p: A transporter’s yard and a forwarder’s booking share a number. We open a lane, hold it, and close it — the load is not handed between three vendors at the gate.
    - article .slide.on-ink.thesis
      - h3: Your cargo meets a quiet lane.
    - article .slide.on-forest.idea
      - h3: The hold between modes
      - ul
        - li: between yard and gate
        - li: between truck and booking
        - li: between forest and freight
        - li: between clock and weather
        - li: between shipper and dock
    - article .slide.on-paper.values
      - article
        - h4: Hold the lane
        - p: We do not drop a booking to chase a prettier one.
      - article
        - h4: One desk
        - p: Transporter and forwarder share a number, not a ticket queue.
      - article
        - h4: Forest first
        - p: Fewer empty miles. A poster is not a climate plan.
      - article
        - h4: Fair weight
        - p: The quote is the invoice. Weather is not a surprise.
  - section #mark .system
    - p: 02 · Mark
    - h2: Two arcs that couple
    - p: The clasp is a hold, not a wheel. Two arcs meet the way a truck meets a booking — they lock, they do not spin.
    - h3: Clearance
    - ul
      - li: Keep a clasp-width of empty field on every side.
      - li: Lime on ink, ink on lime, ink on paper. Never lime on forest for small sizes.
      - li: Do not add a fourth petal, a wheel hub, or a road stripe through the gap.
      - li: Do not outline the mark. Do not drop a shadow.
  - section #color .system.alt
    - p: 03 · Color
    - h2: Lime is type. Forest is a field.
    - p: Lime never fills a page. It writes the thesis, paints the ribbon, and sits as the mark. Forest holds the mission. Ink holds the cover.
  - section #type .system
    - p: 04 · Type
    - h2: Condensed theses. Quiet body.
    - p: Barlow Condensed carries every all-caps line. IBM Plex Sans explains once, then stops. Tracking on theses is 0.02em — not a shout.
    - article .type-card.on-ink
      - p: Display · Barlow Condensed 700
      - p: The lane holds. The load moves.
    - article .type-card
      - p: Body · IBM Plex Sans 400
      - p: A lane is opened, held, and closed from one desk. Measure stays under fifty-two characters. We do not write “seamless logistics.”
  - section #photo .system.alt
    - p: 05 · Photo
    - h2: Lanes, yards, canopy
    - p: Shoot the hold: wet yards at dusk, empty highways through trees, overhead canopy. No stock smiles. People, if present, are working.
    - figure .photo.tall
      - figcaption: Lane
    - figure .photo
      - figcaption: Canopy
    - figure .photo
      - figcaption: Yard
  - section #apply .system
    - p: 06 · Applications
    - h2: The clasp rides the lane
    - p: Ribbon is decoration, not an icon. Put the lockup on ink, lime, or a veiled photograph. Leave the trailer quiet.
    - article .app
    - article .app.billboard
      - p: Your cargo meets a quiet lane.
    - article .phone “Lanehold phone mock”
      - h3: Open a lane from the desk.
    - article .app
    - article .app
- footer
  - a: Lanehold → #top
  - p: Sample template · desk@lanehold.example · fictional freight identity

## Images in the page
- `lane.jpg — Empty highway cutting through forest at dusk`
- `canopy.jpg — Overhead pine canopy with morning mist`
- `yard.jpg — Container stacks in a mountain freight yard at sunset`
- `truck.jpg — Forest-green truck at a dusk yard`
- `kit.jpg — Forest-green tote and cap on concrete`
- `hold.jpg — Empty warehouse aisle under green light`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `canopy.jpg`
- `hold.jpg`
- `index.html`
- `kit.jpg`
- `lane.jpg`
- `preview.jpg`
- `truck.jpg`
- `yard.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
