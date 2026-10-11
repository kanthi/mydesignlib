/* ==========================================================================
   PULSO — Agency Interactions, Roadmap Engine & State
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Nav Transition
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Interactive Roadmap Steps
  const stepCards = document.querySelectorAll('.roadmap-step-card');
  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      stepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // 3. Toast Feedback System
  function showToast(message, icon = '✦') {
    let toast = document.getElementById('pulsoToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pulsoToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        background: #121413;
        color: #FFFFFF;
        padding: 12px 20px;
        border-radius: 999px;
        font-size: 14px;
        font-family: var(--font-display);
        font-weight: 500;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        opacity: 0;
        transform: translateY(12px);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color:#D9F958;font-size:16px">${icon}</span> ${message}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    toast.style.pointerEvents = 'auto';

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.pointerEvents = 'none';
    }, 3400);
  }

  // 4. Action Button Listeners
  document.querySelectorAll('a[href^="#book"], .btn-lime').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.getAttribute('href') === '#book' || btn.textContent.includes('Book A Call') || btn.textContent.includes('Contact Us')) {
        e.preventDefault();
        showToast('Growth consultation intake opened! We will respond within 2 hours.', '⚡');
      }
    });
  });

  // 5. Newsletter Submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      if (input && input.value) {
        showToast(`Subscribed ${input.value} to Pulso Dispatch!`, '📬');
        input.value = '';
      }
    });
  }

  // 6. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '' || targetId.startsWith('#book')) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
