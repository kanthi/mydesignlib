# Rebuild prompt — Solivara (`solivara`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/solivara/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Humanitarian community impact foundation — warm parchment palette with persimmon coral accents, asymmetric hero with floating quote and story reel triggers, interactive impact multiplier simulator, urgent campaign bento, and transparent 100% stewardship financial model.

## Title
Solivara — Together for Making a Brighter Future

## Description meta
Together, we make a real impact in communities around the world. Delivering clean water, rapid emergency relief, youth education, and sustainable livelihoods.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Surfaces */
  --surface-page: #f8f7f4;
  --surface-card: #ffffff;
  --surface-subtle: #f0eee8;
  --surface-tint: #fbfaf8;
  --surface-dark: #141615;
  --surface-dark-card: #1f2321;
  /* Typography & Ink */
  --text-primary: #181a19;
  --text-secondary: #585e5a;
  --text-muted: #8a928d;
  --text-faint: #b4bbb7;
  --text-on-dark: #fbfbfa;
  --text-on-dark-muted: #9ea7a2;
  /* Brand Accents */
  --brand-coral: #ff5e36;
  --brand-coral-hover: #e84c24;
  --brand-coral-soft: #fff0eb;
  --brand-coral-glow: rgba(255, 94, 54, 0.22);
  --brand-green: #16a34a;
  --brand-green-soft: #eaf9f0;
  --brand-green-glow: rgba(22, 163, 74, 0.2);
  --brand-amber: #d97706;
  --brand-amber-soft: #fef3c7;
  /* Actions */
  --action-primary: #181a19;
  --action-primary-hover: #2e3230;
  --action-primary-text: #ffffff;
  /* Borders & Shadows */
  --border-subtle: rgba(24, 26, 25, 0.08);
  --border-medium: rgba(24, 26, 25, 0.14);
  --border-dark-subtle: rgba(255, 255, 255, 0.1);
  --shadow-sm: 0 2px 8px rgba(24, 26, 25, 0.04);
  --shadow-md: 0 12px 32px -4px rgba(24, 26, 25, 0.08);
  --shadow-lg: 0 24px 48px -8px rgba(24, 26, 25, 0.12);
  --shadow-floating: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
  /* Typography Scale */
  --font-main: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --text-hero: clamp(2.4rem, 5.2vw, 4.25rem);
  --text-3xl: clamp(1.85rem, 3.2vw, 2.75rem);
  --text-2xl: clamp(1.35rem, 2.2vw, 1.85rem);
  --text-xl: 1.25rem;
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  /* Layout & Spacing */
  --container-max: 1240px;
  --container-padding: clamp(1.25rem, 3.5vw, 2.5rem);
  --section-y: clamp(4.5rem, 8vw, 7.5rem);
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-2xl: 40px;
  --radius-pill: 9999px;
  /* Transitions */
  --dur: 280ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav #navbar .navbar
  - a: Solivara → #hero
  - ul .nav-links
    - li: What We Do
    - li: Causes
    - li: Donation
    - li: Stories
    - li: Transparency
  - button: Donate Now
- section #hero .hero-section
  - h1: Together for making a brighter future
  - p: Together, we can make a real impact in communities around the world. Delivering clean water, rapid emergency relief, youth education, and sustainable livelihoods.
  - button: Donate Now
  - a: Learn More → #causes
  - p: “Because of this organization, I was given hope and a second chance.”
  - button: Watch our story reel
  - h4: Dedicated team
  - p: Providing essential resources and aid to those who are in need in emergency.
  - a: Impactful metrics & active programs → #what-we-do
- section #what-we-do .metrics-section
  - h2: Measurable outcomes delivered to families in need
  - p: Every contribution directly finances field operations, clean water infrastructure, emergency rations, and sustainable education.
  - p: Direct aid distributed across 14 vulnerable crisis zones.
  - p: Providing year-round deep aquifer solar water systems.
  - p: Direct allocation to verified on-the-ground interventions.
  - p: Independently audited 100% transparent funding records.
  - h3: See what your gift creates
  - p: Adjust the monthly giving slider to visualize exact field deliverables.
  - button: $25/mo
  - button: $75/mo
  - button: $150/mo
  - button: $250/mo
  - h4: 3 Emergency Care & Water Packs
  - p: Your monthly contribution supplies 3 full families with ceramic gravity water filtration units, high-nutrient food bars, and hygiene kits.
  - ul #calc-deliverables .impact-deliverables
    - li: 18,000 Gallons of Purified Water
    - li: 90 Days of Essential Micronutrient Kits
    - li: Direct SMS dispatch tracking & GPS coordinates
  - button: Sponsor This Impact ($75/mo)
- section #causes .causes-section
  - h2: Urgent campaigns requiring immediate funding
  - p: Choose a cause that speaks to your heart. 100% of public gifts go straight to field logistics.
  - button: All Causes (4)
  - button: Clean Water
  - button: Emergency Relief
  - button: Youth Education
  - button: Regenerative Climate
  - h3: Solar-Powered Aquifer Wells
  - p: Installing 6 deep solar pumps to replace 8-mile daily treks for water for 4,200 villagers and school children.
  - button: Donate to This Project →
  - h3: Cyclone Rapid Aid & Nutrition Kits
  - p: Emergency shelter tarps, water purification tablets, and baby formula kits for families displaced by seasonal floods.
  - button: Donate to This Project →
  - h3: Girls' STEM & Literacy Labs
  - p: Providing digital tablets, certified bilingual teacher stipends, and warm meal programs for 380 rural primary school girls.
  - button: Donate to This Project →
- section #transparency .transparency-section
  - h2: Where every single dollar travels
  - p: We operate under a strict 100% field delivery pledge. Independent public accountants audit our balance sheets quarterly, and our IRS Form 990 is freely available for public inspection.
  - p: Quarterly Field GPS Audits: Every well, clinic, and relief distribution is pinned with photo and GPS proof.
  - p: Zero Donor List Selling: Your data is confidential and never rented to brokers or external entities.
  - h3: Fiscal 2025/2026 Allocation Model
- section #dispatches .dispatches-section
  - h2: Voices from the front lines of community impact
  - p: Direct field journals written by our regional directors, local medical staff, and community elders.
  - p: “When the clean well was activated last Tuesday, our clinic recorded an immediate 70% decrease in waterborne pediatric admissions. That is what direct donor trust looks like.”
  - p: “Within 36 hours of the storm surge, our solar-powered logistics vehicle delivered 1,200 dry rations and medical trauma kits directly into cut-off river communities.”
  - p: “Seeing 85 young girls open their solar tablets and write their first code snippets in Nepali and English gave our whole village pride that will last generations.”
- section #faq .faq-section
  - h2: Frequently asked questions
  - p: Everything you need to know about tax receipts, recurring gifts, and project governance.
  - button: Are donations tax-deductible?
  - p: Yes. Solivara is a registered 501(c)(3) tax-exempt public charitable organization. Instant tax receipts with valid EIN documentation are automatically emailed immediately after each transaction.
  - button: Can I designate my gift to a specific country or project?
  - p: Absolutely. Using our donation drawer, you can direct 100% of your funds to Clean Water, Rapid Disaster Relief, Girls' STEM Education, or Where Most Urgently Needed.
  - button: How do you verify and report on completed projects?
  - p: Every field installation is monitored with on-site GPS tracking and timestamped photo logs. Monthly impact partners receive direct digital dispatches showing the exact water well or classroom their giving built.
  - button: Can I modify or pause my monthly donation at any time?
  - p: Yes, at any moment. Every receipt includes a 1-click self-service portal link allowing you to adjust amounts, update payment methods, or pause giving with zero friction.
- section .final-cta-section
  - h2: Together, we build a future of hope
  - p: Join over 1,400 global partners turning compassion into clean water, emergency medicine, and sustainable community empowerment.
  - button: Donate Now
- footer .footer
  - p: An independent humanitarian foundation dedicated to tangible, verified global community development and emergency response.
  - h4: Active Programs
  - ul .footer-links
    - li: Clean Water Wells
    - li: Disaster Rapid Relief
    - li: Girls' STEM Education
    - li: Regenerative Farming
    - li: Field Logistics Model
  - h4: Transparency
  - ul .footer-links
    - li: IRS Form 990
    - li: Audited Financials
    - li: GPS Field Registry
    - li: Donor Bill of Rights
    - li: Frequently Asked Questions
  - h4: Field Dispatch Updates
  - p: Receive monthly GPS verification logs and photo reports directly to your inbox.
  - form .newsletter-form
    - button: Join
  - a: Privacy Policy → #
  - a: Terms of Stewardship → #
  - a: Security Protocol → #
- button: Donate Now
- h3: Make Your Impact
- button: Monthly Gift (Recommended)
- button: One-Time Gift
- button: $25
- button: $50
- button: $100
- button: $250
- button: $500
- button: Custom
- label: Direct Funding Designation
- option: ⚡ Where Most Urgently Needed
- option: 💧 Clean Water & Solar Wells (Kenya)
- option: 🌪️ Cyclone Rapid Relief & Food Kits
- option: 📚 Girls' STEM & Literacy Labs (Nepal)
- button: Complete $50 Monthly Donation

## Images in the page
- `assets/avatar-1.jpg — Donor avatar`
- `assets/avatar-2.jpg — Donor avatar`
- `assets/avatar-3.jpg — Donor avatar`
- `assets/hero-volunteers.jpg — Dedicated Solivara humanitarian volunteers in the field`
- `assets/avatar-4.jpg — Community member`
- `assets/avatar-1.jpg — Team member`
- `assets/avatar-2.jpg — Team member`
- `assets/avatar-3.jpg — Team member`
- `assets/cause-water.jpg — Solar clean water well project`
- `assets/cause-emergency.jpg — Disaster emergency food and shelter distribution`
- `assets/cause-education.jpg — Young children smiling in classroom`
- `assets/avatar-1.jpg — Amina K.`
- `assets/avatar-2.jpg — Mateo R.`
- `assets/avatar-3.jpg — Sunita T.`
- `assets/hero-volunteers.jpg — Video preview reel`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #impact-range
- input[email] placeholder='Your email address'
- input[number] #custom-amount-input placeholder='Enter custom amount in USD'
- select #drawer-cause-select
- input[text] placeholder='Full Name'
- input[email] placeholder='Email Address for Tax Receipt'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/avatar-1.jpg`
- `assets/avatar-2.jpg`
- `assets/avatar-3.jpg`
- `assets/avatar-4.jpg`
- `assets/cause-climate.jpg`
- `assets/cause-education.jpg`
- `assets/cause-emergency.jpg`
- `assets/cause-water.jpg`
- `assets/hero-volunteers.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
