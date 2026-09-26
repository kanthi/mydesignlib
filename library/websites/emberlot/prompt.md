# Rebuild prompt — Emberlot (`emberlot`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Real Estate
- Folder: `library/websites/emberlot/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dusk-hour residential brokerage: full-bleed porch-lit hero, coral pill CTAs, floating listing card, fade manifesto, and curated house lists.

## Title
Emberlot — Find your perfect home today

## Description meta
Emberlot lists contemporary houses that look as good at dusk as they do in the photos. Private showings, no-pressure desks, book a visit.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Sora", sans-serif;
  --font-body: "Manrope", sans-serif;
  --surface-page: #F2F1EE;
  --surface-tile: #E8E7E3;
  --surface-ink: #141414;
  --text-primary: #111111;
  --text-on-ink: #FFFFFF;
  --text-secondary: #6A6A6A;
  --text-faint: #A3A3A3;
  --border-default: #DDDBD6;
  --action-primary: #EE5A4A;
  --action-primary-hover: #DC4B3C;
  --status-danger: #C0392B;
  --text-display: clamp(2.6rem, 6vw, 4.25rem);
  --text-3xl: clamp(2rem, 3.4vw, 2.85rem);
  --text-2xl: clamp(1.6rem, 2.4vw, 2.1rem);
  --text-xl: 1.35rem;
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-tight: 1.05;
  --leading-snug: 1.2;
  --leading-body: 1.62;
  --tracking-display: -0.035em;
  --tracking-label: 0.12em;
  --section-y: clamp(4.5rem, 9vw, 7.25rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --radius-lg: 28px;
  --radius-md: 22px;
  --radius-sm: 14px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --header-h: 84px;
  }

  :root { --wrap: min(1180px, 100% - 2rem); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-header
  - a: Emberlot → #top
  - nav .nav-pill “Primary”
    - a: Home → #top
    - a: Properties → #properties
    - a: About Us → #about
    - a: Insights → #insights
    - a: Contact → #visit
  - a: Book a Visit → #visit
- a: Home → #top
- a: Properties → #properties
- a: About Us → #about
- a: Insights → #insights
- a: Contact → #visit
- a: Book a Visit → #visit
- main #main
  - section #top .hero
    - h1: Find your perfect home today
    - p: Emberlot lists houses that still look honest after six o’clock — porch lamps on, lawn cut, rooms already warm.
    - p: Private showings. No open-house crush. A desk that keeps the evening free.
    - a: Explore Properties → #properties
    - p: Experience the blend of style and quiet
  - section #about .about
    - p: About
    - p: Emberlot is how finding a place feels simple, fast, and actually enjoyable. We’re rethinking residential sales for a new generation — no pressure, no outdated systems, just a desk that helps you move on your terms.
    - article .feature
      - h3: Private weekday showings
    - article .feature.is-ink
      - h3: Carefully curated house lists
      - p: Handpicked lots chosen for porch light, plan, and how the rooms hold evening.
    - article .feature
      - h3: Transparent offer desks
    - article .feature
      - h3: Visit desk until 9pm
  - section #properties .properties
    - p: About
    - h2: Discover the best places to live around your location, with easy access to parks, dining, and the last train.
    - article .prop-card
      - h3: Near the green
      - p: 1.56 kilometers away
    - article .prop-card
      - h3: Sunrise glass rooms
      - p: 2.92 kilometers away
    - article .prop-card
      - h3: Court house central
      - p: 3.22 kilometers away
  - section .featured
    - p: Featured
    - h2: Find your perfect stay in destinations
    - p: Cedar Lot sits twenty minutes north of Halden Ridge — timber, a gravel drive, and rooms already lit when you arrive.
    - a: See all homes → #properties
  - section #stories .quotes
    - p: Testimonial
    - p: “
    - blockquote: Walking the porch at dusk with Emberlot was the first time a showing felt like arriving home, not touring inventory.
    - p: — James Rell, Halden Ridge
  - section #insights .insights
    - p: Insights
    - h2: Notes from the visit desk
    - article .insight
      - h3: Why we show houses after six
      - p: Rooms tell the truth at dusk. We book the last slot so you see the lamps, the lawn, and how the kitchen holds night.
    - article .insight
      - h3: What an Emberlot offer desk actually does
      - p: One number, one timeline, no weekend surprises. The desk writes the first offer while you still have the floor plan in hand.
  - section #visit .visit
    - p: Contact
    - h2: Book a visit this week
    - p: Tell us a neighborhood and a dusk slot. A desk in Halden Ridge writes back the same evening — visits@emberlot.example.
    - form #visit-form
      - label: Name
      - label: Email
      - label: Neighborhood Halden Ridge Cedar Lot Court House Green Stair
      - button: Book a Visit
      - p: Sample template — nothing is sent.
- footer
  - p: Emberlot
  - h4: Visit
  - a: Properties → #properties
  - a: Book a Visit → #visit
  - a: Insights → #insights
  - h4: Desk
  - a: visits@emberlot.example → mailto:visits@emberlot.example
  - a: About → #about
  - a: Stories → #stories
  - h4: Halden Ridge
  - p: 14 Eave Lane Halden Ridge

## Images in the page
- `hero.jpg — Pale farmhouse with a lit porch at dusk on a suburban lawn`
- `listing-cube.jpg — Beige cubic house among trees at dusk`
- `prop-stair.jpg — Pale cubic villa with a wide stone stair and garden`
- `prop-glass.jpg — Oak-framed glass house over still water at sunset`
- `prop-white.jpg — White modernist house with black steel frames and a striped lawn`
- `featured-cabin.jpg — Dark timber house with warm windows in a forest clearing at dusk`
- `face-james.jpg — Portrait of James Rell`
- `insight-porch.jpg — White farmhouse with porch lamps on a hill at twilight`
- `insight-keys.jpg — Brass keys on a folded paper floor plan`

## Fields
Keep these controls, including ids and placeholders.
- input[text] name=name
- input[email] name=email
- select name=area

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `face-james.jpg`
- `face-mira.jpg`
- `featured-cabin.jpg`
- `hero.jpg`
- `index.html`
- `insight-keys.jpg`
- `insight-porch.jpg`
- `listing-cube.jpg`
- `preview.jpg`
- `prop-glass.jpg`
- `prop-stair.jpg`
- `prop-white.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
