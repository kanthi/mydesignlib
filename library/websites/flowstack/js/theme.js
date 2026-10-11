/* Theme bootstrap (runs in <head> to avoid a flash).
   Priority: ?theme=night URL param > saved choice > <html data-theme> in the markup. */
(function () {
  try {
    var q = new URLSearchParams(location.search).get('theme');
    var t = q || localStorage.getItem('flowstack-theme');
    if (t && t !== 'default') document.documentElement.setAttribute('data-theme', t);
    if (t === 'default') document.documentElement.removeAttribute('data-theme');
  } catch (e) {}
})();
