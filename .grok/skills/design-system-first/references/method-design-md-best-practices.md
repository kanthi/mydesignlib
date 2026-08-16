# Method: DESIGN.md best practices (value → intent → constraints)

**Filename:** `method-design-md-best-practices.md`  
**Human doc:** `docs/method-design-md-for-ai.md`  
**Companions:** `method-design-md-7-ai-mistakes.md` (audit) · `method-design-md-7-ai-tips.md` (construction)

Source (captured 2026-08-16):  
https://freedium-mirror.cfd/uxplanet.org/design-md-best-practices-c00325e8b23a  

Original: UX Planet / Nick Babich, 17 Jun 2026 (~6 min). Third piece in the DESIGN.md series after *7 mistakes* and *7 tips*.  
Framing: Google Stitch → open DESIGN.md spec; same file reused by Stitch, Claude Code, Cursor, Grok.

**Repo skill:** `design-system-first`

---

## Thesis

DESIGN.md is persistent, structured **context** — the visual identity of *this* product so an agent grounds decisions in existing tokens and component rules instead of generic defaults.

> DESIGN.md should tell a story of your product.

That story has three layers. Skip one and the agent invents the missing layer.

| Layer | File home | Answers |
|-------|-----------|---------|
| **Tokens** | YAML (optional) + CSS `:root` | *What* — exact values, role names |
| **Reasoning** | Markdown body | *Why / how / when not* |
| **Components** | Markdown body | *How tokens + rules assemble into UI* |

**Repo adaptation:** CSS `:root` in `index.html` is implementable source of truth. Optional YAML only if you want `npx @google/design.md lint`. Do **not** copy the article’s demo system (Inter + Deep Indigo / “Roxy Tech Modernism”) — that is the exact AI-default cluster this library bans.

---

## File anatomy (from the article)

```
YAML frontmatter (optional)
  name: <system / aesthetic name>
  colors / typography / rounded / spacing   ← atomic decisions

Markdown body
  Brand & Style     ← how the brand should be perceived
  Colors, Type, Space, Shapes  ← styles + token refs + boundaries
  Components        ← built from tokens + reasoning, including states
```

Each body section should **reference named tokens**, not restate raw hex. Example pattern from the article: human-readable color *Deep Indigo* plus token `` `primary` ``. In this repo that is *Ink / Paper / Accent* plus `` `text-primary` `` / `` `action-primary` ``.

---

## Three writing rules

### 1. Tokens are decisions, not variables

A token name is a **role**, not a swatch label. Agents assume meaning from the name, so `blue` / `gray-1` force a guess; `action-primary`, `surface-page`, `surface-dim`, `border-subtle`, `text-muted`, `radius-card` do not.

While writing tokens, **audit the inventory**:

| Cut | Meaning |
|-----|---------|
| Unused | Never appears in the system |
| Duplicates | Two values serving the same role |
| Irrelevant / misused | Value used for the wrong job (e.g. danger red as decoration) |

Treating tokens as decisions is how you delete dead palette.

### 2. Every decision needs reasoning (and boundaries)

Write the full chain. The last step is the one agents lack most:

```
Raw value (hex / rem)
  → Intent (what role it plays)
  → Reasoning (why / how it is used)
  → Constraints (when to use · when not to use)
```

Article example (adapted to repo names):

```markdown
## Colors

The palette is anchored by Ink (`text-primary`) and one accent
(`action-primary`) reserved for the primary action.

Use `action-primary` for the main button, selected states, and key CTAs.
Do not use it for large backgrounds, decorative illustration, or
secondary content — it overpowers the page.
```

Without the “do not” clause, the agent will flood the canvas with accent.

### 3. Components sit on top of tokens + reasoning

Do not re-specify hex in the component section. Compose: “Primary button = `action-primary` fill + `text-on-accent` + `{radius-pill}` + `{space-base}` padding.”

**Default state is not enough.** Document the states the agent will invent inconsistently:

| Marketing one-pager | Product / form UI |
|---------------------|-------------------|
| default · hover · focus · disabled | + active · loading |

Idle-only buttons are a known failure mode (same as tip 4).

---

## What this adds vs mistakes / tips

| Already captured | New from this article |
|------------------|------------------------|
| Semantic names vs `blue` | Token **inventory audit** (unused / dupe / misused) |
| Markdown = intent | Explicit chain: value → intent → reasoning → **boundaries** |
| Token refs in components | Components as the *final* layer of a three-layer story |
| Hover / focus / disabled | Also **active** and **loading** when the UI has those states |
| Overview emotion → rules | “Tell a story of the product” (Brand & Style as narrative, still rule-backed) |

Use mistakes to **audit**, tips to **construct**, these three rules to **write each token and component**.

---

## Do not regress

- Appearance-named tokens (`blue`, `gray-1`)  
- Hex dump with no usage or “do not use” lines  
- Components that re-copy hex instead of token names  
- Buttons specified only at rest  
- Adopting the article demo (Inter + indigo “corporate modern”) as a default  
- YAML-only DESIGN.md with an empty body (no story, no boundaries)

## Related

- Mistakes: `method-design-md-7-ai-mistakes.md`  
- Tips: `method-design-md-7-ai-tips.md`  
- Anthropic plan gate: `src-anthropic-frontend-design.md`  
