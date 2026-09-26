# Rebuild prompt — Canopia (`canopia`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/canopia/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modern botanical editorial and community reforestation collective. Features full-bleed misty forest hero with floating dark glass initiative cards, tactile sand-cream manifesto section, interactive 4-pillar environmental protection switcher with documentary field photography, community planting drive locator, transparent ecological ledger, active campaign progress meters, and verified impact metrics.

## Title
Canopia — Restoring Earth's Living Canopies Today

## Description meta
Canopia is a community-driven movement dedicated to restoring nature, reducing pollution, and creating a cleaner, healthier planet through verified collective action.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #071710;
  --bg-dark-elevated: #0B2419;
  --bg-dark-card: rgba(8, 26, 17, 0.52);
  --bg-sand: #F7F5EC;
  --bg-sand-darker: #EFECE0;
  --bg-sand-card: #FFFFFF;
  --text-dark-primary: #FFFFFF;
  --text-dark-secondary: rgba(255, 255, 255, 0.88);
  --text-dark-muted: rgba(255, 255, 255, 0.58);
  --text-sand-title: #0A2E20;
  --text-sand-body: #324C3E;
  --text-sand-muted: #647B6F;
  --accent-lime: #D8ED67;
  --accent-lime-hover: #E8F87C;
  --accent-lime-dark: #061E14;
  --border-dark: rgba(255, 255, 255, 0.16);
  --border-dark-subtle: rgba(255, 255, 255, 0.09);
  --border-sand: rgba(10, 46, 32, 0.12);
  --border-sand-subtle: rgba(10, 46, 32, 0.06);
  --ease-organic: cubic-bezier(0.16, 1, 0.3, 1);
  --radius-pill: 999px;
  --radius-card: 20px;
  --radius-lg: 28px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #topNav .top-nav
  - ul .nav-center
    - li: About
    - li: Initiatives
    - li: Community Drives
    - li: Impact Ledger
    - li: Campaigns
    - li: FAQ
  - button: Join Movement →
- section #hero .hero-stage
  - h1: Make earth green again today
  - p: Canopia is a community-driven movement dedicated to restoring nature, reducing pollution, and creating a cleaner, healthier planet. Join us in taking small actions that lead to lasting environmental change.
  - button: Join the Movement →
  - a: EXPLORE → → #about
  - h3: How Solar Microgrids Cut Local Costs
  - h3: Rewilding Highland Pine & Oak Corridors
  - h3: Watershed Plastic Intercept & Cleanups
- section #about .editorial-manifesto
  - h2: Together We Are Building a Greener Future Through Meaningful Actions and Real Change
  - p: Canopia is built on a simple belief that small actions can create meaningful change for our planet. We work to protect natural ecosystems, reduce environmental pollution, and inspire communities to live more sustainably. Through collective effort, we turn awareness into real-world impact. Every initiative we take is focused on creating a cleaner and healthier environment. Together, we are building a future where nature and people can thrive in harmony.
  - p: Our journey is driven by passionate individuals who care deeply about the planet and its future. From tree plantation drives to community clean-up programs, we focus on actions that make a visible difference. We believe that real change happens when people come together with a shared purpose. By empowering communities and encouraging responsible habits, we continue to expand our impact every day. Canopia is more than an organization, it is a movement for lasting ecological restoration.
- section #pillars .protection-pillars
  - h2: How We Protect the Global Environment
  - p: Through coordinated field campaigns like native tree planting, cleanups, and circular waste systems, we engineer tangible ecological resilience.
  - h3: Native Afforestation & Canopy Corridors
  - p: We never plant monoculture timber. Every grove is seeded with mixed indigenous hardwoods and mycorrhizal soil inoculants, ensuring 94%+ multi-year survival.
  - h3: Circular Waste Reduction & River Intercept
  - p: Deploying passive trash booms at rivermouths and organizing volunteer trail cleanups to stop macro-plastics before they reach fragile marine estuaries.
  - h3: Decentralized Clean Energy Microgrids
  - p: Empowering remote conservation research stations and indigenous partner villages with community solar and gravity water filtration systems.
  - h3: Grassroots Awareness & School Toolkits
  - p: Free open-source field curriculum kits, mobile seed labs, and citizen-science biodiversity audits connecting over 120 primary and secondary schools.
- section #community .community-action
  - h2: Empowering Community Action Across 40+ Watersheds
  - p: Real change happens with your hands in the soil. Join an upcoming weekend planting drive or start a local chapter in your neighborhood.
  - h3: Redwood Creek All-Hands Planting Drive
  - p: Goal: 3,000 Coastal Douglas Fir & Redwood Saplings · Tools and lunch provided · 28 spots remaining.
  - button: RSVP For Drive →
  - h3: Cascadia Canopy Network
  - p: Focusing on coastal rainforest replenishment, riparian salmon run shading, and community tree nurseries in Oregon and Washington.
  - a: Register with Chapter →
  - h3: Blue Ridge Biome Guild
  - p: Restoring native American chestnut saplings, oak-hickory slopes, and combating invasive kudzu along Appalachian river basins.
  - a: Register with Chapter →
  - h3: Acadian Estuary Alliance
  - p: Coastal saltmarsh stabilization, dune grass seeding, and marine debris intercept points protecting migratory bird wetlands.
  - a: Register with Chapter →
- section #ledger .ledger-section
  - h2: Open-Access Ecological Ledger
  - p: Every grove planted is logged with open GPS coordinates, monitored through multispectral Sentinel-2 satellite passes, and audited by independent botanists.
  - table .ledger-table
    - th: Biome & Basin
    - th: GPS Coordinates
    - th: Dominant Species Mix
    - th: Staged Saplings
    - th: 3-Yr Survivability
    - th: Audit Protocol
    - td: Olympic Riparian Corridor
    - td: 47.8021° N, 123.6044° W
    - td: Sitka Spruce, Western Hemlock
    - td: 142,500
    - td: 96.4%
    - td: ✓ Sentinel-2 Satellite
    - td: Caledonian Pine Reserve
    - td: 57.1497° N, 3.7542° W
    - td: Scots Pine, Downy Birch, Rowan
    - td: 310,000
    - td: 92.8%
    - td: ✓ Drone LiDAR Survey
    - td: Appalachian Ridge Slope
    - td: 35.6532° N, 82.5540° W
    - td: Chestnut Oak, Shagbark Hickory
    - td: 88,400
    - td: 94.1%
    - td: ✓ Ground RFID Tags
    - td: Sundarbans Brackish Delta
    - td: 21.9497° N, 89.1833° E
    - td: Sundari, Black Mangrove, Nypa
    - td: 520,000
    - td: 95.7%
    - td: ✓ Multispectral Pass
    - td: Iberian Dehesa Restoration
    - td: 38.9241° N, 6.3440° W
    - td: Holm Oak, Cork Oak, Wild Olive
    - td: 165,000
    - td: 91.9%
    - td: ✓ Soil Probe IoT Array
- section #campaigns .campaigns-section
  - h2: Active Restoration Campaigns
  - p: Fund dedicated conservation projects with 100% transparent capital tracking. Every dollar converts directly into saplings, field equipment, and land easements.
  - h3: The Caledonian Pine Reconnection
  - p: Rejoining fragmented ancient pine forest fragments in Scotland to create a contiguous 60-mile wild habitat corridor for red squirrels and wildcats.
  - button: Support Campaign →
  - h3: Sundarbans Mangrove Armor Belt
  - p: Planting deep-rooted mangrove barriers along typhoon-vulnerable delta coastlines to protect over 120,000 coastal villagers and endangered habitats.
  - button: Support Campaign →
  - h3: Metropolitan Pollinator Meadow Belt
  - p: Transforming unused municipal verges, rooftop terraces, and industrial easements into native wildflower sanctuaries and pollinator stepping stones.
  - button: Support Campaign →
- section #stories .stories-section
  - h2: Field Stewards on the Difference We Make
  - p: Real perspectives from the volunteer coordinators, municipal biologists, and youth advocates restoring our shared ecosystems.
  - p: "When we began in Redwood Creek three seasons ago, the logging clearcut was eroding soil into the salmon spawning beds. Today, our fir saplings are shoulder-high, ground temperature has cooled 4°F, and the coho salmon have returned."
  - p: "Canopia completely changed how our high school students view climate action. It isn't abstract despair anymore—it's 2,000 trees they planted with their own hands that will shade this valley for centuries."
  - p: "The open satellite ledger gives our donors and corporate sponsors complete faith. There is zero ambiguity about whether the saplings were planted or survived. Everything is public, verifiable, and alive."
- section #faq .faq-section
  - h2: Frequently Asked Questions
  - p: Transparent answers regarding seedling survival audits, capital allocation, species selection, and community chapter launches.
  - button: How does Canopia guarantee that planted saplings survive beyond their first year?
  - button: Where do public donations and individual contributions actually go?
  - button: Can our local school, university, or hiking group start a registered chapter?
  - button: Why do you prioritize native mixed species over faster-growing commercial trees?
  - button: How can corporate partners or businesses participate without greenwashing?
- section .final-cta
  - h2: Make earth green again today.
  - p: Join over 86,000 volunteer stewards and 40 watershed communities creating permanent, verified living canopies across the globe.
  - button: Join the Movement →
  - a: Inspect Verified Ledger → → #ledger
- footer .site-footer
  - p: Canopia is a non-profit environmental collective accelerating biodiverse reforestation, watershed restoration, and community-powered ecological resilience.
  - ul .footer-links
    - li: Our Manifesto
    - li: Protection Pillars
    - li: Field Drives
    - li: Steward Stories
  - ul .footer-links
    - li: Public GPS Ledger
    - li: Campaign Budgets
    - li: Sentinel-2 Passes
    - li: Botanical Audits
  - ul .footer-links
    - li: Find Nearest Drive
    - li: School Action Kits
    - li: Corporate Neutrality
    - li: Support & Contact
- button: ×
- h3: Join the Canopia Movement
- p: Register for your upcoming local field drive. We supply seed stocks, planting spades, and field guidance.
- form #rsvpForm
  - label: Full Name
  - label: Email Address
  - label: Target Biome Drive
  - option: Redwood Creek All-Hands Planting Drive (Saturday)
  - option: Cascadia Canopy Network (Oregon / Washington)
  - option: Blue Ridge Biome Guild (Appalachian Basins)
  - option: Acadian Estuary Alliance (Saltmarsh Dune Defense)
  - option: Caledonian Pine Reconnection (Scotland)
  - option: General Movement Newsletter & Alert List
  - button: Confirm Steward Registration →
- h4: Registration Confirmed!
- p: You are confirmed as a field steward. We have dispatched your gear checklist and meeting point coordinates to your email.
- button: Return to Site

## Images in the page
- `./assets/canopia-logo.svg — Canopia`
- `./assets/hero-forest.jpg — Pristine ancient canopy forest`
- `./assets/volunteer-cleanup.jpg — Active volunteer cleanup steward`
- `./assets/community-planting.jpg — Community volunteers planting trees together`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #stewardName placeholder='e.g. Maya Lin'
- input[email] #stewardEmail placeholder='maya@brand.example'
- select #stewardDrive

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/canopia-logo.svg`
- `assets/community-planting.jpg`
- `assets/hero-forest.jpg`
- `assets/volunteer-cleanup.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
