# Rebuild prompt — Northshield (`northshield`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/northshield/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Regional insurance platform website template designed for Alaska and Pacific Northwest families and businesses: faithful hero with interactive quote generator, Coverage Made Simple bundle savings calculator, specialized sub-zero freeze and remote property riders, verified customer claims stories, and 24/7 rapid claims dispatch center.

## Title
Northshield Insurance — Insurance That Protects What Matters Most

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-page: #F4F7FB;
  --bg-surface: #FFFFFF;
  --navy-deep: #0F2137;
  --blue-accent: #2B82FB;
  --blue-hover: #1D68D2;
  --blue-light: #EBF3FE;
  --pine-green: #1B4D3E;
  --border-subtle: #E2E8F0;
  --text-main: #0F2137;
  --text-muted: #5A6A80;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - ul .nav-links
    - li: Coverage
    - li: Personal
    - li: Bundle Savings
    - li: Real Stories
    - li: Claims Center
  - button: Get a Quote ↗
- main
  - section #hero .hero-section
    - h1: Insurance That Protects What Matters Most
    - p: Coverage made simple, savings made easy. Backed by top-rated national underwriters, engineered specifically for rugged northern living.
    - h3: Get Your Personalized Quote
    - p: Compare rates across top national underwriters in 60 seconds.
    - button: Home & Cabin
    - button: Auto & 4x4
    - button: Marine / Boat
    - form
      - label: Alaska Zip Code
      - label: Property / Vehicle Value
      - option: $150,000 – $350,000
      - option: $350,000 – $650,000
      - option: $650,000 – $1,200,000
      - option: $1,200,000+
      - button: Calculate Free Quote ↗
  - section #coverage .section-coverage
    - h2: Coverage Made Simple
    - p: Standard policies fail in arctic conditions. We engineer custom endorsements for sub-zero freezes, remote access, and marine waters.
    - h3: Home & Remote Cabin
    - p: Comprehensive structural protection including pipe burst freeze rider, roof snow-load collapse, and off-grid generator fire coverage.
    - a: Explore Plan ↗ → javascript:void(0)
    - h3: Auto, 4x4 & Snowmobile
    - p: Black-ice collision protection, moose impact comprehensive riders, and 24/7 winter off-road remote winch recovery.
    - a: Explore Plan ↗ → javascript:void(0)
    - h3: Marine Vessel & Skiff
    - p: Saltwater corrosion, harbor slip mooring, and commercial salmon/halibut gear coverage across all Alaska coastal waters.
    - a: Explore Plan ↗ → javascript:void(0)
    - h3: Commercial & Fleet
    - p: General liability, worker's comp, and equipment breakdown for bush pilots, fishing lodges, and general contractors.
    - a: Explore Plan ↗ → javascript:void(0)
    - h2: Bundle Auto + Home & Save More
    - p: Combining your primary residence or cabin with personal vehicles unlocks our multi-line discount plus single-deductible storm protection.
    - button: Calculate My Bundle Savings ↗
    - p: Based on 2025 verified policyholder renewals across the state of Alaska.
  - section #stories .section-stories
    - h2: Trusted By Real Alaska Families
    - p: Real stories from real people who have experienced the Northshield difference when extreme weather struck.
    - p: "When a high-wind gale ripped off our metal roof in Kenai, Northshield had an emergency adjuster on-site in under 24 hours. The entire repair claim was approved without red tape."
    - p: "Finding insurance for our boat and island cabin was a nightmare with national carriers. Northshield understood off-grid solar systems and gave us an affordable bundled policy."
    - p: "During the -40° freeze in Fairbanks, our basement pipes gave way. Northshield’s rapid claims team sent emergency dry-out crews immediately, saving our floorboards."
- button: ×
- h3: Request Personalized Quote
- p: Speak with a licensed Alaska agent or receive your custom underwriter comparison via email.
- form
  - label: Full Name
  - label: Email Address
  - label: Phone (Optional for SMS Quote)
  - label: Coverage Line
  - option: Multi-Policy Bundle (Home + Auto)
  - option: Homeowners & Remote Cabin
  - option: Auto & 4x4 Off-Road
  - option: Marine Vessel & Commercial Fishing
  - button: Send My Free Quote Estimate ↗
- footer #contact .site-footer
  - p: Insurance that protects what matters most. Dedicated to Alaska and Pacific Northwest families, cabins, and commercial operators since 1994.
  - h4: Coverage
  - ul .footer-links
    - li: Alaska Homeowners
    - li: Remote Cabin & Island
    - li: Auto & Winter 4x4
    - li: Marine Vessel & Skiff
    - li: Multi-Policy Bundle
  - h4: Local Branches
  - h4: Regulatory

## Images in the page
- `assets/northshield-logo.svg — Northshield Insurance`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #zipCode placeholder='e.g. 99501 (Anchorage)'
- select #propertyType
- input[text] #quoteName placeholder='E.g. Bradley Walker'
- input[email] #quoteEmail placeholder='bradley@example.com'
- input[tel] #quotePhone placeholder='(907) 000-0000'
- select #quoteLine

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/coverage-mountain-home.svg`
- `assets/northshield-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
