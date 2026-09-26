# Rebuild prompt — Formwork (`formwork`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/formwork/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Hale Quay contractor — orange ribbon, huge construction display, crew plates, yard walk.

## Title
Formwork — Construction building, Hale Quay

## Description meta
Formwork is a mid-size building contractor in Hale Quay. Book a walk of the yard.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Public+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "Public Sans", "Helvetica Neue", sans-serif;
  --font-label: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #ffffff;
  --surface-mist: #f5f5f6;
  --surface-ink: #111111;
  --text-primary: #121212;
  --text-secondary: #5a5a62;
  --text-on-blaze: #ffffff;
  --text-on-ink: #f4f4f2;
  --border-default: #e6e6e8;
  --action-primary: #f15a22;
  --action-primary-deep: #d44814;
  --board: #d5d6d9;
  --text-display: clamp(3.15rem, 12vw, 7.4rem);
  --text-3xl: clamp(2rem, 4vw, 2.85rem);
  --text-xl: 1.2rem;
  --text-base: 1.02rem;
  --text-sm: 0.82rem;
  --text-xs: 0.7rem;
  --leading-body: 1.58;
  --section-y: clamp(4.25rem, 8vw, 6.75rem);
  --wrap: min(1140px, 100% - 2.5rem);
  --radius: 4px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --lift: 0 12px 28px rgba(18, 18, 18, 0.08);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to yard → #main
- header .header
  - a: Formwork → #top
  - button: Menu
  - nav .nav-desk “Primary”
    - a: Yard → #top
    - a: Trades → #trades
    - a: About → #about
    - a: Why us → #why
    - a: Crew → #crew
    - a: Notes → #notes
  - a: Desk any time 020 7946 0042 → tel:+442079460042
  - a: Book a walk → #desk
- nav #drawer .drawer “Mobile”
  - a: Trades → #trades
  - a: About → #about
  - a: Why us → #why
  - a: Crew → #crew
  - a: Notes → #notes
  - a: Book a walk → #desk
- main #main
  - section .hero
    - h1: Construction Building
    - p: We walk every slab before we sign the programme. Finish and safety on the same pass.
    - a: Book a walk → #desk
  - section #trades .section.section-mist
    - p: Our trades
    - h2: Expert construction services for every need
    - article .svc
      - h3: Building construction
      - p: Cores, decks, and envelopes for mid-rise work on the quay and inland lots.
    - article .svc.is-blaze
      - h3: Project planning
      - p: One book for packages, walks, and hold points — so the yard does not invent the day.
    - article .svc
      - h3: General contracting
      - p: One desk from first knock-through to keys. Trades coordinated, not stacked.
    - article .svc
      - h3: Industrial construction
      - p: Sheds, plant bases, and long-span steel for yards that have to keep working.
    - a: See the yard → #desk
  - section #about .section
    - p: About us
    - h2: Crafting quality construction with integrity.
    - p: Formwork is a mid-size contractor on Hale Quay. We take jobs we can stand on after handover — new frames, fit-outs, and industrial shells.
    - ul .checks
      - li: From first walk to keys — one programme
      - li: Neighbours treated as neighbours
      - li: Quality sits in the pour, not a slide
      - li: A yard that still trains on the tools
    - a: Meet the crew → #crew
  - section #why .section.section-mist
    - p: Why choose us
    - h2: Why we are the right choice
    - article .tile.tile-blaze
      - h3: Expertise and experience
      - p: Fifteen years of Hale Quay weather, neighbours, and pours. The book is still open on site.
    - article .tile.tile-mist
      - h3: Commitment to quality
      - p: Hold points are written. If a deck is not true, we do not cover it and hope.
    - article .tile.tile-mist
      - h3: Inventive methods
      - p: Formwork, falsework, and sequence chosen for this plot — not last year’s drawing set.
    - article .tile.tile-night
      - h3: Comprehensive services
      - p: Frame, envelope, and fit-out under one desk. Fewer interfaces, fewer excuses.
  - section #crew .section
    - p: Our team
    - h2: Our dedicated team of professionals
    - article .person
      - h3: Mira Chen
      - p: Site director
    - article .person
      - h3: Cal Ibekwe
      - p: Site manager
    - article .person
      - h3: Nara Pell
      - p: Architect
    - article .person
      - h3: Owen Kite
      - p: Site engineer
    - a: Meet the desk → #desk
  - section #join .join
    - p: Desk any time 020 7946 0042
    - h2: Join the yard. A crew that still trains on the tools.
    - a: See the yard → #desk
  - section #notes .section
    - p: Yard notes
    - h2: From the book, not the brochure
    - article .note
      - h3: How we walked the quay house slab
      - p: By Mira Chen · 12 Mar 2026
    - article .note
      - h3: A glass shell on North Jetty
      - p: By Cal Ibekwe · 4 Apr 2026
    - article .note
      - h3: Saturday on the yard
      - p: By desk notes · 18 May 2026
    - a: See all notes → #desk
- footer #desk .footer
  - p: Formwork
  - p: Mid-size building contractor. 18 Quay Yard, Hale Quay.
  - p: Desk
  - p: desk@formwork.example
  - p: 020 7946 0042
  - p: Yard
  - p: Trades
  - p: Crew
  - p: Notes
  - p: Walk
  - p: Book a morning on the yard. Bring the drawing you actually have.
  - p: Book a walk

## Images in the page
- `hero-crew.jpg — Formwork crew in orange high-vis on a Hale Quay slab, looking toward the camera.`
- `svc-build.jpg — Steel and concrete frame going up under a tower crane.`
- `svc-plan.jpg — Two site leads reviewing a drawing on a plywood table.`
- `svc-contract.jpg — Contractors walking an active mid-rise site with a rolled plan.`
- `svc-industrial.jpg — Long-span steel industrial frame being erected.`
- `about-crew.jpg — Site lead in an orange vest on a concrete frame, colleague on the radio behind her.`
- `why-site.jpg — Supervisor in an orange vest checking a clipboard beside a yellow excavator.`
- `team-mira.jpg — Mira Chen, site director, in an orange hard hat.`
- `team-cal.jpg — Cal Ibekwe, site manager, with a rolled drawing.`
- `team-nara.jpg — Nara Pell, architect, holding rolled plans.`
- `team-owen.jpg — Owen Kite, site engineer, with a tablet.`
- `journal-1.jpg — Two workers talking through a steel connection on site.`
- `journal-2.jpg — Two crew members in front of a finished glass mid-rise.`
- `journal-3.jpg — Three Formwork crew members laughing on a plywood deck.`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `about-crew.jpg`
- `hero-crew.jpg`
- `index.html`
- `journal-1.jpg`
- `journal-2.jpg`
- `journal-3.jpg`
- `preview.jpg`
- `svc-build.jpg`
- `svc-contract.jpg`
- `svc-industrial.jpg`
- `svc-plan.jpg`
- `team-cal.jpg`
- `team-mira.jpg`
- `team-nara.jpg`
- `team-owen.jpg`
- `why-site.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
