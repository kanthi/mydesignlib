# Rebuild prompt — Kairon (`kairon`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/kairon/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Superintelligence for human judgment & revenue intelligence platform: ambient gravitational particle canvas, live monospace account telemetry tickers, Kairon philosophical manifesto card, interactive 13-month workload shift timeline slider (Jun 2025 to Jun 2026), tenant-isolated security & compliance certification matrix, interactive live account agent simulation console with signal capture counters, and comprehensive enterprise FAQ accordion.

## Title
Kairon — Superintelligence for Human Judgment

## Description meta
Kairon runs an AI agent on every account, trained on how your best revenue teams think and act. Human judgment, deployed at scale, and it's yours to keep.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --canvas: #FAFBFD;
  --card-bg: #F4F5F8;
  --card-elevated: #FFFFFF;
  --border-faint: rgba(17, 18, 21, 0.06);
  --border-subtle: rgba(17, 18, 21, 0.10);
  --border-medium: rgba(17, 18, 21, 0.16);
  --ink: #111215;
  --ink-soft: #2D313A;
  --ink-secondary: #525968;
  --ink-muted: #848D9D;
  --ink-faint: #ACB3C0;
  --accent-orange: #F76B15;
  --accent-orange-soft: #FFE8D7;
  --accent-orange-hover: #E35C0A;
  --accent-cobalt: #1E40AF;
  --accent-cobalt-soft: #DBEAFE;
  --accent-emerald: #10B981;
  --accent-emerald-soft: #D1FAE5;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  --font-editorial: 'Newsreader', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: Kairon → #
  - nav .nav-links
    - a: Manifesto → #manifesto
    - a: Performance → #performance
    - a: Security → #security
    - a: Simulator → #simulator
    - a: FAQ → #faq
  - button: Schedule Demo
- section .hero-section
  - h1: Superintelligence for human judgment
  - p: Systems that compound human judgment and deploy it at scale. Every decision, action, and outcome informs the next.
  - button: Schedule Demo
  - a: Inspect Simulator → #simulator
  - a: Request enterprise briefing via encrypted line → mailto:intelligence@kairon.ai
  - a: learn more → #manifesto
- section #manifesto .manifesto-section
  - p: Throughout history, humanity has learned how to preserve knowledge, accumulate capital, and scale computation. One form of intelligence has remained remarkably difficult to accumulate. Human judgment.
  - p: Every organization records what happened. Deals move stages. Meetings are logged. Emails are archived. Documents are stored. What rarely survives is the reasoning behind those decisions. Why one opportunity was prioritized over another. Why an exception was approved. Why a team changed direction. Those moments of judgment are usually discussed, then lost.
  - p: Recent advances in AI make it possible to learn from more than information alone. Systems can begin learning from decisions, actions, and outcomes as they happen. That kind of learning demands the right environment: decisions must happen every day, outcomes must be measurable, and feedback must be continuous. Revenue provides all three. That is where Kairon begins.
  - p: Our core platform, Kairon Revenue™, learns how experienced revenue teams recognize opportunities, evaluate tradeoffs, prioritize actions, and win. Every decision and outcome gives the system another opportunity to improve. That judgment is accumulated, refined, and deployed through an agent on every account.
  - p: The intelligence it accumulates compounds instead of walking out the door with individual departures. Revenue is only the beginning. As the same learning approach expands across more operational functions, organizations gain access to expertise that previously existed only inside individual heads.
  - p: We believe this is how superintelligence will emerge. Not from larger foundational language models alone, but from systems that continuously accumulate humanity's best judgment.
- section #performance .pillars-section
  - h2: Measured performance. Built-in security.
  - p: See how the Kairon Revenue™ superintelligence performs across enterprise revenue organizations, with every action secured and auditable.
  - article .pillar-card
    - h3: Agents now handle more than half of revenue work.
  - article #security .pillar-card
    - h3: Your judgment improves your agents. Your data stays yours.
- section #simulator .simulator-section
  - h2: An agent on every account. Human judgment at the helm.
  - p: Watch how a dedicated Kairon agent monitors account activity, proposes an actionable intervention, and captures human feedback as an immutable training signal.
  - button: Scenario A: Seat Expansion Surge
  - button: Scenario B: Champion Departure Alert
  - button: Scenario C: Legal Indemnity Clause
  - h4: Proactive Enterprise Tier Upgrade Proposal
  - p: Agent synthesized telemetry across 14 engineers on the EMEA team exceeding concurrency limits over 7 consecutive days.
  - button: Approve Action (+1 Signal)
  - button: Edit & Refine Strategy
  - button: Reject & Teach
- section #faq .faq-section
  - h2: Architectural answers on ownership, deployment, and learning.
  - p: Direct explanations on how Kairon operates as an intelligence compounder rather than a generic horizontal assistant.
  - button: How can it learn from us without training on our data?
  - p: Your data is never pooled into a shared foundation model and never used to improve anyone else's agents. What we do is post-train a dedicated LoRA/adapter model on your team's decisions for your team alone.
  - p: It lives in your isolated environment, learns exclusively from your human operators, and works only for you. The model your team's decisions built, and everything it learned, are strictly yours to keep.
  - button: What does "an agent on every account" mean in practice?
  - p: Every account gets a dedicated autonomous agent that continuously watches CRM events, telemetry signals, email cadence, and support tickets. When it spots an opportunity or risk, it formulates the proposed action and waits for a human rep to approve or modify it.
  - p: Once approved, it acts immediately. Coverage is no longer bottlenecked by the finite hours in a sales rep's day. Every account has dedicated surveillance and execution 24 hours a day, 365 days a year.
  - button: How is Kairon fundamentally different from traditional point AI SDR bots?
  - p: A point AI SDR is a single-slice outbound tool. It automates cold outbound emails and sits outside your core enterprise operating system. Kairon is an entirely different architecture: an intelligence compounding substrate connected across your CRM, telemetry, support queues, and deal stages.
  - p: The deeper distinction is judgment capture: every time an experienced leader approves, refines, or vetoes an action, Kairon treats that decision as an immutable signal. Point tools send spam; Kairon compounds how your best people make decisions into a permanent asset that belongs to your company.
  - button: Does this replace our sales representatives or account executives?
  - p: No. Kairon removes the mechanical overhead—updating 1,000 CRM fields, preparing background memos, scheduling routine syncs, and parsing telemetry logs—while keeping reps squarely in the loop for high-leverage judgment calls.
  - p: Because the agent handles the heavy cognitive lifting, your team spends their time on strategic negotiations and executive relationships, covering 10x more ground than previously possible.
  - button: What happens when our top-performing rep leaves the company?
  - p: Historically, when a great rep leaves, their instincts and hard-won heuristics walk out the door with them. With Kairon, every decision, trade-off evaluation, and timing instinct they demonstrated has been encoded into your dedicated account agents.
  - p: A new hire inherits that accumulated organizational judgment on day one instead of taking six to nine months of trial and error to rebuild it.
  - button: How does this differ from horizontal assistants like Claude Cowork or Codex?
  - p: Horizontal assistants are ephemeral tools driven task by task. When a session terminates, they reset with zero cumulative memory of your accounts, past deal nuances, or team policies.
  - p: Kairon is an always-on system purpose-built for enterprise revenue. You don't prompt it from scratch every morning; an agent is already operating each account, refining its behavioral model with every closed opportunity.
  - button: Who owns the model weights and data artifacts?
  - p: You do. Every decision log, trace token, fine-tuned adapter, and evaluation benchmark remains within your cryptographic boundary. If you ever terminate your relationship with Kairon, you export and retain the entire weight package.
- section .closing-section
  - h2: The best judgment should keep compounding.
  - p: Kairon turns organizational judgment into permanent enterprise intelligence that can be preserved, deployed, and elevated across every account.
  - button: Schedule Executive Briefing
- footer .site-footer
  - a: Manifesto → #manifesto
  - a: Performance → #performance
  - a: Security → #security
  - a: Simulator → #simulator
  - a: FAQ → #faq
  - a: Trust & DPA → mailto:security@kairon.ai

## Fields
Keep these controls, including ids and placeholders.
- input[range] #workload-slider

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
