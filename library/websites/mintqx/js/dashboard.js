/* Dashboard mock module: light/dark toggle, period + range tabs. Config: TEMPLATE_CONFIG.dashboard */
(() => {
  const C = Object.assign({ modeToggle: true, defaultMode: 'dark' }, (window.TEMPLATE_CONFIG || {}).dashboard);
  const dash = document.getElementById('dash'); if (!dash) return;
  const setMode = m => {
    dash.dataset.mode = m;
    dash.querySelectorAll('.d-mode [data-mode]').forEach(b => { const on = b.dataset.mode === m; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  };
  setMode(C.defaultMode);
  if (C.modeToggle) dash.querySelector('.d-mode')?.addEventListener('click', e => { const b = e.target.closest('[data-mode]'); if (b) setMode(b.dataset.mode); });
  else dash.querySelector('.d-mode')?.remove();
  // segmented controls are purely visual: move the "on" state
  dash.querySelectorAll('.d-seg, .d-range').forEach(g => g.addEventListener('click', e => {
    const b = e.target.closest('button, span'); if (!b || b.parentElement !== g) return;
    g.querySelectorAll('.on').forEach(x => x.classList.remove('on')); b.classList.add('on');
  }));
  window.setDashboardMode = setMode;
})();
