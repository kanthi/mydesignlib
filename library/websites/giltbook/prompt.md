# Rebuild prompt — Giltbook (`giltbook`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/giltbook/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Household ledger story — cream paper, serif italics, mosaic on ink, HTML phone mock.

## Title
Giltbook — A small ledger for people who hate banking apps

## Description meta
Giltbook is a household ledger. Write what came in, what went out, and what is left. Fictional sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,500;1,7..72,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Literata", "Iowan Old Style", Georgia, serif;
  --font-body: "Karla", "Gill Sans", system-ui, sans-serif;
  --surface-page: #F3EEE4;
  --surface-raised: #F8F4EC;
  --surface-ink: #1B1915;
  --text-primary: #1B1915;
  --text-on-ink: #F3EEE4;
  --text-secondary: #6A6358;
  --border-default: #E3DACB;
  --action-primary: #A67C24;
  --on-action: #1B1915;
  --tile-lilac: #D8C6EE;
  --tile-peach: #F0B7A6;
  --tile-gold: #E6C75E;
  --status-danger: #B23A2F;
  --text-display: clamp(2.4rem, 5.2vw, 3.55rem);
  --text-3xl: clamp(1.85rem, 3.2vw, 2.45rem);
  --text-xl: 1.2rem;
  --text-lg: 1.05rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.72rem;
  --leading-display: 1.08;
  --leading-body: 1.6;
  --track-display: -0.02em;
  --section-y: clamp(4.25rem, 9vw, 6.75rem);
  --wrap: min(1080px, 100% - 2.5rem);
  --radius-card: 18px;
  --radius-pill: 999px;
  --radius-phone: 32px;
  --shadow-photo: 0 18px 40px rgba(27, 25, 21, 0.18);
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --wrap: min(1080px, 100% - 2.3rem); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header #top .site-head
  - a: Giltbook → #top
  - nav .nav-links “Primary”
    - a: Story → #story
    - a: Values → #values
    - a: Team → #team
    - a: FAQ → #faq
  - a: Contact us → #contact
  - nav #navDrawer .nav-drawer “Mobile”
    - a: Story → #story
    - a: Values → #values
    - a: Team → #team
    - a: FAQ → #faq
    - a: Contact us → #contact
- main #main
  - section #story .hero.wrap
    - h1: The story behind our company
    - p: A household ledger for people who hate banking apps. Fewer screens. Clearer lines. The same numbers you already keep on paper.
    - a: Start a ledger → #open
    - figure .hero-photo
  - section .trust.wrap “Studios that keep a giltbook”
    - p: Trusted by
  - section .mosaic-band.on-ink “Mission and vision”
    - article .tile.tile-copy.tile-lilac
      - h3: Our mission
      - p: Keep household money on one page — no bank theater, no hidden surprises.
    - figure .tile.tile-photo
    - article .tile.tile-copy.tile-peach
      - h3: Our vision
      - p: A world where people spend less time worrying about numbers and more time living.
    - figure .tile.tile-photo
    - article .tile.tile-copy.tile-gold
      - h3: Trusted by 12,400 households
      - p: Quiet books. Accurate lines. No push alerts at dinner.
    - figure .tile.tile-photo
  - section #values .values.wrap
    - h2: The values that drive everything we do
    - article .val-card
      - h3: Clarity
      - p: Every line has a reason. No mystery categories, no fees buried in a footnote.
    - article .val-card
      - h3: Quiet
      - p: No alerts that shout. Open the book when you want it. Close it when you don’t.
    - article .val-card
      - h3: Stewardship
      - p: Your book stays yours. Cancel anytime and take every page with you.
  - section #team .team.wrap
    - h2: Meet the team behind Giltbook
    - article
      - figure .person-photo
    - article
      - figure .person-photo
    - article
      - figure .person-photo
  - section #faq .faq.wrap
    - h2: Frequently asked questions
    - article .faq-item.open
      - h3: What is Giltbook?
    - article .faq-item
      - h3: Is Giltbook easy to set up?
    - article .faq-item
      - h3: Can I bring numbers from another app?
    - article .faq-item
      - h3: Is there a free trial?
    - article .faq-item
      - h3: Can I leave anytime?
  - section #open .cta-wrap.wrap
    - h2: Smarter finance starts here
    - p: Join 12,400 households using Giltbook to keep a quiet book of what they actually spend — not what a bank wants them to tap.
    - a: Open a giltbook → #contact
- footer #contact .site-foot.wrap
  - a: Giltbook → #top
  - h4: Product
  - a: Story → #story
  - a: Values → #values
  - a: Open a giltbook → #open
  - h4: Company
  - a: Team → #team
  - a: FAQ → #faq
  - a: Contact → mailto:hello@giltbook.example
  - h4: Notes
  - a: Trial → #faq
  - a: Export → #faq
  - a: Stewardship → #values
  - p: Sample template · hello@giltbook.example

## Images in the page
- `founder.jpg — Ellis Maren at her desk with ledgers, books, and a laptop`
- `mosaic-cash.jpg — A person counting cash and coins at a cafe table`
- `mosaic-sweater.jpg — A person in a yellow sweater with a laptop on the sofa`
- `team-ellis.jpg`
- `team-jonah.jpg`
- `team-sable.jpg`
- `mosaic-desk.jpg — A person in a rust jacket working at a wooden table`
- `team-ellis.jpg — Portrait of Ellis Maren`
- `team-jonah.jpg — Portrait of Jonah Pike`
- `team-sable.jpg — Portrait of Sable Wren`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `founder.jpg`
- `index.html`
- `mosaic-cash.jpg`
- `mosaic-desk.jpg`
- `mosaic-sweater.jpg`
- `preview.jpg`
- `team-ellis.jpg`
- `team-jonah.jpg`
- `team-sable.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
