# Rebuild prompt — Pactum (`pactum`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/pactum/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI proposal automation for agencies & freelancers: pristine neo-grotesque UI, interactive SaaS dashboard card with live proposal analytics & conversion rings, 3-step brief-to-proposal bento, interactive proposal generator, 9-tool integration constellation, agency tier matrix, and accordion FAQ.

## Title
Pactum — Close more clients with AI proposals

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --surface-subtle: #f1f5f9;
  --surface-border: #e2e8f0;
  --surface-border-subtle: #eaecf0;
  --ink-900: #0f172a;
  --ink-700: #334155;
  --ink-500: #64748b;
  --ink-400: #94a3b8;
  --ink-300: #cbd5e1;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --emerald-600: #10b981;
  --emerald-50: #ecfdf5;
  --amber-600: #f59e0b;
  --amber-50: #fffbeb;
  --rose-600: #f43f5e;
  --rose-50: #fff1f2;
  --sky-600: #0284c7;
  --sky-50: #f0f9ff;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-card: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
  --shadow-float: 0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(226, 232, 240, 0.8);
  --shadow-btn: 0 4px 14px rgba(37, 99, 235, 0.3);
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Pactum → #hero
  - ul .nav-links
    - li: How it works
    - li: Features
    - li: Integrations
    - li: Pricing
    - li: FAQ
  - button: Sign in
  - button: Sign up
- section #hero .hero-section
  - h1: Close more clients with AI proposals
  - p: Built for agencies and freelancers to create branded, high-converting proposals in seconds.
  - button: Start free trial
  - button: See live proposal
  - ul .dash-nav-list
    - li: Home
    - li: Proposals
    - li: Templates
    - li: Reporting
    - li: Client
  - ul .dash-nav-list
    - li: Settings
    - li: Support
  - h3: Overview
  - button: + New Proposal
  - table .dash-table
    - th: Proposal
    - th: Status
    - th: Clients
    - th: Last Update
    - td: Content curating app Brings all your news into one place
    - td: + Sent
    - td: OR Olivia Rhye
    - td: Jan 6, 2026
    - td: Design software Super lightweight design app
    - td: + Draft
    - td: PB Phoenix Baker
    - td: Jan 6, 2026
    - td: Data prediction AI and machine learning data
    - td: + Approved
    - td: LS Lana Steiner
    - td: Jan 6, 2026
    - td: Productivity app Time management and productivity
    - td: + Rejected
    - td: DW Demi Wilkinson
    - td: Jan 5, 2026
- section #how-it-works .section-spacing
  - h2: From brief to proposal simplified
  - p: Turn raw client inquiries into winning client proposals with our structured three-stage engine.
  - h3: Add project information
  - p: Enter the client's name, business type, required services, budget, & timeline. Our smart system uses this data to understand project scope instantly.
  - button: Create proposal
  - h3: AI builds your proposal
  - p: Our AI instantly creates a structured, persuasive, and professionally formatted proposal precisely tailored to your service and niche business goals.
  - h3: Brand, export, track & share
  - p: Edit the content, apply your logo and brand colours, export as PDF, or send via shareable link. Track when clients open and review your proposal in real time.
- section #features .section-spacing.features-section
  - h2: Close deals faster with smart automation
  - p: Everything you need to create, price, present, and close high-converting proposals without manual effort.
  - h3: Generate proposals in seconds
  - p: Turn client details into a fully structured, persuasive proposal instantly no blank pages, no tedious formatting, and zero writer's block.
  - h3: Price smarter & maximise profit
  - p: Automatically optimise pricing to fit client budget and maximise your margins stop guessing your rates with smart industry benchmarks.
  - h3: Close instantly automate workflow
  - p: Remove friction from approvals and follow-ups sign, track, and automate everything from one place so deals never stall.
- section #integrations .integrations-section
  - h2: Connect your proposal workflow
  - p: Connect Pactum AI with the tools you use from CRM to payments and streamline your proposal process.
- section #pricing .pricing-section
  - h2: Choose the plan that scales with you
  - p: Transparent agency tiers designed to turn raw leads into signed revenue.
  - button: Monthly billing
  - button: Annual billing
  - h3: Basic Plan
  - p: Perfect for small teams starting AI outreach.
  - button: Get started
  - ul .pricing-features-list
    - li: ✓ 3 proposals per month
    - li: ✓ Basic proposal templates
    - li: ✓ AI proposal generation
    - li: ✓ Standard formatting
    - li: ✓ Basic customisation
    - li: ✓ Export as PDF
    - li: ✓ Email support
    - li: ✓ Secure data storage
  - h3: Premium Plan
  - p: Perfect for growing agencies closing weekly deals.
  - button: Get started
  - ul .pricing-features-list
    - li: ✓ Unlimited proposals
    - li: ✓ Advanced AI generation
    - li: ✓ Smart pricing suggestions
    - li: ✓ Custom branding & white-label
    - li: ✓ Premium template library
    - li: ✓ High-res PDF export & links
    - li: ✓ Proposal analytics & views
    - li: ✓ Priority email & chat support
  - h3: Enterprise Plan
  - p: Full scale sales operations for high-ticket teams.
  - button: Get started
  - ul .pricing-features-list
    - li: ✓ Everything in Pro
    - li: ✓ E-signature support
    - li: ✓ Team collaboration seats
    - li: ✓ Client activity tracking
    - li: ✓ Advanced proposal analytics
    - li: ✓ Custom proposal sections
    - li: ✓ Shared team workspace
    - li: ✓ Dedicated account manager
- section #faq .faq-section
  - h2: Everything you need to know
  - p: Have questions? We're here to help you accelerate your client acquisition pipeline.
  - p: Yes. Manual proposals take hours and often lack structure. Pactum AI generates professionally structured, persuasive proposals in seconds helping you save time and increase your close rate.
  - p: Absolutely. Whether you provide software engineering, design, marketing retainers, architectural consulting, or sales advisory, our AI adapts to your niche deliverables and industry benchmarks.
  - p: No. Pactum incorporates your custom agency tone of voice, past client case studies, and exact project parameters so every proposal reads like a bespoke strategy deck.
  - p: Yes. You can configure fixed milestones, recurring retainers, tiered pricing models (Good/Better/Best), and hourly caps directly within your proposal builder.
  - p: Yes. You receive instant notifications when clients view your link, how much time they spend on each section, and when they forward it internally to decision-makers.
  - p: Yes. All client data and briefs are encrypted in transit and at rest with SOC-2 compliant infrastructure. Your proprietary project data is never used to train public foundation models.
- section .cta-banner-section
  - h2: Turn briefs into signed deals today
  - p: Stop wasting hours writing proposals. Start sending professional, branded, and highly effective winning proposals today.
  - button: Start free trial
- footer .site-footer
  - p: AI-powered proposal automation for agencies & freelancers to create & close high-converting proposals fast.
  - h4: PRODUCT
  - ul .footer-nav-list
    - li: How it works
    - li: Features
    - li: Integrations
    - li: Pricing
  - h4: SOLUTIONS
  - ul .footer-nav-list
    - li: For freelancers
    - li: For agencies
    - li: For marketing teams
    - li: For consultants
    - li: High-ticket services
  - h4: RESOURCES
  - ul .footer-nav-list
    - li: FAQ
    - li: Help centre
    - li: Proposal tips
    - li: API docs
  - h4: LEGAL & TRUST
  - ul .footer-nav-list
    - li: Privacy policy
    - li: Terms of service
    - li: Refund policy
    - li: Cookie policy

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Search...'

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
