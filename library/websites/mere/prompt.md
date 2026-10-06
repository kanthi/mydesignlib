# Rebuild prompt — Mere (`mere`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/mere/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Italic question over floating islands and a stone bridge, an orange ask card, and a black band of desks.

## Title
Mere — Straight answers from the books

## Description meta
Ask the books a question. Mere answers without a query language.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Instrument Serif", "Iowan Old Style", Palatino, serif;
  --font-body: "Figtree", "Avenir Next", "Segoe UI", sans-serif;
  --surface-night: #07080A;
  --text-on-sky: #FFFFFF;
  --text-on-night: #F4F2EC;
  --text-muted: #A7A59C;
  --surface-card: #FFFFFF;
  --text-on-card: #16181C;
  --surface-pill: #07080A;
  --action-accent: #F26B1D;
  --action-accent-hover: #D85A12;
  --line-night: rgba(244, 242, 236, 0.16);
  --text-h1: clamp(2.65rem, 5.4vw, 4.7rem);
  --text-h2: clamp(2rem, 4vw, 3.15rem);
  --text-base: 1rem;
  --leading-display: 0.96;
  --leading-body: 1.45;
  --wrap: min(1000px, 100%);
  --radius-card: 16px;
  --radius-pill: 999px;
  --radius-send: 10px;
  --shadow-card: 0 16px 40px rgba(7, 8, 10, 0.22);
  --dur: 180ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #top .hero
  - nav .nav “Primary”
    - a: Mere → #top
    - a: Pricing → #pricing
    - a: Desks → #desks
    - a: Watch the note → #note
    - a: Sign in → mailto:hello@mere.example
  - h1: Straight answers from the books
  - p: Ask the books a question. Mere answers without a query language.
  - form #ask-form .card
    - label: Ask the books
    - button: Ask
    - button: Deep read
  - p: 4.9 average · Loved by desks that ship on Thursday
  - ul .marks “Desks that keep a Mere note”
    - li: Brindle
    - li: VELTH
    - li: Marrow
    - li: Quillan
    - li: Plover
    - li: Ostler
- section #desks .band
  - h2: Built by the desks
  - p: Three rooms that asked Mere a question.
  - a: View the desks → #desk-rows
- main
  - section #desk-rows .board.wrap
    - ul .rows
      - li: Hollis Bakehouse Which morning sells the loaf? Thursday, before nine, from the letter list.
      - li: Pell Mill Where did the flour line move? Up four percent. Rent did not.
      - li: Calder Studio Which page do clients finish? The price page, on the second visit.
  - p: Pricing is the desk itself. This sample does not bill.
  - section #note .note.wrap
    - h2: The note
    - p: A note for the desks that ship on Thursday. Ask in a sentence. The books answer in one.
    - a: Sign in → mailto:hello@mere.example
- footer .wrap
  - p: Mere · Sample template · hello@mere.example

## Fields
Keep these controls, including ids and placeholders.
- input[text] #question name=question placeholder='Which desk shipped the Thursday note?'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/valley.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
