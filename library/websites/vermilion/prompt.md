# Rebuild prompt — Vermilion (`vermilion`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/vermilion/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Global crypto card and multi-currency banking platform — radiant vermilion accent glow, dual-mode virtual & physical card simulator, 7-part financial bento grid, and live asset swap calculator.

## Title
Vermilion — Spend Your Crypto, Anywhere You Go

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-surface-canvas: #FFFFFF;
  --color-surface-subtle: #F8F9FA;
  --color-surface-card: #FFFFFF;
  --color-surface-dark: #0F172A;
  --color-text-primary: #0F172A;
  --color-text-secondary: #475467;
  --color-text-muted: #98A2B3;
  --color-border-subtle: #EAECF0;
  --color-border-strong: #D0D5DD;
  --color-accent-primary: #E11D48;
  --color-accent-hover: #BE123C;
  --color-accent-soft: #FFF1F2;
  --color-accent-glow: rgba(225, 29, 72, 0.16);
  --font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --radius-pill: 9999px;
  --radius-card: 24px;
  --radius-phone: 46px;
  --radius-sm: 12px;
  --shadow-sm: 0 2px 4px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 24px 48px -12px rgba(15, 23, 42, 0.12), 0 8px 24px -4px rgba(15, 23, 42, 0.06);
  --shadow-phone: 0 32px 64px -16px rgba(15, 23, 42, 0.16), 0 12px 32px -8px rgba(225, 29, 72, 0.12);
  --transition-smooth: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Vermilion → #
  - ul .nav-links
    - li: Personal Virtual Debit Card Physical Metal Card Multi-Currency Vault P2P Marketplace
    - li: Business Corporate Expense Cards Payroll Settlement Developer API Rails
    - li: Company
    - li: Resources
    - li: Support
  - button: Get the app
- section .hero-section
  - h1: Spend Your Crypto, Anywhere You Go
  - p: Turn stablecoins into an international Visa card you can tap, swipe, and spend across 160+ countries today.
  - button: Get the app
- section .value-section
  - h2: Hold, spend, and send stablecoins with one app, licensed, secure, and built for everywhere you actually live.
- section .stats-section
  - h2: Everything Your Bank Left Out, In Your Pocket
  - button: Download now
- section #features .bento-section
  - h2: Your Money Moving Wherever You Are
  - p: The all-in-one financial ecosystem connecting digital capital with real-world merchants without friction.
  - h3: Send Globally
  - p: You send stablecoins, they land as cash.
  - h3: Multi-Currency Wallet
  - p: You hold it all, convert when you need.
  - h3: Send in App
  - p: You send it, they get it, instantly.
  - h3: P2P Marketplace
  - p: You trade direct, no middleman, no markup.
  - h3: Unlock Your Credit Power
  - p: Borrow against crypto without selling.
  - h3: Earn and Spend
  - p: You earn daily rewards on your stablecoins, then spend them whenever you need.
  - button: Subscribe
  - h3: Swap your crypto
  - p: You convert between assets in a few taps. Fast, simple, no extra app needed.
  - button: Continue Swap
- section .card-showcase-section
  - h2: Add your crypto card to your wallet in minutes
  - button: Virtual
  - button: Physical
  - button: Get the card
- section .reviews-section
  - h2: 8 Million People Already Trust Vermilion
  - p: "The experience with Vermilion is really amazing for me. Tapping my card for transit and coffee while keeping my portfolio in stablecoins is revolutionary."
  - p: "Vermilion is so smooth, from fueling up my car to late night travel flights! Zero unexpected markups and instant push notifications on every swipe."
  - p: "Off-ramping USDC to my card takes literally 2 seconds at the counter. Their support resolved my identity tier questions within five minutes."
  - p: "We deployed Vermilion corporate cards across our distributed engineering team. Managing cross-border allowances without bank delays has been effortless."
- section .security-bar
- section .cta-banner-section
  - h2: Ready to spend your crypto everywhere?
  - p: Join over 8 million cardholders worldwide and get your digital card activated in under two minutes.
  - button: Get the app
- footer .site-footer
  - a: Vermilion → #
  - p: Global payments infrastructure connecting stablecoins and international card networks with zero friction.
  - ul .footer-links
    - li: Virtual Card
    - li: Physical Card
    - li: Multi-Currency
    - li: P2P Escrow
    - li: Earn & Yield
  - ul .footer-links
    - li: Remote Teams
    - li: Freelancers
    - li: Cross-Border E-comm
    - li: Developer APIs
  - ul .footer-links
    - li: About Us
    - li: Careers
    - li: Press Kit
    - li: Security
  - ul .footer-links
    - li: Help Center
    - li: Card Activation
    - li: Fee Schedule
    - li: Status Page
- button: ✕
- h3: Scan to Get Vermilion
- p: Scan the QR code with your smartphone camera to download the mobile app for iOS or Android.

## Images in the page
- `assets/hand_phone.jpg — Hand holding Vermilion mobile application`

## Fields
Keep these controls, including ids and placeholders.
- input[number] #swapFromInput

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hand_phone.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
