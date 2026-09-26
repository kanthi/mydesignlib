# Rebuild prompt — Cognita (`cognita`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Education
- Folder: `library/websites/cognita/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Academic & enterprise AI readiness credentialing: parchment ivory substrate, neoclassical university dome engraving, multi-axial AIQ radar certification, and institutional governance.

## Title
Cognita — Measure, Improve & Certify AI Readiness at Scale

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #FAF9F6;
  --color-surface-white: #FFFFFF;
  --color-surface-subtle: #F3F1EC;
  --color-surface-tint: #EBF2F8;
  --color-ink-primary: #11181C;
  --color-ink-secondary: #4B5563;
  --color-ink-muted: #84909A;
  --color-prussian: #1D3B5C;
  --color-prussian-light: #2B527E;
  --color-prussian-tint: #E8F0F8;
  --color-accent-green: #15803D;
  --color-badge-green-bg: #E8F7EE;
  --color-accent-amber: #B45309;
  --color-border: rgba(17, 24, 28, 0.08);
  --color-border-strong: rgba(17, 24, 28, 0.14);
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 4px;
  --radius-btn: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 12px 28px rgba(29, 59, 92, 0.06);
  --shadow-float: 0 20px 50px rgba(29, 59, 92, 0.12);
  --transition-fast: 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .site-nav
  - a: cognita → #
  - ul .nav-links
    - li: Higher Ed
    - li: Enterprise
    - li: AIQ™
    - li: Security
    - li: Research
  - button: Book a demo
  - button: See your AIQ
- main
  - section .hero-section
    - h1: Anyone can use AI. Can you prove you use it well?
    - p: See your AIQ™ — the credential for how well you actually work with AI.
    - button: See your AIQ
    - button: Book a demo
  - h4: 01 AI Governance
  - p: Policy, controls & visibility across your institutional AI stack.
  - h4: 02 Learning Intelligence
  - p: See how people reason, prompt, and learn with AI in real time.
  - h4: 03 AI Readiness
  - p: Measure how prepared your workforce and students really are.
  - h4: 04 AI Security
  - p: Enterprise data protection, tenant isolation, and ethics compliance.
  - section #pipeline .pipeline-section
    - h2: From one person to an entire institution.
    - p: Individuals start with AIQ™. Universities and enterprises deploy Cognita to understand, govern, and improve AI readiness across their entire population.
    - h4: ■ Individual Earns AIQ™
    - p: Learners complete verified problem-solving prompts and earn their personal cryptographic readiness score.
    - h4: ■ Readiness, Measured at Scale
    - p: Faculty and leadership benchmark cohort strengths, epistemic gaps, and AI fluency across departments.
    - h4: ■ Institution Deploys Cognita
    - p: Turn blind generative AI adoption into a verified, measurable, and certifiable competitive advantage.
  - section #proof .proof-section
    - h2: Proof, measured where the work happens.
    - p: Readiness measured inside real institutions — not a controlled synthetic test, not a subjective survey.
    - h3: Across a full term at Babson College, Cognita measured the AI readiness of 211 students in live coursework.
  - section .contracts-section
    - h2: Your people already use AI. You just can't see how well.
    - p: Usage dashboards report how much AI was used. They can't tell you how well. Cognita measures the readiness behind the usage — and certifies it.
    - p: Outputs were the measure of intelligence. When AI produces the final artifact in seconds, traditional submission inspection breaks down completely.
    - p: The reasoning behind AI use becomes the new measure of capability. Cognita evaluates how questions are framed, evidence verified, and logic refined.
  - section #roles .roles-section
    - h2: One platform. A view for every role.
    - p: Every role sees the view built for the decisions they own — from institution-wide governance to an individual's own readiness.
    - h4: GOVERN AI INSTITUTION-WIDE
    - p: Control usage, data privacy policies, and adoption across your entire university or enterprise.
    - h4: SEE THE LEARNING BEHIND THE AI
    - p: Observe student engagement, critical inquiry paths, and AI readiness insights across coursework.
    - h4: KNOW YOUR OWN AIQ™
    - p: Track your AI capability, cognitive growth, and carry your certified score to top employers.
  - section .hire-section
    - h2: Institutions buy it. People carry it.
    - p: Cognita is one platform with two ends. Institutions deploy it to their people; individuals earn their AIQ™ free. The credential stays with the person, wherever they go next.
    - button: Explore Enterprise →
    - h3: Sarah Johnson
    - p: Business & Finance · Babson Class of 2026
  - section #security .security-section
    - h2: Enterprise-grade by architecture.
    - p: Built security-first and aligned with the standards institutions and enterprises require. Your data stays yours — encrypted in transit and at rest, governed by your policies, owned by you. Institutional data is never used to train external AI models.
  - section .bottom-cta-section
    - h2: See your AIQ
    - p: Individuals start free. Universities and enterprises — see how Cognita governs, measures, and certifies AI across your people.
    - button: See your AIQ
    - button: Book a demo
- footer .site-footer
  - h4: cognita
  - p: Proof of intelligence for the age of AI. Govern AI, measure readiness, certify fluency across higher education and global enterprises.
  - h5: PLATFORM
  - ul .footer-links
    - li: How it works
    - li: AIQ™ Metric
    - li: Security & BAA
  - h5: SOLUTIONS
  - ul .footer-links
    - li: For Individuals
    - li: Higher Education
    - li: Enterprise & L&D
  - h5: COMPANY
  - ul .footer-links
    - li: Research & SLPT
    - li: Trust Center
    - li: registry@cognita.example
- h3: Begin Your AIQ™ Assessment
- p: Evaluate your reasoning, verification rigor, and prompt architecture against global institutional benchmarks.
- form
  - label: Full Name
  - label: Institutional Email (.edu or corporate)
  - label: Primary Role
  - option: Student / Individual Learner
  - option: Faculty Member / Professor
  - option: University Administrator / CIO
  - option: Corporate L&D / Enterprise Lead
  - button: Launch Evaluation Suite

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='e.g. Sarah Johnson'
- input[email] placeholder='sarah@babson.edu'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/campus-engraving.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
