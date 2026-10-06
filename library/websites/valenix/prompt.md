# Rebuild prompt — Valenix (`valenix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/valenix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Ethereal alabaster Web3 infrastructure: frosted glass processor in golden ripple rings, live swap terminal, zk-logic board, 12-chain interop grid, and tubular 3D glass watermark.

## Title
Valenix — Powering Decentralized Innovation

## Description meta
Secure, scalable blockchain infrastructure that enables developers and businesses to create future-ready digital ecosystems.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #ece9e3;
  --bg-soft: #f4f2ee;
  --bg-card: rgba(255, 255, 255, 0.78);
  --bg-card-hover: rgba(255, 255, 255, 0.92);
  --border-card: rgba(255, 255, 255, 0.9);
  --border-subtle: rgba(20, 21, 24, 0.08);
  --border-hairline: rgba(255, 255, 255, 0.6);
  --text-primary: #141518;
  --text-muted: #848690;
  --text-body: #555761;
  --gold-primary: #d79738;
  --gold-light: #f7d28b;
  --gold-deep: #b87b22;
  --gold-glow: rgba(215, 151, 56, 0.24);
  --gold-caustic: rgba(245, 194, 118, 0.45);
  --shadow-sm: 0 4px 12px rgba(20, 21, 24, 0.03);
  --shadow-md: 0 12px 32px -4px rgba(20, 21, 24, 0.06);
  --shadow-lg: 0 24px 60px -8px rgba(20, 21, 24, 0.08);
  --shadow-card: 0 20px 48px -10px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.95);
  --shadow-gold: 0 8px 24px rgba(215, 151, 56, 0.28);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 9999px;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition-smooth: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-spring: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-wrapper
  - nav .nav-bar “Main Navigation”
    - a: VALENIX → #
    - ul .nav-links
      - li: Home
      - li: Features
      - li: How It Works
      - li: Chains
      - li: About Us
    - a: Get Started → #newsletter
- section #hero .hero-section
  - h1: Build The Future Of Decentralization
  - p: Secure, scalable blockchain infrastructure for the future.
  - a: Get Started → #how-it-works
  - button: Watch Demo
- section #capabilities .capabilities-section
  - h2: Power Meets Simplicity
  - p: Advanced blockchain technology made accessible, scalable, and easy to integrate.
  - h3: Secure Infrastructure
  - p: Enterprise-grade encryption ensuring your data and transactions stay protected at all times.
  - h3: Lightning-Fast Transactions
  - p: Process thousands of transactions per second with minimal latency and maximum efficiency.
  - button: Exchange
  - button: Trade
  - button: Buy
  - button: Sell
  - button: Trade Now
  - h3: Smart Contracts
  - p: Automate workflows with reliable, trustless execution powered by blockchain logic.
  - h3: Multi-Currency Support
  - p: Seamlessly manage and transact across multiple cryptocurrencies in one unified platform.
- section #how-it-works .how-section
  - h2: Built for the Next Block
  - p: Scalable blockchain infrastructure built for modern applications and seamless integration.
  - a: Get Started → #newsletter
  - h3: 1. Connect Your Wallet
  - p: Securely link your wallet to access and interact with the platform.
  - h3: 2. Deploy Your Smart Contract
  - p: Easily deploy and manage smart contracts with powerful built-in tools.
  - h3: 3. Scale Your Application
  - p: Monitor performance and scale seamlessly across multiple blockchain networks.
- section #chains .blockchains-section
  - h2: Connect Across Leading Blockchains
  - p: Seamlessly integrate and operate across multiple networks with full interoperability and performance.
  - button: Explore All Chains
- section #redefining .redefining-section
  - h2: Redefining Trust in a Decentralized World
  - p: We build powerful blockchain infrastructure that enables developers and businesses to create secure, scalable, and future-ready digital ecosystems.
  - a: Get Started → #newsletter
  - button: Watch Demo
- section #newsletter .newsletter-section
  - h2: Get the Latest in Blockchain Innovation
  - p: Subscribe to receive updates, insights, and exclusive resources—straight to your inbox.
  - form #form-newsletter .newsletter-input-box
    - button: Subscribe
- footer .site-footer
  - p: Powering the future of decentralized innovation through secure, scalable, and intelligent blockchain infrastructure.
  - a: @ → #
  - a: 𝕏 → #
  - a: 📷 → #
  - h4: Product
  - ul .footer-links-list
    - li: Features
    - li: Pricing
    - li: Integrations
    - li: API
  - h4: Company
  - ul .footer-links-list
    - li: About Us
    - li: Careers
    - li: Blog
    - li: Press
  - h4: Resources
  - ul .footer-links-list
    - li: Documentation
    - li: Help Center
    - li: Community
    - li: Status
- button: ×
- h3: Valenix Protocol Walkthrough
- p: Sub-second block confirmation in action. Watch how zero-knowledge state proofs propagate through our validator clusters in real time.
- button: Close Walkthrough

## Images in the page
- `assets/hero-chip.png — Valenix Frosted Glass Microchip Processor`
- `assets/security-shield.png — 3D Frosted Glass Security Shield`

## Fields
Keep these controls, including ids and placeholders.
- input[number] #trade-input-amount
- input[text] #trade-output-amount
- input[email] placeholder='Enter your email'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-chip.jpg`
- `assets/hero-chip.png`
- `assets/security-shield.jpg`
- `assets/security-shield.png`
- `assets/valenix-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
