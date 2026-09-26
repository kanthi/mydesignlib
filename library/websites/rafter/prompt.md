# Rebuild prompt — Rafter (`rafter`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/rafter/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Licensed remodeling shop: full-bleed interior hero, quote CTA, before/after, timber ink on paper.

## Title
Rafter — Home renovation, Ashmere

## Description meta
Rafter rewrites kitchens, baths, and whole homes in Ashmere. Licensed crew, in-house millwork, a date you can put on the fridge. Get a quote.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Karla:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Fraunces", "Times New Roman", serif;
  --font-body: "Karla", "Helvetica Neue", sans-serif;
  --surface-page: #F7F3EC;
  --surface-raised: #FFFBF6;
  --surface-ink: #1C1712;
  --surface-glass: rgba(247, 243, 236, 0.78);
  --text-primary: #1C1712;
  --text-secondary: #6A5C50;
  --text-on-photo: #F7F3EC;
  --text-on-ink: #F7F3EC;
  --border-default: #E2D6C8;
  --action-primary: #3D2A1F;
  --action-primary-hover: #2C1D15;
  --status-danger: #9B3A2A;
  --text-display: clamp(2.6rem, 5.6vw, 4.35rem);
  --text-3xl: clamp(2rem, 3.2vw, 2.85rem);
  --text-2xl: clamp(1.5rem, 2.2vw, 1.9rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.72rem;
  --leading-body: 1.62;
  --section-y: clamp(4.5rem, 9vw, 7.5rem);
  --wrap: min(1160px, 100% - 2.5rem);
  --radius: 12px;
  --radius-sm: 8px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --lift: 0 18px 40px rgba(28, 23, 18, 0.10);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-header
  - a: Rafter → #top
  - nav .nav-pill “Primary”
    - a: About → #about
    - a: Work → #work
    - a: Services → #services
    - a: Process → #process
    - a: Contact → #quote
  - a: Get a quote → #quote
  - button: Menu
  - nav #drawer .nav-drawer
    - a: About → #about
    - a: Work → #work
    - a: Services → #services
    - a: Process → #process
    - a: Get a quote → #quote
- main #main
  - section #top .hero
    - p: 4.9 · 210 reviews
    - h1: The rooms, rewritten around how you live.
    - p: Kitchens, baths, and whole-home renovations from a licensed Ashmere crew. A millwork shop, a schedule, and a date you can put on the fridge.
    - a: Get a quote → #quote
  - section #about .about
    - figure .shot-main
    - figure .shot-inset
    - p: About us
    - h2: Crew, millwork, and a date on the fridge.
    - p: Rafter started in 2009 on one brief: the finished house should look as considered as the drawings. We still mill the oak in our Ashmere shop. The same lead carpenter who walks the house on week one is there for handover.
    - p: We take kitchens, baths, and whole-home work — not because we do everything, but because the rooms have to talk to each other.
    - a: Walk the house → #process
    - dt: 640+
    - dd: Projects completed
    - dt: 100%
    - dd: Licensed & insured
  - section #work .work
    - p: Selected rooms
    - h2: Recent houses
    - a: See the work → #quote
    - a: North Yard Built-ins, study → #quote
    - a: West Ashmere Kitchen, 11 weeks → #quote
    - a: The Cut Bath, wet room → #quote
    - a: Linden Ferry Whole home, cove living → #quote
    - a: West Ashmere Dining, garden door → #quote
  - section #services .services
    - p: Services
    - h2: Four trades, one crew.
    - p: We quote rooms, not packages. The ranges below are where most Ashmere jobs land after a walk of the house.
    - article .service
      - h3: Kitchens
      - p: New millwork, stone, and a range that actually vents. Typical eight to twelve weeks on site after the shop has the oak.
    - article .service
      - h3: Baths
      - p: Wet rooms, stone tubs, brass that will age. Dust-walled so the rest of the house can still be lived in.
    - article .service
      - h3: Whole home
      - p: Sequence the house so you can live in one wing while we finish the other. One lead carpenter, one millwork schedule.
    - article .service
      - h3: Built-ins
      - p: Studies, pantries, window seats — priced with the room they serve, milled in the same shop as the kitchen.
  - section #process .process
    - p: Process
    - h2: How a house gets rewritten
    - ol .steps
      - li: 01 Walk the house Two hours on site. We measure, photograph, and ask how you cook and where the light bothers you.
      - li: 02 Scope and quote A fixed-price pack: drawings, millwork schedule, and a start date. Ten days, typically.
      - li: 03 Build Lead carpenter on site. Weekly photo notes. Changes in writing, not in the hallway.
      - li: 04 Handover Punch list, care notes, and the last ten percent held until you sign.
  - section #before .compare-sec
    - p: Before / after
    - h2: West Ashmere kitchen
    - p: Honey oak and laminate out. Ash millwork, limestone, plaster hood. 11 weeks.
  - section #stories .quotes
    - p: Clients
    - h2: What they said after handover
    - article .quote-card
      - blockquote: “They treated the kitchen as a piece of furniture, not a package.”
      - footer
    - article .quote-card
      - blockquote: “The bath was five weeks, on the week they named. That still surprises me.”
      - footer
    - article .quote-card
      - blockquote: “We lived in the back rooms the whole time. That was the point of the sequence.”
      - footer
  - section #pricing .pricing
    - p: Pricing
    - h2: Clear ranges, then a fixed price.
    - p: The walk of the house produces a number you can hold. No allowances hiding in the millwork line.
    - dt: Kitchen renovations
    - dd: $48,000–$92,000
    - dt: Baths
    - dd: $22,000–$46,000
    - dt: Whole home
    - dd: From $180,000
    - p: After the walk, the quote is fixed. A 10% holdback sits until punch list. Permits and structural steel billed at cost, with the invoices attached.
  - section #faq .faq
    - p: Questions
    - h2: Before you write
    - button: How long is a kitchen?
    - button: Can we live in the house?
    - button: Do you handle permits?
    - button: What if we change our minds mid-build?
    - button: Are you licensed?
  - section #quote .quote
    - p: Quote
    - h2: Tell us the rooms.
    - p: A walk of the house is two hours. We reply within two working days with a date, not a brochure.
    - p: hello@rafter.example 01632 960 441 · Ashmere
    - form .form
      - label: Name
      - label: Email
      - label: Project Choose a room Kitchen Bath Whole home Built-ins
      - label: Notes
      - p: Add a name, a working email, and a project type.
      - button: Get a quote
    - p: Received. We’ll write to that email with a walk date.
- footer .site-footer
  - a: Rafter → #top
  - nav .footer-nav “Footer”
    - a: Work → #work
    - a: About → #about
    - a: Quote → #quote
    - a: hello@rafter.example → mailto:hello@rafter.example
  - p: Sample template · Ashmere

## Images in the page
- `assets/hero-living.jpg — Renovated living room with a teal sectional, plants, and oak stair`
- `assets/about-contractor.jpg — Lead carpenter checking a cabinet with a spirit level in the Ashmere shop`
- `assets/about-dining.jpg — Dining alcove with oak table, cane chairs, and a garden door`
- `assets/gallery-millwork.jpg — Floor-to-ceiling oak built-ins with a fold-down desk`
- `assets/gallery-kitchen.jpg — Ash millwork kitchen with limestone island and brass pendants`
- `assets/gallery-bath.jpg — Stone tub in a fluted greige bath with brass filler`
- `assets/gallery-cove.jpg — Living room at dusk with linear cove lighting and oak slat wall`
- `assets/about-dining.jpg — Dining alcove opening to the garden`
- `assets/gallery-kitchen.jpg — Kitchen after renovation`
- `assets/before-kitchen.jpg — Kitchen before renovation`

## Fields
Keep these controls, including ids and placeholders.
- input[range]
- input[text] name=name
- input[email] name=email
- select name=project
- textarea name=notes placeholder='Street, timing, anything the drawings should know.'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/about-contractor.jpg`
- `assets/about-dining.jpg`
- `assets/before-kitchen.jpg`
- `assets/gallery-bath.jpg`
- `assets/gallery-cove.jpg`
- `assets/gallery-kitchen.jpg`
- `assets/gallery-millwork.jpg`
- `assets/hero-living.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
