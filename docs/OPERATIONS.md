# mydesignlib — operations & session workflow

Canonical runbook for hosting, privacy, analytics, and how agents should finish work.
Follow this alongside root **[AGENTS.md](../AGENTS.md)** and **[TEMPLATE_WORKFLOW.md](TEMPLATE_WORKFLOW.md)**.

## Repo identity

| | |
|---|---|
| Product | **mydesignlib** — personal static design library |
| Former name | `mytemplate` (same product, renamed) |
| GitHub | https://github.com/kanthi/mydesignlib |
| Default branch | `main` |
| Stack | Vanilla HTML/CSS/JS only — **no build step** |

Showcase app lives at the **repo root** (`index.html`, `css/`, `js/`, `data/catalog.json`).  
Library items live under `library/<type>/<id>/`.

## Live site (GitHub Pages)

| | |
|---|---|
| **Primary URL** | https://www.kanthi.in/mydesignlib/ |
| Alternate | https://kanthi.github.io/mydesignlib/ (redirects to custom domain) |
| Pages source | **GitHub Actions** — not “Deploy from a branch” |
| Workflow | [`.github/workflows/pages.yml`](../.github/workflows/pages.yml) |
| Workflow name | **Deploy GitHub Pages** |
| Trigger | Push to `main`, or Actions → Run workflow |

### Pages paused (intentional)

As of 2026-08-12, **GitHub Pages is off** on this repo (`has_pages: false`) and the **Deploy GitHub Pages** workflow is **disabled** so pushes to `main` do not fail with:

`get pages site failed. Verify that the repo has pages enabled`

The workflow file remains in the repo ready to use. Live URL will 404 until Pages is turned back on.

**Re-enable when you want the site live again:**

1. Enable Pages with Actions as the source (UI: Settings → Pages → Source: **GitHub Actions**), or:

   ```bash
   gh api -X POST repos/kanthi/mydesignlib/pages \
     -f build_type=workflow \
     -f 'source[branch]=main' \
     -f 'source[path]=/'
   ```

2. Re-add the custom domain if needed (`www.kanthi.in` / DNS already pointed).

3. Enable and run the workflow:

   ```bash
   gh workflow enable "Deploy GitHub Pages"
   gh workflow run "Deploy GitHub Pages"
   ```

4. Smoke-check the live URLs below.

Do **not** re-enable the workflow while Pages is still off — `configure-pages` will 404 again.

### Why a custom workflow (not GitHub’s managed one)

GitHub’s auto `pages-build-deployment` workflow pins older actions (`checkout@v4`, `upload-artifact@v4`) and emits **Node.js 20 deprecation** warnings. Owners cannot edit that managed workflow.

We use a **repo-owned** workflow with Node 24–compatible actions:

| Action | Pin |
|--------|-----|
| `actions/checkout` | `@v7` |
| `actions/configure-pages` | `@v6` |
| `actions/upload-pages-artifact` | `@v5` |
| `actions/deploy-pages` | `@v5` |

When bumping actions later, keep **Node 24** (`using: node24` in each action’s `action.yml`). Do not re-enable branch-only deploy unless the managed workflow is fixed.

### Deploy behavior

1. Push to `main` → workflow uploads the **entire static tree** (`path: .`) as a Pages artifact → deploys.
2. No Jekyll build (root `.nojekyll` present).
3. Relative asset paths are required so project-pages URLs work under `/mydesignlib/`.

### Post-deploy smoke check

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://www.kanthi.in/mydesignlib/
curl -s -o /dev/null -w '%{http_code}\n' https://www.kanthi.in/mydesignlib/data/catalog.json
curl -s -o /dev/null -w '%{http_code}\n' https://www.kanthi.in/mydesignlib/robots.txt
curl -s -o /dev/null -w '%{http_code}\n' https://www.kanthi.in/mydesignlib/library/websites/<id>/
```

Expect **200**. Workflow run should complete with **no Node 20 annotations**.

## Privacy — do not get crawled / indexed

**Intent:** personal library; not for search discovery. Still **public by URL** (GitHub Pages has no password). Share links carefully.

| Control | Location / rule |
|---------|-----------------|
| `robots.txt` | Root file: `User-agent: *` → `Disallow: /` (+ named AI/search bots) |
| Meta robots | Every HTML page: `noindex, nofollow, noarchive, nosnippet, noimageindex` |
| Googlebot meta | Same directives via `name="googlebot"` |
| No sitemap | Do not add discovery sitemaps or indexable SEO campaigns |

**Limits:** well-behaved crawlers honor this; rogue scrapers and anyone with the URL can still load pages. True secrecy needs auth / private hosting — not configured here.

## Google Analytics

| | |
|---|---|
| Property | GA4 gtag |
| Measurement ID | **`G-Z97ZD3EVSF`** |
| Where | **Every** HTML page (showcase + all `library/**/*.html`) |

Required snippet in `<head>` (keep in sync with root `index.html`):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z97ZD3EVSF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Z97ZD3EVSF');
</script>
```

## Required `<head>` block (every new HTML page)

Include **both** noindex and GA (order: robots → gtag is fine):

```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z97ZD3EVSF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Z97ZD3EVSF');
</script>
```

Bulk-fix helper (from repo root) if older pages are missing tags:

```bash
# Check coverage
rg -L 'G-Z97ZD3EVSF' -g '*.html' library index.html || true
rg -L 'name="robots"' -g '*.html' library index.html || true
```

## Catalog & shipping templates

| Step | Detail |
|------|--------|
| Skill | `.grok/skills/ship-template/SKILL.md` (`/ship-template`) |
| Human pipeline | `docs/TEMPLATE_WORKFLOW.md` |
| Register | `data/catalog.json` (`type`: website \| brand \| logo \| system) |
| Folder | `library/<type>/<id>/` with `index.html` + `preview.jpg` as needed |
| Brand audit | No real brands, designer handles, marketplace URLs |
| Local verify | **Caddy portal** (already running) — see § Local preview; do **not** start `python3 -m http.server` |

Polish skills (when asked): `premium-site`, `anti-slop-frontend`, `design-system-first`, `interface-craft`.

## Local preview (Caddy — preferred)

This machine hosts the repo via **Caddy**, not a one-off Python server.

| | |
|---|---|
| Config (not in git) | `~/.config/mydesignlib-portal/Caddyfile` |
| Port file | `~/.config/mydesignlib-portal/port` |
| Helper | `~/.config/mydesignlib-portal/serve.sh` |
| Root | Repo root (`index.html`, `library/`, …) |

```bash
# Base URL (e.g. http://192.168.68.200:33215/)
~/.config/mydesignlib-portal/serve.sh --url

# Ensure Caddy is up (if needed)
~/.config/mydesignlib-portal/serve.sh --bg

# Smoke check
BASE="$(~/.config/mydesignlib-portal/serve.sh --url | tr -d '[:space:]')"
curl -s -o /dev/null -w '%{http_code}\n' "$BASE"
curl -s -o /dev/null -w '%{http_code}\n' "${BASE}library/websites/<id>/"
curl -s -o /dev/null -w '%{http_code}\n' "${BASE}library/websites/<id>/preview.jpg"
```

**Agents:** use the Caddy base URL for all local HTTP verify. Do **not** spawn `python3 -m http.server` (port conflicts, wrong host, unnecessary process).

## Agent finish protocol

When work changes the **published site** (templates, catalog, showcase, robots, GA, workflow, docs that describe live ops):

1. Keep AGENTS / skills / this runbook accurate if rules changed.
2. **Commit** with a clear message (user often asks; when they say “commit and push”, do both).
3. **Push `main`** — when Pages is active, that redeploys; while [Pages is paused](#pages-paused-intentional), push only shares git history (no live deploy).
4. Optionally smoke-check the live URL after the Actions run succeeds (skip while Pages is off).

When work is **local-only** or the user has not asked to ship: do not push without confirmation.

## Do not regress

- Do not switch Pages back to legacy branch deploy without a reason.
- Do not remove `robots.txt` Disallow-all or noindex metas “for SEO”.
- Do not drop GA from new pages.
- Do not put absolute root paths (`/css/...`) that break under `/mydesignlib/`.
- Do not commit real personal data or live API secrets (GA measurement ID in HTML is intentional/public).

## Quick reference

```
Live:     https://www.kanthi.in/mydesignlib/  (paused — Pages off; see § Pages paused)
Deploy:   push main → .github/workflows/pages.yml  (workflow disabled while Pages off)
Catalog:  data/catalog.json
Library:  library/websites|brands|logos|systems/<id>/
Privacy:  robots.txt + noindex on every HTML page
Analytics: G-Z97ZD3EVSF on every HTML page
Ship:     /ship-template + AGENTS.md
```
