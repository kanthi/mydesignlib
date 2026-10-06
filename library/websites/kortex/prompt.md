# Rebuild prompt — Kortex (`kortex`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Education
- Folder: `library/websites/kortex/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI workflow automation and adaptive learning landing page featuring editorial serif typography, alpine nature backdrops, an interactive modular curriculum dashboard, 24/7 AI tutor chat simulation, real-time draft project grading, dynamic student growth trajectory chart, and expandable FAQ accordion.

## Title
Kortex — AI Automation & Adaptive Learning Platform

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-cream: #F8F7F2;
  --bg-card: #FFFFFF;
  --text-black: #0F1115;
  --text-muted: #5E6472;
  --border-subtle: #E8E6DF;
  --border-card: #ECEAE3;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Kortex → #
  - ul .nav-links
    - li: Home
    - li: Products
    - li: Features
    - li: Pricing
    - li: Resources
  - button: Sign Up
- section #hero .hero-section
  - h1: Increase workflows with intelligent Automation
  - p: Streamline workflows, automate repetitive tasks, and unlock new levels of productivity with AI solutions designed to help individuals and businesses work smarter.
  - button: Consultation Now
  - button: Get Started Free
- section #proof .proof-section
- section #path .learning-path-section
  - h2: AI-Powered Personal Learning Path
  - p: Stop following a one-size-fits-all curriculum. Our platform analyzes your progress and adapts in real-time.
  - button: Get Started Free
  - h3: Instant Skill Visibility
  - p: Get real-time insights into high-demand skills. Our AI aligns your learning with current market trends.
  - button: Get Started Free
  - h3: Data-Driven Path
  - p: Skip the noise with a custom curriculum. Our AI focuses your energy on the projects that build a winning portfolio.
  - button: Get Started Free
  - h3: Competitive Edge
  - p: Receive expert-level feedback instantly. No more waiting—our AI helps you refine and polish your work.
  - button: Get Started Free
  - h3: Smart Metrics
  - p: Track true mastery, not just progress bars. Our AI ensures 95%+ retention and a 40% faster learning curve.
  - button: Get Started Free
- section #tutors .split-feature-section
  - h2: 24/7 Intelligent Tutors (AI Mentors)
  - p: Never get stuck on a lesson again. Our AI mentors are available around the clock to answer your specific questions, explain complex syntax, and review architecture.
  - button: Get Started Free
  - button: What's Next
- section .split-feature-section.reversed
  - h2: Smart Content Summarization & Search
  - p: Find exactly what you need without scrubbing through hours of video or hundreds of pages. Kortex synthesizes key moments into interactive transcripts.
  - button: Get Started Free
- section .split-feature-section
  - h2: Real-Time Project Feedback
  - p: Get the "human-like" feedback you need to improve your work instantly, without waiting days for a grade or critique from an instructor.
  - button: Get Started Free
  - p: "I just scanned your latest draft. The flow is definitely there—super clean and professional. Here is how we can level up your data pipeline efficiency."
- section .trajectory-section
  - h2: Trusted by 5,000+ students and top tech educators
  - p: Our platform integrates directly with your goals, generates personalized study paths, and automates your revision. Empowering you to master new skills faster than ever.
- section #faq .faq-section
  - h2: Frequently Asked Questions
  - button: Login / Sign Up
- section .cta-newsletter-wrap
  - h2: Ready to 10x Your Learning Speed?
  - p: Master the future with the only platform that adapts to you. Our AI counselor is ready to build your personalized roadmap.
  - form .newsletter-form
    - button: Sign Up
- footer .site-footer
  - h5: Skills
  - ul
    - li: Cybersecurity
    - li: Data Analytics
    - li: Digital Marketing
    - li: AI Automation
  - h5: Industries
  - ul
    - li: Business
    - li: Computer Science
    - li: Data Science
    - li: Engineering
    - li: Finance
  - h5: Resources
  - ul
    - li: Blog
    - li: Resource Center
    - li: Podcast
    - li: Webinar
  - h5: Community
  - ul
    - li: Learners
    - li: Partners
    - li: Beta Testers
  - h5: Company
  - ul
    - li: Press
    - li: Investors
    - li: Terms
    - li: Privacy
  - a: Instagram → #
  - a: Twitter → #
  - a: Facebook → #
  - a: LinkedIn → #

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder="What's your email?"

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `assets/alpine_bg.jpg`
- `assets/nature_bg.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
