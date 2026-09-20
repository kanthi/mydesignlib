/**
 * Evolv - Single Viewport Video Background Landing Page
 * Vanilla JavaScript Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Mobile Menu Controller
     ========================================================================== */
  const mobileBurger = document.querySelector('.mobile-burger');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileSheet = document.querySelector('.mobile-sheet');
  const mobileLinks = document.querySelectorAll('.mobile-sheet-link, .mobile-sheet-signin');

  function openMenu() {
    if (!mobileBurger || !mobileOverlay || !mobileSheet) return;
    mobileBurger.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('active');
    mobileSheet.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!mobileBurger || !mobileOverlay || !mobileSheet) return;
    mobileBurger.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('active');
    mobileSheet.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const isOpen = mobileBurger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (mobileBurger) {
    mobileBurger.addEventListener('click', toggleMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  }, { passive: true });

  /* ==========================================================================
     2. Stats Count-Up Animation (easeOutCubic)
     ========================================================================== */
  const statsConfig = [
    { target: 120, decimals: 0, suffix: 'ms' },
    { target: 99.99, decimals: 2, suffix: '%' },
    { target: 24, decimals: 0, suffix: '/7' },
    { target: 2.4, decimals: 1, suffix: 'M' }
  ];

  const statValueEls = document.querySelectorAll('.stat-value');

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateStat(element, target, decimals, suffix, duration, delay) {
    setTimeout(() => {
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentValue = easedProgress * target;

        element.textContent = currentValue.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = target.toFixed(decimals) + suffix;
        }
      }

      requestAnimationFrame(update);
    }, delay);
  }

  const statsContainer = document.querySelector('.stats');
  if (statsContainer && 'IntersectionObserver' in window) {
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          statValueEls.forEach((el, index) => {
            const config = statsConfig[index];
            if (config) {
              const duration = 1500 + index * 80;
              const delay = 480 + index * 90;
              animateStat(el, config.target, config.decimals, config.suffix, duration, delay);
            }
          });

          observer.unobserve(statsContainer);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsContainer);
  } else {
    // Fallback if IntersectionObserver is not supported
    statValueEls.forEach((el, index) => {
      const config = statsConfig[index];
      if (config) {
        animateStat(el, config.target, config.decimals, config.suffix, 1500, 480);
      }
    });
  }
});
