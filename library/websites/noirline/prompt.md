# Rebuild prompt — Noirline (`noirline`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/noirline/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Monochrome design agency — dramatic B&W hero, services list, process steps, project grid, case study, pricing, giant footer wordmark.

## Title
Noirline® — Design that drives growth

## Description meta
Monochrome design studio template. Brands, products, and experiences built for results. Fictional sample.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --black: #0a0a0a;
  --ink: #111;
  --muted: #6b6b6b;
  --line: #e6e6e6;
  --soft: #f4f4f4;
  --white: #fff;
  --gray-1: #1a1a1a;
  --gray-2: #2a2a2a;
  --gray-3: #4a4a4a;
  --gray-4: #8a8a8a;
  --font: Inter, system-ui, -apple-system, sans-serif;
  --serif: "Instrument Serif", Georgia, serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #nav .nav
  - a: Noirline® → #top
  - button: ☰
  - nav .nav-links
    - a: Home → #top
    - a: Projects → #projects
    - a: Process → #process
    - a: Pricing → #pricing
    - a: Contact → #contact
    - a: Book a Call → #contact
- section #top .hero
  - h1: We design brands, products and experiences that drive growth and results.
  - a: Start a Project → #projects
- section #about .about
  - p: About us
  - h2: Every partnership starts with clarity and ends with work that compounds in value.
  - p: Noirline is a design partner for teams who need monochrome precision — branding, product UX, and web systems shipped with restraint and speed.
- section #partner .partner
  - p: Why choose us
  - h2: Fast turnaround without cutting corners.
  - h3: Design Partner
  - ul
    - li: Flexible capacity when your team is stretched thin
    - li: We handle overflow work so you never miss a deadline
    - li: Consistent quality across every deliverable
- section #services .services
  - p: Capabilities
  - h2: What we ship
  - a: 01 Brand strategy & identity → Positioning, messaging, visual systems, and guidelines that stay consistent at scale. → #contact
  - a: 02 Product & UX design → Flows, prototypes, and interfaces that convert without clutter. → #contact
  - a: 03 Web design & development → Marketing sites and product surfaces built for performance and polish. → #contact
  - a: 04 Design systems & guidelines → Tokens, components, and docs so teams ship in sync. → #contact
  - a: 05 Design partner retainers → Ongoing capacity for startups and product orgs that need a reliable studio bench. → #contact
- section #process .process
  - p: The process
  - h2: How we work
  - article .step
    - h3: Discovery & Strategy
    - p: Project kick-off, goals, audience, and success metrics.
  - article .step
    - h3: Concept & Wireframing
    - p: Structure, hierarchy, and direction before polish.
  - article .step
    - h3: High-Fidelity Design
    - p: Visual refinement across every critical surface.
  - article .step
    - h3: Delivery & Handoff
    - p: Launch support, assets, and a clean system handoff.
- section #projects .projects
  - p: Selected work
  - h2: Projects
  - a: Start a Project → #contact
  - a: Stride House 01 — Athletic lifestyle → #case
  - a: Meridian 02 — Fragrance & product → #case
  - a: Horizon Atelier 03 — Fashion editorial → #case
  - a: Forma Lab 04 — Product system → #case
- section #case .case
  - p: Case study
  - h2: Stride House
  - p: A bold editorial rebrand for a modern athletic lifestyle label pushing into premium retail.
  - dt: Category
  - dd: Brand strategy & digital
  - dt: Client
  - dd: Stride House (fictional)
  - dt: Duration
  - dd: 4 weeks
  - h3: Overview
  - p: Stride House had loyal foot traffic but no digital presence worth speaking of. Expanding into premium retail required a system that felt confident without losing warmth.
  - h3: Challenges
  - p: Reposition without alienating existing customers. Move past clip-art graphics and inconsistent packaging. Rebuild a site that could host products, stories, and campaigns from one design language.
  - h3: Conclusion
  - p: We delivered a full brand system — refined palette, editorial photography direction, and a flexible web foundation. Sample outcome: first premium retail partnership within the launch window and a clear lift in online interest.
- section #pricing .pricing
  - p: Pricing
  - h2: Pricing & packages
  - p: Choose the model that fits your stage. Every option includes strategic direction and focused execution.
  - article .price
    - p: Sprint
    - h3: Brand or site sprint
    - p: $4.5k / project
    - ul
      - li: 1–2 week focused delivery
      - li: Single core surface or brand pass
      - li: 2 revision rounds
      - li: Figma handoff
    - a: Book Sprint → #contact
  - article .price.featured
    - p: Partner
    - h3: Design partner
    - p: $8k / month
    - ul
      - li: Ongoing capacity reserve
      - li: Brand + product + web mix
      - li: Weekly sync & async support
      - li: Priority turnaround
    - a: Book Partner → #contact
  - article .price
    - p: System
    - h3: Full system build
    - p: $14k / project
    - ul
      - li: Identity + site + design system
      - li: 4–6 week engagement
      - li: Component library
      - li: Launch support
    - a: Book System → #contact
- footer #contact .footer
  - a: hello@noirline.example → mailto:hello@noirline.example
  - h4: Navigation
  - a: Home → #top
  - a: Projects → #projects
  - a: About → #about
  - a: Contact → #contact
  - h4: Resources
  - a: Process → #process
  - a: Pricing → #pricing
  - a: Case study → #case
  - a: Support → mailto:hello@noirline.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `hero.jpg`
- `index.html`
- `preview.jpg`
- `process.jpg`
- `project-1.jpg`
- `project-2.jpg`
- `project-3.jpg`
- `project-4.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
