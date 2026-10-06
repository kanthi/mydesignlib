# Rebuild prompt — Beryl (`beryl`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/beryl/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Night-green coin desk with a glass orb, a live book chart, a radar of notes, and a lit Pro plan.

## Title
Beryl — A clearer desk

## Description meta
Beryl is a dark desk for a small coin book: prices, notes, and a week export.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font: "Plus Jakarta Sans", "Avenir Next", sans-serif;
  --surface-page: #070807;
  --surface-card: #101410;
  --surface-nav: rgba(12, 16, 12, 0.88);
  --action-green: #2BD132;
  --action-green-deep: #14941A;
  --text-primary: #F4F6F4;
  --text-muted: #9AA39A;
  --ink: #071107;
  --line: rgba(43, 209, 50, 0.35);
  --wrap: min(1120px, calc(100% - 2rem));
  --section-y: clamp(4.5rem, 8vw, 6.5rem);
  --radius-card: 18px;
  --radius-faq: 14px;
  --dur: 200ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .nav-wrap
  - a: Beryl → #top
  - nav #nav .links “Primary”
    - a: Home → #top
    - a: Market → #market
    - a: Features → #features
    - a: Pricing → #pricing
    - a: Support → #support
  - button: Menu
  - a: Sign up free → mailto:hello@beryl.example?subject=Sign%20up
- main #main
  - section #top .hero
    - p: First week · 2% back on the desk
    - h1: Hold the book with a clearer desk
    - p: Prices, notes, and transfers on one dark board. The week is written down before the market moves on.
    - a: Get started → mailto:hello@beryl.example?subject=Get%20started
    - button: Watch the desk
  - section #features .section
    - h2: A clearer board for the coins you keep
    - article #market .card
      - h3: Live market notes
      - p: The book updates while the room is open. Prices, a short note, and the move since yesterday.
      - ul .checks
        - li: Tracking
        - li: Market notes
        - li: Research line
        - li: Export
      - a: Get started → mailto:hello@beryl.example?subject=Get%20started
      - p: Book
      - p: 48.2K +6.4%
    - article .card
      - h3: Quiet and private
      - p: Keys stay on the desk. A transfer leaves only when you send it.
    - article .card
      - h3: Export and a small API
      - p: The week letter leaves as a file. The same numbers are there for a script.
  - section .section.research
    - p: Notes and reading
    - h2: Research on one page
    - p: Papers, desk notes, and the price line, gathered before the close.
    - article
      - h3: Read anywhere
      - p: The same note on a phone or a large screen. It stays in step.
    - article
      - h3: Held, then sent
      - p: The export waits until you ask. The API uses the same book.
  - section #pricing .section
    - h2: Pricing
    - article .card.plan
      - h3: Desk
      - p: $29/mo
      - ul
        - li: Live prices
        - li: Two alerts
        - li: Week letter
        - li: One export
      - a: Get started → mailto:hello@beryl.example?subject=Desk%20plan
    - article .card.plan.pro
      - h3: Pro
      - p: $79/mo
      - ul
        - li: Live prices
        - li: Alerts
        - li: Week letter
        - li: Desk export
        - li: API
        - li: Two seats
      - a: Get started → mailto:hello@beryl.example?subject=Pro%20plan
    - article .card.plan
      - h3: Room
      - p: $149/mo
      - ul
        - li: Everything in Pro
        - li: Five seats
        - li: Priority note
        - li: Custom export
      - a: Get started → mailto:hello@beryl.example?subject=Room%20plan
  - section #support .section
    - h2: Frequently asked questions (FAQ)
    - article .faq-item.open
      - button: 01 What does Beryl watch? −
      - p: The coins on your book, the move since yesterday, and the note you write before the close.
    - article .faq-item
      - button: 02 How do I open a desk? +
      - p: Write to hello@beryl.example. The note opens in your mail. Nothing is stored on this page.
    - article .faq-item
      - button: 03 Are transfers private? +
      - p: A transfer leaves the desk only when you send it. The week letter is a file, not a broadcast.
    - article .faq-item
      - button: 04 Can the desk pay me? +
      - p: No. Beryl counts and writes. It does not move money and it does not promise a return.
    - article .faq-item
      - button: 05 Where does the export go? +
      - p: To the address you name in the mail, as a file. The API on Pro reads the same book.
- footer .section
  - a: Beryl → #top
  - p: A dark desk for a small coin book. Prices, a note, and the week in one file.
  - p: Write when the book should open. The note stays in your mail.
  - h3: Product
  - a: Features → #features
  - a: Market → #market
  - a: Pricing → #pricing
  - a: Questions → #support
  - h3: Company
  - a: About → mailto:hello@beryl.example
  - a: Notes → mailto:hello@beryl.example?subject=Note
  - a: Careers → mailto:hello@beryl.example?subject=Desk
  - h3: Resources
  - a: Examples → #features
  - a: Guides → #support
  - a: Plans → #pricing
  - h3: Legal
  - a: Privacy → #support
  - a: Terms → #support
  - a: Security → #support
  - p: Sample template · hello@beryl.example
- dialog #note
  - h2: The desk in a minute
  - p: Beryl opens on the book, writes the move since yesterday, and keeps the export until you ask. This page does not play a film.
  - button: Close

## Images in the page
- `assets/orb.jpg — A green glass sphere, the Beryl mark.`
- `assets/orb.jpg`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/orb.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
