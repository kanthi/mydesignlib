# Rebuild prompt — Octasec (`octasec`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/octasec/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Instant bug bounty settlement platform on Solana & Stripe featuring interactive 3D isometric hardware pads, floating developer ledger terminal, volume monitors, and dark theme payout inspector.

## Title
Octasec — Instant Bug Bounty Payouts on Solana & Stripe

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-light: #F8FAFC;
  --bg-card: #FFFFFF;
  --primary-blue: #2347F0;
  --primary-blue-hover: #1938D8;
  --text-dark: #0F172A;
  --text-muted: #64748B;
  --border-light: #E2E8F0;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Octasec → #
  - a: Platform 01 → #platform
  - a: For Programs 02 → #programs
  - a: For Researchers 03 → #researchers
  - a: Pricing → #pricing
  - a: Docs → #docs
  - a: Sign in → #signin
  - a: Book a demo » → #demo
- main .hero-container
  - h1: Approve a bounty. Researcher sees the money the same day.
  - p: Custodial USD via Stripe. On-chain USDC on Solana. Payouts arrive in minutes, not months.
  - a: Book a demo » → #demo
  - a: See a live program → #live
- section #platform .section-deep-dive
  - h2: Approve a bounty. Researcher sees the money before lunch.
  - p: Custodial USD through Stripe arrives in 1 to 2 business days. On-chain USDC hits the researcher's wallet within minutes of your approval signature.
  - button: ⚡ SOLANA NETWORK
- footer .site-footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
