# Rebuild prompt — Vortigo (`vortigo`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/vortigo/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Full-funnel conversion engineering & growth agency template: autonomous work completion hero with rotating conversion badge, 4-device interactive smartphone showcase, 6-part performance services grid (Ads Management, VSL Player, Creative Stat Bars, Web Dev, CRO Lift Chart, Attribution Engine), client proof case studies (bash to .25M), 3-card results matrix, 5-phase orbital script structure, interactive funnel type tab switcher, tiered pricing plans, and accordion FAQ.

## Title
Vortigo — Build Profits While You Build Your Business

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-bg: #FAFBFD;
  --color-surface: #FFFFFF;
  --color-surface-subtle: #F3F5FA;
  --color-border: #E5E9F2;
  --color-border-light: #EFF2F7;
  --color-cobalt: #4658E8;
  --color-cobalt-hover: #3747D6;
  --color-cobalt-soft: rgba(70, 88, 232, 0.08);
  --color-cobalt-glow: rgba(70, 88, 232, 0.28);
  --color-emerald: #10B981;
  --color-text-main: #0B0F19;
  --color-text-muted: #556178;
  --color-text-dim: #8F9BB3;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 32px;
  --shadow-sm: 0 2px 6px rgba(11, 15, 25, 0.04);
  --shadow-md: 0 12px 32px -8px rgba(11, 15, 25, 0.08);
  --shadow-lg: 0 24px 64px -16px rgba(11, 15, 25, 0.12);
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: Vortigo → #top
  - ul .nav-links
    - li: Services
    - li: Case Studies
    - li: Offer Engine
    - li: Funnel Architecture
    - li: Pricing
    - li: FAQs
  - a: Get Free Audit → #audit
- main
  - section #top .hero.container
    - h1: Build Profits While You Build Your Business
    - p: We drive business growth with ads, landing pages, and creative designed to maximize profit, not drain your budget.
    - a: Get Free Audit → #audit
    - h4: Millions of eyeballs are waiting
    - p: We build and scale in-house UGC systems for high-growth startups and category leaders.
    - button: Book a Call
    - h4: Product Building Made Better for Teams
    - p: Workflows that turn customer telemetry into deterministic product velocity.
    - button: Get Started
    - h4: Manage your finances in minutes a week
    - p: Most popular choice for taking control of your personal finances and investments with zero manual entry.
    - button: Book a Demo
    - h4: Join our community of 120,000+ businesses
    - p: Real-time scaling playbooks deployed by top operators worldwide.
    - button: Join Community
  - section #services .section.container
    - h2: The Services That Drive Results
    - p: We drive business growth with ads, landing pages, and creative designed to maximize profit, not drain your budget.
    - h3: Ads Management
    - p: High-converting funnels engineered for paid traffic and cold audiences across major ad networks.
    - h3: Offer Building & VSL
    - p: Deep analysis + A/B testing to continually increase offer conversion performance.
    - h3: Ad Creative
    - p: Data-backed execution on Meta, Google, YouTube, and TikTok that arrests scroll inertia.
    - h3: Web Design & Development
    - p: Responsive websites and web applications that convert cold visitors into high-ticket clients.
    - h3: CRO & Funnel Optimization
    - p: Accurate tracking, event setup, dashboards, and automated multivariate conversion testing.
    - h3: Custom Tracking & Attribution
    - p: Complete offer packaging, script recording, and first-party pixel attribution architecture.
  - section #cases .section.container
    - h2: Our Clients' Success Stories
    - p: Forget vague promises. We deliver trackable results with full performance transparency.
    - h3: $0–$3.25M in 5 months with less than 900 Followers
    - p: Proof that sustainable revenue growth doesn't require viral moments, influencer status, or tens of thousands of followers just the right strategy.
    - h3: 2.5x revenue with no additional ad spend or traffic
    - p: By restructuring the offer stack, rewriting the sales narrative, and fixing critical funnel leaks, we doubled effective client enterprise value.
  - section #script .section.container
    - h2: High-Converting Script Structure
    - p: Our proprietary 5-phase video sales letter & copy framework engineered to systematically dissolve skepticism.
  - section #funnels .section.container
    - h2: Fast & Scalable High Converting Websites
    - p: You bring the offer. We build the funnel, craft the VSL, and turn cold clicks into booked enterprise calls.
    - h4: Landing Pages
    - p: Engineered with custom typography, responsive micro-animations, and sub-second load times.
  - section #pricing .section.container
    - h2: We Create Offers That Actually Sell
    - p: We transform your expertise into a compelling offer and pair it with a VSL that converts.
    - h3: VSL Package
    - p: Core video sales architecture
    - ul .price-features
      - li: ✓ Full high-converting scriptwriting
      - li: ✓ Direct-response VSL landing page
      - li: ✓ A/B headline & hook testing
      - li: ✓ Basic analytics tracking
    - button: Choose Plan
    - h3: 2 Landing Pages
    - p: Full acquisition & retargeting system
    - ul .price-features
      - li: ✓ 2 Custom high-converting landing pages
      - li: ✓ Full VSL script & video integration
      - li: ✓ First-party pixel & UTM attribution
      - li: ✓ 30 Days of CRO multivariate testing
    - button: Choose Plan
    - h3: 3 Landing Pages
    - p: Enterprise multi-funnel infrastructure
    - ul .price-features
      - li: ✓ 3 Custom landing & webinar pages
      - li: ✓ Complete ad creative & copy package
      - li: ✓ Advanced multi-touch dashboard
      - li: ✓ 60 Days of hands-on funnel scaling
    - button: Choose Plan
  - section #faq .section.container
    - h2: Got Questions? We've Got Answers
    - p: Quick answers to help you decide if we're the right fit for your business.
    - button: What makes your pages convert better?
    - button: What's your typical pricing and timeline?
    - button: What do you need from me to start?
    - button: Do you write the copy and scripts?
    - button: Do you handle hosting and technical development?
  - section #audit .container
    - h2: Get Your Custom Action Plan Today.
    - p: Want to talk to a real, actual growth partner about how we work and what results you can expect? Book a free 1:1 discovery call.
    - button: Get Free Audit
- footer
  - a: Vortigo → #top
  - p: Funnels that convert. Traffic that pays off. Growth that's measurable.
  - button: Send
  - h4: Links
  - ul .footer-links
    - li: Our Services
    - li: Case Studies
    - li: Funnel Architecture
    - li: Offer Pricing
    - li: FAQs
  - h4: Services
  - ul .footer-links
    - li: Paid Ads Management
    - li: VSL Script Architecture
    - li: CRO Multivariate Testing
    - li: First-Party Attribution
    - li: Performance Web Dev

## Images in the page
- `assets/client1.jpg — Client Founder`
- `assets/client2.jpg — Client Founder`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='hello@vortigo.io'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/client1.jpg`
- `assets/client2.jpg`
- `assets/creator.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
