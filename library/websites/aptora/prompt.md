# Rebuild prompt — Aptora (`aptora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/aptora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
All-in-one AI talent acquisition & autonomous recruitment platform: dual floating intelligence mockups (88% radial match score & interview stage telemetry), multi-board syndication network, interactive recruiter screener workbench with real-time candidate evaluations, dynamic ROI velocity calculator, and transparent 4-tier pricing.

## Title
Aptora — AI-Powered Talent Acquisition & Autonomous Hiring Platform

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --bg-canvas: #ffffff;
  --bg-subtle: #f8fafc;
  --bg-surface: #ffffff;
  --bg-card-subtle: #f1f5f9;
  --text-primary: #090e17;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --text-light: #94a3b8;
  --accent-mint: #00dc82;
  --accent-mint-hover: #00c774;
  --accent-mint-light: #ecfdf5;
  --accent-mint-border: #a7f3d0;
  --accent-mint-glow: rgba(0, 220, 130, 0.25);
  --accent-cyan-glow: rgba(56, 189, 248, 0.2);
  --border-subtle: rgba(15, 23, 42, 0.08);
  --border-medium: rgba(15, 23, 42, 0.14);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 24px -4px rgba(15, 23, 42, 0.07);
  --shadow-lg: 0 20px 40px -8px rgba(15, 23, 42, 0.09);
  --shadow-float: 0 24px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05);
  --dark-canvas: #090d16;
  --dark-surface: #111827;
  --dark-surface-elevated: #1a2233;
  --dark-border: rgba(255, 255, 255, 0.09);
  --dark-text: #f8fafc;
  --dark-muted: #94a3b8;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: Aptora → #hero
  - ul .nav-menu
    - li: Overview
    - li: Candidate Intelligence
    - li: Multi-Posting
    - li: Pricing
    - li: ROI Calculator
  - a: Contact sales → #pricing
  - a: Get started for free → #pricing
- section #hero .hero-section
  - h1: Everything you need to hire in one place.
  - p: The world's #1 AI built specifically for recruiting teams. Connected AI agents purpose-built to elevate hiring precision, cut manual screening, and deliver 4x faster hires.
  - a: Get started → #pricing
  - a: See how it works → #screener
  - h4: Resume Match Verified
  - p: Senior role benchmark met
  - a: Explore breakdown → #screener
- section .social-proof-strip
- section .metrics-section
  - h2: The better way to attract, screen, and hire all in one unified system.
  - h3: Faster Hiring
  - p: Cut overall time-to-offer from weeks to days with automated resume parsing and intelligent candidate prioritization.
  - h3: Applications Processed
  - p: Engineered to handle exponential scale — relied on by high-velocity startups and global enterprise teams alike.
  - h3: Unified Platform
  - p: From initial multi-channel job distribution to signed offer letters, manage your complete hiring pipeline in one place.
- section #features .feature-deep-section
  - h2: Understand candidates on a deeper level
  - p: AI-powered insights to help you screen, prioritize, and personalize interactions — faster and with unprecedented nuance.
  - h3: Skill Intelligence
  - p: Extract verified proficiencies, project depth, and trajectory at a single glance — no manual CV scanning.
  - h3: Fit & Impact Scoring
  - p: Surfaces applicants most likely to excel based on role benchmarks and historical cohort success vectors.
  - h3: Communication Cues
  - p: Quantify tone, collaborative clarity, and domain conviction across written assessments and initial screens.
  - h3: Relevance Engine
  - p: Focus only on top-percentile matches. Sort through thousands of submissions in seconds without keyword bias.
  - h3: Mira Chen
  - p: Lead Systems Architect · 8 yrs exp
- section #syndication .feature-syndication
  - h4: Staff Machine Learning Engineer
  - p: Single click syndication publishes this role to leading professional job networks with automated tracking UTMs and unified applicant ingestion.
  - h2: Reach more candidates with a single click.
  - p: Post your openings to every major developer and professional job board simultaneously. Ingest all applications into a centralized, deduped candidate pipeline without manual data entry.
  - a: Post a Job Free → #pricing
  - a: See how it works → #screener
- section #screener .screener-section
  - h2: Experience Aptora's live scoring in action
  - p: Select different candidate profiles below to inspect real-time AI scoring, verified skill dimensions, and dynamically generated interview roadmaps.
  - h4: Mira Chen
  - p: Staff Data Scientist
  - h4: Nola Sterling
  - p: Principal Product Designer
  - h4: Owen Vance
  - p: DevOps & Infra Lead
  - h3: Mira Chen
  - p: Staff Data Scientist · 7 Years Experience · Applied 2h ago
  - label: Domain Competency 96%
  - label: Code & System Architecture 92%
  - label: Communication & Leadership 88%
  - label: Culture & Autonomy Vector 95%
  - ul #candQuestions .q-list
    - li: "Describe how you handled feature store schema migrations at scale without pipeline downtime."
    - li: "Walk us through an instance where your predictive model drifted and how you automated retraining."
    - li: "How do you evaluate trade-offs between model inference latency and parameter precision in real-time scoring?"
- section #calculator .roi-calc-section
  - h2: Calculate your team's hiring velocity gains
  - p: Adjust your annual hiring volume and recruiter headcount to see estimated hours saved and reduced agency fee expenditure.
- section #pricing .pricing-section
  - h2: Flexible pricing
  - p: Choose a plan that fits your hiring needs — from early startups to high-volume enterprise teams.
  - button: Monthly
  - button: Annual
  - a: Start for Free → #hero
  - ul .features-list
    - li: 1 active job posting
    - li: 1 recruiter seat
    - li: Standard ATS pipeline
    - li: Automated resume parsing
  - a: Get Started → #hero
  - ul .features-list
    - li: Up to 10 active jobs
    - li: Unlimited team seats
    - li: Multi-posting job boards
    - li: Aptora AI basic scoring
    - li: Custom branded career site
  - a: Get Started → #hero
  - ul .features-list
    - li: Up to 25 active jobs
    - li: Autonomous AI outreach
    - li: Smart interview scheduling
    - li: Unified candidate profiles
    - li: ATS integrations (Greenhouse, Lever)
  - a: Talk to Sales → #hero
  - ul .features-list
    - li: Unlimited active jobs
    - li: Dedicated Customer Success Lead
    - li: Custom fine-tuned scoring models
    - li: SOC2, GDPR & HIPAA controls
    - li: 99.95% uptime SLA
- section .dark-testimonials
  - h2: Trusted by teams that hire better
  - p: More clarity, fewer redundant screening calls, and faster decision-making across departments.
  - p: "Aptora saves our engineering managers over 15 hours each week. The candidate summaries are so nuanced that our interview-to-offer ratio skyrocketed from 20% to nearly 65%."
  - h4: Marc Fontaine
  - p: VP of Talent · Growbyte
  - p: "We slashed our screening burden in half within the first 30 days. The AI interview prompts immediately surface real domain expertise."
  - h4: Ritika Desai
  - p: Head of People Ops · Nexify
- section .faq-section
  - h2: Frequently Asked Questions
  - p: Everything you need to know about implementing Aptora across your organization.
  - button: How does Aptora integrate with our existing ATS? +
  - button: Is the candidate scoring free from bias? +
  - button: Can we customize the scoring criteria for specific roles? +
  - button: What happens after the free tier limit is reached? +
- section .final-cta-section
  - h2: Ready to transform how your company hires?
  - p: Join 30,000+ teams hiring 4x faster with Aptora's autonomous talent intelligence.
  - a: Get started for free → #pricing
  - a: Schedule Enterprise Demo → #pricing
- footer .site-footer
  - a: Aptora → #hero
  - p: The autonomous AI talent acquisition platform engineered to elevate recruitment speed, precision, and candidate experience.
  - h4: Platform
  - ul .footer-links
    - li: Overview
    - li: Candidate Screener
    - li: Job Multi-Posting
    - li: ROI Estimator
    - li: Pricing
  - h4: Integrations
  - ul .footer-links
    - li: Greenhouse ATS
    - li: Lever
    - li: Workday
    - li: Slack Notifications
    - li: LinkedIn Recruiter
  - h4: Legal & Security
  - ul .footer-links
    - li: SOC2 Type II Report
    - li: Privacy Policy
    - li: Terms of Service
    - li: AI Ethics Statement
    - li: System Status

## Images in the page
- `assets/hero-candidate.jpg — Aptora Recruiter Experience`
- `assets/candidate-mira.jpg — Evaluator 1`
- `assets/candidate-nola.jpg — Evaluator 2`
- `assets/candidate-owen.jpg — Evaluator 3`
- `assets/candidate-mira.jpg — Candidate Mira`
- `assets/candidate-mira.jpg — Mira`
- `assets/candidate-nola.jpg — Nola`
- `assets/candidate-owen.jpg — Owen`
- `assets/testimonial-marc.jpg — Marc Fontaine`
- `assets/hero-candidate.jpg — Video Case Study`
- `assets/testimonial-ritika.jpg — Ritika Desai`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #hiresSlider
- input[range] #teamSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/candidate-mira.jpg`
- `assets/candidate-nola.jpg`
- `assets/candidate-owen.jpg`
- `assets/hero-candidate.jpg`
- `assets/testimonial-marc.jpg`
- `assets/testimonial-ritika.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
