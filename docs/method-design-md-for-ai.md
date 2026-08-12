# Method: DESIGN.md for AI agents

**Filename scheme:** `method-<topic>.md` — human-readable build methods (see [SKILLS.md](./SKILLS.md)).

**Agent skill:** [`/design-system-first`](../.grok/skills/design-system-first/SKILL.md)  
**Full source notes:** [`.grok/skills/design-system-first/references/method-design-md-7-ai-mistakes.md`](../.grok/skills/design-system-first/references/method-design-md-7-ai-mistakes.md)

**Source articles:**  
- Mistakes (captured 2026-08-08): https://freedium-mirror.cfd/uxplanet.org/7-design-md-mistakes-that-make-ai-generated-ui-worse-9ec2dfcc44cd  
- Tips (captured 2026-08-12): https://freedium-mirror.cfd/uxplanet.org/7-design-md-tips-for-better-more-consistent-ai-generated-ui-b01736d07748  

Skill refs: `method-design-md-7-ai-mistakes.md` · `method-design-md-7-ai-tips.md`

---

## Why this exists

Writing a `DESIGN.md` and pointing an agent at it often yields only a small improvement: correct brand colour, still generic layout. The file is usually a **mood board** or a **raw token dump**, not something an agent can execute.

**Rule:** DESIGN.md must encode *decisions an agent would otherwise guess wrong* — then it must be **read before UI work** (filename alone does not load context).

Pair: **mistakes** = quality audit · **tips** = how to construct (exact values, token refs, states, lint/diff).

---

## 7 mistakes (checklist)

| # | Mistake | Fix |
|---|---------|-----|
| 1 | Mood board (“clean, modern, premium”) | Overview = emotion + *Create this feeling through:* token-backed rules |
| 2 | Raw values (`blue`, `gray-900`) | **Semantic** names (`action-primary`, `text-secondary`) + usage bullets |
| 3 | Foundations only | Document **components** (buttons, nav, cards, inputs): anatomy, variants, bans |
| 4 | Breakpoints without behaviour | Layout **logic** per band (columns, margins, what stacks/hides) |
| 5 | No motion / icons / content | Short sections for duration, icon set, tone of voice |
| 6 | Too long or contradictory | Prefer ≤ ~200 lines; rules over essays; one conflict priority |
| 7 | File never loaded into the agent | Explicitly **read** `library/.../DESIGN.md` before HTML/CSS |

**Overview quality test:** *Could two designers interpret this rule completely differently?* If yes → add concrete decisions.

---

## 7 tips (construction)

| # | Tip | Practice |
|---|-----|----------|
| 1 | Exact values for scales | Spacing, radii, type roles with size/weight/leading |
| 2 | Markdown body = intent | Why/when to use each token |
| 3 | Token refs in components | Components point at named tokens, not duplicated hex |
| 4 | Interaction states | Hover / focus / disabled for interactive chrome |
| 5 | Concrete do/don’t | Operational constraints with token names |
| 6 | Lint when schema-friendly | `npx @google/design.md lint …` |
| 7 | Diff / version when evolving | `-v1` folders + optional design.md diff |

**Runtime SoT in this repo:** CSS `:root` in `index.html`. Optional YAML only if linting.

---

## Where files live in this repo

| Path | Role |
|------|------|
| `library/<type>/<id>/DESIGN.md` | Per-item design system (marketing or product) |
| CSS `:root` in `index.html` | Implementable tokens (must match DESIGN.md) |
| This doc | Human checklist + method |
| `/design-system-first` skill | Agent procedure + full template |

---

## Compact DESIGN.md (marketing site)

Use the template in the skill. Minimum sections:

1. **Overview** — audience, CTA, emotion → observable rules  
2. **Colors** — semantic roles + usage  
3. **Typography / space / shape**  
4. **Layout and responsiveness** — compact / medium / expanded behaviour  
5. **Components** — buttons, nav, primary content block  
6. **Motion · iconography · content · ban list · a11y**

Alias marketing names (`paper` / `ink` / `accent`) only if usage rules are written next to them.

---

## Load into the agent (mistake 7)

| Tool | Pattern |
|------|---------|
| Grok (this repo) | Read `library/.../DESIGN.md` before writing UI; `/design-system-first` first on cold starts |
| Claude Code | `@DESIGN.md` from project instructions; check `/context` |
| Cursor | Project rules or explicit attach |

Optional lint / diff (schema-friendly files):

```bash
npx @google/design.md lint library/websites/<id>/DESIGN.md
npx @google/design.md diff library/websites/<id>/DESIGN.md library/websites/<id>-v1/DESIGN.md
```

---

## Related

- Skills map + naming scheme: [SKILLS.md](./SKILLS.md)  
- Methods corpus: [ai-website-methods-corpus.md](./ai-website-methods-corpus.md)  
- Ship pipeline: [TEMPLATE_WORKFLOW.md](./TEMPLATE_WORKFLOW.md)  
- Polish pipeline: [premium-site-method.md](./premium-site-method.md)  
- Micro craft after polish: `/interface-craft`  

