# Rebuild prompt — Thalora (`thalora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/thalora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Serene mindfulness, somatic breathwork & restorative wellness platform: deep forest-green palette, editorial serif display headlines, living interactive breath pacer with Web Audio harmonic soundbowls, four-pillar bento curriculum, clinical evidence metrics, transparent monthly/annual membership pricing, and retreat RSVP banner.

## Title
Thalora — Transform Your Body. Calm Your Mind. Elevate Your Life.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-canvas: #121611;
  --bg-surface-elevated: #182016;
  --bg-surface-card: #202a1d;
  --bg-surface-card-hover: #273424;
  --bg-glass: rgba(24, 32, 22, 0.78);
  --bg-glass-subtle: rgba(255, 255, 255, 0.04);
  --accent-mint: #76e09a;
  --accent-mint-bright: #96f5b7;
  --accent-mint-glow: rgba(118, 224, 154, 0.22);
  --accent-mint-soft: rgba(118, 224, 154, 0.12);
  --accent-sage: #a7b39e;
  --accent-amber: #eab308;
  --text-primary: #f7faf5;
  --text-secondary: #c2cebd;
  --text-muted: #82907b;
  --text-dark: #121611;
  --border-subtle: rgba(255, 255, 255, 0.09);
  --border-accent: rgba(118, 224, 154, 0.38);
  --border-glass: rgba(255, 255, 255, 0.12);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --ease-gentle: cubic-bezier(0.16, 1, 0.3, 1);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-full: 9999px;
  --container-max: 1240px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteNav .site-nav
  - a: Thalora → #hero
  - nav .nav-pill-menu “Main Navigation”
    - a: Home → #hero
    - a: Breath Pacer → #breathPacer
    - a: Practices → #pillars
    - a: Faculty → #faculty
    - a: Membership → #pricing
    - a: FAQ → #faq
  - button: Book a Call
- a: Home → #hero
- a: Breath Pacer → #breathPacer
- a: Practices → #pillars
- a: Faculty → #faculty
- a: Membership → #pricing
- a: FAQ → #faq
- button: Book a Call
- main
  - section #hero .hero-section
    - h1: Transform Your Body. Calm Your Mind. Elevate Your Life.
    - p: Experience personalized fitness, restorative vinyasa, and clinical-grade somatic mindfulness designed to down-regulate sensory fatigue and awaken grounded vitality.
    - a: Start Your Journey → #pricing
    - a: Join Member → #pillars
  - section .metrics-section
  - section #breathPacer .pacer-section
    - h2: Harmonize Your Nervous System in Real Time
    - p: Take a 90-second pause. Select a cadence below, synchronize your breath with the expanding halo, and feel your heart rate variability settle.
    - button: Box Breathing (4-4-4-4)
    - button: 4-7-8 Deep Rest
    - button: 5-5 Heart Coherence
    - button: ▶ Begin Practice
    - button: 🔔 Soundbowl Chime
  - section .comparison-section
    - h2: From Modern Overwhelm to Grounded Clarity
    - p: Why traditional meditation apps fail and how embodied somatic sequencing restores authentic baseline peace.
    - h3: Modern Sensory Overload
    - ul .comp-list
      - li: ✕ Fragmented Micro-Attention Constant digital notifications trigger shallow chest breathing and sympathetic nervous system hyperarousal.
      - li: ✕ Chronic Somatic Armoring Unprocessed micro-stress gets locked into cervical vertebrae, shoulders, and psoas muscles without somatic release.
      - li: ✕ Sleep-Onset Restlessness Mental racing and elevated evening cortisol prevent entering restorative Stage 3 and 4 delta-wave sleep.
    - h3: The Thalora Grounding Protocol
    - ul .comp-list
      - li: ✓ Vagus Nerve Down-Regulation Targeted prolonged-exhale breathwork shifts your physiological tone into deep parasympathetic restoration within 3 minutes.
      - li: ✓ Embodied Fascial Decompression Gentle restorative yoga shapes dissolve stored tension patterns without aggressive physical strain or athletic ego.
      - li: ✓ Circadian Harmonic Tuning Acoustic Tibetan soundbowls and 432Hz binaural frequencies gently guide neural oscillation from beta to slow delta.
  - section #pillars .pillars-section
    - h2: Designed for Holistic Somatic Health
    - p: A comprehensive curriculum spanning breath, movement, sound, and personalized human guidance.
    - h3: Somatic Breathwork & Vagus Calibration
    - p: Learn precise diaphragmatic breathing ratios measured by bio-feedback sensors. Dissolve anxiety, clear cognitive fog, and reset sympathetic tone in under ten minutes.
    - button: ▶
    - h3: Restorative & Yin Vinyasa
    - p: Slow, therapeutic sequences that open connective tissue without cardiovascular strain. Perfect for evenings, desk recovery, and weekend renewal.
    - h3: Circadian Sound Architecture
    - p: Field recordings from old-growth redwood forests, acoustic Himalayan singing bowls, and pure 432Hz delta-wave frequencies.
    - h3: Certified Human Mentorship
    - p: You aren't left alone with an algorithm. Pair with an accredited somatic practitioner who customizes your weekly ritual schedule and reviews physiological progress.
  - section #faculty .faculty-section
    - h2: Guided by Master Practitioners
    - p: Decades of somatic lineage, clinical neurobiology research, and meditative wisdom.
    - h3: Elena Vane
    - p: Former clinical researcher at Zurich Mindfulness Institute. Specializes in polyvagal nervous system re-patterning.
    - h3: Marcus Chen
    - p: 20+ years studying Himalayan sacred sound traditions. Curator of Thalora's immersive circadian frequency library.
    - h3: Dr. Sarah Lindqvist
    - p: Author of 'The Rested Cortex'. Bridges peer-reviewed autonomic research with ancient pranayama breath control.
    - h3: Devon Keller
    - p: E-RYT 500 instructor focused on myofascial release, joint decompression, and accessible restorative yoga for executives.
  - section .testimonials-section
    - h2: Verified Transformations
    - p: Real biometric and emotional breakthroughs from practitioners inside the Thalora Sanctuary.
    - p: "As a venture founder, my resting heart rate was constantly in fight-or-flight. The 10-minute 4-4-4-4 breathwork protocol completely re-calibrated my evenings. I haven't slept this deeply in a decade."
    - p: "Other wellness apps felt like another to-do list. Thalora feels like stepping into a warm cedar bathhouse in the woods. The soundbowls and slow yin vinyasa saved me from severe burnout."
    - p: "The 1-on-1 somatic mentorship is genuinely life-changing. Elena helped me identify where I was holding tension in my jaw and shoulders that I didn't even notice. My Oura sleep score rose from 68 to 91."
  - section #pricing .pricing-section
    - h2: Simple, Transparent Investment
    - p: All tiers include unlimited daily live practices, on-demand somatic soundbaths, and bio-feedback telemetry.
    - button: Monthly
    - button: Annual
    - h3: Foundations
    - p: Essential daily somatic grounding for individuals establishing a peaceful morning and evening habit.
    - ul .plan-features-list
      - li: ✓ 450+ guided breathwork & yin sessions
      - li: ✓ High-fidelity 432Hz soundbath library
      - li: ✓ Mobile & tablet offline sync
      - li: ✓ Daily live 15-minute community resets
    - button: Select Foundations
    - h3: Sanctuary Access
    - p: Complete holistic integration including biometric HRV tracking, personalized daily sequences, and live masterclasses.
    - ul .plan-features-list
      - li: ✓ Everything in Foundations
      - li: ✓ Biometric Oura & Apple Health sync
      - li: ✓ Monthly interactive faculty workshops
      - li: ✓ Personalized autonomic habit blueprint
      - li: ✓ Complimentary Japanese cedar tea kit
    - button: Join Sanctuary Access
    - h3: Private Immersion
    - p: Deep nervous system transformation paired directly with an accredited 1-on-1 somatic guide.
    - ul .plan-features-list
      - li: ✓ Everything in Sanctuary Access
      - li: ✓ Two 1-on-1 private video sessions monthly
      - li: ✓ Asynchronous voice guide support via app
      - li: ✓ Priority invitation to Lake Tahoe retreats
    - button: Select Immersion
  - section #faq .faq-section
    - h2: Answers to Peaceful Doubts
    - p: Everything you need to know about joining the Thalora collective and our practice methodology.
    - button: What if I have never practiced meditation or yoga before? +
    - p: Thalora was purposefully built without dogma, esoteric jargon, or athletic pressure. Over 60% of our members entered with zero prior experience. We begin with simple 3-minute diaphragmatic breaths that require no flexibility or special posture.
    - button: How does somatic breathwork differ from regular mindfulness apps? +
    - p: Standard mindfulness apps focus solely on top-down mental observation ("watch your thoughts"), which often increases frustration when anxiety is high. Somatic breathwork uses a bottom-up autonomic mechanism: by extending your exhale ratio, we mechanically activate the vagus nerve to slow your heartbeat and down-regulate adrenaline directly in your tissues.
    - button: What equipment or space do I need at home? +
    - p: None at all. You can practice from an office chair, a comfortable sofa, or lying flat on your bed. A yoga mat and headphones are recommended for soundbaths, but completely optional.
    - button: Can I pause or cancel my membership at any time? +
    - p: Yes, absolutely. We believe peace of mind extends to billing. You can pause your subscription for up to 3 months or cancel in one click with zero penalties or hidden friction directly inside your settings.
    - button: Are in-person retreats included in the digital membership? +
    - p: Digital members receive advance priority ticketing windows and 20% tuition discounts for our annual in-person sanctuary retreats in Lake Tahoe, Kyoto, and the Swiss Alps.
  - section .retreat-banner-section
    - h2: An Autumn Silence: The Lake Tahoe Immersion
    - p: Four days of digital disconnection, cedarwood sauna soundbaths, and guided mountain breathwork. Intentionally limited to 24 practitioners.
    - form .rsvp-form
      - button: Request Invitation
- footer .site-footer
  - a: Thalora → #hero
  - p: An autonomous sanctuary for restorative breath, somatic nervous system calibration, and quiet holistic vitality.
  - h4: Practices
  - ul .footer-links-list
    - li: Somatic Breathwork
    - li: Restorative Vinyasa
    - li: Circadian Soundbaths
    - li: Vagus Decompression
  - h4: Sanctuary
  - ul .footer-links-list
    - li: Teaching Faculty
    - li: Membership Tiers
    - li: Lake Tahoe Retreat
    - li: Biometric Research
  - h4: Collective
  - ul .footer-links-list
    - li: Book Consultation
    - li: Practitioner FAQ
    - li: Privacy & Boundaries
    - li: Member Sign In
- button: ✕
- h3: Who We Are: The Quiet Revolution
- p: A 6-minute documentary tracing how somatic breathwork and slow movement decompress modern autonomic overload. Produced in partnership with the Zurich Neurobiology Institute.
- h3: Reserve Your Intake Call
- p: Connect with an accredited somatic practitioner for a 20-minute video assessment to tailor your weekly practice blueprint.
- form
  - label: Full Name
  - label: Email Address
  - label: Primary Somatic Goal
  - option: Evening Stress Down-Regulation & Deeper Sleep
  - option: Chronic Neck, Shoulder & Psoas Fascial Tension
  - option: Daytime Cognitive Focus & Breath Control
  - option: Full Sanctuary Holistic Immersion
  - button: Confirm Reservation

## Images in the page
- `assets/hero-meditation.jpg — Mindful practitioner seated in serene forest meditation`
- `assets/retreat-lake.jpg — Peaceful sunrise sanctuary preview`
- `assets/soundbowl.jpg — Handcrafted Tibetan bronze singing bowl with sandalwood incense`
- `assets/hero-meditation.jpg — Elena Vane`
- `assets/soundbowl.jpg — Marcus Chen`
- `assets/hero-meditation.jpg — Dr. Sarah Lindqvist`
- `assets/retreat-lake.jpg — Devon Keller`
- `assets/retreat-lake.jpg — Sanctuary Documentary`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your private email...'
- input[text] placeholder='Elena Rostova'
- input[email] placeholder='elena@domain.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-meditation.jpg`
- `assets/retreat-lake.jpg`
- `assets/soundbowl.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
