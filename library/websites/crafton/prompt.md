# Rebuild prompt — Crafton (`crafton`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/crafton/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-converting architectural renovation and general contracting landing page featuring orange electrical conduit routing lines, blueprint schematic watermark cards, real craftsman workshop photography, proof metrics, project ledger table, and an interactive spatial cost calculator.

## Title
Crafton — Precision Architectural Renovation & Construction

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Palette */
  --bg-base: #ffffff;
  --bg-surface: #faf8f5;
  --bg-surface-soft: #f4f0eb;
  --bg-card: #ffffff;
  --bg-card-hover: #fffcf9;
  --text-primary: #111317;
  --text-secondary: #4b515d;
  --text-muted: #7a8290;
  --accent-orange: #ff5e14;
  --accent-orange-hover: #e04b08;
  --accent-orange-soft: rgba(255, 94, 20, 0.08);
  --accent-orange-glow: rgba(255, 94, 20, 0.25);
  --border-subtle: rgba(17, 19, 23, 0.08);
  --border-strong: rgba(17, 19, 23, 0.16);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --container-max: 1220px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .navbar
  - a: CRAFTON → #
  - ul .nav-menu
    - li: Home
    - li: Services +
    - li: About Us
    - li: Projects +
    - li: Cost Calculator
  - button: Get a Quote
- section #hero .hero-section
  - h1: Renovate Your Spaces
  - p: Welcome to Crafton, your trusted partner in architectural home transformation. We bring your blueprint to life with structural precision, certified millwork, and guaranteed delivery.
  - a: Calculate Project Cost → → #estimator
- section #services .services-section
  - h2: Comprehensive Home Renovation Services
  - a: View All Services → → #estimator
  - article .service-card
    - h3: Home Renovation
    - p: Our experienced team of certified contractors brings over 25 years of expertise in full home renovations. Fully licensed and insured nationwide.
    - a: View Details → → javascript:void(0)
  - article .service-card
    - h3: Kitchen Remodeling
    - p: Our licensed kitchen remodeling experts bring over 25 years of combined experience to create stunning, ergonomic cooking spaces.
    - a: View Details → → javascript:void(0)
  - article .service-card
    - h3: Bathroom Renovation
    - p: Our certified remodeling team has over 25 years of experience transforming bathrooms into luxurious, tranquil retreats.
    - a: View Details → → javascript:void(0)
  - article .service-card
    - h3: Roofing & Structural
    - p: Our roofing specialists have over 25 years of combined experience providing reliable, weather-sealed architectural roofing systems.
    - a: View Details → → javascript:void(0)
- section #about .about-section
  - h2: Expertise and Experience in Crafton Renovation
  - p: Crafton prioritizes eco-friendly building practices, FSC-certified timber, and rigorous energy efficiency standards. This focus not only benefits the environment, but safeguards your residential portfolio for long-term equity appreciation.
  - ul .ticked-list
    - li: Certified master builders and dedicated journeyman craftsmen
    - li: Trusted by 450+ high-profile homeowners and commercial developers
    - li: Every corner designed with millimeter care and laser leveling
    - li: Over a decade in full-turnkey renovation and spatial remodeling
  - button: Know About Us →
- section #projects .projects-section
  - h2: Explore Our Excellence in Renovation Projects
  - p: Over the years, our dedication to superior craftsmanship, architectural innovation, and client satisfaction has earned us numerous accolades in the construction and renovation industry.
  - button: All Projects
  - button: Bathrooms
  - button: Kitchens
  - button: Full Rebuilds
  - button: Commercial Fit-Outs
  - table #projectsTable .projects-table
    - th: Project Name
    - th: Location
    - th: Duration
    - th: Budget Tier
    - th: Year
    - td: Tranquil Bathroom
    - td: Apple Upper West Side, Brooklyn
    - td: 3 Weeks
    - td: $45,000 – $60,000
    - td: 2023
    - td: Home Rebuild
    - td: Richmond Avenue, Staten Island
    - td: 6 Months
    - td: $220,000 – $350,000
    - td: 2022
    - td: Kitchen Remodel
    - td: Maplewood Heights, Queens
    - td: 5 Weeks
    - td: $65,000 – $90,000
    - td: 2023
    - td: Bathroom Upgrade
    - td: Apple Upper West Side, Brooklyn
    - td: 3 Weeks
    - td: $38,000 – $50,000
    - td: 2023
    - td: Office Fit-Out
    - td: Downtown Manhattan, NYC
    - td: 2 Months
    - td: $140,000 – $190,000
    - td: 2024
- section #estimator .estimator-section
  - h2: Calculate Your Renovation Investment
  - p: Select your project parameters below to calculate an instant architectural estimate based on current regional material and labor indexes.
  - button: Kitchen
  - button: Bathroom
  - button: Full Home
  - button: Standard
  - button: Premium Millwork
  - button: Luxury Bespoke
  - p: Includes complete licensed demo, structural rough-in, electrical/plumbing inspection, custom finish millwork, and project management warranty.
  - ul .estimate-breakdown-list
    - li: Materials & Fixtures: $36,380
    - li: Certified Trade Labor: $23,150
    - li: Permits & Inspections: $6,620
    - li: Est. Completion: 4 – 6 Weeks
  - button: Lock In This Estimate →
- footer .footer
  - h3: Ready to renovate your space with millimeter accuracy?
  - button: Schedule Consultation →
  - p: Crafton is a certified architectural general contracting collective specializing in turn-key residential restorations and commercial space build-outs.
  - h4: Renovation Services
  - ul .footer-links
    - li: Full Home Rebuild
    - li: Kitchen Remodeling
    - li: Bathroom Restorations
    - li: Architectural Roofing
    - li: Commercial Fit-Outs
  - h4: Navigation
  - ul .footer-links
    - li: Overview
    - li: About Crafton
    - li: Project Archive
    - li: Cost Calculator
    - li: License Verification
  - h4: Headquarters
  - p: 420 Hudson Street, Suite 500 New York, NY 10014 Licensed General Contractor #NY-489201 contact@crafton.example
- button: ×
- h3: Book Your Spatial Renovation
- p: Share your property specifications. Our licensed master builder will contact you within 24 business hours.
- form
  - label: Full Name
  - label: Email Address
  - label: Project Scope
  - option: Kitchen Remodel
  - option: Bathroom Renovation
  - option: Full Home Rebuild
  - option: Commercial Fit-Out
  - label: Property Address / Zip Code
  - button: Submit Quote Inquiry →
- button: ×
- h3: Service Title
- p: Detailed breakdown will appear here.
- button: Request Estimate for This Scope →
- button: ×
- h3: Crafton Licensing & Insurance
- p: Crafton operates as a fully licensed Class-A General Contractor, bonded for municipal, commercial, and high-value residential commissions.
- ul
  - li: ✓ NYC Department of Buildings License: GC-#489201
  - li: ✓ $5,000,000 Comprehensive General Liability Policy
  - li: ✓ EPA Lead-Safe Certified Firm #NAT-F18402
  - li: ✓ OSHA 30-Hour Certified Site Supervisors
- button: Close Window

## Images in the page
- `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80 — Master Craftsman`
- `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80 — Site Lead`
- `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80 — Structural Engineer`
- `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80 — Interior Millworker`
- `assets/hero-work.jpg — Crafton Master Craftsman operating precision power tool in renovated interior`
- `assets/about-craft.jpg — Crafton Craftsmen working on timber frame rafters and interior precision millwork`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #sqftSlider
- input[text] placeholder='Marcus Vance'
- input[email] placeholder='marcus@estate.example'
- select #modalScopeSelect
- input[text] placeholder='New York, NY 10024'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/about-bottom.jpg`
- `assets/about-craft.jpg`
- `assets/about-interior.jpg`
- `assets/about-rafter.jpg`
- `assets/about-top.jpg`
- `assets/blueprint.svg`
- `assets/craft-collage.jpg`
- `assets/craft-interior.jpg`
- `assets/craft-rafters.jpg`
- `assets/hero-work.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
