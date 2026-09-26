# Rebuild prompt — Vouch (`vouch`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/vouch/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dark developer landing for an AI-agent approval API: live code panel with approve/reject demo, binary rain canvas, and pay-per-decision pricing.

## Title
Vouch — The Approval Layer for AI Agents

## Description meta
Vouch is a fictional approval API for AI agents: pause, approve, resume with one call. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --bg:#0A0A0B; --panel:#111113; --line:#232326; --ink:#F4F2EC; --mut:#A7A49B;
  --org:#FF5A1F; --grn:#3ED598; --red:#FF5B5B; --yel:#E8B93E; --blu:#7AA2F7; --pur:#B89CFF;
  --grot:'Space Grotesk',sans-serif; --mono:'IBM Plex Mono',monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: >_vouch → #top
  - nav .nlinks “Primary”
    - a: Features → #features
    - a: How it works → #how
    - a: Pricing → #pricing
    - a: Docs → #faq
  - a: DOCS → #faq
  - a: GET STARTED → #pricing
  - button: MENU
  - nav .nlinks
    - a: Features → #features
    - a: How it works → #how
    - a: Pricing → #pricing
    - a: Docs → #faq
- main #top
  - section .hero
    - h1: The Approval Layer For AI Agents.
    - p: Vouch is the approval API for AI agents. Pause, get human approval, and resume with one call. Ship autonomy without losing control.
    - a: GET STARTED → #pricing
    - a: DOCS → #how
    - h4: Refund customer, $1,200
    - p: Requested by billing-agent · routed to finance-team
    - button: APPROVE
    - button: REJECT
  - section #features .block.wrap
    - p: 01 — CONTROL PRIMITIVES
    - h2: Pause anything. Approve in one call.
    - p: Three primitives cover every consequential action your agents take — money, access, and communication.
    - p: / PAUSE
    - h3: Halt on consequence
    - p: Policies decide which actions need a human. Everything else flows straight through — no latency where it doesn't matter.
    - p: / APPROVE
    - h3: Humans in one tap
    - p: Slack, email, or dashboard — approvers see the full context and decide in seconds, with an audit trail attached.
    - p: / RESUME
    - h3: Agents continue
    - p: The paused run resumes automatically with the verdict injected. Rejections branch to your fallback path.
  - section #how .block.wrap
    - p: 02 — HOW IT WORKS
    - h2: Live in an afternoon.
    - p: STEP 01
    - h3: Wrap your tools
    - p: Drop the Vouch wrapper around the functions agents can call. Two lines per tool, zero rewrites.
    - p: STEP 02
    - h3: Route the consequential
    - p: Declare policies in plain config — who approves what, over which thresholds, on which channels.
    - p: STEP 03
    - h3: Ship with a safety net
    - p: Watch every approval flow through the ledger. Replay, audit, and tighten policies as you learn.
    - p: “We went from a blanket ban on agent refunds to approving 400 a week — with better oversight than our human queue ever had.”
  - section #pricing .block.wrap
    - p: 03 — PRICING
    - h2: Pay per decision.
    - p: Fictional sample prices. Every tier includes the ledger, the dashboard, and unlimited policies.
    - h3: SANDBOX
    - p: $0 / forever
    - ul
      - li: 1k approvals / mo
      - li: 1 approver channel
      - li: 7-day ledger retention
      - li: Community support
    - a: START FREE → #top
    - h3: TEAM
    - p: $49 / mo
    - ul
      - li: 50k approvals / mo
      - li: Slack + email + dashboard
      - li: 1-year ledger retention
      - li: SSO & roles
      - li: Priority support
    - a: GET STARTED → #top
    - h3: SCALE
    - p: Custom
    - ul
      - li: Unlimited approvals
      - li: Dedicated routing regions
      - li: Infinite retention + exports
      - li: SOC 2 reports & DPA
    - a: TALK TO US → #top
  - section #faq .block.wrap
    - p: 04 — DOCS / FAQ
    - h2: Asked by every team.
    - summary: Does Vouch add latency to my agents?
    - p: Only to actions you flag as consequential. Everything else executes untouched. Approval routing typically resolves in under 900ms of human response ping — plus however long your approver takes to tap.
    - summary: What happens if nobody approves?
    - p: Requests expire into the state you choose: hold, auto-reject, or escalate to a fallback channel. Expiry is a first-class policy, not an afterthought.
    - summary: Where do approvals live?
    - p: Slack, email, and the dashboard out of the box. Every decision — approve, reject, or expire — is written to the immutable ledger with full context.
    - summary: Is there a self-hosted option?
    - p: Scale-tier sample fiction aside, the template documents a single-tenant control plane with regional routing for regulated teams.
  - section .final
    - p: READY WHEN YOUR AGENTS ARE
    - h2: Autonomy, with a paper trail.
    - a: GET STARTED → #top
- footer
  - a: >_vouch → #top
  - a: BACK TO TOP ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
