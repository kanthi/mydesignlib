# Rebuild prompt — Vettora (`vettora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/vettora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Electric-violet publisher marketplace: live backlink ledger, dark trading-floor grid, 12-month replacement guarantee, and oversized wordmark footer.

## Title
Vettora — Backlinks that actually grow your rankings

## Description meta
Browse 2,400+ vetted publishers, place a dofollow order, and watch the link go live — with a 12-month replacement guarantee.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Sora", sans-serif;
  --font-body: "Outfit", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #ffffff;
  --surface-soft: #f4f4f8;
  --surface-dark: #111114;
  --surface-card: #ffffff;
  --text-primary: #121218;
  --text-secondary: #5e5e6c;
  --text-on-dark: #f5f4fa;
  --text-on-violet: #ffffff;
  --border-default: #e6e4ee;
  --action-primary: #6e4dff;
  --action-primary-hover: #5b3cf0;
  --hero-bloom-a: #b9a6ff;
  --hero-bloom-b: #7a5bff;
  --hero-bloom-c: #6244f0;
  --status-success: #1f9d5a;
  --status-danger: #e24b4b;
  --text-display: clamp(2.6rem, 6.2vw, 4.35rem);
  --text-3xl: clamp(2.1rem, 4vw, 3.15rem);
  --text-2xl: clamp(1.7rem, 2.6vw, 2.2rem);
  --text-xl: 1.35rem;
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-tight: 1.05;
  --leading-snug: 1.2;
  --leading-body: 1.55;
  --tracking-display: -0.04em;
  --tracking-label: 0.12em;
  --section-y: clamp(4.25rem, 9vw, 6.75rem);
  --wrap: min(1120px, 100% - 2.5rem);
  --wrap-hero: min(1180px, 100% - 2rem);
  --radius-card: 18px;
  --radius-row: 14px;
  --radius-inner: 12px;
  --radius-pill: 999px;
  --shadow-ledger: 0 24px 60px rgba(40, 20, 90, 0.22);
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header #top .hero
  - a: Vettora → #top
  - a: Browse → #marketplace
  - a: How it works → #process
  - a: Pricing → #pricing
  - button: Tools
  - a: Filter by DA → #marketplace
  - a: Niche packages → #offer
  - a: Replacement policy → #faq
  - a: For publishers → #publishers
  - button: 0
  - a: Log in → #pricing
  - a: Get started → #marketplace
  - h1: Backlinks that actually grow your rankings.
  - p: Browse 2,400+ vetted publishers, place your order, and watch your link go live.
  - a: Start building links → → #marketplace
  - a: Browse publishers → #marketplace
  - table .sheet
    - th: Website
    - th: DA
    - th: DR
    - th: Traffic
    - th: Country
    - th: TAT
    - th: Link
    - th: Price
    - td: K kilnreview.co Craft
    - td: 83
    - td: 84
    - td: 119.6K
    - td: ALL
    - td: 1 Day
    - td: Dofollow
    - td: $30
    - td: + Cart Order →
    - td: H harborwell.com Health
    - td: 79
    - td: 77
    - td: 88.1K
    - td: US
    - td: 4 Days
    - td: Dofollow
    - td: $145
    - td: + Cart Order →
    - td: O orbitstack.io Crypto
    - td: 77
    - td: 75
    - td: 97.2K
    - td: US
    - td: 3 Days
    - td: Dofollow
    - td: $175
    - td: + Cart Order →
    - td: N northspin.io Technology
    - td: 77
    - td: 73
    - td: 127.5K
    - td: US
    - td: 6 Days
    - td: Dofollow
    - td: $250
    - td: + Cart Order →
    - td: R radarfold.io Marketing
    - td: 75
    - td: 76
    - td: 64.4K
    - td: US
    - td: 4 Days
    - td: Dofollow
    - td: $165
    - td: + Cart Order →
- section .trust “Trusted by”
  - p: Trusted by 3,000+ SEO agencies & brands worldwide
- section #pricing .guarantees
  - h2: Every link, backed by real guarantees.
  - article .g-item
    - h3: Secure payments
    - p: Every transaction is escrowed and released only after the URL is live.
  - article .g-item
    - h3: 100% dofollow links
    - p: Every backlink passes real authority. No nofollow tags, no sponsored attributes.
  - article .g-item
    - h3: Real-time tracking
    - p: Monitor every link’s status the moment it goes live — and if it ever moves.
  - article .g-item
    - h3: 12-month guarantee
    - p: If a link goes down, we replace it. No questions, no extra cost.
- section #marketplace .market
  - h2: Browse vetted publishers. Order in few minutes.
  - p: Filter by niche, authority, and traffic to find the right fit for your site. Every publisher is manually reviewed before going live.
  - option: All niches
  - option: Craft
  - option: Health
  - option: Crypto
  - option: Technology
  - option: Marketing
  - option: Food
  - option: Finance
  - option: Media
  - option: Highest DA
  - option: Lowest price
  - option: Fastest TAT
  - button: Dofollow only
  - article .pcard
    - h3: kilnreview.co
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: harborwell.com
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: orbitstack.io
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: radarfold.io
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: quartzbench.io
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: ciderlane.co
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: loomcast.co
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: vaultnote.com
    - button: + Cart
    - button: Order →
  - article .pcard
    - h3: siltstone.studio
    - button: + Cart
    - button: Order →
  - p: Browse the full marketplace
  - a: Browse all sites → → #marketplace
- section #offer .offer
  - article .acc-item.open
    - button: 01 Guest post placements
    - p: Editorial placements on reviewed independent sites. You can brief our writers or send finished copy. Every URL is checked for dofollow before we release escrow.
  - article .acc-item
    - button: 02 Niche edits
    - p: Insert a contextual link into an already-ranking article. Faster TAT than a new post, same replacement cover. We only place on pages that have held organic traffic for 90+ days.
  - article .acc-item
    - button: 03 Local citation building
    - p: NAP-consistent citations on regional directories and local publishers. Built for multi-location brands that need maps pack movement, not a pile of unvetted listings.
  - article .acc-item
    - button: 04 Press release distribution
    - p: Indexed newswire plus a shortlist of niche outlets. Use it for launches and fundraising — not as a substitute for editorial links. Tracking still lives in the same dashboard.
- section #process .process
  - h2: Our simple & efficient process.
  - p: No back-and-forth, no guesswork. Just a straightforward path from finding the right publisher to tracking your results.
  - h3: Track & monitor
  - p: Watch your link’s status in real time from your dashboard, backed by a 12-month replacement guarantee.
- section #quotes .quotes
  - h2: Discover what our customers are saying
  - p: Real backlinks, real rankings — here’s what buyers say about working with Vettora.
  - article .q-card.reveal
    - blockquote: “The filtering made it so easy to find publishers that actually matched our niche. We saw ranking movement within weeks.”
  - article .q-card.reveal
    - blockquote: “Real-time tracking is a game changer. I always know exactly where my links stand without chasing anyone for updates.”
  - article .q-card.featured.reveal
    - blockquote: “The replacement guarantee gave us the confidence to scale up our orders. Support has been responsive every time.”
- section #faq .faq
  - h2: Frequently asked questions
  - article .faq-item
    - button: 1. Are all the backlinks dofollow?
  - article .faq-item
    - button: 2. How are publishers vetted?
  - article .faq-item
    - button: 3. What happens if a link gets removed?
  - article .faq-item
    - button: 4. How long does it take to get my link live?
  - article .faq-item
    - button: 5. Can I write my own content?
  - article .faq-item
    - button: 6. Is buying backlinks safe for my SEO?
  - article .faq-item
    - button: 7. What payment methods do you accept?
  - article .faq-item
    - button: 8. How do I become a publisher and start earning?
- footer #publishers .foot
  - h2: Start building backlinks that actually work.
  - a: Get started now → → #marketplace
  - h3: Product
  - a: Marketplace ↗ → #marketplace
  - a: How it works ↗ → #process
  - a: Pricing ↗ → #pricing
  - a: Backlinks by niche ↗ → #offer
  - a: Free tools ↗ → #offer
  - a: Publishers ↗ → #publishers
  - h3: Company
  - a: Blog ↗ → #quotes
  - a: Contact ↗ → mailto:hello@vettora.example
  - h3: Legal
  - a: Terms ↗ → #faq
  - a: Privacy ↗ → #faq
  - a: Refund ↗ → #faq
  - a: support@vettora.example → mailto:support@vettora.example
  - a: X → #top
  - a: LinkedIn → #top
  - a: Instagram → #top
  - p: © 2026 Vettora. Sample template. All rights reserved.
- nav
  - a: Browse → #marketplace
  - a: How it works → #process
  - a: Pricing → #pricing
  - a: Tools → #offer
  - a: For publishers → #publishers
  - a: Get started → #marketplace

## Fields
Keep these controls, including ids and placeholders.
- input[search] #q placeholder='Search domain or niche…'
- select #niche
- select #sort

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
