# Rebuild prompt — Ashlar (`ashlar`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/ashlar/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Civic architecture studio: Kalden glass hall, oversized Syne word, orange tickets, parametric projects.

## Title
Ashlar — Kalden and the civic hall

## Description meta
Ashlar is a fictional architecture studio. Civic halls, courtyard housing, and parametric shells. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Syne", "Avenir Next", sans-serif;
  --font-body: "Instrument Sans", "Helvetica Neue", sans-serif;
  --surface-page: #F6F4F0;
  --surface-raised: #FFFFFF;
  --surface-ink: #141311;
  --text-primary: #161514;
  --text-secondary: #6A6762;
  --text-on-photo: #F7F4EE;
  --text-on-accent: #FFFFFF;
  --border-default: #E4E0D8;
  --action-primary: #FF6A1A;
  --action-primary-deep: #E05510;
  --text-hero: clamp(3.6rem, 16vw, 12.5rem);
  --text-3xl: clamp(2.1rem, 4.4vw, 3.4rem);
  --text-2xl: clamp(1.5rem, 2.4vw, 2rem);
  --text-xl: 1.25rem;
  --text-base: 1.05rem;
  --text-sm: 0.84rem;
  --text-xs: 0.72rem;
  --leading-body: 1.58;
  --section-y: clamp(4.75rem, 10vw, 7.75rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --radius-frame: 22px;
  --radius-ticket: 8px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --lift: 0 16px 40px rgba(22, 21, 20, 0.10);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-header
  - a: Ashlar → #top
  - nav “Primary”
    - ul .nav-links
      - li: Works
      - li: Practice
      - li: Careers
      - li: Studio
- main #main
  - section .hero
    - h1: Kalden
    - p: Kalden is a civic hall on the Vela salt. Forty-eight metres of glass, night-lit from the floor, run off the roof array.
    - a: Join our team → #careers
    - a: Discover → #works
    - p: Roof array
    - p: 1.2 MW
    - dt: Type
    - dd: Civic hall
    - dt: Budget
    - dd: $48–92M
    - dt: Area
    - dd: 18,400 m²
    - dt: Occupancy
    - dd: 2027
  - section #practice .ach.wrap
    - h2: Achievements & recognition
    - p: From courtyard housing on Low Market to civic shells on the Vela salt, the work is measured in occupancy — not in boards.
    - article .frame.ach-a
    - article .frame.ach-b
  - section #works .projects.wrap
    - h2: Discover our most notable projects
    - a: Join our team → #careers
    - a: Nadir House Red Mesa$6.4M → #talk
    - a: Solstice Wing North Spit$28M → #talk
    - a: Thorn Spire Calder Head$41M → #talk
    - a: Rill Court Low Market$19M → #talk
  - section #solutions .services
    - p: Our services
    - h2: Design solutions we provide
    - p: We take a building from massing to night-cycle. Residential, civic, and urban work share one drawing set.
    - article .svc-item.is-open
      - button: 01 Residential design +
      - p: Courtyard houses and private halls. Load first, then the window wall. Nadir House on Red Mesa is the current drawing.
    - article .svc-item
      - button: 02 Urban planning +
      - p: Street, block, and civic edge. We set the grain so a hall can sit without erasing the market around it.
    - article .svc-item
      - button: 03 Civic shells +
      - p: Halls, wings, and spires. Kalden, Solstice, and Thorn share a night-cycle model and a single site architect.
    - h3: Kalden night cycle
    - ul
      - li: Floor load at 22:00
      - li: Roof array 1.2 MW
      - li: 840 seats, occupancy test
  - section .proof.wrap
    - p: A drawing set, not a pitch deck
    - p: The studio exists to put people in rooms that hold. Private residences, civic halls, and block work — each drawing names a load, a span, and a date of occupancy.
    - p: 48Built works
    - p: 15yrIn practice since 2011
  - section #studio .pricing.wrap
    - p: Retainers
    - h2: Pricing plans
    - p: Two retainers. Schematic, or design through site.
    - article .plan.is-night
      - h3: Atelier
      - p: Schematic and planning retainer
      - p: $4,900/mo
      - ul
        - li: Massing and planning set
        - li: One civic or residential shell
        - li: Weekly drawing review
        - li: Two site visits a season
      - a: Open a drawing → #talk
    - article .plan
      - h3: Chamber
      - p: Design through site
      - p: $14,900/mo
      - ul
        - li: Full design through site
        - li: Parametric model and night cycle
        - li: Weekly drawing review
        - li: Resident architect on site
      - a: Open a drawing → #talk
  - section #careers .team.wrap
    - h2: Meet the studio
    - p: Four principals on the drawing. Join if you can hold a load path in your head.
    - a: Join our team → mailto:studio@ashlar.example
    - figure
      - figcaption: Mira Voss Principal
    - figure
      - figcaption: Calen Orth Parametric
    - figure
      - figcaption: Nia Sol Site
    - figure
      - figcaption: Reed Halden Structures
  - section #talk .talk
    - a: LET’S TALK → mailto:studio@ashlar.example
    - footer .foot
      - p: Ashlar
      - nav “Footer”
        - a: Practice → #practice
        - a: Works → #works
        - a: Careers → #careers
        - a: studio@ashlar.example → mailto:studio@ashlar.example
      - p: Sample template
- button: Close
- a: Works → #works
- a: Practice → #practice
- a: Careers → #careers
- a: Studio → #studio
- a: Join our team → mailto:studio@ashlar.example
- form .search-box
  - label: Search drawings

## Images in the page
- `assets/hero.jpg — Kalden civic hall, a glass prism on the Vela salt at dusk, amber light in the undercroft.`
- `assets/ach-lumen.jpg — Lumen Fold, a white ribboned cultural hall on a wet plaza at dusk.`
- `assets/ach-orel.jpg — Orel Pavilion, a laminated timber spiral glowing over still water in a pine stand.`
- `assets/proj-nadir.jpg — Nadir House, a folded concrete residence on Red Mesa at storm light.`
- `assets/proj-solstice.jpg — Solstice Wing, a white concrete curve wrapping a glass museum facade at twilight.`
- `assets/proj-thorn.jpg — Thorn Spire, stacked petal shells of white concrete with an amber entrance.`
- `assets/proj-rill.jpg — Rill Court, circular courtyard housing in white concrete with warm windows.`
- `assets/svc-night.jpg — A ribbed civic shell in rain, amber glass undercroft reflecting on the wet plaza.`
- `assets/team-mira.jpg — Mira Voss, principal, in the studio with a glass model.`
- `assets/team-calen.jpg — Calen Orth, parametric lead, with a rolled drawing.`
- `assets/team-nia.jpg — Nia Sol, site architect, on a Kalden pour.`
- `assets/team-reed.jpg — Reed Halden, structures, reading a shop drawing.`

## Fields
Keep these controls, including ids and placeholders.
- input[search] #q name=q placeholder='Kalden, Rill, Thorn…'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/ach-lumen.jpg`
- `assets/ach-orel.jpg`
- `assets/hero.jpg`
- `assets/proj-nadir.jpg`
- `assets/proj-rill.jpg`
- `assets/proj-solstice.jpg`
- `assets/proj-thorn.jpg`
- `assets/svc-night.jpg`
- `assets/team-calen.jpg`
- `assets/team-mira.jpg`
- `assets/team-nia.jpg`
- `assets/team-reed.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
