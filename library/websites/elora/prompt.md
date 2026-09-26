# Rebuild prompt — Elora Vance (`elora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/elora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Somatic hypnotherapy & nervous system repatterning — warm linen and deep forest green palette, stadium pattern cards, interactive conscious vs subconscious matrix, 3-pillar method, card fan perspective gallery, 6-focus bento, and interactive consultation scheduler.

## Title
Elora Vance — Somatic Hypnotherapy & Nervous System Repatterning

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Surfaces & Canvas */
  --canvas-light: #faf8f5;
  --canvas-subtle: #f3efe9;
  --canvas-card: #ffffff;
  --canvas-sage-tint: #eaf1eb;
  --canvas-deep-forest: #182a1c;
  --canvas-forest-elevated: #223827;
  --canvas-forest-card: #1c3221;
  --canvas-forest-border: rgba(255, 255, 255, 0.12);
  /* Brand Accents */
  --accent-honey: #d98a2c;
  --accent-honey-hover: #c27820;
  --accent-honey-glow: rgba(217, 138, 44, 0.28);
  --accent-sage: #6e8a75;
  --accent-sage-soft: #d8e5da;
  --accent-gold-soft: #e8a74a;
  /* Typography & Ink */
  --ink-heading: #1c1f1d;
  --ink-body: #3c423e;
  --ink-muted: #6b736d;
  --ink-faint: #98a19a;
  --ink-on-dark: #f8faf8;
  --ink-on-dark-muted: #a8b8aa;
  --ink-on-dark-faint: #6f8071;
  /* Borders & Dividers */
  --border-light: rgba(28, 31, 29, 0.08);
  --border-standard: rgba(28, 31, 29, 0.14);
  --border-honey: rgba(217, 138, 44, 0.4);
  --border-dark-subtle: rgba(255, 255, 255, 0.1);
  /* Glassmorphism */
  --glass-light: rgba(255, 255, 255, 0.82);
  --glass-light-card: rgba(255, 255, 255, 0.75);
  --glass-dark-card: rgba(24, 42, 28, 0.72);
  --glass-blur: 16px;
  /* Typography Families */
  --font-serif: "Fraunces", "Playfair Display", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6.5rem;
  /* Border Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-xl: 36px;
  --radius-stadium: 9999px;
  --radius-frame: clamp(24px, 3.5vw, 44px);
  /* Shadows */
  --shadow-subtle: 0 4px 20px -2px rgba(24, 42, 28, 0.05);
  --shadow-elevated: 0 16px 40px -8px rgba(24, 42, 28, 0.1);
  --shadow-glow-honey: 0 10px 30px -4px rgba(217, 138, 44, 0.35);
  --shadow-dark-card: 0 20px 45px -10px rgba(0, 0, 0, 0.45);
  /* Layout */
  --container-max: 1200px;
  --container-narrow: 860px;
  --gutter: clamp(1.25rem, 4vw, 2.5rem);
  --nav-height: 72px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header-nav
  - nav .nav-bar “Main Navigation”
    - a: Elora Vance Somatic & Hypnotherapy → #hero
    - a: Patterns → #patterns
    - a: Conscious Mind → #matrix
    - a: Method → #method
    - a: Perspective → #perspective
    - a: What We Treat → #focus
    - a: Process → #process
    - a: FAQs → #faq
    - button: Book consultation
- section #hero .hero-section
  - h1: You've tried to change it. So why does it keep coming back?
  - p: Willpower operates at the conscious surface. Lasting emotional freedom begins when we gently regulate the somatic nervous system and update the protective neural loops beneath.
  - p: “Elora transformed my relationship with chronic pressure. After years of talk therapy, her somatic repatterning finally broke the subconscious loop holding me back!”
  - button: Book a free consultation
  - a: See how it works → → #method
- section #patterns .pattern-section
  - h2: Maybe the problem isn't that you haven't tried hard enough.
  - p: Maybe you've already tried everything. You've done the work, read the books, made the lists, and had the hard conversations. Still, something deep pulls you back into the exact same reaction.
  - h3: You've overthought it.
  - p: Analyzing every emotional trigger from the intellect alone keeps the autonomic nervous system in continuous analytical vigilance.
  - h3: You've promised yourself it would be different.
  - p: Tomorrow. Monday. This time you'll stay calm. But when the stress trigger strikes, the automatic body reflex fires before your logic can intervene.
  - h3: You've tried to control it.
  - p: Bracing against anxiety, clenching your jaw, and fighting physiological sensations only reinforces the neural threat pathways you are trying to break.
- section #matrix .somatic-matrix-section
  - h2: Your conscious mind can want one thing while your patterns keep pulling you somewhere else.
- section #method .method-section
  - h2: Elora doesn't just focus on the symptom. She looks at the pattern underneath it.
  - p: A structured, evidence-grounded therapeutic methodology that pairs clinical hypnotherapy with somatic nervous system regulation.
  - h3: Understand
  - p: Make space for what is happening now in your physical body and emotional responses — without judgment — and clarify what true relief looks and feels like.
  - h3: Explore
  - p: Gently trace the physiological responses, somatic triggers, and subconscious beliefs connected to the loop, unveiling why the nervous system originally adapted them.
  - h3: Repattern
  - p: Practice and anchor new, safe neural responses in theta state that feel natural, effortless, and grounded in your everyday personal and professional life.
- section #perspective .perspective-section
  - h2: Imagine if this stopped taking so much energy.
  - p: “The goal isn't to become someone else. It's to make it effortless to be the person you already know you can be.”
- section #focus .focus-section
  - h2: What are you ready to change?
  - p: A discovery consultation is a safe, unhurried space to talk through what has felt difficult — and whether this approach feels like the right fit for your nervous system.
  - h3: Anxiety & Overthinking
  - p: Quieting persistent mental chatter, catastrophic forecasting, and chronic fight-or-flight adrenal states.
  - button: →
  - h3: Confidence & Self-Belief
  - p: Overcoming deep-rooted imposter feelings, fear of visibility, and subconscious self-sabotage in leadership.
  - button: →
  - h3: Stress & Overload
  - p: Resetting your somatic baseline from burnout and chronic tension back to emotional resilience and vitality.
  - button: →
  - h3: Habits & Compulsions
  - p: Rewiring automated coping mechanisms, emotional eating, doomscrolling, and procrastination loops.
  - button: →
  - h3: Fears & Phobias
  - p: Desensitizing instinctual panic triggers, public speaking dread, claustrophobia, and travel distress safely.
  - button: →
  - h3: Sleep & Deep Restoration
  - p: Training your autonomic nervous system to smoothly surrender into deep, uninterrupted theta and delta sleep cycles.
  - button: →
- section #process .process-section
  - h2: Simply a conversation.
  - p: There is zero pressure to commit to anything. Just a quiet, unhurried space to share what's been going on, ask questions, and see if working together feels right.
  - h3: Book your call
  - p: Choose a quiet 20-minute video slot that works for your personal schedule.
  - h3: Tell Elora what's going on
  - p: Bring the thing you've been carrying around. No need to prepare or filter.
  - h3: Decide together
  - p: Talk through whether a customized 4-session somatic package makes sense.
  - button: Book a free consultation
- section #faq .faq-section
  - h2: Frequently asked questions.
  - p: Everything you need to know about somatic hypnotherapy, safety, and session dynamics.
  - button: How is somatic hypnotherapy different from traditional talk therapy? +
  - button: Will I remain in complete control during the session? +
  - button: Can somatic hypnotherapy sessions be conducted effectively online? +
  - button: How many sessions are typically required to see permanent change? +
  - button: What if I have difficulty relaxing or quietening my mind? +
- button: ×
- h3: Book your discovery call
- p: 20 minutes with Elora Vance. Confidential & zero pressure.
- form #consultationForm
  - label: Your Full Name
  - label: Email Address
  - label: Primary Area of Focus
  - option: Anxiety & Overthinking
  - option: Sleep Disruption & Night Waking
  - option: Burnout & Emotional Overload
  - option: Imposter Syndrome & Self-Belief
  - option: Habit Patterns & Compulsions
  - option: Other Somatic Pattern
  - label: Preferred Session Format
  - option: Online Video Session (Global)
  - option: In-Person Studio (Zurich, Switzerland)
  - label: Briefly share what you are experiencing (Optional)
  - button: Confirm Consultation Request →
- h4: Consultation Requested
- p: Thank you. Elora's team will review your focus areas and email you a calendar invitation within 24 hours.
- footer .site-footer
  - p: Somatic Hypnotherapy & Nervous System Repatterning. Restoring baseline calm where willpower alone cannot reach.
  - ul .footer-links-list
    - li: The 3 Pillars
    - li: Vagus Regulation
    - li: Neuroplasticity
    - li: Loop Interruption
  - ul .footer-links-list
    - li: Anxiety Loops
    - li: Sleep Restoration
    - li: Burnout & Overload
    - li: Habits & Compulsions
  - ul .footer-links-list
    - li: Consultation Process
    - li: Client FAQs
    - li: hello@eloravance.example
    - li: Back to Top ↑

## Images in the page
- `assets/avatar-elora.jpg — Elora Vance`
- `assets/hero-somatic.jpg — Somatic Therapy Session`
- `assets/avatar-sara.jpg — Sara Stephen`
- `assets/avatar-elora.jpg — Elora`
- `assets/pattern-01.jpg — Overthinking somatic tension`
- `assets/pattern-02.jpg — Promised yourself it would be different`
- `assets/pattern-03.jpg — Trying to hyper-control bodily reactions`
- `assets/therapist-portrait.jpg — Elora Vance in studio`
- `assets/focus-anxiety.jpg — Cognitive overthinking`
- `assets/pattern-02.jpg — Somatic breath alignment`
- `assets/hero-somatic.jpg — Grounded ease`
- `assets/focus-sleep.jpg — Deep restorative sleep`
- `assets/focus-confidence.jpg — Radiant self-belief`
- `assets/focus-anxiety.jpg — Anxiety & Overthinking`
- `assets/focus-confidence.jpg — Confidence & Self-Belief`
- `assets/focus-stress.jpg — Stress & Emotional Overload`
- `assets/focus-habits.jpg — Habits & Unwanted Patterns`
- `assets/focus-fears.jpg — Fears & Phobias`
- `assets/focus-sleep.jpg — Sleep & Deep Restoration`
- `assets/ambient-process.jpg — Tactile therapy studio atmosphere`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #clientName placeholder='e.g. Elena Rostova'
- input[email] #clientEmail placeholder='elena@example.com'
- select #focusTopic
- select #sessionFormat
- textarea #notes placeholder='What pattern feels ready to shift?'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/ambient-process.jpg`
- `assets/ambient-process.svg`
- `assets/avatar-elena.jpg`
- `assets/avatar-elena.svg`
- `assets/avatar-elora.jpg`
- `assets/avatar-elora.svg`
- `assets/avatar-marcus.jpg`
- `assets/avatar-marcus.svg`
- `assets/avatar-sara.jpg`
- `assets/avatar-sara.svg`
- `assets/focus-anxiety.jpg`
- `assets/focus-anxiety.svg`
- `assets/focus-confidence.jpg`
- `assets/focus-confidence.svg`
- `assets/focus-fears.jpg`
- `assets/focus-fears.svg`
- `assets/focus-habits.jpg`
- `assets/focus-habits.svg`
- `assets/focus-sleep.jpg`
- `assets/focus-sleep.svg`
- `assets/focus-stress.jpg`
- `assets/focus-stress.svg`
- `assets/hero-somatic.jpg`
- `assets/hero-somatic.svg`
- `assets/pattern-01.jpg`
- `assets/pattern-01.svg`
- `assets/pattern-02.jpg`
- `assets/pattern-02.svg`
- `assets/pattern-03.jpg`
- `assets/pattern-03.svg`
- `assets/therapist-portrait.jpg`
- `assets/therapist-portrait.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
