# Rebuild prompt — Counterpart AGY (`counterpart-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/counterpart-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-converting flagship commerce & brand systems — editorial serif headlines, dual-capsule geometry, interactive project dossiers, comparison matrix, 'This or That' team switchers, and studio bag drawer.

## Title
Counterpart AGY — Flagship Commerce & Brand Systems

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #fefdf9;
  --bg-alt: #f6f5ee;
  --bg-card: #ffffff;
  --bg-elevated: #ffffff;
  --bg-dark: #121316;
  --bg-dark-card: #1c1d22;
  --ink: #18191c;
  --ink-secondary: #4a4b50;
  --ink-muted: #787980;
  --ink-subtle: #a5a6ad;
  --ink-inverse: #fefdf9;
  --blue: #0057ff;
  --blue-hover: #0046cc;
  --blue-subtle: #eaf1ff;
  --blue-border: #b8d4ff;
  --blue-glow: rgba(0, 87, 255, 0.15);
  --yellow: #f5ff80;
  --yellow-dark: #3b4200;
  --yellow-border: #e3f052;
  --border: #e8e6dc;
  --border-light: #f0eee6;
  --border-dark: #2a2b32;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-pill: 9999px;
  --container-max: 1320px;
  --transition-fast: 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-base: 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: INQUIRE FOR DISCOVERY SPRINT → → #inquiry
- header .site-header
  - a: Counterpart AGY → #
  - nav .nav-links “Main Navigation”
    - a: Projects → #projects
    - a: Services → #services
    - a: Approach → #approach
    - a: Team → #team
    - a: Merch → #merch
    - a: Contact → #inquiry
  - button: Bag 0
  - a: Work With Us → #inquiry
- main
  - section .hero-section.grid-frame.container
    - h1: We design & develop exceptional storefronts and the brands behind them.
    - p: Conversion optimized doesn't mean design comes second. We combine senior principal talent and hyper-efficient sprints to deliver digital flagships that convert visitors into lasting brand advocates.
    - a: Start A Project → → #inquiry
    - a: Explore Selected Works ↓ → #projects
  - section #projects .section-launches.grid-frame.container
    - h2: Recent Launches Built To Convert
    - a: Request Full Dossier → → #inquiry
    - article .project-card
      - h3: Aura Botanical
      - p: Complete brand identity and bespoke Shopify Plus architecture featuring an interactive regimen builder and one-click recharge checkout.
    - article .project-card
      - h3: Verve Atelier
      - p: High-performance digital flagship with procedural fabric visualizer, dynamic sizing recommendations, and instant cart drawer.
    - article .project-card
      - h3: Sól Provisions
      - p: Vibrant identity and high-velocity DTC storefront featuring tiered shipping unlocks, bundle builders, and personalized flavor subscriptions.
    - article .project-card
      - h3: Kura Objects
      - p: Editorial gallery storefront with multi-currency checkout, artisan studio dispatches, and curated drop reservation mechanics.
  - section .section-metrics
    - h2: We measure our craft by the revenue we generate for our partners.
  - section .section-philosophy.grid-frame.container
    - h3: Brand As A Moat
    - p: Commodity DTC sites race to the bottom on discount codes. We craft memorable visual languages, bespoke typography, and art direction that command premium pricing.
    - h3: Sub-Second Velocity
    - p: Bloated Shopify apps kill conversion. We write clean, lightweight custom Liquid and Hydrogen components that score 95+ on Google Lighthouse and fly on mobile.
    - h3: Frictionless Architecture
    - p: From smart sticky carts to predictive upsells and streamlined checkout extensibility, every single interaction is engineered to maximize Average Order Value.
  - section .section-marquee
  - section #services .section-services.grid-frame.container
    - h2: 3 Services We’ve Spent A Decade Perfecting
    - h3: Flagship Storefronts
    - p: Custom Shopify Plus theme architecture and headless builds that look like art galleries and perform like high-frequency trading engines.
    - ul .service-features-list
      - li: Bespoke Liquid Theme Architecture
      - li: Custom PDP Interactive Builders
      - li: Hydrogen & Headless Exploration
      - li: 95+ Lighthouse Speed Optimization
      - li: ERP, CRM & 3PL Integrations
    - a: Scope Build → → #inquiry
    - h3: CRO & Cart Systems
    - p: A well-built storefront wins on its own. We audit user friction, architect frictionless slide-out drawers, and deploy high-leverage A/B experiments.
    - ul .service-features-list
      - li: Smart Slide-Out Cart Architecture
      - li: Tiered Free-Gift & Shipping Unlocks
      - li: One-Click Checkout Extensibility
      - li: Post-Purchase Upsell Funnels
      - li: Continuous Multivariate Testing
    - a: Scope CRO → → #inquiry
    - h3: Brand Systems
    - p: Digital-first brand identities built for the modern omni-channel ecosystem: typography systems, color matrices, design tokens, and packaging.
    - ul .service-features-list
      - li: Digital-First Visual Identity
      - li: Custom Design Tokens & Figma Kits
      - li: Art Direction & 3D Render Guidelines
      - li: Physical Packaging Cohesion
      - li: Omni-Channel Brand Playbooks
    - a: Scope Brand → → #inquiry
  - section #approach .section-approach
    - h2: Our Approach Sets Us Apart From Old Agencies
    - table .matrix-table
      - th: Traditional Agency Model
      - th: Counterpart AGY Model
      - td: Team Structure Siloed junior designers and outsourced developers managed through multiple layers of account managers.
      - td: Senior Hands-On Principals Direct daily access to seasoned founders and lead architects with 10+ years of proven Shopify craftsmanship.
      - td: Cost Model Bloated retainers and hourly billables loaded with agency overhead, office rent, and non-working staff.
      - td: Lean High-Velocity Sprints Fixed-scope sprint pricing with transparent deliverables, guaranteed timelines, and zero surprise billings.
      - td: Execution Style Endless bureaucratic status meetings and multi-week approval cycles that slow momentum.
      - td: Async Slack & Loom Execution Fast, agile iterations, shared staging sandboxes, and transparent async collaboration in your Slack channel.
      - td: Technical Strategy Cookie-cutter theme hacks with 30+ conflicting third-party apps that cripple mobile load speeds.
      - td: Clean Bespoke Architecture Lightweight modular Liquid/Hydrogen code with zero app bloat, custom micro-interactions, and instant checkout.
  - section #team .section-team.grid-frame.container
    - h2: Senior Partners Who Actually Build Your Store
    - h3: Elena Vance
    - p: Former Principal Designer at Shopify with over 12 years crafting flagship ecommerce experiences. Passionate about typography, tactile digital interactions, and high-conversion UX.
    - h3: Marcus Thorne
    - p: Serial founder with two successful DTC exits ($40M+ total volume). Drives unit economics, cart architecture, retention funnels, and enterprise Shopify Plus partnerships.
    - h3: Dante Chen
    - p: Architect of custom Liquid frameworks and Hydrogen head-ends. Obsessed with sub-second page loads, checkout extensibility, and headless state management.
  - section #merch .section-merch
    - h2: Crafted Artifacts For Digital Builders
    - button: View Bag (0)
    - h3: Heavyweight Studio Tee
    - button: Add To Bag +
    - h3: Dualis Oversized Hoodie
    - button: Add To Bag +
    - h3: Archival Duck Canvas Tote
    - button: Add To Bag +
    - h3: Matte Ceramic Studio Tumbler
    - button: Add To Bag +
  - section #inquiry .section-inquiry
    - h2: You got your brand this far. We’ll engineer the Counterpart.
    - p: Tell us about your brand, current challenges, and growth goals. We reply within 24 hours with an actionable sprint prospectus.
    - a: hello@counterpart-agy.example → mailto:hello@counterpart-agy.example
    - form
      - label: Services Needed
      - label: Brand & Website URL
      - label: Your Work Email
      - label: Current Annual Volume
      - option: < $1M Annual GMV
      - option: $1M – $5M Annual GMV
      - option: $5M – $20M Annual GMV
      - option: $20M+ Enterprise Plus
      - label: Project Brief / Goals
      - button: Submit Discovery Brief →
- footer .site-footer
  - p: Flagship Shopify storefronts and living brand systems engineered for enduring commerce scale.
  - ul .footer-links-list
    - li: Selected Works
    - li: Capabilities
    - li: Our Approach
    - li: Team Dossiers
    - li: Merch Store
  - ul .footer-links-list
    - li: New York (EDT) --:--
    - li: London (BST) --:--
    - li: Tokyo (JST) --:--
  - ul .footer-links-list
    - li: hello@counterpart-agy.example
    - li: Book Sprint Intake
    - li: Studio Journal
  - a: Privacy Policy → #
  - a: Terms & Conditions → #
  - a: Security Protocol → #
- h3: Studio Bag
- button: ×
- p: Your studio bag is currently empty.
- button: Simulate Checkout →

## Fields
Keep these controls, including ids and placeholders.
- input[text] #brandName placeholder='e.g. YourBrand.com'
- input[email] #contactEmail placeholder='you@yourbrand.com'
- select #annualVolume
- textarea #projectScope placeholder="Tell us what's holding your conversion or brand back..."

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
