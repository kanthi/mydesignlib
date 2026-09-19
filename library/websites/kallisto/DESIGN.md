# Kallisto — Design System Specification

**Brand:** Kallisto (`kallisto`)  
**Type:** Website Template  
**Category:** Developer  
**Reference Origin:** Fictional rebrand of frontier reasoning AI interface reference (`Incredible` by @pankajstwt). Re-engineered as a high-conviction deep reasoning engine for researchers, systems engineers, and frontier developers.  
**Aesthetic Core:** Meditative contemplation meets frontier machine intelligence. Warm ivory parchment ground (`#FAF8F5`), cinematic golden-hour meadow backdrop, frosted glassmorphism prompt card (`rgba(255, 255, 255, 0.82)` with `backdrop-filter: blur(16px)`), high-contrast editorial serif typography (`Newsreader`), and real-time streaming chain-of-thought telemetry.

---

## 1. Overview & Strategic Positioning

- **Core Proposition:** "The reasoning model built for what matters." Kallisto deliberates, forms hypotheses, tests logic internally, and produces mathematically verified answers rather than instant token hallucinations.
- **Audience:** Frontier engineers, quant researchers, legal engineers, and deep tech developers.
- **Emotional Signature:** Serene, deliberate, unhurried precision.

---

## 2. Color System & Semantic Tokens

| Token | Value | Role | Usage |
|---|---|---|---|
| `--color-canvas` | `#FAF8F5` | Master Parchment Ground | Warm background for entire page |
| `--color-surface-card` | `#FFFFFF` | Card & Container Surface | Clean white cards with subtle warm tint |
| `--color-glass` | `rgba(255, 255, 255, 0.85)`| Hero Prompt Glass | Frosted glassmorphic prompt card |
| `--color-ink-primary` | `#141517` | Master Typography | Black headings, editorial titles, terminal text |
| `--color-ink-secondary`| `#5A5D64` | Subtext & Annotations | Descriptions, token counts, captions |
| `--color-ink-muted` | `#94979E` | Faint Metadata | Shortcut keys, timestamps, placeholders |
| `--color-accent-amber` | `#D97706` | Chain of Thought Indicator| Model thinking tags, reasoning effort indicators |
| `--color-accent-green` | `#16A34A` | Verified Output Signal | Verified accuracy badges, latency metrics |
| `--color-border-subtle`| `rgba(20, 21, 23, 0.08)`| Precision Border | Subtle hairlines on cards and buttons |

---

## 3. Typographic Hierarchy

- **High-Contrast Editorial Serif:** `Newsreader` (Google Fonts), optical size 16-72pt, weights 400, 500, 600, Italic.
  - Used for master hero headline: *"The reasoning model built for what matters."*, benchmark headings, and pull quotes.
- **Interface Sans:** `Plus Jakarta Sans`, weights 400, 500, 600, 700.
  - Used for navigation, prompt controls, benchmark bars, button labels, and body text.
- **Monospace Telemetry:** `JetBrains Mono`, weights 400, 500.
  - Used for streaming chain-of-thought tokens, API code snippets, and benchmark metrics.

---

## 4. Key Components & Interactive Features

1. **Top Funding Announcement & Navigation:**
   - Pill: *"Announcing our Series A: $23M in total funding · Read more"*
   - Nav links: Features, Reasoning Engine, Benchmarks, API Docs, Pricing.
   - Dual actions: Log In (ghost), "Join Now" (pill).

2. **Hero Meadow Landscape & Glassmorphic Prompt Engine:**
   - Background: Cinematic golden-hour meadow photograph.
   - Glassmorphic input box: "Ask anything...", 📎 Attach, Select style dropdown, Submit button.
   - Interactive prompt pills: "Analyze my contract", "Summarize this log", "Review my code", "Verify formal proof".
   - Clicking pills immediately populates the prompt box and triggers live simulated chain-of-thought streaming!

3. **Live Chain-of-Thought Telemetry Inspector:**
   - Real-time token streaming with collapsible thought tree:
     - ✦ Step 1: Fact Decomposition (54 tokens)
     - ✦ Step 2: Edge Case Verification (128 tokens)
     - ✦ Step 3: Self-Correction & Boundary Test (92 tokens)
     - ✦ Step 4: Final Synthesized Output.

4. **Frontier Reasoning Benchmarks:**
   - MATH-500, ARC-AGI, HumanEval, and GPQA Diamond progress comparisons vs generic LLMs.

5. **Multi-Language API Code Switcher:**
   - Python, TypeScript, cURL, and Go SDK examples with copy buttons.

6. **Developer Token Economics & Pricing:**
   - Pay-as-you-go input/output and reasoning token pricing cards.

---

## 5. Compliance & Analytics

- `robots.txt`: Disallow: /
- `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
- Google Analytics gtag: `G-Z97ZD3EVSF`
- Static vanilla delivery, relative paths, Caddy HTTP verified.
