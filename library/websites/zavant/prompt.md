# Rebuild prompt — Zavant (`zavant`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/zavant/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Digital design agency: headline outcome hook with collaborative glass badges, multi-layer card depth stage, interactive services accordion, curated works grid, client metrics, and tiered retainer plans.

## Title
Zavant — Digital Design Agency

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-main: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --surface-page: #FBFBFA;
  --surface-card: #FFFFFF;
  --surface-tint: #F3F4F6;
  --surface-dark: #0E1015;
  --surface-dark-card: #151820;
  --border-default: rgba(14, 16, 21, 0.08);
  --border-subtle: rgba(14, 16, 21, 0.04);
  --border-dark: rgba(255, 255, 255, 0.1);
  --text-primary: #0E1015;
  --text-secondary: #525964;
  --text-faint: #8A92A0;
  --text-inverse: #FFFFFF;
  --action-orange: #FF4800;
  --action-orange-hover: #E03E00;
  --accent-lime: #B8FF24;
  --accent-cyan: #00D2FF;
  --accent-lavender: #8A70D6;
  --accent-emerald: #10B981;
  --wrap: 1220px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --dur: 260ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-header
  - a: Zavant → #
  - nav .nav-menu
    - a: Solutions → #services
    - a: Works → #works
    - a: Proof → #testimonials
    - a: Pricing → #pricing
  - button: Book a Sprint ✦
- section .hero-section
  - h1: We transform ideas into digital outcomes
  - p: Client median post-launch revenue expansion
  - button: Message Lead Designer →
  - p: Reserve your Q4 product sprint window before booking closes.
  - button: Grab The Offer
  - ul .pro-checklist
    - li: ✓ Dedicated Design Lead
    - li: ✓ Next.js & Webflow Build
    - li: ✓ Unlimited Revisions
    - li: ✓ 48h Turnaround
  - button: Select Retainer
- section .proof-section
- section #services .services-section
  - h2: Our digital solutions
  - p: Empowering modern businesses with innovative strategies, responsive design systems, and digital craftsmanship that inspire real conversions.
  - p: We design modern, high-conversion websites that capture immediate attention, articulate your distinctive value proposition, and convert visitors into qualified buyers.
- section #works .works-section
  - h2: Our Works
  - p: Real client outcomes engineered through rigorous strategy, modern typography, and pixel-level execution.
  - article .work-card
    - h3: Growth Boost Orchestration
    - p: Complete identity, UI kit, and high-conversion dashboard re-architecture.
  - article .work-card
    - h3: Transcend Intelligence
    - p: Interactive 3D model playground and generative workflow UI suite.
  - article .work-card
    - h3: Vanguard Architecture
    - p: Authoritative typography, editorial layout, and client onboarding portal.
  - article .work-card
    - h3: Verde Sustainability Platform
    - p: Real-time telemetry displays and public accountability disclosure suite.
  - article .work-card
    - h3: Kinetiq Capital Trading UI
    - p: Ultra-dense dark mode execution console and latency telemetry dashboards.
  - article .work-card
    - h3: Matthew Atelier Lookbook
    - p: Editorial e-commerce experience with fluid micro-interactions and archive grid.
  - button: View All Works (24+) →
- section #testimonials .testimonials-section
  - h2: Trusted by our clients
  - p: Direct measurable results from founders and design leaders across high-growth ventures.
  - p: "Our new website and design system transformed our enterprise presence overnight. The team's ability to balance technical precision with commercial conversion was incredible."
  - p: "Working with Zavant was an absolute game-changer. Their conversion architecture and clean visual hierarchy doubled our qualified sales inquiries within 30 days of launch."
  - p: "From wireframe validation to production handoff, the Zavant team executed with flawless precision. Their tokenized design kit accelerated our entire frontend timeline."
- section #pricing .pricing-section
  - h2: Flexible Plans for Bold Brands
  - p: Transparent, high-velocity design partnerships. No opaque agency markups or hidden fees.
  - p: Ideal for early-stage startups needing a core landing page and brand polish.
  - ul .plan-features
    - li: ✓ 1 Core Landing Page Design
    - li: ✓ Mobile Responsive UI
    - li: ✓ Basic SEO & Micro-copy
    - li: ✓ 2 Revision Rounds
    - li: ✓ 7-Day Fast Delivery
  - button: Get Started →
  - p: Full-service dedicated design team for scaling products needing continuous velocity.
  - ul .plan-features
    - li: ✓ Up to 5 Web Pages / Sprints
    - li: ✓ Brand Guidelines & Typography Kit
    - li: ✓ Custom SVG & Micro-Interactions
    - li: ✓ 4 Revision Rounds per deliverable
    - li: ✓ Priority Slack Channel & Direct Access
    - li: ✓ Pause or Cancel Anytime
  - button: Join Retainer →
  - p: Multi-product organizations requiring bespoke design systems and dedicated leads.
  - ul .plan-features
    - li: ✓ Complete Design System Architecture
    - li: ✓ Web, Mobile & Dashboard Applications
    - li: ✓ Dedicated Design Director & Engineers
    - li: ✓ Custom 3D & Motion Production
    - li: ✓ Unlimited Iterations & Live Sprints
  - button: Contact Sales →
- section .cta-banner-section
  - h2: Let's build something unforgettable
  - p: Turn your next product milestone into a category-defining digital experience. Book a discovery sprint today.
  - button: Schedule Strategy Call →
- footer .site-footer
  - p: © 2026 Zavant Digital Design Agency. Fictional specimen template.
  - a: Solutions → #services
  - a: Works → #works
  - a: Proof → #testimonials
  - a: Pricing → #pricing
  - a: Contact → mailto:hello@zavant.example
- button: ×
- h3: Initiate a Design Sprint
- p: Share your vision and our lead partner will respond within 12 hours.
- form #inquiryForm
  - label: Your Name
  - label: Work Email
  - label: Project Scope
  - option: Web Design & Conversion
  - option: Full Brand Identity
  - option: Product & Mobile UI/UX
  - option: Enterprise Design System
  - label: Estimated Budget
  - option: $2,500 - $5,000
  - option: $5,000 - $10,000
  - option: $10,000+
  - button: Submit Inquiry →
- h4: Inquiry Received
- p: Thank you! Our creative director will review your brief and send over our sprint deck.

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Jane Doe'
- input[email] placeholder='jane@company.com'
- select

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
