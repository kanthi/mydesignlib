# Rebuild prompt — Lucid (`lucid`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/lucid/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Gallery-wall studio template: draggable framed-art hero with hover reveals, serif quotes, dark process cards, work list, and print-style pricing tiers.

## Title
Lucid — Your Best Product Deserves to Be Seen Clearly

## Description meta
Lucid is a fictional product storytelling studio: gallery-grade launches for startups. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{--ink:#0E0E10;--mut:#5c5c60;--paper:#fff;--marble:#F4F4F2;--line:#E7E7E3;--gold:#B98A2E;
  --sans:'Inter',sans-serif;--serif:'Instrument Serif',serif;--mono:'IBM Plex Mono',monospace}
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .wrap
  - nav .nav “Primary”
    - a: Case Studies ⌄ → #work
    - a: Services ⌄ → #services
    - a: AI Startups → #process
    - a: ◈ Lucid → #top
    - a: Studio ⌄ → #process
    - a: Plans ⌄ → #pricing
    - a: Process → #faq
    - button: MENU
  - a: Case Studies → #work
  - a: Services → #services
  - a: Studio → #process
  - a: Plans → #pricing
  - a: Process → #faq
- main #top
  - section .wrap.hero
    - h1: Your best productdeserves to be seen clearly.
    - p: The best products often go unnoticed — not because they aren't good enough, but because nobody made them easy to see. That's the work we do.
    - button: Book a call
    - button: See how we help
  - section .wall.rv “Gallery wall of original framed artworks”
    - p: ← DRAG / SCROLL THE WALL →
  - section #services .wrap.block
    - p: 01 — SERVICES
    - h2: Gallery-grade launches for startups.
    - p: Positioning, narrative, and web experiences that hang your product at eye level.
    - p: / 01
    - h3: Positioning
    - p: One sharp idea per company. Category, contrast, and the sentence buyers repeat.
    - p: / 02
    - h3: Narrative & Deck
    - p: Stories and decks that survive diligence — numbers framed like art.
    - p: / 03
    - h3: Launch Sites
    - p: Marketing sites with museum lighting: every section hung with intent.
  - section #process .wrap.block
    - p: 02 — PROCESS
    - h2: From foggy to framed.
    - p: Week 01
    - h3: Curate
    - p: Evidence audit: metrics, quotes, and the three truths worth hanging.
    - p: Week 02
    - h3: Compose
    - p: Narrative and information architecture — the wall plan.
    - p: Week 03
    - h3: Craft
    - p: Design and build in weekly reveals. No big-bang unveilings.
    - p: Week 04
    - h3: Open
    - p: Launch, measure, and rotate the hang as the story sharpens.
    - h3: Freightloop — from dispatch tool to logistics platform
    - p: Reposition + site · +64% demo rate (fictional).
    - h3: Helixpay — a ledger story investors could hang
    - p: Narrative + deck · seed to Series A (fictional).
    - h3: Fern & Field — consumer biology goes downtown
    - p: Launch site · 3.1x waitlist (fictional).
    - p: “Lucid hung our metrics like masterpieces. diligence felt like a gallery tour — in a good way.”
  - section #pricing .wrap.block
    - p: 03 — PLANS
    - h2: Priced like prints.
    - p: Fictional sample prices. Fixed scope, fixed price, framed on time.
    - h3: STUDY
    - p: $4k / fixed
    - ul
      - li: Positioning sprint
      - li: Narrative memo
      - li: Homepage direction
    - button: Book a call
    - h3: EXHIBITION
    - p: $14k / fixed
    - ul
      - li: Full narrative + site
      - li: Deck that survives diligence
      - li: Launch week support
    - button: Book a call
    - h3: COLLECTION
    - p: Custom
    - ul
      - li: Embedded story team
      - li: Quarterly rotations
      - li: Board-deck service
    - button: Book a call
    - summary: Do you only work with AI startups?
    - p: No — the process fits any technical product with proof. AI teams just tend to need framing most urgently.
    - summary: What do you need from us?
    - p: Metrics access, two customer calls, and one opinionated founder. We handle the rest.
    - summary: Who owns the work?
    - p: You do — files, fonts (licensed), and a handover session. Sample terms.
  - section .wrap.final
    - p: REJECT BORING HERO SECTIONS
    - h2: Hang your product at eye level.
    - button: Book a call
- footer .wrap
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
