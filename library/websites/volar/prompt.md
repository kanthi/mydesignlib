# Rebuild prompt — Volar (`volar`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/volar/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Electric enduro motorcycle product launch: full-bleed high-contrast hero stage, 7-part interactive engineering scrubber with tool-free battery swap, real-time scroll-drawn GPS trail route, benchmark spec comparison, and batch reservation configurator.

## Title
Volar — Electric Enduro Motorcycle | TXR

## Description meta
Purpose-built electric enduro motorcycle. 72 hp, 1,080 Nm instant torque, 30-second tool-free battery swap. Scandinavian engineering without compromise.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@500;600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #0c0f0d;
  --bg-dark-elevated: #141916;
  --bg-dark-card: #19201c;
  --bg-light: #f5f3ef;
  --bg-light-elevated: #ffffff;
  --bg-light-card: #eae6df;
  --text-dark-primary: #f5f7fa;
  --text-dark-secondary: #8c9891;
  --text-dark-muted: #546059;
  --text-light-primary: #101512;
  --text-light-secondary: #5a665f;
  --text-light-muted: #9aa59e;
  --accent: #F4E500;
  --accent-hover: #e0d200;
  --accent-glow: rgba(244, 229, 0, 0.25);
  --border-dark: rgba(255, 255, 255, 0.08);
  --border-dark-strong: rgba(255, 255, 255, 0.18);
  --border-light: rgba(0, 0, 0, 0.08);
  --border-light-strong: rgba(0, 0, 0, 0.18);
  --font-display: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --wrap: 1320px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-pill: 9999px;
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #header .site-header
  - button: 01 / 07 Overview
  - a: 01 // Overview → #hero
  - a: 02 // Engineering → #engineering
  - a: 03 // Manifesto → #manifesto
  - a: 04 // Trail Route → #trail-route
  - a: 05 // Rally Action → #gallery
  - a: 06 // Technical Specs → #specs
  - a: 07 // Pre-Order → #preorder
  - a: Volar → #hero
  - ul .nav-links
    - li: Engineering
    - li: Route Proof
    - li: Specs
    - li: Our Heritage
  - a: Configure TXR → #preorder
- a: 01 // Overview → #hero
- a: 02 // Engineering → #engineering
- a: 03 // Manifesto → #manifesto
- a: 04 // Trail Route → #trail-route
- a: 05 // Specs → #specs
- a: 06 // Configure TXR → #preorder
- main
  - section #hero .hero
    - h2: A new era of enduro starts here.
    - p: Instant 1,080 Nm rear torque · 30s modular power swap · Monocoque carbon chassis
    - h1: A new era of enduro starts here.
    - p: Engineered for those driven to ride beyond limits. 1,080 Nm instant rear torque, 30-second tool-free modular battery swap, and surgical zero-emission control.
    - a: Configure now → #preorder
    - a: Explore the bike → #engineering
  - section #engineering .usp-section
    - h2: Seven innovations. Zero compromises.
    - ul #uspList .usp-list
      - li: Swap in 30 seconds 01 Volar OmniPack modular battery technology. Tool-free dual cam-lock mechanism. Built for rally enduro—faster than pouring five liters of fuel.
      - li: Power, instantly 02 1,080 Nm instantaneous torque multiplied through direct planetary reduction. 72 hp brushless motor with zero throttle lag across rock steps and steep loose hills.
      - li: Smart cockpit storage 03 Integrated weatherproof frame compartment. Carries multi-tools, trail tire levers, spare link pins, and compact 45-minute rapid field charger.
      - li: Ride in silence 04 No exhaust decibels. Greater sensory connection to the terrain. Hear tire deformation, rock displacement, and damping rebound in real time.
      - li: Less maintenance 05 No valves to shim, no crank oil to change, no clutch baskets to burn through. Sealed IP68 sub-assembly allows infinite muddy power-washing.
      - li: Tune your ride 06 Smartphone Bluetooth telemetry. Choose between 'Enduro Soft', 'Fast Cross-Country', and 'Hard Roost' power delivery curves with adjustable engine brake regen.
      - li: Confident by design 07 Aerospace CNC billet aluminum perimeter monocoque with structural carbon subframe. Lowest center of gravity in the 450cc-equivalent class.
  - section #manifesto .manifesto-section
    - blockquote: Some wait for change. Others engineer it.
    - p: We are driven to build an electric off-road future without compromise. Born out of Scandinavian enduro testing grounds, tested in sub-zero mud and punishing boulder tracks. The goal was never to convert a petrol chassis into electric—the goal was to build a machine that only electric architecture could ever achieve.
    - a: Read Technical Specs → → #specs
  - section #trail-route .trail-section
    - h2: Tested where conventional dirt bikes stall.
    - p: The Volar TXR underwent 14,000 km of brutal validation on the Gotland Grand National course, Arctic singletracks, and vertical granite couloirs.
    - h3: Built for technical singletracks
    - p: From steep granite slabs to root-choked alpine trails, the instantaneous power of the TXR lets riders clear fallen obstacles from a standstill. No clutching, no stalling, no hesitation.
    - h3: Ready for multi-lap racing
    - p: With swappable OmniPacks in your pit paddock, you spend zero time waiting for a charging cable during multi-hour endurance events. Unlatch, slide in a fresh 5.2 kWh module, and return to the line in 30 seconds.
  - section #specs .specs-section
    - h2: Volar TXR vs 450cc Combustion
    - p: Engineered to surpass standard four-stroke 450cc competition bikes across torque, response, center-of-gravity, and service cost.
    - table .specs-table
      - th: Engineering Metric
      - th: Volar TXR (Electric)
      - th: Standard 450cc Enduro
      - td: Peak Power Output
      - td: 72 hp (54 kW)
      - td: 58 hp (43 kW)
      - td: Peak Rear-Wheel Torque
      - td: 1,080 Nm (instantaneous)
      - td: 48 Nm (engine crankshaft)
      - td: Battery / Refuel Time
      - td: 30 Seconds (Tool-Free Swap)
      - td: 3 - 5 Minutes (Fuel can)
      - td: Curb Weight (Ready to Race)
      - td: 104 kg
      - td: 110 kg (wet with fuel)
      - td: Acoustic Signature
      - td: < 62 dB (Tire noise only)
      - td: 98 - 114 dB (Combustion)
      - td: Major Service Interval
      - td: 10,000 km (bearings check)
      - td: 15 - 20 Hours (oil/filter/valves)
      - td: Suspension Travel
      - td: 300 mm Front / 310 mm Rear
      - td: 290 mm Front / 300 mm Rear
      - td: Range (Hard Mixed Enduro)
      - td: Up to 4.5 Hours per Pack
      - td: Approx 3.5 Hours (9L tank)
  - section #preorder .preorder-section
    - h2: Be the first on the line.
    - ul .perks-list
      - li: Guaranteed delivery slot in Batch 01 (Spring 2027)
      - li: Includes OmniPack Fast Charger (0-100% in 45 minutes)
      - li: 3-Year Unlimited Powertrain & Battery Warranty
    - form #reservationForm .config-card
      - label: Full Name
      - label: Email Address
      - label: Delivery Market
      - option: European Union (€14,800 incl. VAT)
      - option: Scandinavia (SEK / NOK / DKK)
      - option: United States / Canada (USD $15,900)
      - option: United Kingdom (£12,900)
      - option: Other Global Market (Join Waitlist)
      - label: Battery Module Option
      - option: Single OmniPack 5.2 kWh (Included)
      - option: Dual OmniPack Package (+ €2,400)
      - option: Factory Race Paddock Pack (3x Modules + Hub)
      - button: Reserve Volar TXR (€99) →
- button: ✕
- button: ❚❚ PAUSE
- footer .site-footer
  - h2: Explore beyond limits.
  - a: Pre-order Volar TXR → #preorder
  - ul .footer-links
    - li: Volar TXR Enduro
    - li: OmniPack System
    - li: Technical Specs
    - li: Rally Telemetry
  - ul .footer-links
    - li: Our Heritage
    - li: Paddock Support
    - li: Dealer Network
    - li: Press Inquiries
  - p: Volar Motoworks AB Gotland Proving Grounds Visby, Sweden
  - p: 57°38′N 18°17′E
  - a: Privacy Policy → #
  - a: Terms of Reservation → #
  - a: CE Declarations → #

## Images in the page
- `assets/hero.webp — Volar TXR Electric Enduro Motorcycle`
- `assets/action-roost.jpg — Trailer preview`
- `assets/usp-swap.webp — Volar OmniPack Battery Swap`
- `assets/usp-power.webp — Volar 72 hp Brushless Powertrain`
- `assets/usp-storage.webp — Integrated Frame Tool Cavity`
- `assets/usp-silence.webp — Quiet Trail Exploration`
- `assets/usp-maintenance.webp — Sealed Brushless Motor Architecture`
- `assets/usp-tuning.webp — Companion Smartphone App`
- `assets/usp-design.webp — Billet Aluminum Monocoque Chassis`
- `assets/action-forest.jpg — Rider in Scandinavian forest trail`
- `assets/action-roost.jpg — Volar TXR carving a deep dirt berm`
- `assets/action-trail.jpg — Volar TXR rider in extreme rocky race sector`
- `assets/action-roost.jpg — Volar TXR Video Film Still`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #riderName placeholder='Henrik Lindqvist'
- input[email] #riderEmail placeholder='henrik@example.com'
- select #riderRegion
- select #riderPack

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/action-forest.jpg`
- `assets/action-roost.jpg`
- `assets/action-trail.jpg`
- `assets/hero.webp`
- `assets/usp-design.webp`
- `assets/usp-maintenance.webp`
- `assets/usp-power.webp`
- `assets/usp-silence.webp`
- `assets/usp-storage.webp`
- `assets/usp-swap.webp`
- `assets/usp-tuning.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
