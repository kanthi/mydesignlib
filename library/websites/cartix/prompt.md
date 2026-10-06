# Rebuild prompt — Cartix (`cartix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/cartix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
The complete ecommerce engine (Apptics rebrand): pristine white SaaS canvas, 3D iridescent glass squircle hero on perspective grid, 8 alternating feature modules (CRM dashboard, high-risk payment constellation, D2C creative mockup, chargeback shield, before/after theme speed slider, China fulfillment route map, stealth agency accounts, and 3D stepped knowledge pillars), 8-app floating constellation, and accordion FAQ.

## Title
Cartix — The Complete Ecommerce Engine

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --f-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --c-bg: #FFFFFF;
  --c-bg-subtle: #F9FAFB;
  --c-bg-card: #F8FAFC;
  --c-border: #E5E7EB;
  --c-border-subtle: #F1F5F9;
  --c-text: #0F172A;
  --c-text-muted: #64748B;
  --c-text-subtle: #94A3B8;
  --c-blue-primary: #3B82F6;
  --c-blue-dark: #2563EB;
  --c-indigo: #4F46E5;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
  --shadow-card: 0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02);
  --shadow-float: 0 20px 40px -10px rgba(15, 23, 42, 0.08);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: cartix → index.html
  - nav .nav-menu
    - a: Services ⌵ → #services
    - a: About Us → #about
    - a: Benefits → #benefits
    - a: Integrations → #integrations
    - a: FAQs → #faqs
  - a: ← Library → ../../index.html
  - a: Sign Up → #services
- section .hero-section
  - h1: The Complete Ecommerce Engine
  - p: Everything you need to scale from subscriptions to fulfillment, all under one roof
  - a: Explore Our Services → → #services
- section #services .module-section
  - h2: Transform One-Time Buyers Into Monthly Recurring Revenue
  - p: Most ecom stores lose 92% of customers after one purchase. Cartix CRM turns your Shopify store into a subscription powerhouse with custom checkouts, automated billing
  - a: Calculate Your MRR Potential → #calculator
- section .module-section
  - h2: Payment Processing Built for High-Risk Ecommerce
  - p: Stripe banned you. PayPal shut you down. Traditional processors don't understand your business. We do. Get approved for high-risk payment processing with 95%+ approval rates and industry expertise that keeps you running
  - a: Get Approved Now → #services
- section .module-section
  - h2: Premium Creatives That Scale Your Brand
  - p: Stop losing to bad creatives. We deliver 50 premium static ads monthly with 3 copy variations, complete market research, and strategic angles that convert. Plus free media buying included. Average clients go from 1.5x to 3x+ ROAS.
  - a: Calculate Your MRR Potential → #services
- section .module-section
  - h2: Stop Chargebacks Before They Cost You Thousands
  - p: Chargebacks cost sales, fees, and risk. Cartix Shield alerts you to disputes early, allowing direct resolution with customers. Protect approval rates and revenue with affordable alerts.
  - a: Protect Your Revenue → #services
- section .module-section
  - h2: High-Converting Websites That Outperform Generic Themes
  - p: Your Shopify theme is leaving money on the table. Cartix Theme combines luxury design with conversion-optimized performance. Built to beat generic themes and premium competitors like Shrine with better load times, mobile experience, and checkout flows that convert.
  - a: Preview Theme Demo → #services
  - h3: 4.8s Page Load
  - p: Bloated scripts, clunky mobile checkout, 1.4% conversion rate.
  - h3: 0.8s Instant Load
  - p: Headless speed, 1-click Apple Pay checkout, 3.8% conversion rate.
- section .module-section
  - h2: Seamless Global Fulfillment From China
  - p: Stop dealing with unreliable suppliers and delayed shipments. Cartix Ship provides premium China fulfillment with better sourcing, faster shipping, and payment terms that actually work for DTC brands. All the benefits of Zendrop without the headaches.
  - a: Start Fulfilling → #services
- section .module-section
  - h2: Advertise Without Limits, Bans, or Spending Caps
  - p: Your ad account gets banned. Spending limits hinder scaling. We offer true whitelisted agency accounts for Meta, TikTok, and Google. Enjoy unlimited spend, better CPAs, priority support, and freedom from account issues.
  - a: Get Agency Access → #services
- section .module-section
  - h2: Master Ecommerce From Experts Doing 7-8 Figures
  - p: Most courses teach outdated tactics from fake gurus. Cartix Learn gives you real strategies from operators running successful 7-8 figure brands. Learn to build, scale, and optimize your store, then seamlessly implement with Cartix tools built for execution.
  - a: Start Learning → #services
- section .banner-cta-section
  - h2: Launch, scale, and manage your ecom business.
  - a: Try Cartix Today → → #services
- section #benefits .why-section
  - h2: All-in-one ecommerce engine built for growth
  - h3: Predictable Revenue Growth
  - p: Transform one-time buyers into loyal subscribers with automated subscriptions and real-time analytics.
  - h3: Seamless Scaling & Automation
  - p: Manage payments, prevent chargebacks, and optimize every checkout with tools designed to eliminate busywork.
  - h3: Premium Creative & Support
  - p: Access high-converting ads, 24/7 expert help, and end-to-end creative support—so you stay ahead of competitors.
- section #integrations .integration-section
- section #faqs .faq-section
  - h2: Frequently Asked Questions
  - button: What is Cartix? ✕
  - button: How does Cartix differ from tools like Shopify or Stripe? +
  - button: Can I use just one Cartix service? +
  - button: How much does Cartix cost? +
  - button: How fast can I get started? +
- section .bottom-cta-section
  - h2: Build. Sell. Scale. Repeat.
  - p: Whether you're launching your first product or scaling to eight figures, Cartix gives you every tool to own your ecommerce stack—from CRM to creatives, payments to fulfillment.
  - a: Explore Our Services → → #services
- footer .footer
  - a: cartix → index.html
  - a: 𝕏 → #
  - a:  → #
  - a: in → #
  - a: ✈ Contact us on telegram Our associate will reply within 24h → #
  - ul .footer-links-list
    - li: Subscription Management
    - li: Custom checkout
    - li: Campaign strategy
  - ul .footer-links-list
    - li: Features
    - li: Pricing
    - li: Calculator
  - ul .footer-links-list
    - li: FAQs
    - li: Email
    - li: Help centre
  - a: Terms of Service → #
  - a: Privacy Policy → #
  - a: Cookie Policy → #

## Images in the page
- `assets/hero_cube.svg — Cartix 3D Isometric Glass Cube Engine`
- `assets/crm_card.svg — Cartix CRM Dashboard`
- `assets/card_visual.svg — Cartix High-Risk Payment Visual`
- `assets/creative_card.svg — Cartix Max Creatives Showcase`
- `assets/shield_visual.svg — Cartix Shield Holographic Protection`
- `assets/shipping_card.svg — Cartix Ship Route Visual`
- `assets/stealth_card.svg — Cartix Stealth Agency Accounts`
- `assets/learn_card.svg — Cartix Learn 3D Stepped Pillars`
- `assets/constellation.svg — Cartix App Constellation`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/card_visual.svg`
- `assets/constellation.svg`
- `assets/creative_card.svg`
- `assets/crm_card.svg`
- `assets/hero_cube.svg`
- `assets/learn_card.svg`
- `assets/shield_visual.svg`
- `assets/shipping_card.svg`
- `assets/stealth_card.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
