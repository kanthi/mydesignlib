# Rebuild prompt — Russet (`russet`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/russet/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Warm cocoa household ledger: metal card over a dotted field, month widgets under the wrist, quote rail, and a chamfered footer.

## Title
Russet — A calmer hold on the month

## Description meta
Russet is a fictional household ledger: one metal card, one written plan, and a desk in Wrenfield.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Familjen Grotesk", sans-serif;
  --font-body: "Source Sans 3", sans-serif;
  --surface-page: #FDF8F4;
  --surface-card: #FFFCFA;
  --surface-sand: #F3E7DE;
  --surface-cocoa: #864D30;
  --text-primary: #3C2F28;
  --text-secondary: #6E5C52;
  --text-display-soft: #8E6F62;
  --text-on-cocoa: #FDF8F4;
  --text-on-cocoa-soft: #F6E6DA;
  --border-default: #E6D5C8;
  --border-on-cocoa: rgba(253, 248, 244, 0.22);
  --action-primary: #6B4634;
  --action-primary-hover: #5A3A2C;
  --on-action: #FDF8F4;
  --status-danger: #9C3B2E;
  --text-display: clamp(2.7rem, 5.4vw, 4.25rem);
  --text-3xl: clamp(2rem, 3.6vw, 2.9rem);
  --text-stat: clamp(3rem, 5vw, 4.25rem);
  --text-xl: 1.35rem;
  --text-base: 1.0625rem;
  --text-sm: 0.9375rem;
  --text-xs: 0.75rem;
  --leading-body: 1.55;
  --section-y: clamp(4.5rem, 8vw, 6.5rem);
  --wrap: min(1120px, calc(100% - 2.5rem));
  --wide: min(1180px, calc(100% - 2rem));
  --radius-card: 20px;
  --radius-control: 14px;
  --radius-pill: 999px;
  --shadow-card: 0 18px 44px rgba(90, 52, 32, 0.12);
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-nav
  - a: russet. → #top
  - nav #nav-panel .nav-links “Sections”
    - a: Home → #top
    - a: About → #about
    - a: Reviews → #reviews
    - a: Procedures → #procedures
    - a: Journal → #journal
  - button: +plus
  - button: Sign in
  - button: Menu
- main #main
  - section #top .hero
    - p: 18,420 households active
    - h1: Make a calmer use of your money
    - p: Track the month. Name a budget. Leave the rest alone.
    - a: Open Russet free → #join
    - button: Watch a short demo
    - article .w.w-sand
      - h3: Recent transactions
      - p: $128.40↑ 4%From $18,420
      - ul .cats
        - li: Market 42%
        - li: Transit 18%
        - li: Utilities 24%
        - li: Home 16%
    - article .w.w-paper
      - h3: Status
      - p: $4,280 in$3,140 out
    - article .w.w-paper.peek
      - h3: Out this month
      - p: $4,280
    - article .w.w-sand
      - h3: Where households sit
      - p: Wrenfield · Glasshouse · Adler · Mallow
  - section #reviews .band
    - ul .partners “Fictional clearing partners”
      - li: Northwharf
      - li: Plover
      - li: YarrowMUTUAL
      - li: Brant
      - li: Mallow
      - li: Ash & Rye
    - blockquote: The month finally sits in one place. The card, the plan, and what the clinic already promised. Nia OkonkwoTreasurer, Glasshouse Clinics
    - blockquote: I stopped reconciling three apps on Sunday. Russet keeps the plan next to what we already spent. Edmund HartPartner, Hart & Rowan
    - blockquote: A quieter ledger. I can see what the studio spent before the month closes, not the week after. Leila VossFounder, Paperkiln
    - blockquote: Fuel, yards, and payroll used to blur. The desk marked the yard account before I did. Jonas AdlerOps lead, Adler Freight
    - blockquote: We opened Russet for the card and stayed for the plan. Ours has held for six months. Priya SenController, Sen Atelier
  - section #about .about
    - h2: Handle the month with a steadier hand
    - p: A ledger, a card, and a desk that answers when a month runs hot.
    - p: A month you can read. The same method we run with households, written down before the card moves.
    - article #outlay-card .card.card-out
      - h3: Outlay
      - button: Bars
    - article .card.card-radar
      - h3: Plan shape
    - p: Member score
    - p: ★★★★★ 3,800 at five
    - p: 86on the desk
  - section #procedures .band.band-end
    - article .reveal
      - p: Households
      - p: 18K+
      - p: In 41 regions, one desk reads the month with the household.
    - article .reveal
      - p: Plans kept
      - p: 96%
      - p: Still on a written plan six months after the first card arrived.
    - article .reveal
      - p: Desk years
      - p: 12
      - p: The Wrenfield room opened in 2014, above a bakery on Mallow Walk.
    - h2: Questions to ask before a balance moves.
    - p: A straight answer beats a softer promise.
    - button: Where does Russet open accounts?
    - p: Russet opens household accounts in 41 regions. If yours is not on the list, the desk writes when it is. This page does not open a real account.
    - button: Can I name a goal that is not a trip?
    - p: Yes. Rent, a tax quarter, a kiln, a clinic reserve. A plan is a number and a date, not a theme.
    - button: What sits on the card?
    - p: A metal debit card that spends against the month’s plan. It is not a separate credit line.
    - button: How do I open an account?
    - p: Leave an email below. On a real desk, someone confirms the region and sends a short form. This template sends nothing.
    - button: Can I link a bank I already use?
    - p: Yes, read-only, so the month can be sorted. Money still leaves only when you say so.
- footer .foot
  - p: russet
  - a: russet. → #top
  - p: A quieter month: one card, one plan, and a desk that picks up.
  - h3: Address
  - p: 18 Mallow Walk Wrenfield
  - h3: Phone
  - p: +1 (503) 555-0148
  - h3: Desk
  - p: Weekdays, 8:00–18:00
  - h3: Email
  - p: hello@russet.example
  - h2: Ready to open an account?
  - p: If a question is still open, the desk answers it.
  - form #join-form .join
    - label: Email address
    - button: Join Russet
  - p: If the month still feels loud, start here.
  - button: What is a Russet plan?
  - p: A number and a date: what the household may spend before the month closes.
  - button: Is the card a debit card?
  - p: Yes. It spends against the plan. It is not a credit line.
  - button: What does a free account include?
  - p: The plan, the card, and a weekday reply from the desk. The Plus badge on this page bills nothing.
  - button: Notes
  - button: Wire
  - button: Post
  - button: Privacy
  - button: Terms
  - button: Support
  - p: © 2026 Russet. Sample template.
- dialog #sign-dialog .sheet
  - p: Sample desk
  - button: ×
  - h2: Sign in
  - p: No account is checked. Do not type a password you use anywhere else — this form has no password field on purpose.
  - form #sign-form
    - label: Email
    - button: Continue
- dialog #demo-dialog .sheet
  - p: Three steps
  - button: ×
  - h2: Name the plan
  - ol .steps
    - li: A number and a date. Write what the household may spend before the month closes. The card reads that figure, not a slogan.
    - li: The card follows the plan. A purchase inside the number goes through. One past it waits for a yes from you.
    - li: The desk marks the line. Before the month closes, someone in Wrenfield shows what moved and what held.
  - button: Back
  - button: Next step
- dialog #sample-dialog .sheet
  - p: Sample
  - button: ×
  - h2: Note

## Images in the page
- `assets/portrait-nav.jpg`
- `assets/portrait-nia.jpg`
- `assets/portrait-leila.jpg`
- `assets/portrait-priya.jpg`
- `assets/hero-hand.jpg — A hand holding a blank brushed-metal Russet card`
- `assets/portrait-edmund.jpg`
- `assets/portrait-jonas.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[email] #join-email name=email placeholder='name@studio.example'
- input[email] name=email placeholder='name@studio.example'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-hand.jpg`
- `assets/portrait-edmund.jpg`
- `assets/portrait-jonas.jpg`
- `assets/portrait-leila.jpg`
- `assets/portrait-nav.jpg`
- `assets/portrait-nia.jpg`
- `assets/portrait-priya.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
