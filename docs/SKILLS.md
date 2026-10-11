# Agent skills map

**Archived 2026-10-11.** These skills are not loaded. They live in `.grok/archive/skills/` so Grok will not discover them. Do not follow them when building templates. Match the reference. Restore a skill by moving its folder back to `.grok/skills/<name>/`.

Index of the archived Grok skills and method docs for **mydesignlib**.  
On disk: `.grok/archive/skills/<skill-name>/SKILL.md`

**Not named `skillme.md`.** Prefer **`SKILLS.md`** (plural, clear) under `docs/` so humans find it next to other ops/method docs.

---

## Skills (agent procedures)

| Skill | Slash | When to use |
|-------|-------|-------------|
| [ship-template](../.grok/archive/skills/ship-template/SKILL.md) | `/ship-template` | Design URL / reference → fictional rebrand → catalog item |
| [design-system-first](../.grok/archive/skills/design-system-first/SKILL.md) | `/design-system-first` | Tokens + DESIGN.md **before** HTML (plan gate + tips) |
| [anti-slop-frontend](../.grok/archive/skills/anti-slop-frontend/SKILL.md) | `/anti-slop-frontend` | Kill generic AI aesthetics / ban list / copy craft |
| [premium-site](../.grok/archive/skills/premium-site/SKILL.md) | `/premium-site` | Multi-pass “$10K” polish or cold premium build |
| [interface-craft](../.grok/archive/skills/interface-craft/SKILL.md) | `/interface-craft` | Micro feel audit after macro polish |
| [clean-interface](../.grok/archive/skills/clean-interface/SKILL.md) | `/clean-interface` | Calm SaaS / whitespace / product-as-proof |

### Former route (archived — do not run)

```
design-system-first
  → anti-slop-frontend (check)
  → clean-interface          # when direction is soft clean SaaS
  → ship-template | premium-site build
  → premium-site polish (type → space → motion → mobile)
  → interface-craft (quick or full)
  → brand audit + HTTP verify
```

Always-on product rules: root [`AGENTS.md`](../AGENTS.md).  
Hosting / deploy: [`OPERATIONS.md`](./OPERATIONS.md).

---

## Method & corpus docs (`docs/`)

| File | What it is |
|------|------------|
| [TEMPLATE_WORKFLOW.md](./TEMPLATE_WORKFLOW.md) | Human ship pipeline for website templates |
| [premium-site-method.md](./premium-site-method.md) | Human premium polish method |
| [method-design-md-for-ai.md](./method-design-md-for-ai.md) | DESIGN.md that agents can execute (7 mistakes + 7 tips) |
| [ai-website-methods-corpus.md](./ai-website-methods-corpus.md) | Index of X/community methods folded into skills |
| [OPERATIONS.md](./OPERATIONS.md) | Pages, privacy, GA, deploy smoke checks |
| [removed-ai-slop-templates.md](./removed-ai-slop-templates.md) | Culled items + why they failed the taste bar |
| **SKILLS.md** (this file) | Skills map + **filename naming scheme** |

---

## Filename naming scheme

Goal: **identify the file’s role from the name alone** (scan `docs/` or `references/` without opening).

### `docs/` prefixes

| Prefix | Meaning | Example |
|--------|---------|---------|
| `method-` | Reusable how-to / checklist for design or build | `method-design-md-for-ai.md` |
| `corpus-` | Multi-source research index *(legacy: `ai-website-methods-corpus.md`)* | prefer `corpus-<topic>.md` for new files |
| `OPERATIONS` / `TEMPLATE_WORKFLOW` | Caps = long-lived ops / pipeline (existing convention) | keep as-is |
| `SKILLS` | Skills map (this file) | `SKILLS.md` |

Avoid vague names: `notes.md`, `skillme.md`, `misc.md`, `new.md`.

### Skill packages (Grok convention)

Active skills are loaded only from `.grok/skills/<skill-name>/`. The six design skills are archived and are not in that folder.

```
.grok/archive/skills/<skill-name>/   # current archive; not loaded
  SKILL.md
  references/
    method-<topic>.md
    src-<author>-<topic>.md
```

| Prefix in `references/` | Meaning | Example |
|-------------------------|---------|---------|
| `method-` | Actionable method (agent + human) | `method-design-md-7-ai-mistakes.md` |
| `src-` | One external source, lightly edited | `src-cloudxdev-award-prompt.md` *(new files; older files may omit `src-`)* |

Existing premium-site refs (`cloudxdev-*.md`, `prajwal-taste-first.md`, …) keep names; **new** refs should use `method-` or `src-`.

### Per-library design systems (not method docs)

| File | Role |
|------|------|
| `library/<type>/<id>/DESIGN.md` | **This item’s** design system (tokens, components, bans) |
| `library/<type>/<id>/index.html` | Implementation (`:root` tokens match DESIGN.md) |

`DESIGN.md` = product/template design system.  
`method-design-md-*.md` = **how to write** a good DESIGN.md for AI.

---

## DESIGN.md quality (quick)

See **[method-design-md-for-ai.md](./method-design-md-for-ai.md)**.

1. Not a mood board — emotion → observable rules  
2. Semantic tokens + usage  
3. Components, not foundations only (with token refs + states)  
4. Responsive *behaviour*  
5. Motion / icons / content  
6. Short, non-contradictory  
7. **Read** the file before writing UI  

Tips: exact scales · intent prose · token refs · states · concrete do/don’t · lint · version/diff  
Best practices: tokens as decisions · value → intent → boundaries · components compose tokens (not idle-only)  

Those procedures are archived. Do not load them.
