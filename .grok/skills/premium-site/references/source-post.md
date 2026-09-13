# Source post — full capture

- **URL:** https://x.com/bateshkaaa/status/2079218516150862086  
- **Author:** Romario (@bateshkaaa)  
- **Posted:** 2026-07-20  
- **Captured:** 2026-08-05  

## Core argument

Agencies charge $8,000–$12,000 for a marketing site (3 weeks of calls, 2 revision rounds). Claude Code (or similar agent tools) can build the same class of site in one afternoon — but most people still get template-looking output because they type “build me a beautiful website” and get safe defaults: Inter, purple gradients, three feature cards.

**The $10K look comes from constraints, not vibes.**

## Part 1 — Load the design brain (15 minutes)

Claude’s default taste is a $500 template. Skills fix that. A skill is a folder with a `SKILL.md` the agent reads before designing.

Claude Code setup (original):

1. `npm install -g @anthropic-ai/claude-code`  
2. `claude` — log in  
3. From anthropics/skills on GitHub: download `frontend-design`  
4. Grab a UI/UX ruleset skill (`ui-ux-pro-max` is the popular one)  
5. Put both under `.claude/skills/`  
6. Restart; `/skills` or “what skills do you have”  

Or ask the agent to download skills from links.

## Part 2 — Steal the direction (20 minutes)

Adjectives don’t work. “Make it premium” produces nothing. Screenshots work.

1. Awwwards + Dribbble; search niche (“SaaS landing”, “portfolio”, “law firm”)  
2. Pick **3** sites only  
3. Screenshot hero, one content section, footer of each → 9 screenshots  
4. Save as `ref-1.png`, `ref-2.png`, `ref-3.png`  
5. Exact instruction: *Match the typography scale, spacing rhythm, and motion of these references. Do not copy the layouts.*

“Do not copy” matters — without it the model clones reference 1.

## Part 3 — The build prompt (5 minutes write, ~6 minutes run)

One prompt, five blocks:

1. **Audience:** “This site is for [freelance photographers charging $2K+ per shoot].”  
2. **The 1 action:** “Every page pushes toward [booking a call]. One CTA, repeated.”  
3. **References:** “Use ref-1.png, ref-2.png, ref-3.png as the quality bar.”  
4. **Stack:** “Astro, Tailwind, deployed to Cloudflare Pages. Static, fast, no CMS.”  
5. **Ban list:** “Banned: purple gradients, emoji as icons, Inter as the display font, generic stock-photo placeholders, centered-everything layouts.”

Paste all five as one message. First working version lands in 4–6 minutes. It will be ~70% there — expected. Nobody ships version 1 as final.

## Part 4 — The polish pass (1–2 hours — the $10K part)

Agencies bill ~40% of the project for this stage. **Three separate messages**, in order:

1. Typography only — type scale, line-height, letter-spacing; touch nothing else  
2. Spacing only — vertical rhythm; double whitespace where cramped; touch nothing else  
3. Motion only — scroll-reveal + hover; subtle 200–300ms; nothing bounces  

Why separate: ask for all three at once and the model fixes one dimension well and two badly.

Then mobile: “Show me every page at 375px width and fix what breaks.”

If something is wrong: attach a screenshot and describe the change.

Life hack: send a reference site for animation direction and ask for something similar.

## Part 5 — Ship (15 minutes, $0/month)

1. git init / commit / push (agent can do this)  
2. Cloudflare Pages → connect repo  
3. Build: `npm run build`, output: `dist`  
4. Custom domain in dashboard  

Live site; free hosting. Agency often charges ~$150/month to babysit the same thing.

## Progression quoted from post

- Site 1: 6 hours, looks like $3K  
- Site 3: 3 hours, looks like $7K  
- Site 5: 2-hour pipeline, portfolio that closes at agency prices  

Agency sells three weeks of process. Process was always one afternoon.

## Closing

You’ll end up with a solid website — not a perfect one. First version always has rough edges. Ship it. Improve one thing a day. That’s how good websites become great ones.

## Replies (context only)

- Users asked about Codex vs Claude-only; method is agent-agnostic if skills + prompt structure transfer.
