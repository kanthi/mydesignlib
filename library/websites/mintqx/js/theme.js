/* Theme presets: sets <html data-theme> from ?theme=, config, a saved choice or the markup, and renders the optional demo switcher. */
(() => {
  const cfg = window.TEMPLATE_CONFIG || {}, root = document.documentElement;
  const THEMES = [['', 'Mint'], ['violet', 'Violet'], ['ember', 'Ember']];
  const norm = t => (t === 'mint' ? '' : (t || ''));
  const q = new URLSearchParams(location.search).get('theme');
  let saved = null; try { saved = localStorage.getItem('mintqx-theme'); } catch (e) {}
  const initial = norm(q ?? cfg.theme ?? saved ?? root.dataset.theme ?? '');
  const apply = t => {
    t = norm(t);
    if (t) root.dataset.theme = t; else delete root.dataset.theme;
    dispatchEvent(new CustomEvent('template:theme', { detail: t || 'mint' }));
    document.querySelectorAll('.theme-switch button').forEach(b => b.setAttribute('aria-pressed', b.dataset.t === t));
  };
  apply(initial);
  window.setTemplateTheme = t => { apply(t); try { localStorage.setItem('mintqx-theme', norm(t)); } catch (e) {} };
  if (cfg.themeSwitcher === false) return;
  addEventListener('DOMContentLoaded', () => {
    const el = document.createElement('div'); el.className = 'theme-switch'; el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'Theme preset');
    el.innerHTML = THEMES.map(([t, l]) => `<button type="button" data-t="${t}" aria-pressed="${t === (root.dataset.theme || '')}"><i class="sw-${t || 'mint'}"></i>${l}</button>`).join('');
    el.addEventListener('click', e => { const b = e.target.closest('button'); if (b) window.setTemplateTheme(b.dataset.t); });
    document.body.appendChild(el);
  });
})();
