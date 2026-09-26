# Rebuild prompt — Coffer (`coffer`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/coffer/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Lime neobank: 70k txn/sec, HTML debit card above the fold, 24/7 desk, fictional clearing partners.

## Title
Coffer — A coffer that spends as fast as you do

## Description meta
Fictional neobank. Physical card, 70,000 transactions a second, 56 countries, a desk that answers at 3am.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Lexend", sans-serif;
  --font-body: "Lexend", sans-serif;
  --surface-page: #FAFBF7;
  --surface-paper: #FFFFFF;
  --surface-lime: #B8F06E;
  --surface-forest: #0F3D24;
  --text-primary: #0F3D24;
  --ink: #0F3D24;
  --text-secondary: #4A6B58;
  --muted: #4A6B58;
  --text-on-forest: #EAF8C8;
  --text-on-lime: #0F3D24;
  --border-default: #D7E6CC;
  --line: #D7E6CC;
  --action-primary: #0F3D24;
  --on-action: #F3FFD4;
  --status-danger: #B42318;
  --chip-gold: #C9A24A;
  --text-display: clamp(2.6rem, 5.6vw, 4.15rem);
  --text-3xl: clamp(1.85rem, 3.2vw, 2.55rem);
  --text-xl: 1.25rem;
  --text-base: 1.0125rem;
  --text-sm: 0.875rem;
  --text-xs: 0.72rem;
  --leading-display: 1.05;
  --leading-body: 1.6;
  --tracking-display: -0.04em;
  --section-y: clamp(4.25rem, 9vw, 7rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --radius-card: 22px;
  --radius-tile: 18px;
  --radius-pill: 999px;
  --radius-phone: 36px;
  --radius-input: 12px;
  --dur: 280ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --shadow-card: 0 28px 60px rgba(15, 61, 36, 0.16);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- main #main
  - header .site-head
    - a: Coffer → #top
    - nav .nav-links “Primary”
      - a: Home → #top
      - a: Features → #features
      - a: About → #about
      - a: Pricing → #pricing
      - a: Journal → #journal
    - a: Contact → #contact
    - a: Home → #top
    - a: Features → #features
    - a: About → #about
    - a: Pricing → #pricing
    - a: Journal → #journal
    - a: Get started → #contact
  - section .wrap
    - p: Ledger 2.0 rails go live 01 Jan 2026
    - h1: A coffer that spends as fast as you do
    - p: Physical card. 70,000 transactions a second. A desk that answers at 3am. Open an account and pay in 56 countries.
    - a: Get started → #contact
    - p: 70k
    - p: Transactions a second, and still climbing
    - p: 56
    - p: Countries the card already works
    - p: 24/7
    - p: A human on the line, not a bot tree
    - form #join .join
      - label: Email
      - button: Go
    - article .plastic “Coffer debit card, number 4821 7603 9914 2258, Mira Solenne, expires 08 29”
      - p: Debit card no.
      - p: 4821 7603 9914 2258
  - section .partners
    - p: Clearing partners, not a logo wall of strangers
  - section #about .mission
    - p: Our mission
    - h2: Money that stays yours until you spend it
    - p: Coffer is a consumer neobank. We hold the balance in a box you can see, issue a card in two days, and clear taps at 70,000 a second. The night desk is a person. The partners on the strip above are clearing rails, not a borrowed brand wall.
    - ul .checks
      - li: Night desk on the line
      - li: Card issued in two days
      - li: 41,000 accounts already open
    - a: Get started → #contact
  - section #features .bento-sec
    - p: Features
    - h2: How we earn the right to hold your money
    - article .tile.reveal
      - h3: Physical card
      - p: No ATM fees. Pay in 56 countries.
      - p: 4821 7603 9914 2258
      - p: 4821 7603 9914 2258
    - article .tile.tile-dark.reveal
      - p: Target
      - h3: Understand the ledger
      - p: Balances, spend, and the week ahead — at any hour.
    - article .tile.reveal
      - h3: Connect to apps
      - p: See payroll, rent, and the grocer in one place.
      - p: Wick & Quill connected
      - p: Harborline payroll on
    - article .tile.reveal
      - h3: Wherever you go
      - p: The same card, in the pocket and on the phone.
      - p: Coffer
      - p: Mira Solenne · 08/29
    - article .tile.reveal
      - h3: Instant transfers
      - p: Move the balance before the kettle boils.
      - p: Received · Oakmint $240
  - section .reviews
    - p: Customer notes
    - h2: The desk, the card, the 3am wire
    - p: Coffer is the one box for money that has to move.
    - p: 70k
    - p: Making more transactions a second, and getting better at it.
    - figure .quote.reveal
      - blockquote: The night desk actually picks up. I wired rent from Lisbon at 1am and the card cleared before I hung up. 70k a second is a number until you tap at a stall and it just works.
      - figcaption: Sable Ibarra Ops, Harborline 10 Mar 2026
  - section #pricing .pricing
    - p: Pricing
    - h2: What it costs to keep the box
    - dt: Open an account
    - dd: $0
    - dt: Physical card
    - dd: $0
    - dt: ATM, 56 countries
    - dd: $0
    - dt: FX after $1,000 / mo
    - dd: 0.4%
  - section #journal .journal
    - p: Journal
    - h2: Notes from the ledger
    - a: View all → #journal
    - article .post.reveal
      - h3: What 70,000 transactions a second means on a Tuesday
      - p: Throughput is a desk metric until the grocer tap returns in 180 milliseconds. A short note on the rail.
    - article .post.reveal
      - h3: The 3am desk: why Coffer still answers the phone
      - p: We staff a night line in Lisbon and Accra. Not a tree. Not a chatbot with a hold playlist.
    - article .post.reveal
      - h3: How we issue a card in two days without a branch
      - p: Identity, a photo of the coffer application, a card on a truck. No marble lobby required.
  - section #faq .faq
    - p: FAQ
    - h2: Questions we actually get
    - button: Is Coffer a bank?
    - button: How fast is a tap, really?
    - button: What does the card cost?
    - button: How do I get started?
  - section #contact .close
    - h2: Open the coffer. Get the card.
    - p: Write hello@coffer.example or leave the inbox in the hero. The desk answers 24/7.
    - a: Get started → #join-email
- footer .site-foot
  - a: Coffer → #top
  - p: A consumer neobank. The money stays in the box until you spend it.
  - nav .foot-nav “Footer”
    - a: Features → #features
    - a: About → #about
    - a: Pricing → #pricing
    - a: Journal → #journal
    - a: FAQ → #faq
    - a: Contact → #contact
  - p: Desk
  - a: hello@coffer.example → mailto:hello@coffer.example
  - p: +1 415 555 0142 · 24/7
  - p: Sample template · fictional rebrand · not a real bank
  - p: © 2026 Coffer

## Images in the page
- `assets/portrait.jpg — Nia Calder, Coffer night-desk lead, photographed on a lime studio backdrop`
- `assets/face-sable.jpg`
- `assets/blog-coffer.jpg — Oak money coffer with a lime debit card on marble`
- `assets/blog-night.jpg — Lime debit card on a cafe sill looking out at a rainy night street`
- `assets/blog-ledger.jpg — Handwritten household ledger and a lime debit card on a sunlit kitchen table`

## Fields
Keep these controls, including ids and placeholders.
- input[email] #join-email name=email placeholder='Join the future'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/blog-coffer.jpg`
- `assets/blog-ledger.jpg`
- `assets/blog-night.jpg`
- `assets/face-sable.jpg`
- `assets/portrait.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
