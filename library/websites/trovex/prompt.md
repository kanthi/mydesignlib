# Rebuild prompt — Trovex (`trovex`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/trovex/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Mobile app rewards and quest platform featuring 3D dynamic multi-device stage, interactive balance HUD with coin particle bursts, live global payout telemetry, and verified partner marketplace.

## Title
Trovex — Complete Quests, Earn Real Value

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #07080d;
  --bg-surface: #0f1019;
  --bg-card: #151724;
  --bg-card-hover: #1b1d2e;
  --border: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(139, 92, 246, 0.5);
  --purple-primary: #8b5cf6;
  --purple-glow: rgba(139, 92, 246, 0.35);
  --purple-dark: #6d28d9;
  --fuchsia: #ec4899;
  --cyan: #06b6d4;
  --emerald: #10b981;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav .nav-links
    - a: How It Works → #how-it-works
    - a: Rewards → #rewards
    - a: Security → #trust
    - a: FAQ → #faq
  - a: ← Library → ../../
  - button: Download App
- section .hero-section
  - h1: Complete quests, earn rewards with Trovex.
  - p: Turn your free time into tangible value. Earn real digital rewards, gift cards, and instant crypto payouts by completing verified tasks.
  - button: Get it on Google Play
  - button: Download on App Store
  - button: Details
  - button: Claim Reward
- section #how-it-works .section-padding
  - h2: Earn in 3 simple steps
  - p: No complicated surveys, no endless ad walls. Verified partners, direct gameplay, and instant liquidity.
  - h3: Select Verified Quests
  - p: Choose from mobile games, app stress tests, beta software walkthroughs, and audio feedback challenges tailored to your devices.
  - h3: Automated Verification
  - p: Our lightweight SDK confirms your in-app milestones instantly via encrypted telemetry—no manual screenshots or waiting for approval.
  - h3: Instant Cash Out
  - p: Redeem earned Quest Points for digital vouchers, cryptocurrency, or cash deposits. Average settlement arrives in under 12 minutes.
- section #rewards .section-padding.rewards-section
  - h2: Choose how you get rewarded
  - p: Over 200+ brands and instant payout rails supported across 65 countries worldwide.
  - h4: Stream & Game Pass
  - button: Redeem
  - h4: E-Commerce Code
  - button: Redeem
  - h4: USDC Instant Transfer
  - button: Redeem
  - h4: Bank & Wire Deposit
  - button: Redeem
- section #trust .section-padding
  - h2: Built on fair play and transparency
  - p: We never sell personal credentials. You get paid what you're promised, every time.
  - h3: Zero Sensitive Data Retention
  - p: Quests verify strictly through cryptographic proof tokens. We never ask for browser tracking, contacts, or root privileges.
  - h3: 12-Minute Average Payout
  - p: Automated settlement engines process 94% of redemption requests within 12 minutes—no 14-day clearance delays.
  - h3: Audited Sponsor Network
  - p: All game studios and enterprise testing partners undergo strict compliance screening before listing campaigns.
- section #faq .section-padding
  - h2: Frequently Asked Questions
- h2: Start earning with Trovex today
- p: Join over 42,000 daily players cashing out rewards every week. Available free on iOS and Android.
- button: Download on App Store
- button: Get it on Google Play
- footer
  - p: The premier verified mobile quest and rewards infrastructure for modern digital earners.
  - h4: Platform
  - ul
    - li: How It Works
    - li: Rewards Catalog
    - li: Security & Trust
    - li: FAQ
  - h4: Legal
  - ul
    - li: Privacy Policy
    - li: Terms of Service
    - li: Security Bounty
    - li: Catalog Archive

## Images in the page
- `assets/token-coin.webp — Trovex Coin`
- `assets/glass-prism.webp — Trends`
- `assets/giftcards-fan.webp — Rewards`
- `assets/gift-box.webp — Bonuses`
- `assets/quest-chronorift.webp — Games`
- `assets/quest-chronorift.webp — Gaming Pass`
- `assets/quest-neonstrike.webp — Digital Vouchers`
- `assets/quest-cybervault.webp — Instant Crypto`
- `assets/quest-aetherforge.webp — Direct Cash`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/gift-box.webp`
- `assets/giftcards-fan.webp`
- `assets/glass-prism.webp`
- `assets/quest-aetherforge.webp`
- `assets/quest-chronorift.webp`
- `assets/quest-cybervault.webp`
- `assets/quest-neonstrike.webp`
- `assets/token-coin.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
