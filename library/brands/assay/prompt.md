# Rebuild prompt — Assay (`assay`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · SaaS
- Folder: `library/brands/assay/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Talent-intelligence identity — charcoal, sage, rust; peak mark; analog-future gold-hour plates and a proof-led site.

## Title
Assay — Brand identity system

## Description meta
Fictional talent-intelligence identity. Charcoal, sage, rust, analog-future photography, peak mark, site and posters.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-charcoal: #1F1E1B;
  --surface-cream: #F3EEE6;
  --surface-sage: #6E908C;
  --surface-rust: #C46222;
  --action-signal: #6FE01A;
  --text-primary: #141311;
  --text-on-field: #F3EEE6;
  --text-muted: #6B675F;
  --font-ui: "Sora", system-ui, sans-serif;
  --font-body: "Source Serif 4", Georgia, serif;
  --wrap: min(1160px, 100% - 2.4rem);
  --board: min(1220px, 100% - 1.4rem);
  --section-y: clamp(3.2rem, 6vw, 5rem);
  --radius: 14px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --wrap: min(1160px, 100% - 2.1rem); --board: min(1220px, 100% - 1.1rem); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Assay → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Voice → #voice
    - a: Rules → #rules
  - a: Site → #site
  - a: Request the kit → mailto:brand@assay.example
- main
  - section .intro
    - p: Brand identity system · talent intelligence
    - h1: Hire talent you can trust.
    - p: Assay is a fictional hiring product. Resumes are marketing. We keep a record — charcoal, sage, rust, and gold-hour plates.
  - section #board .board-section
    - article .social “Assay profile”
      - button: Follow
      - h3: Assay
      - p: @assay
      - p: Talent intelligence backed by proof.
      - p: 100K Following · 10K Following assay.example
    - article #site .cell.hero-app
      - h2: Hire talent you can trust
      - p: Assay replaces guesswork with a record — identifying, validating, and delivering the top fraction, backed by proof.
      - a: See the standard → #voice
      - a: Learn more → #color
    - article .poster-card
      - p: Resumes are marketing documents. We use a record.
    - article .poster-card
      - p: Exceptional doesn’t need a resume. It needs a record.
  - section #mark .system
    - p: Mark
    - h2: Peak in a square
    - p: Two strokes meet at a tested high point. Sit it in a 14px-radius plate. Cream cut on rust, charcoal, and sage. Never outline it.
  - section #color .system.alt
    - p: Color
    - h2: Charcoal, cream, sage, rust
    - p: Four lockup fields. Signal green is a pip — never a page, never small type on cream.
  - section #type .system
    - p: Typography
    - h2: Sora lockup, serif record
    - p: Sora carries the wordmark and the site thesis. Source Serif keeps the long line human.
    - h3: Wordmark · Sora
    - p: Assay
    - p: 700 · tracking 0.08–0.12em · lockups
    - h3: Body · Source Serif 4
    - p: A resume is a marketing document. The record is the work — dates, outcomes, the people who will still pick up the phone.
  - section #voice .system.alt
    - p: Voice
    - h2: How Assay speaks
    - article
      - h3: Proof
      - p: Name the record, the date, the outcome. Skip “world-class talent.”
    - article
      - h3: Warm
      - p: Gold-hour, not cold HR. We hire people, not scores.
    - article
      - h3: Short
      - p: One thesis per surface. See the standard. Then stop.
  - section #rules .system
    - p: Usage
    - h2: Do and don’t
    - h3: Do
    - ul
      - li: Use the peak mark in charcoal, rust, sage, or cream
      - li: Keep photography in the gold-hour / teal grade
      - li: Set lockups in Sora, all caps, with the plate
      - li: Reserve signal green for the pip
    - h3: Don’t
    - ul
      - li: Cite Supahumans or real ATS / hiring trademarks
      - li: Redraw the peak as an arrow or a U
      - li: Put signal green on cream as body type
      - li: Use Inter, purple fields, or stock “team smiling at a laptop”
- footer
  - p: Fictional brand system · Sample template · brand@assay.example

## Images in the page
- `pillars.jpg — Gold monoliths in a mountain lake at sunset`
- `terminal.jpg — Two colleagues at a vintage terminal`
- `dunes.jpg — Dunes and moon used as a cover`
- `desk.jpg — Analyst at a desk with mountains in the window`
- `moon.jpg — Moon over a snow range at dusk`
- `executive.jpg — Executive portrait in a tan suit`
- `dunes.jpg — Dunes poster field`
- `terminal.jpg — Terminal poster field`
- `moon.jpg — Billboard sky`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `desk.jpg`
- `dunes.jpg`
- `executive.jpg`
- `index.html`
- `moon.jpg`
- `pillars.jpg`
- `preview.jpg`
- `terminal.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
