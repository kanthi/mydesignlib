# Method: 7 DESIGN.md mistakes that make AI-generated UI worse

**Filename:** `method-design-md-7-ai-mistakes.md` — skill-local method note (`method-` prefix; see `docs/SKILLS.md`).  
**Human doc:** `docs/method-design-md-for-ai.md`

Source (captured 2026-08-08):  
https://freedium-mirror.cfd/uxplanet.org/7-design-md-mistakes-that-make-ai-generated-ui-worse-9ec2dfcc44cd  

Original: UX Planet / Medium (Nick Babich lineage; Google Labs `DESIGN.md` framing).  
Related tooling: Google Labs design.md CLI (`npx @google/design.md lint`, `diff`).

**Repo skill:** `design-system-first`  
**Thesis:** A DESIGN.md only helps if it is *actionable* for an agent — semantic roles, components, responsive *behaviour*, motion/icons/content, short and non-contradictory, and **actually loaded** into context.

---

## Root cause

Teams write DESIGN.md, point Claude/Cursor at it, and get “correct brand colour, still generic layout.” Components stay inconsistent; mobile is random; a11y gaps remain.

**Why:** the file is a mood board or a dump of raw values. Agents apply what they can *reliably execute* — not vibes or orphan hex codes.

---

## Mistake 1 — Mood board instead of design specification

**Bad:** “Clean, modern, minimal, premium.”

**Good:** One-line impression + **how** to produce it with named tokens:

```markdown
## Overview

The product should feel calm, precise, and professional.

Create this feeling through:
- High-contrast neutrals (`ink`, `paper`)
- One accent (`action-primary`) only on the primary action
- Generous section spacing (`section-y` / `space-xl`)
- Compact spacing inside dense UI
- Minimal shadows; no decorative gradients
- No oversized marketing type inside app chrome
```

**Validation test:** *Could two designers interpret this rule completely differently?* If yes → add concrete decisions.

Google Labs *Overview* is for brand personality **where rules don’t already specify** — not a substitute for tokens, components, or layout constraints.

---

## Mistake 2 — Raw values without meaning (no semantic roles)

**Bad:**

```yaml
colors:
  blue: "#2563EB"
  gray-900: "#111827"
  red: "#DC2626"
```

Agent must guess: links? primary button? focus ring? chart? Is red only destructive or also “down” charts?

**Good:** name by **role**, then prose rules:

```yaml
colors:
  action-primary: "#2563EB"
  action-primary-hover: "#1D4ED8"
  surface-page: "#F8FAFC"
  surface-card: "#FFFFFF"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  border-default: "#CBD5E1"
  status-danger: "#DC2626"
```

```markdown
## Colors
- `action-primary` only for the most important action in a view
- `status-danger` only for destructive actions / errors — never decorative
- `text-secondary` for supporting copy, never essential instructions
```

This library’s marketing shorthand (`paper` / `ink` / `muted` / `accent` / `line`) is fine **if** each name has a usage rule in prose.

---

## Mistake 3 — Foundations only, no components

Tokens alone ≠ coherent UI. Document how foundations combine into components the agent will invent wrong.

For each high-frequency component: **anatomy · variants · size · hierarchy · restrictions**.

```markdown
### Buttons

#### Primary
- One primary action per view
- Height 40px desktop / 44px touch
- Padding-x 16px; radius `{radius-md}`; label `{type-label-md}`
- Leading icons optional; trailing only when action opens another view
- Never two primary buttons side by side

#### Secondary
- Transparent + `border-default`
- Supporting actions only; never for destructive confirm

#### Destructive
- Confirmation flows only; `status-danger`
- Label describes action (“Delete workspace”), not “Confirm”
```

**Prioritize frequency:** nav, buttons, cards, inputs, links get precision; rare widgets can stay light. Progressive disclosure: put deep token tables in linked files if DESIGN.md grows.

---

## Mistake 4 — No responsive / adaptive behaviour

A spacing scale does not tell the agent:

- how margins change  
- when columns collapse  
- what disappears vs stays on small screens  

Define **layout logic changes**, not only breakpoint numbers:

```markdown
## Layout and Responsiveness

### Compact (<600px)
- Single column
- 16px page margins
- Stack form actions; primary action last
- Full-screen sheets instead of center modals (if product UI)

### Medium (600–1023px)
- 8-column grid; 24px margins
- Related form fields may pair in two columns

### Expanded (≥1024px)
- max content width 1200px; 32px margins
- Master-detail / side nav allowed when the design needs it
```

Marketing sites in this repo: also specify hero stack order, nav → hamburger threshold, card grids 3→1, sticky header behaviour.

---

## Mistake 5 — Ignoring motion, iconography, content

Foundations without these → generic motion, emoji icons, “Submit / OK” copy.

```markdown
## Motion
- Motion explains state change; never pure decoration
- Standard 160–240ms; large layout moves ≤240ms
- ease-out enter, ease-in leave
- `prefers-reduced-motion`: opacity only (or none)

## Iconography
- One set only (e.g. Lucide / inline SVG); one stroke weight
- Default 20px; 16px in compact controls
- No filled+outline mix in the same nav
- Unfamiliar actions need labels, not icon-only

## Product / site content
- Sentence case
- Buttons start with a verb
- Avoid Yes / No / OK / Submit when a specific label exists
- Errors: what happened + what to do next
- Fictional brand only (`AGENTS.md`); no real trademarks
```

---

## Mistake 6 — Too long, repetitive, or contradictory

More lines ≠ better UI. Anthropic guidance for project memory (~200 lines, specific, structured) applies to DESIGN.md.

**Rules:**

1. Only **reusable design decisions** (not history or meeting notes)  
2. Short sections; **rules over essays**  
3. Keep current — delete dead tokens and obsolete exceptions  
4. One priority when rules conflict (e.g. “accessibility contrast wins over accent color”)  

---

## Mistake 7 — Assuming the agent has loaded the file (most critical)

Filename alone does **not** load context.

| Tool | Pattern |
|------|---------|
| Claude Code | `@DESIGN.md` from `CLAUDE.md` / session; verify with `/context` |
| This repo (Grok) | Explicitly **read** `library/.../DESIGN.md` (or skill output) **before** writing HTML/CSS; cite path in the build step |
| Cursor / others | Project rules or explicit @-attach — document per tool |

Suggested project instruction snippet:

```markdown
Follow the design system in @DESIGN.md (or library/<type>/<id>/DESIGN.md).

Before creating or modifying UI:
1. Read the relevant DESIGN.md and existing components
2. Reuse tokens and component rules
3. Check responsive + a11y rules
4. Report conflicts between DESIGN.md and production code
```

**Validate when practical:**

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```

Linter (when schema fits): structural errors, broken refs, contrast on supported pairs, orphan tokens, missing type, suspicious keys.

---

## Recommended DESIGN.md structure (quality > exact outline)

```
YAML frontmatter (optional)
  metadata · colour · type · space · radius · component tokens

Markdown body
  Overview (emotion → observable rules)
  Source of Truth (this file vs CSS :root vs Figma)
  Colours (semantic + usage)
  Typography
  Layout and Responsiveness
  Elevation and Depth
  Shapes
  Components (by frequency)
  Interaction and States
  Accessibility
  Motion
  Iconography
  Product Content
  Do’s and Don’ts / Ban list
  Maintenance and Validation
```

For a **single marketing page** in this library, a compact form is enough (see skill template). Expand toward the full structure for multi-page or product UI (`library/systems/`).

---

## Repo mapping

| Mistake | Enforcement in `design-system-first` |
|---------|--------------------------------------|
| 1 Mood board | Overview must list *create this feeling through* rules |
| 2 Raw values | Semantic token names + usage bullets |
| 3 No components | Required Components section (buttons, nav, cards, inputs) |
| 4 No responsive | Layout behaviour by breakpoint band |
| 5 Motion/icons/content | Required sections (even if short) |
| 6 Too long | Target ≤ ~200 lines; rules not essays |
| 7 Not loaded | Handoff step: read DESIGN.md before build; wire AGENTS/skill route |

---

## Do not regress

- Adjectives-only Overview  
- Palette of `blue` / `gray-500` with no roles  
- Tokens without button/nav/card rules  
- Breakpoints as bare numbers with no layout change  
- DESIGN.md written but never opened mid-build  
- 1,000-line dump of repeated principles  
