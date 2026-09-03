// ui.js — Menu slide-in and interactive triggers
(function () {
  const menu = document.getElementById('menu');
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const backdrop = document.getElementById('menu-backdrop');
  const links = document.querySelectorAll('.menu__link');

  if (!menu || !openBtn || !closeBtn) return;

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    if (open) {
      closeBtn.focus({ preventScroll: true });
    } else {
      openBtn.focus({ preventScroll: true });
    }
  }

  openBtn.addEventListener('click', () => setMenu(true));
  closeBtn.addEventListener('click', () => setMenu(false));
  if (backdrop) backdrop.addEventListener('click', () => setMenu(false));

  links.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
    }
  });
})();
