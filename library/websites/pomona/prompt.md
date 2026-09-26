# Rebuild prompt — Pomona (`pomona`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/pomona/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Revenue-share agency scroll site — blue hero, model/work/terms chapters, FAQ, partnership application.

## Title
Pomona — Partner in the upside

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --blue: #1a6fd4;
  --blue-deep: #0d4fa3;
  --ink: #0c0c0c;
  --cream: #f3efe6;
  --muted: #5c5c5c;
  --line: rgba(255,255,255,0.2);
  --font: "Segoe UI", system-ui, -apple-system, sans-serif;
  --serif: "Iowan Old Style", Georgia, "Times New Roman", serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: ◐ → #top
- a: Apply → → #apply
- nav .side-nav “Quick”
  - a: ↑ → #top
  - a: 1 → #model
  - a: 2 → #work
  - a: 3 → #terms
  - a: 4 → #questions
- nav .chapters “Chapters”
  - a: Ch. 1 The Model → #model
  - a: Ch. 2 The Work → #work
  - a: Ch. 3 The Terms → #terms
  - a: Ch. 4 Questions → #questions
- main #top
  - section .hero
    - h1: Pomona makes you appear.
    - p: Not an agency on the clock, a partner in the upside.
    - a: Request partnership → → #apply
    - p: We build custom software, rank it where customers search, and take our pay as a share of the revenue it earns. No retainers, no hours: if you don’t grow, we don’t get paid.
    - h3: We build it.
    - p: Tailored software, built to be found.
    - h3: We rank it.
    - p: Search and links that put you in front of buyers.
    - h3: We share in what it earns.
    - p: No hours billed — we co-own the outcome.
  - section #model .panel.cream
    - h2: No fees. A share of the upside.
    - p: You pay nothing to start: no retainer, no project fee, no hours on a clock. We carry the cost of strategy, development, content and links.
    - p: Full disclosure
    - p: Our pay is an agreed share of the revenue the work creates, measured against your baseline and visible to both sides. You keep everything we build: the software, the content, the rankings. And we take on a few partners at a time — because when we are paid on the outcome, yes has to be earned.
  - section .panel.photo
    - h2: We build it.
    - p: Custom software
    - p: Tailored software built to be found — storefronts, marketplaces, booking systems, the machinery a modern company sells through.
  - section #work .panel.blue
    - p: Search engine optimization
    - h2: Everything it takes to be found, under one roof.
    - p: Search and software are one discipline at Pomona. The product is built to rank from its first commit, and the SEO is done by the people who wrote the code.
    - p: Search engine optimization
    - h3: Search and software are one discipline.
    - p: Architecture, speed and structure decide rankings before the first word of copy is written. Ours ships fast, renders clean, and gives search engines a site they can read without excuses.
  - section #terms .panel.dark
    - p: partners at a time
    - h2: We say no more often than yes.
    - p: Our partners sell real products and services, have revenue to grow, and compete in markets where customers search: e-commerce, SaaS, marketplaces, service companies.
    - p: Full disclosure
    - p: If that’s you, the terms above are the whole pitch. If you’re pre-revenue, want to rent developers by the hour, or need results by Friday, we’re the wrong partner — and we’ll tell you so in the first call.
  - section #questions .panel.cream
    - h2: Questions before we partner
    - summary: What does it cost to work with Pomona?
    - p: Nothing upfront and nothing hourly. We fund strategy, software, content and link building. Our payment is an agreed percentage of new revenue that work generates. If revenue doesn’t grow, you owe us nothing.
    - summary: What share of revenue do you take?
    - p: Agreed per partnership before we start. It depends on how much building the opportunity needs. It applies only to growth above your existing baseline — never to revenue you already had.
    - summary: Why revenue share instead of fees?
    - p: Hourly billing pays for effort, not results. We removed the retainer, so the only way we get paid is to grow your revenue.
    - summary: How do you measure revenue created?
    - p: Before we begin, we agree on a baseline and attribution: analytics, order data or bookings. Both sides see the same dashboard.
    - summary: How long before it pays off?
    - p: Software and technical fixes land in weeks; rankings and revenue typically move within months. The model means the waiting costs you nothing — we’re financing the ramp.
  - section #apply .apply
    - h2: The application
    - p: Tell us what you sell and where you want to grow. Every application is read. When the model fits, we answer within a week.
    - form
      - button: Send the application →
- footer
  - a: hello@pomona.studio → mailto:hello@pomona.studio

## Fields
Keep these controls, including ids and placeholders.
- input[text] name=company placeholder='Company'
- input[email] name=email placeholder='Work email'
- textarea name=story placeholder='What you sell and where you want to grow'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `hero.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
