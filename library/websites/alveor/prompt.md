# Rebuild prompt — Alveor (`alveor`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/alveor/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI-powered organizational memory & second-brain SaaS landing page: warm coral brand gradient, ambient matrix dot dividers, oversized headline typography with slate-muted words, macOS interactive workspace mockup with notes and rich-text editing toolbar, friction problem breakdown cards, bento feature grid, interactive billing toggle pricing tiers, and FAQ accordion.

## Title
Alveor — Second Brain for Everything You Think, Build and Decide

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Colors */
  --color-canvas: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-border: #E5E7EB;
  --color-border-subtle: #F3F4F6;
  --color-dot: #D1D5DB;
  /* Typography */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-muted: #94A3B8;
  /* Brand Accents */
  --color-coral: #F9AE84;
  --color-coral-deep: #EE7A47;
  --color-coral-gradient: linear-gradient(135deg, #FBAF85 0%, #F59768 50%, #ED7C4A 100%);
  --color-badge-popular: #E0F2FE;
  --color-badge-popular-text: #0284C7;
  /* Buttons */
  --color-btn-dark: #1E2024;
  --color-btn-dark-hover: #0F1114;
  /* Typography Font Family */
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
  /* Elevation */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.06);
  --shadow-xl: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 16px 36px -6px rgba(0, 0, 0, 0.09);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Alveor → #hero
  - nav “Main Navigation”
    - ul .nav-links
      - li: Product
      - li: Features
      - li: Enterprise
      - li: Pricing
  - button: Contact sales
  - button: Book demo
- section #hero .hero-section
  - h1: Second Brain for Everything You Think, Build and Decide
  - p: From personal to organizational, Alveor keeps your information so ideas are always searchable, organized and easy to turn into action.
  - button: Get started
  - a: Learn more → #features
  - ul .sidebar-nav-list
    - li: Dashboard
    - li: Tasks ▾ 46
    - li: Projects ▾ 14
    - li: Clients
    - li: Notes
    - li: Reports ▾ 3
  - ul .sidebar-nav-list
    - li: 📁 Templates
    - li: 📁 Design Systems
    - li: 📁 Brand Kits
    - li: 📁 Guides
    - li: 📁 Playbook
  - main .app-main-pane
    - button: + Add Member
    - h2: Product Launch Plan
    - ul .doc-bullet-list
      - li: Successfully launch the new product to the market.
      - li: Drive user adoption and awareness in the first 30 days.
      - li: Achieve 10,000 sign-ups within the first month.
      - li: Gather early feedback to iterate and improve.
    - ul .doc-bullet-list
      - li: Finalize product messaging and positioning.
      - li: Prepare marketing assets and landing page.
      - li: Set up analytics and tracking for key metrics.
      - li: Plan launch campaign across email, social, and ads.
  - p: Start the conversation by leaving a comment.
- section .social-proof-section
- section #frictions .frictions-section
  - h2: Why most ideas never become reality
  - p: Most ideas don't fail because they're bad; they're forgotten, lose context, or get stuck in overly complex workflows.
  - h3: Notes lose context
  - p: Saved ideas quickly lose their meaning, details, connection over time.
  - h3: Ideas aren't connected
  - p: Knowledge loses its value when ideas stay isolated instead of connected.
  - h3: Information is scattered
  - p: Your data is spread across apps, documents, and chats, making it difficult to find.
  - h3: Search Takes Too Long
  - p: Teams waste hours searching across documents, chats, and emails.
- section #features .features-section
  - h2: Everything you need to transform ideas into reality
  - p: Alveor provides the foundation to transform ideas into reality.
  - h3: Context aware records
  - p: Capture the context behind every idea to uncover deeper insights.
  - h3: Connect ideas & information
  - p: Automatically connect related ideas and information, so nothing is ever lost.
  - h3: One connected workspace
  - p: Bring information from all your tools and platforms into one connected workspace.
  - h3: Conversational search
  - p: Ask questions naturally and instantly find the right information with the context behind every answer.
  - h3: AI-powered direction
  - p: Get intelligent suggestions on what to do next, based on your decisions, discussions, and connected knowledge.
- section #pricing .pricing-section
  - h2: Simple pricing, no surprises
  - p: Capture, organize, and connect your ideas for free. Upgrade when you're ready to unlock all features.
  - h3: Free
  - p: A simple way to collect, organize, and manage your ideas.
  - ul .plan-features-list
    - li: ✓Limited AI-powered searches
    - li: ✓Create and organize notes
    - li: ✓Basic knowledge connections
    - li: ✓Cross-device access
    - li: ✓Personal knowledge library
  - button: Start for free
  - h3: Pro
  - p: Advanced tools to transform scattered information into insights.
  - ul .plan-features-list
    - li: ✓Unlimited AI-powered searches
    - li: ✓Context aware AI assistant
    - li: ✓Advanced knowledge connections
    - li: ✓Cross-platform integrations
    - li: ✓AI summaries & insights
    - li: ✓Priority support
  - button: Upgrade to pro
  - h3: Enterprise
  - p: Build a shared intelligence system for your team.
  - ul .plan-features-list
    - li: ✓Everything in Pro
    - li: ✓Team knowledge workspace
    - li: ✓Advanced AI workflows
    - li: ✓Custom integrations & API access
    - li: ✓Admin controls & permissions
    - li: ✓Dedicated support
  - button: Get in touch
- section .faqs-section
  - h2: Your Questions Answered
  - p: A few answers to help you get the most out of Alveor.
  - button: Still have questions?
  - button: What is Alveor and how does it work? −
  - button: What can I use Alveor for? +
  - button: How does Alveor organize and connect my information? +
  - button: Can I connect the tools and apps I already use? +
  - button: Is my data private and secure? +
  - button: Can I try Alveor before subscribing? +
- section .cta-banner-section
  - h2: Turn your ideas into action
  - p: Bring all your ideas, information, and context together in one place, so you can make sense of it all and turn it into action.
  - button: Get started for free
- footer .site-footer
  - a: Alveor → #hero
  - p: Capture ideas, connect information, and turn scattered knowledge into action with Alveor.
  - ul .footer-links-list
    - li: Features
    - li: How it works
    - li: Integrations
    - li: Pricing
  - ul .footer-links-list
    - li: Documentation
    - li: Changelog
    - li: Blog
    - li: Help Center
  - a: in → https://linkedin.com
  - a: 𝕏 → https://x.com
  - a: IG → https://instagram.com
  - a: Term of service → #
  - a: Privacy policy → #
  - a: Cookie policy → #

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
