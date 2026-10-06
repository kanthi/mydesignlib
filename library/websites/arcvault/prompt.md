# Rebuild prompt — Arcvault (`arcvault`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/arcvault/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Enterprise cloud file storage and cryptographic collaboration template featuring a dual-tone dark-to-light spatial continuum, interactive bento feature grid, and live telemetry dashboards.

## Title
Arcvault — Secure Your Files, Access Them Anywhere

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --twilight-bg: #090b14;
  --twilight-surface: #121524;
  --purple-accent: #6d5dfc;
  --purple-light: #8b7cfc;
  --purple-glow: rgba(109, 93, 252, 0.25);
  --light-bg: #ffffff;
  --light-surface: #f8fafc;
  --light-border: #e2e8f0;
  --dark-text: #0f172a;
  --dark-muted: #64748b;
  --light-text: #f8fafc;
  --light-muted: #94a3b8;
  --emerald: #10b981;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: Arcvault → #
  - ul .nav-links
    - li: Features
    - li: About Us
    - li: Pricing
    - li: Resources
  - a: Sign Up For Free → #pricing
- section .hero
  - a: Version 2.0 is here Read more → → #technology
  - h1: Secure Your Files, Access Them Anywhere
  - p: Secure, scalable, and accessible from anywhere. Our cloud storage solution offers you the perfect way to safeguard your data and collaborate effortlessly.
  - a: Get Started → #pricing
  - a: Watch Video → #technology
  - button: Create a new invoice
- section .proof-strip
- section #features .bento-section
  - h2: Why Choose Us for Cloud Storage?
  - p: From unmatched security to blazing-fast performance, discover the features that set us apart from the rest.
  - h3: Enterprise-Grade Security
  - p: Your data is protected with end-to-end encryption and multi-layered security protocols.
  - h3: Lightning-Fast Speed
  - p: Experience upload and download speeds optimized for business and personal use.
  - h4: Flexible Scalability
  - p: Your data is protected with end-to-end encryption and multi-layered security protocols. Easily scale your storage needs as your data grows.
  - a: Learn More → → #pricing
  - h4: Seamless Collaboration
  - p: Collaborate in real-time with fine-grained access control, time-locked shared links, and enterprise audit logs for team compliance.
  - a: Learn More → → #pricing
  - h4: Global Accessibility
  - p: Edge replication guarantees sub-10ms read access across 42 global availability zones, keeping files instantly available worldwide.
  - a: Learn More → → #pricing
- section #technology .tech-section
  - h2: Powered by Advanced Technology
  - p: Our state-of-the-art infrastructure ensures secure, fast, and reliable storage for individuals and businesses alike.
  - table .dash-table
    - th: Project
    - th: Views
    - th: Clicks
    - th: Throughput
    - td: Apple Devices
    - td: 84
    - td: 54
    - td: €584.98 ↗
    - td: Audi Campaign
    - td: 244
    - td: 123
    - td: €9,841.23 ↗
    - td: Fashion Week
    - td: 188
    - td: 24
    - td: €2,870.98 ↗
  - a: Get started → #pricing
- section #pricing .pricing-section
  - h2: Flexible pricing plans
  - p: Power Your Global Transactions — Choose the Right Fit for Your Business.
  - ul .pricing-feature-list
    - li: User-Friendly Dashboard
    - li: Secure Transactions
    - li: Top-Tier Security
    - li: Advanced Analytics
    - li: Multi-Currency Support
    - li: Standard API Integration
  - a: Get Started → #
  - ul .pricing-feature-list
    - li: User-Friendly Dashboard
    - li: Secure Transactions
    - li: Top-Tier Security
    - li: Advanced Analytics
    - li: Multi-Currency Support
    - li: Full API Integration
    - li: Customizable Dashboard
    - li: Dedicated Account Manager
  - a: Get Started → #
- section .cta-banner-wrap
  - h2: Start Your Cloud Journey Today
  - p: Storage tailored to your needs. Join thousands of engineering and business teams who trust us with their data.
  - a: Start Free Trial → #pricing
- footer #about
  - p: Next-generation cryptographic file storage and enterprise collaboration infrastructure.
  - h5: About Us
  - ul .footer-links
    - li: Company
    - li: Careers
    - li: Leadership
    - li: Security Audits
  - h5: Resources
  - ul .footer-links
    - li: Solutions
    - li: How It Works
    - li: Talk to Sales
    - li: Integrations
    - li: Docs & SDKs
    - li: Merchant Sign In
  - h5: Solutions
  - ul .footer-links
    - li: Help Center
    - li: How It Works
    - li: Shoppers Sign In
    - li: API Status
  - a: Terms of Service → #
  - a: Privacy Policy → #

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
