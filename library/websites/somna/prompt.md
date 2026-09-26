# Rebuild prompt — Somna (`somna`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/somna/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Pediatric nocturnal biosignal and sleep wellness online store with under-mattress ballistocardiography showcase, interactive currency converter, live cart drawer, and clinical insight mockups.

## Title
Somna — Better sleep for growing minds

## Description meta
Somna tracks sleep, biosignals, and bedroom environment for children and teens ages 4-18 with no cameras, wearables, or disruption to their routine.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #FAF9F5;
  --color-card: #FFFFFF;
  --color-card-subtle: #F3F1EC;
  --color-card-dark: #12161A;
  --color-card-dark-subtle: #1A2127;
  --color-ink-primary: #15191E;
  --color-ink-secondary: #56616C;
  --color-ink-muted: #8E9AA5;
  --color-ink-light: #F5F7FA;
  --color-ink-light-muted: #9BA6B2;
  --color-border: #E8E6DF;
  --color-border-dark: #27313A;
  --color-sage: #2C6E49;
  --color-sage-light: #EBF5EF;
  --color-amber: #D97706;
  --color-amber-light: #FEF3C7;
  --color-blue-soft: #2563EB;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(21, 25, 30, 0.05);
  --shadow-md: 0 10px 30px -10px rgba(21, 25, 30, 0.08);
  --shadow-lg: 0 20px 40px -15px rgba(21, 25, 30, 0.12);
  --max-width: 1240px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteHeader .site-header
  - a: somna → #hero
  - nav “Primary Navigation”
    - ul .nav-links
      - li: Store
      - li: Science
      - li: Technology
      - li: How it Works
      - li: Advisors
      - li: FAQ
  - button: EUR €
  - button: USD $
  - button: GBP £
  - button: 1
  - a: Join the Founder's Series → #product
- main
  - section #hero .hero-section
    - h1: Better sleep for growing minds
    - p: Somna tracks sleep, biosignals, and bedroom environment for children and teens ages 4–18. No cameras, no wearables, nothing to charge. Backed by pioneers in nocturnal biosignal technology and pediatric sleep research.
    - a: Join the Founder's Series → #product
    - h4: Nocturnal Rest Score: 94%
    - p: 9h 14m Total · 2h 45m Deep Sleep
    - h4: Under-Mattress Ballistocardiography
    - p: 100% Non-Invasive · Zero Wearables
  - section #insights .insight-section
    - h2: You can't improve what you can't see.
    - p: Up to 45% of school-aged kids struggle with sleep. While adult sleep tracking has evolved for years, children's sleep has remained a mystery, until now. Somna helps parents understand what happens overnight with real clinical data, not guesswork.
    - p: The family's week in five minutes
    - p: Bedtime settled 24 mins earlier over three weeks. Sleep onset latency reduced by 40%.
    - h3: Hidden sleep patterns
    - p: Discover the subtle biological signals behind restless nights, daytime mood swings, and cognitive energy reserve.
    - h3: From guessing to knowing
    - p: Understand your child's sleep through objective insights — without interrogations, bedtime arguments, or intrusive cameras.
    - h3: Designed for growing minds
    - p: Science-backed biosignal monitoring engineered specifically for pediatric physiology and teens aged 4 to 18.
  - section #product .product-section
    - h2: Understand your child's sleep, without disturbing it.
    - p: Somna tracks sleep, biosignals, and bedroom environment for children and teens ages 4–18 with no cameras, wearables, or disruption to their routine.
    - ul .product-features-list
      - li: Understand wake-ups Slices under mattress topper or bed sheet completely out of sight.
      - li: Smart bedside hub Processes sleep signals securely on-device with zero cloud latency.
      - li: Personalized sleep insights Age-specific, plain-language guidance crafted by pediatric sleep doctors.
      - li: Privacy by design No cameras. No wearables. Nothing attached to your child.
    - button: Join the Founder's Series
    - p: Founder's Series: Lifetime app access included, free. Later customers will pay a subscription (€9.99/mo) — Founders never will.
    - button: How Somna Works
    - button: What's Included
    - button: Dimensions & Power
    - button: Shipping & Returns
    - button: Privacy & Security
  - section #night .nocturnal-section
    - h2: Silent observation. Restful every night.
    - p: Placed under the mattress, Somna turns ambient micro-movements into clinical sleep cycles — without wearables, cameras, or bedtime friction.
    - h4: See what happens at night
    - p: Understand wake-ups, sleep cycles, and overnight patterns with meaningful biological metrics.
    - h4: Personalized sleep insights
    - p: Receive clear reports that help you recognize triggers and establish healthier evening wind-down rituals.
    - h4: Completely non-invasive
    - p: Placed under the mattress, Somna works silently while your child sleeps naturally without itchy wristbands.
  - section #steps .steps-section
    - h2: How Somna supports better sleep
    - p: Three simple steps from unboxing to restorative nights.
    - h3: Sense
    - p: Somna automatically tracks your child's sleep when they get into bed along with bedroom environment. No recharging, no pairing routines, or daily activation required.
    - h3: Analyze
    - p: Continuous ballistocardiography processes micro-vibrations of heart rate variability, respiration cycles, and toss-and-turn frequency right on the bedside edge hub.
    - h3: Thrive
    - p: Parents receive plain-language morning briefings explaining sleep quality and actionable suggestions for evening routines, bedroom humidity, and bedtime consistency.
  - section #advisors .science-section
    - h2: Built with the minds behind the world's leading wellness technology.
    - p: Somna brings together pediatric sleep scientists, biosignal processing engineers, and hardware pioneers behind products trusted by millions of families globally.
    - h4: Dr. Astrid Lindström, MD, PhD
    - p: Pediatric Neurologist & Director of Child Sleep Medicine, Karolinska Institute
    - h4: Prof. Henrik Väänänen
    - p: Acoustic Ballistocardiography Pioneer & Biosignal Engineering Fellow
    - h4: Dr. Elena Rostova
    - p: Specialist in Adolescent Cognitive Development & Circadian Rhythms
  - section #faq .faq-section
    - h2: Frequently Asked Questions
    - p: Everything you need to know about Somna's non-invasive pediatric sleep tracker.
    - button: What age range is Somna designed for?
    - button: Does it work with thick spring or memory foam mattresses?
    - button: What if my child shares a bed or pets jump on the bed?
    - button: Is there any electromagnetic radiation near my child?
  - section .closing-cta
    - h2: Give your child the gift of restful, restorative sleep.
    - p: Secure the Somna suite today with our 30-night money-back guarantee and lock in free lifetime app access before subscriptions begin.
    - a: Claim Founder's Series Package → #product
- footer .site-footer
  - a: somna → #hero
  - p: Pediatric nocturnal biosignal intelligence and sleep tracking designed with empathy, scientific validation, and uncompromising privacy.
  - h5: Product
  - ul
    - li: Founder's Series
    - li: Acoustic Sensor Mat
    - li: Bedside Hub
    - li: Somna App
  - h5: Science
  - ul
    - li: Ballistocardiography
    - li: Advisory Board
    - li: Pediatric Sleep Studies
    - li: EMF Safety Reports
  - h5: Company
  - ul
    - li: About Somna
    - li: Support & Returns
    - li: Privacy Policy
    - li: hello@somna.example
- h3: Your Cart (1)
- button: ×
- h4: Somna Pediatric Sleep Suite
- p: ✓ Founder's Series Lifetime App Included
- button: Proceed to Checkout

## Images in the page
- `assets/hero-sleep.jpg — Child sleeping peacefully under linen bedding with Somna wooden sensor puck nearby`
- `assets/parent-child.jpg — Mother and young child looking happily at sleep insights on phone`
- `assets/child-energy.jpg — Energetic smiling child enjoying daytime focus and play`
- `assets/product-suite.jpg — Somna under-mattress acoustic sleep pad and bedside hub`
- `assets/product-suite.jpg — Complete suite`
- `assets/hero-sleep.jpg — Bed placement`
- `assets/nocturnal-sleep.jpg — Nocturnal mode`
- `assets/parent-child.jpg — Family app`
- `assets/nocturnal-sleep.jpg — Child sleeping serenely in ambient nighttime bedroom`
- `assets/team-advisors.jpg — Somna pediatric research and engineering team in collaborative studio`
- `assets/product-suite.jpg — Somna Pediatric Sleep Suite`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/child-energy.jpg`
- `assets/hero-sleep.jpg`
- `assets/nocturnal-sleep.jpg`
- `assets/parent-child.jpg`
- `assets/product-suite.jpg`
- `assets/team-advisors.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
