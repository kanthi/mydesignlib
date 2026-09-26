# Rebuild prompt — Verba (`verba`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/verba/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Multi-channel autonomous content engine and AI agent team. Features daytime azure sky atmosphere with soft cumulus cloud drift, high-elevation floating workspace canvas, interactive multi-agent prompt runner, real-time voice tuner sliders, cross-platform comparator, and transparent 3-tier pricing.

## Title
Verba — Your content team, powered by AI agents

## Description meta
Give Verba a post, transcript, or rough notes. Your autonomous AI agents turn it into content for every channel, in your voice.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --sky-top: #76CBFA;
  --sky-mid: #A5DBFD;
  --sky-base: #E8F5FE;
  --sky-horizon: #F6FAFE;
  --color-ink: #0A0D12;
  --color-ink-muted: #475569;
  --color-ink-subtle: #64748B;
  --color-white: #FFFFFF;
  --color-surface-tint: #F8FAFC;
  --color-border: rgba(15, 23, 42, 0.08);
  --color-border-focus: #0284C7;
  --accent-blue: #0284C7;
  --accent-emerald: #10B981;
  --accent-amber: #F59E0B;
  --accent-purple: #8B5CF6;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02);
  --shadow-md: 0 4px 12px rgba(0, 30, 80, 0.06), 0 1px 3px rgba(0,0,0,0.04);
  --shadow-elevated: 0 24px 60px -10px rgba(0, 70, 150, 0.16), 0 8px 20px -4px rgba(0, 40, 100, 0.08), 0 0 0 1px rgba(0, 30, 80, 0.06);
  --shadow-popover: 0 20px 40px rgba(10, 20, 40, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .site-nav “Main Navigation”
  - a: Verba → #
  - ul .nav-links
    - li: Product
    - li: AI Agents
    - li: How It Works
    - li: Voice Studio
    - li: Pricing
    - li: Docs
  - a: Log In → #login
  - a: Get Started → #get-started
- h1: Your content team, powered by AI agents.
- p: Give Verba a post, transcript, or rough notes. Your autonomous AI agents turn it into content for every channel, in your voice.
- a: Book a Demo → #demo
- a: Get Started → → #get-started
- p: Trusted by 14,000+ creators & editorial teams
- ul .app-nav-menu
  - li: ⌂ Home
  - li: 📁 Library 48
  - li: 🤖 Agents 12
  - li: 📅 Calendar
  - li: 📊 Analytics
- ul .brand-voices-list
  - li: ✦ Founder Voice
  - li: ✨ Studio Editorial
  - li: ◆ Engineering Blog
- ul .recent-output-list
  - li: Thread: Why early architecture matters... Just now • Published
  - li: LinkedIn: Q3 infrastructure retros 2m ago • Scheduled
  - li: Newsletter: Shipping at high velocity 4m ago • Draft
- main .app-main-panel
  - h2: Turn one idea into ten pieces of content.
  - p: Paste a blog post, transcript, rough notes, or a link.
  - button: 👤 Founder Voice ▾
  - button: ⚡ Verba-4 Omni ▾
  - button: ✨ Generate Campaign
  - button: Run
  - button: Run
  - button: Run
  - button: Run
- button: ×
- button: 📋 Copy Output
- section .trust-marquee-section
- section #pipeline .pipeline-section
  - h2: How one spark becomes a content omnipresence.
  - p: Traditional repurposing creates bland, robotic summaries. Verba deploys specialized, role-specific agents that deconstruct your thinking and rebuild it natively for each platform.
  - h3: Raw Ingestion & Angle Mining
  - p: Drop a voice memo, draft markdown, YouTube link, or raw bullet notes. Verba’s semantic parser isolates core hypotheses, data points, and quotable hooks.
  - h3: Autonomous Agent Synthesis
  - p: Dedicated agents take over: the X Agent architects high-retention hooks; the LinkedIn Agent formats executive whitespace; the Substack Agent deepens nuance.
  - h3: One-Click Dispatch & Feedback
  - p: Review generated drafts in your queue. Push straight to your scheduler, CMS, or clipboard with calibrated metadata, hashtags, and formatting tags intact.
- section #tuner .tuner-section
  - h2: Fine-tune your brand voice. No generic AI fluff.
  - p: Adjust tone parameters below and watch the synthesis engine rewrite content live to match your distinct cadence.
  - p: "We slashed cloud latency by 48% not by adding caching layers, but by dismantling our event bus. Complexity is the silent killer of engineering velocity."
- section .comparator-section
  - h2: Native craft for every platform.
  - p: See how Verba respects the unspoken formatting etiquette of each social distribution channel.
  - button: 𝕏 𝕏 Thread
  - button: 💼 LinkedIn Post
  - button: ✉ Substack Dispatch
  - button: 🎬 60s Reel Script
  - h4: Sarah Chen (@sarahc_builds)
- section #pricing .pricing-section
  - h2: Simple pricing for founders & studios.
  - p: Every plan includes full access to autonomous multi-channel agents and unlimited voice tuning.
  - h3: Creator
  - p: Ideal for solo founders and executives writing their own content.
  - ul .tier-features-list
    - li: 50,000 words / month
    - li: 2 Custom Brand Voices
    - li: X + LinkedIn Agents
    - li: Standard Scheduler Sync
  - a: Start 14-Day Trial → #get-started
  - h3: Studio Team
  - p: For scaling media brands, startups, and high-volume content operations.
  - ul .tier-features-list
    - li: Unlimited Word Generation
    - li: 10 Custom Brand Voices
    - li: All 12 Platform Agents
    - li: Voice Memo Ingestion & Transcripts
    - li: One-Click Multi-Channel Scheduler
  - a: Start 14-Day Trial → #get-started
  - h3: Media House
  - p: Custom fine-tuning and API hooks for publishing companies and agencies.
  - ul .tier-features-list
    - li: Unlimited Team Members
    - li: Fine-Tuned LoRA Voice Models
    - li: REST API & Webhook Triggers
    - li: Dedicated Account Strategist
  - a: Contact Sales → #contact
- section #faq .faq-section
  - h2: Frequently asked questions.
  - button: How does Verba prevent generated content from sounding like generic AI? ▾
  - button: Who owns the copyright and IP of the content produced? ▾
  - button: Is my private draft data used to train public models? ▾
  - button: Can Verba publish directly to our social accounts or CMS? ▾
- section #get-started .final-cta-section
  - h2: Turn your raw thoughts into a living media engine today.
  - p: Join 14,000+ creators, tech founders, and media operators scaling content without diluting their authenticity.
  - form .email-signup-form
    - button: Start Free 14-Day Trial
  - p: No credit card required • Instant workspace setup in 60 seconds
- footer .site-footer
  - a: Verba → #
  - p: The multi-channel content engine powered by autonomous AI agents. Built for clarity, speed, and genuine founder voice.
  - a: AI Agents → #product
  - a: Voice Tuner → #tuner
  - a: Ingestion Engine → #pipeline
  - a: Pricing → #pricing
  - a: 𝕏 / Twitter → #x
  - a: LinkedIn → #linkedin
  - a: Substack → #substack
  - a: Ghost CMS → #ghost
  - a: Manifesto → #about
  - a: Privacy Policy → #privacy
  - a: Terms of Service → #terms
  - a: Security & SOC2 → #security
  - a: Status: Operational → #
  - a: Changelog → #

## Fields
Keep these controls, including ids and placeholders.
- textarea #rawContentInput placeholder='Paste your content or describe what you want to write about...'
- input[range] #formalitySlider
- input[range] #densitySlider
- input[range] #cadenceSlider
- input[email] #signupEmailInput placeholder='Enter your work email...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/sky-bg.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
