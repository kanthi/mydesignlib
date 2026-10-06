# Rebuild prompt — Althea (`althea-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/althea-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Keep the stack already in this folder (package.json, source, and built assets). Do not convert it to a different framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Mindful mental health, clinical psychotherapy & executive coaching sanctuary. Features atmospheric mint-sage serenity hero, ethereal portraiture, the signature 'Balance Switch' dual-canvas mindset transformation chamber, clinical specializations bento, patient journey reflection metrics, and an interactive private consultation scheduler.

## Title
Althea — A Path That Shapes Your Future

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tailwind colors
Keep these color names and values.

```js
colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e5ece7',
          200: '#cedcd2',
          300: '#abc4b4',
          400: '#83a691',
          500: '#608070',
          600: '#4d6958',
          700: '#3d5245',
          800: '#324238',
          900: '#2a372f',
          950: '#151d18',
        },
        ink: {
          900: '#141a17',
          800: '#222925',
          700: '#38423c',
          600: '#525e57',
        }
      }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav “Main Navigation”
    - a: altheapath → #top
    - a: About → #about
    - a: Services → #services
    - a: Balance → #switch-chamber
    - a: Stories → #stories
    - a: Sanctuary → #sanctuary
    - button: Book A Session
- section #top
  - h1: A Path That Shapes Your Future.
  - p: We offer therapy and coaching to help you navigate life's challenges with confidence and care. Together, we'll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace.
  - a: Start Your Journey → #switch-chamber
  - button: Toggle Balance
- section #switch-chamber
  - h2: There may not be a single switch, but there are clear steps forward.
  - p: Every path is different. These are the ways we help people move forward with confidence.
  - h2: If only finding balance were as simple as flipping a switch.
  - p: You're closer than you think. And every step you take makes it clearer.
  - button: Click The Switch Above
  - h4: Ground the System
  - p: Calming autonomic nervous reactivity through structured somatic pauses and restorative breath anchoring.
  - h4: Name the Pattern
  - p: Illuminating recurring defensive scripts, internalized anxieties, and high-friction self-demands.
  - h4: Chart Your Rhythm
  - p: Establishing steady, sustainable daily rituals that protect your mental energy and nurture enduring vitality.
- section #services
  - h2: Holistic psychological guidance, tailored to your unique tempo.
  - p: Every therapeutic journey at Althea is grounded in contemporary neuroscience, psychodynamic empathy, and somatic resilience.
  - button: Inquire Session
- section #about
  - h3: Where does your life feel most constricted?
  - p: Select an area of focus below to explore our clinical pathway recommendations.
  - button: Discuss In Consultation →
- section #stories
  - h2: Transformations in stillness.
  - p: " "
- section #sanctuary
  - h3: Private, accredited, and unhurried.
  - p: We operate as a boutique private practice. Every clinician is licensed, insured, and committed to complete confidentiality under strict HIPAA and Swiss medical privacy protocols.
- section
  - h2: A clearer mind begins with a single conversation.
  - p: Book an introductory consultation to discuss your challenges, explore our clinicians' approaches, and outline your personalized journey.
  - button: Schedule Initial Consultation
- footer
  - p: Mindful mental health, cognitive inquiry, and somatic restoration. Helping individuals uncover balance, peace, and lasting direction.
  - h5: Practices
  - ul
    - li: Individual Psychotherapy
    - li: Somatic Nervous System
    - li: Executive Burnout
    - li: Couples & Attachment
  - h5: Navigation
  - ul
    - li: Home Stage
    - li: Balance Chamber
    - li: Clinical Explorer
    - li: Patient Stories
  - h5: Sanctuary Hours
  - p: Monday – Friday: 08:00 – 19:00 CET Weekend emergency support available for enrolled patients.
  - a: care@althea.example → mailto:care@althea.example
- a: About → #about
- a: Services → #services
- a: Balance Chamber → #switch-chamber
- a: Stories → #stories
- a: Sanctuary → #sanctuary
- h3: Begin Your Journey
- p: Every therapeutic path begins with an introductory 25-minute discovery consultation.
- form
  - label: Your Name
  - label: Email Address
  - label: Session Format
  - option: Virtual (HIPAA Encrypted)
  - option: In-Person Sanctuary
  - label: Focus Area
  - option: Burnout & Exhaustion
  - option: Anxiety & Worry
  - option: Life Transition
  - option: Relational Patterns
  - button: Request Discovery Session →

## Images in the page
- `./assets/hero_portrait.jpg — Contemplative woman in serene sage atmosphere`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Claire Delacroix'
- input[email] placeholder='claire@example.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/althea_mark-CDDSVTMT.svg`
- `assets/althea_mark.svg`
- `assets/hero_portrait.jpg`
- `assets/index-C2A32Z7L.css`
- `assets/index.src-jcFPX2bh.js`
- `index.html`
- `index.src.html`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `preview.jpg`
- `src/App.tsx`
- `src/index.css`
- `src/main.tsx`
- `tailwind.config.js`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
