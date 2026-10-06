# Rebuild prompt — Veltis (`veltis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/veltis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
The complete ecommerce engine for scaling subscriptions, high-risk payment processing, custom themes, chargeback prevention, and global DTC fulfillment.

## Title
Veltis — The Complete Ecommerce Engine

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-page: #FBFBFC;
  --bg-card: #FFFFFF;
  --bg-soft: #F4F4F6;
  --text-dark: #0D121F;
  --text-muted: #5E6778;
  --text-subtle: #8F9CAE;
  --brand-indigo: #4F46E5;
  --brand-violet: #6366F1;
  --brand-gradient: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  --accent-cyan: #06B6D4;
  --accent-emerald: #10B981;
  --accent-amber: #F59E0B;
  --accent-rose: #F43F5E;
  --accent-purple: #8B5CF6;
  --border-card: rgba(13, 18, 31, 0.07);
  --border-card-hover: rgba(79, 70, 229, 0.25);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-pill: 9999px;
  --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.03);
  --shadow-card: 0 12px 32px -4px rgba(13, 18, 31, 0.04), 0 4px 12px rgba(13, 18, 31, 0.02);
  --shadow-hover: 0 20px 40px -8px rgba(13, 18, 31, 0.08), 0 8px 16px rgba(13, 18, 31, 0.03);
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: veltis → #
  - ul .nav-menu
    - li: Services ▾
    - li: About Us
    - li: Benefits
    - li: Integrations
    - li: FAQs
  - a: Sign Up → #calculator
- main #about
  - section .hero-section
    - h1: The Complete Ecommerce Engine
    - p: Everything you need to scale from subscriptions to fulfillment, all under one roof
    - a: Explore Our Services → → #services
  - section #services .feature-module-section
    - h2: Transform One-Time Buyers Into Monthly Recurring Revenue
    - p: Most ecom stores lose 92% of customers after one purchase. Veltis CRM turns your Shopify store into a subscription powerhouse with custom checkouts, automated billing.
    - button: Calculate Your MRR Potential
  - section .feature-module-section
    - h2: Payment Processing Built for High-Risk Ecommerce
    - p: Stripe banned you. PayPal shut you down. Traditional processors don't understand your business. We do. Get approved for high-risk payment processing with 95%+ approval rates and industry expertise that keeps you running.
    - button: Get Approved Now
  - section .feature-module-section
    - h2: Premium Creatives That Scale Your Brand
    - p: Stop losing to bad creatives. We deliver 50 premium static ads monthly with 3 copy variations, complete market research, and strategic angles that convert. Plus free media buying included. Average clients go from 1.5x to 3x+ ROAS.
    - button: Calculate Your MRR Potential
    - h4: Take a Look to OUR BENEFITS
  - section .feature-module-section
    - h2: Stop Chargebacks Before They Cost You Thousands
    - p: Chargebacks cost sales, fees, and risk. Veltis Shield alerts you to disputes early, allowing direct resolution with customers. Protect approval rates and revenue with affordable alerts.
    - button: Protect Your Revenue
  - section .feature-module-section
    - h2: High-Converting Websites That Outperform Generic Themes
    - p: Your Shopify theme is leaving money on the table. Veltis Theme combines luxury design with conversion-optimized performance. Built to beat generic themes with better load times, mobile experience, and checkout flows.
    - button: Preview Theme Demo
  - section .feature-module-section
    - h2: Seamless Global Fulfillment From China & Hubs
    - p: Stop dealing with unreliable suppliers and delayed shipments. Veltis Ship provides premium China & US fulfillment with better sourcing, faster shipping, and payment terms that actually work for DTC brands.
    - button: Start Fulfilling
  - section #benefits .section-statement
    - h2: Launch, scale, and manage your ecom business.
    - button: Try Veltis Today →
    - h3: Predictable Revenue Growth
    - p: Transform one-time buyers into loyal subscribers with automated subscriptions and real-time analytics.
    - h3: Seamless Scaling & Automation
    - p: Manage payments, prevent chargebacks, and optimize every checkout with tools designed to eliminate busywork.
    - h3: Premium Creative & Support
    - p: Access high-converting ads, 24/7 expert help, and end-to-end creative support—so you stay ahead of competitors.
  - section #integrations .section-integrations
  - section #faqs .section-faqs
    - h2: Frequently Asked Questions
    - button: What is Veltis? +
    - button: How does Veltis differ from tools like Shopify or Stripe? +
    - button: Can I use just one Veltis service? +
    - button: How much does Veltis cost? +
    - button: How fast can I get started? +
  - section .section-final-cta
    - h2: Build. Sell. Scale. Repeat.
    - p: Whether you're launching your first product or scaling to eight figures, Veltis gives you every tool to own your ecommerce stack—from CRM to creatives, payments to fulfillment.
    - button: Explore Our Services →
- footer .site-footer
  - a: veltis → #
  - p: The unified scaling engine for high-velocity ecommerce operators.
  - a: ✉ Contact us on telegram Our associate will reply within 24h → #
  - h4: Features
  - ul
    - li: Subscription Management
    - li: Custom Checkout
    - li: Campaign Strategy
    - li: Chargeback Intercept
  - h4: Explore
  - ul
    - li: Features
    - li: MRR Calculator
    - li: Partners
    - li: About Team
  - h4: Help
  - ul
    - li: FAQs
    - li: Email Support
    - li: Help Center
    - li: Status
  - a: Terms of Service → #
  - a: Privacy Policy → #
  - a: Cookie Policy → #
- button: ×
- h3: Estimate Your Subscription Upside
- p: See how much recurring revenue Veltis CRM unlocks from your current one-time customer traffic.
- button: Start Free 14-Day Trial →

## Fields
Keep these controls, including ids and placeholders.
- input[range] #ordersSlider
- input[range] #aovSlider

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
