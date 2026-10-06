# Rebuild prompt — ShopForge (`shopforge`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/shopforge/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-converting AI e-commerce store builder landing page featuring an interactive niche storefront simulator, 5-step creation bento with live visualizer, stacked discount pricing card, and dark neon aesthetics.

## Title
ShopForge — AI E-Commerce Storefront Builder

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --dark-bg: #070a08;
  --dark-surface: #0e1410;
  --dark-card: #131b16;
  --neon-lime: #00ff66;
  --neon-lime-hover: #1df573;
  --neon-glow: rgba(0, 255, 102, 0.25);
  --white-bg: #ffffff;
  --white-surface: #f8fafc;
  --light-border: #e2e8f0;
  --text-dark: #0f172a;
  --text-muted: #64748b;
  --text-light: #f8fafc;
  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: ShopForge → #
  - ul .nav-menu
    - li: Product
    - li: Solutions
    - li: Resources
    - li: Pricing
    - li: Blog
  - a: Sign in → #faq
  - a: Get Started For Free → #flow
- section .hero
  - h1: Launch Your E-Commerce Store with our AI Store Builder
  - p: Build, optimize, and scale an enterprise-grade storefront in under 10 minutes with AI-assisted product intelligence.
  - a: Build my store for free → → #flow
  - ul .hero-features-list
    - li: ✓ Branded AI Store ready in 2 minutes
    - li: ✓ Unique & High Converting Product Pages
    - li: ✓ Branded Pages: Homepage, About Us
  - button: Health
  - button: Beauty
  - button: Fashion
  - button: Kids
  - button: Tech
  - button: Pets
  - button: Home
  - button: Outdoor
  - h3: Discover Wellness with Our Premium Health Products Collection
  - button: View Collection ↗
  - h4: Welcome to NourishNest
  - p: Your Pathway to Natural Wellness and Vitality. Premium organic supplements crafted for daily balance.
  - button: View Our Story
- section #flow .bento-flow-section
  - h2: Use AI to create in 10 minutes what others need many months for
  - h3: Choose store niche
  - p: Instant market intelligence curates high-margin niches with proven viral demand.
  - h3: Choose Branding
  - p: Dynamic theme generator builds matching typography, color tokens, and logo lockups.
  - h3: Get 30 Winning Products Added to store
  - p: Pre-vetted suppliers with automated 2-day delivery and 65%+ gross margin calculations.
  - a: Build my store for free → → #pricing
  - h3: Claim your free AI store
  - p: One-click provisioning to global edge CDN with SSL certificate and instant domain mapping.
  - h3: Start making money
  - p: Built-in one-page checkout, conversion funnels, and automated cart abandonment recovery.
- section #resources .value-stack-section
  - h2: Get $1,050+ worth of tools & resources — FREE
  - h4: AI Store Engine
  - p: A complete brand-new storefront ready to accept orders in 10 minutes flat.
  - h4: 30+ Winning Products
  - p: Get 30+ pre-vetted viral products with high profit margins imported instantly.
  - h4: High-Converting Product Pages
  - p: Unique layouts engineered with scarcity timers and social proof reviews.
  - h4: Branded Core Pages
  - p: Professionally written Homepage, About Us, Privacy Policy, and Track Order.
  - h4: StoreCopilot AI Free Trial
  - p: Automated conversion audit agent suggesting real-time revenue optimizations.
  - h4: Ultra-Fast Mobile Theme
  - p: Sub-second Lighthouse score theme designed to maximize mobile ad spend ROI.
- section .stats-band
  - a: Build my store for free → → #flow
- section #faq .faq-section
  - h2: Got Questions? We've Got Answers
  - a: Contact Us → #
- section #pricing .final-cta-section
  - h2: Launch Your Empire Now: $1 for Your First 3 Million-Dollar Months
  - p: Stop dreaming, start dominating. Our AI-powered store builder turns rookies into e-commerce titans overnight.
  - a: Build my store for free → → #flow
- footer
  - p: Autonomous e-commerce store creation and viral product discovery platform.
  - h5: Primary
  - ul
    - li: Modules
    - li: How it Works
    - li: Reviews
    - li: Pricing
  - h5: Company
  - ul
    - li: About
    - li: Contact
    - li: Careers
  - h5: Socials
  - ul
    - li: LinkedIn
    - li: X (Twitter)
    - li: Instagram
  - h5: Legal
  - ul
    - li: Privacy Policy
    - li: Terms
    - li: Trust Center

## Images in the page
- `assets/wellness_hero.jpg — Store Product`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #storeInput

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/wellness_hero.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
