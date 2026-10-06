# Rebuild prompt — Scree (`scree`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/scree/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Warm paper shop analytics: a two-tone headline, a live board for Hollis Bakehouse, and lichen boulders cropping the foot.

## Title
Scree — Simple analytics for a shop that is growing

## Description meta
See who comes to the shop, where they come from, and what makes them buy, on one quiet board.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font: "Geist", "Helvetica Neue", sans-serif;
  --surface-page: #F1EFEA;
  --text-primary: #111111;
  --text-muted: #6F6C67;
  --text-display-quiet: #BDBAB4;
  --text-sub: #A8A59F;
  --surface-board: #FFFFFF;
  --surface-sidebar: linear-gradient(#9A9A97, #6F6F6C);
  --action-primary: #111111;
  --action-on-primary: #FFFFFF;
  --border-hairline: #D9D5CC;
  --chart-search: #C8C4BC;
  --chart-window: #111111;
  --chart-direct: #8A8780;
  --on-sidebar: #FFFFFF;
  --radius-board: 8px;
  --radius-pill: 999px;
  --radius-control: 6px;
  --shadow-board: 0 28px 70px rgba(17, 17, 17, 0.14);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 280ms;
  --header-h: 82px;
  --section-y: 88px;
  --wrap: 1080px;
  }

  :root { --section-y: 56px; }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header #top .hero
  - a: scree → #top
  - button: Menu
  - nav #site-nav “Primary”
    - a: Features → #features
    - a: How it works → #method
    - a: Pricing → #pricing
    - a: Customers → #customers
    - button: English
    - a: Try it free → mailto:hello@scree.example
  - p: This sample is in English.
  - p: Website analytics, made simple
  - h1: Simple analytics for a shop that is growing
  - p: See who comes to the shop, where they come from, and what makes them buy, on one quiet board.
  - label: Search the board
  - ul .menu
    - li: Overview 2
    - li: Visitors
    - li: Sales
    - ul
      - li: Goals This week
      - li: This month
      - ul
        - li: Campaigns Autumn loaf
        - li: Letter
        - li: Window card
    - li: Reports
  - button: Live
  - p: Showing Overview
  - p: 9,640
  - p: Visitors this month
  - p: ↗ 14% +1,180 visitors
  - p: vs last month 8,460
  - ul .stats
    - li: $3,280 Sales
    - li: 214 Orders
    - li: 2.4% Visitors who buy
  - p: Where your visitors come from
  - p: Search46%
  - p: Window31%
  - p: Direct23%
  - table
    - caption: Four days at Hollis Bakehouse
    - th: Day
    - th: Mon 28 Sep
    - th: Tue 29 Sep
    - th: Wed 30 Sep
    - th: Thu 1 Oct
    - th: New visitors
    - td: 286
    - td: 304
    - td: 318
    - td: 402
    - th: Orders
    - td: 6
    - td: 8
    - td: 7
    - td: 16
    - th: Sales
    - td: $84
    - td: $112
    - td: $96
    - td: $268
- main #main
  - section #method .section.method
    - h2: How it works
    - ol
      - li: 01 Hear the visit The board names the morning. Search, the shop window, or someone who already knew the way.
      - li: 02 Count the sale Orders sit beside the visitors who buy, so a rush is a number you can check before the oven cools.
      - li: 03 Read the week Bakery adds a short letter of the week. Counter keeps the quiet month.
  - section #pricing .section.pricing
    - h2: Pricing
    - article
      - h3: Counter
      - p: $0
      - p: One shop. The visitor count, the orders, and the month.
    - article
      - h3: Bakery
      - p: $18/mo
      - p: Goals, campaigns, and the week letter.
    - a: Try it free → mailto:hello@scree.example
  - section #customers .section.quote
    - h2: Customers
    - footer
    - blockquote: The Thursday loaf sells out. Scree shows the morning that causes it. Hollis Bakehouse
- footer .site-foot
  - p: Scree · Sample template · hello@scree.example
  - nav .foot-nav “Footer”
    - a: Features → #features
    - a: How it works → #method
    - a: Pricing → #pricing
    - a: Customers → #customers

## Images in the page
- `assets/boulder-left.png`
- `assets/boulder-right.png`

## Fields
Keep these controls, including ids and placeholders.
- input[search] placeholder='Search'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/boulder-left.png`
- `assets/boulder-right.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
