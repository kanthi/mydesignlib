# Rebuild prompt — Auctor (`auctor`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/auctor/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Creator asset synthetics protocol: turning creator audience momentum into liquid on-chain royalties with automated bonding curve liquidity and orderbook transition.

## Title
Auctor | Invest in Creators

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Geist+Mono:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --background: #f9efe3;
  --foreground: #0a0a0a;
  --font-figtree: 'Figtree', system-ui, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Auctor → #
- a: Market → #market
- a: Mechanism → #how-it-works
- a: FAQ → #faq
- a: Join Waitlist → #waitlist-email-input
- a: — → #
- a: Market → #market
- a: Mechanism → #how-it-works
- a: FAQ → #faq
- a: Join Waitlist → #waitlist-email-input
- section .relative.h-fit.w-full
  - h1: Creators Aren't Content, They're Assets
  - h2: You've been investing in creators emotionally. Try financially.
  - form #waitlistForm .flex.flex-col.sm:flex-row
    - button: Join Waitlist
  - p: Follow us on these platforms
- section #market .px-2.sm:px-4.lg:px-6
  - h3: A market where creators rise—and your wallet doesn't get left behind.
  - p: We’re building a decentralized platform where creators issue royalty-linked blockchain tokens with built-in initial liquidity. These tokens later transition to open market trading, enabling community participation in creator growth and sustainable monetization.
  - a: Let's Dive In → #how-it-works
  - h2: Sustainable Creator Capital
  - p: Creators raise upfront capital by issuing royalty-linked blockchain tokens, enabling long-term, transparent monetization without ads, sponsorship dependence, or equity dilution.
  - h2: Participation in Creator Growth
  - p: Supporters can acquire and hold creator-backed blockchain tokens that represent participation in a creator’s growth, with transparent pricing and on-chain settlement.
  - h2: Initial Royalty Offering (IRO)
  - p: Creators launch royalty-backed blockchain tokens through a structured issuance process that defines valuation, supply, and release conditions before public access.
  - h2: Bootstrapped Liquidity → Orderbook Markets
  - p: Early liquidity is provided through an automated bonding curve on-chain. Once maturity thresholds are met, tokens transition to an open orderbook-based market for price discovery.
  - h3: Discover, invest, and thrive in the new creator economy.
  - p: Launch your own creator token like it's your personal IRO moment
  - p: Buy and trade creator shares without the Wall Street drama
  - p: Build a flex-worthy portfolio powered by your favorite creators
- section #how-it-works .w-full.my-16.sm:my-20
  - h3: So… How Does This Whole Thing Actually Work?
  - p: Yes, it's fully on-chain, yes, liquidity is instant, and no, you don't have to understand bonding curves to use it like an absolute pro.
  - p: Creators begin by launching a royalty-backed blockchain token through a structured Initial Royalty Offering (IRO). Early participants acquire the first tokens at a predefined price. A portion of the proceeds is released to the creator as upfront capital, while the remainder is locked into a reserve that initializes on-chain liquidity.
- section #faq .w-full.h-fit.px-6
  - h3: Got questions? We've got answers.
  - p: Here's everything you need to know before getting started.
  - a: Contact us → #waitlist-email-input
  - button: 01 How do creators earn money on Auctor? −
  - p: Creators raise upfront capital by launching royalty-backed blockchain tokens through a structured Initial Royalty Offering (IRO). A portion of the proceeds is released to the creator, while the rest initializes on-chain liquidity. Over time, creators may also benefit from continued participation tied to activity around their token — all without ads, sponsorship dependence, or giving up ownership.
  - button: 02 Do I need financial or crypto knowledge to participate? +
  - p: Not at all. Auctor abstracts away most of the complexity. Pricing and liquidity are handled automatically by smart contracts, so you don’t need to understand trading mechanics or market math. You simply choose creators you believe in and interact through a simple, guided interface.
  - button: 03 How do buying and selling work? +
  - p: During the early phase, tokens use an automated bonding curve that provides on-chain liquidity, meaning interactions happen instantly without waiting for a counterparty. Once a token reaches predefined maturity thresholds, it transitions to an orderbook-based market where prices are discovered through open participation.
  - button: 04 What happens as a creator grows in popularity? +
  - p: As a creator’s ecosystem grows, demand for their token may increase. During the bonding-curve phase, this demand is reflected algorithmically in pricing. After the transition to an orderbook market, price discovery is driven by open participation. This allows the system to reflect creator momentum in a transparent, market-based way.
  - button: 05 How safe and transparent is the platform? +
  - p: All issuance, pricing logic, and token flows are handled by audited smart contracts. Funds are held on-chain, and key actions are verifiable in real time. The system is designed to minimize manual intervention and provide clear, rule-based behavior for both creators and participants.
  - button: 06 Can any creator launch a token? +
  - p: Creators go through a verification and eligibility process before launching. This helps maintain quality, reduce misuse, and ensure that only active, credible creators can issue royalty-backed tokens. Once approved, creators can launch through a structured and standardized process.
- section .w-full.h-screen.p-2
  - h2: Invest in creators before everyone else gets it.
  - p: Follow us on these platforms
  - a: Home → #
  - a: Market → #market
  - a: FAQ → #faq
  - form #footerSubscribe .w-full
    - button: Subscribe

## Images in the page
- `assets/logo-icon.png — Auctor Logo`
- `assets/hero-image.jpg — Hero Background`
- `assets/platform-streamline.png — Streamline platform token`
- `assets/platform-vibecast.png — VibeCast platform token`
- `assets/platform-soundwave.png — SoundWave platform token`
- `assets/platform-kinesis.png — Kinesis platform token`
- `assets/dashboard.png — Auctor Trading Terminal`
- `assets/bitcoin.png — Sustainable Creator Capital`
- `assets/earning.png — Capital Icon`
- `assets/portfolio.png — Participation in Creator Growth`
- `assets/trading.png — Participation Icon`
- `assets/ipo.png — Initial Royalty Offering (IRO)`
- `assets/rocket.png — IRO Icon`
- `assets/tbc.png — Bootstrapped Liquidity`
- `assets/curve.png — Bonding Curve Icon`
- `assets/bg.png — Features Background`
- `assets/feature11.jpg — Creator Token Badge`
- `assets/feature12.jpg — Creator Token Badge`
- `assets/feature21.webp — Trading Badge`
- `assets/feature22.webp — Trading Badge`
- `assets/feature23.png — Trading Badge`
- `assets/logo-icon.png — Auctor Portfolio Mark`
- `assets/rocket.png — IRO Phase`
- `assets/curve.png — Bonding Curve Phase`
- `assets/trading.png — Orderbook Phase`
- `assets/bg.png — How It Works Background`
- `assets/step1.png — Initial Royalty Offering (IRO)`
- `assets/bg.png — Footer Background`

## Fields
Keep these controls, including ids and placeholders.
- input[email] #waitlist-email-input name=email placeholder='Enter your email'
- input[email] placeholder='name@gmail.com'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/bg.png`
- `assets/bitcoin.png`
- `assets/curve.png`
- `assets/dashboard-clean.png`
- `assets/dashboard.jpg`
- `assets/dashboard.png`
- `assets/earning.png`
- `assets/feature11.jpg`
- `assets/feature12.jpg`
- `assets/feature21.webp`
- `assets/feature22.webp`
- `assets/feature23.png`
- `assets/hero-bg.jpg`
- `assets/hero-image.jpg`
- `assets/hero-overlay.png`
- `assets/ipo.png`
- `assets/logo-icon.png`
- `assets/platform-kinesis.png`
- `assets/platform-soundwave.png`
- `assets/platform-streamline.png`
- `assets/platform-vibecast.png`
- `assets/portfolio.png`
- `assets/rocket.png`
- `assets/step1.png`
- `assets/step2.jpeg`
- `assets/step3.jpeg`
- `assets/tbc.png`
- `assets/trading.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
