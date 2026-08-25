document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer menu toggle
  const menuBtn = document.querySelector('[data-menu]');
  const drawer = document.getElementById('drawer');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        drawer.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });
  }

  // Interactive Tabs
  const tabGroups = document.querySelectorAll('[data-tabs]');
  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const container = group.closest('.tab-container') || group.parentElement;
    const panes = container.querySelectorAll('.tab-pane');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        
        buttons.forEach(b => b.classList.remove('is-active'));
        panes.forEach(p => p.classList.remove('is-active'));

        btn.classList.add('is-active');
        const targetPane = container.querySelector(`#${targetId}`);
        if (targetPane) {
          targetPane.classList.add('is-active');
        }
      });
    });
  });

  // Interactive Engineering Squad & Scope Estimator
  const squadSlider = document.getElementById('calc-squad');
  const durationSlider = document.getElementById('calc-duration');
  const tierSelect = document.getElementById('calc-tier');
  
  if (squadSlider && durationSlider) {
    const squadVal = document.getElementById('calc-squad-val');
    const durationVal = document.getElementById('calc-duration-val');
    const totalCost = document.getElementById('calc-total-cost');
    const monthlyCost = document.getElementById('calc-monthly-cost');
    const teamBreakdown = document.getElementById('calc-team-breakdown');

    function updateEstimator() {
      const squadSize = parseInt(squadSlider.value, 10);
      const months = parseInt(durationSlider.value, 10);
      const tier = tierSelect ? tierSelect.value : 'standard';

      let ratePerEngMonth = 24000; // Base Senior Engineer Month
      if (tier === 'mission-critical') ratePerEngMonth = 32000;
      if (tier === 'advisory') ratePerEngMonth = 28000;

      const monthlyTotal = squadSize * ratePerEngMonth;
      const grandTotal = monthlyTotal * months;

      if (squadVal) squadVal.textContent = `${squadSize} Senior Engineers`;
      if (durationVal) durationVal.textContent = `${months} ${months === 1 ? 'Month' : 'Months'} (${months * 2} Sprints)`;

      if (monthlyCost) monthlyCost.textContent = `$${(monthlyTotal / 1000).toFixed(0)}k / month`;
      if (totalCost) totalCost.textContent = `$${(grandTotal / 1000).toLocaleString()}k`;

      if (teamBreakdown) {
        let archCount = Math.max(1, Math.floor(squadSize * 0.25));
        let fullStackCount = Math.max(1, Math.floor(squadSize * 0.5));
        let sreSecCount = squadSize - archCount - fullStackCount;
        if (sreSecCount < 0) sreSecCount = 0;

        teamBreakdown.innerHTML = `
          <div><span>Staff Systems Architect:</span><strong>${archCount}</strong></div>
          <div><span>Senior Full-Stack &amp; AI Leads:</span><strong>${fullStackCount}</strong></div>
          <div><span>Cloud / SRE &amp; Security:</span><strong>${Math.max(1, sreSecCount)}</strong></div>
          <div><span>Dedicated Delivery Partner:</span><strong>1 (Included)</strong></div>
        `;
      }
    }

    squadSlider.addEventListener('input', updateEstimator);
    durationSlider.addEventListener('input', updateEstimator);
    if (tierSelect) tierSelect.addEventListener('change', updateEstimator);
    updateEstimator();
  }

  // Live Telemetry Simulation (Subtle Micro-Interactions)
  const latencyEl = document.getElementById('telemetry-latency');
  const ticketsEl = document.getElementById('telemetry-tickets');
  
  if (latencyEl) {
    setInterval(() => {
      const base = 8.4;
      const jitter = (Math.random() * 0.8 - 0.4).toFixed(1);
      const newLat = (base + parseFloat(jitter)).toFixed(1);
      latencyEl.textContent = `${newLat}ms`;
    }, 4000);
  }

  // Interactive Code Copy Buttons
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-copy');
      const targetElem = document.querySelector(targetSelector);
      if (targetElem) {
        const textToCopy = targetElem.innerText || targetElem.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = originalText; }, 2000);
        });
      }
    });
  });

  // Modal Open / Close Handlers
  const modalTriggers = document.querySelectorAll('[data-modal-open]');
  const modalClosers = document.querySelectorAll('[data-modal-close]');
  
  modalTriggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trig.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalClosers.forEach(closer => {
    closer.addEventListener('click', () => {
      const modal = closer.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  });

  // Interactive Contact & Scope Form Handler
  const contactForm = document.getElementById('consultation-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Transmitting Scope...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Scope Transmitted — Senior Lead Will Respond < 4h';
        btn.style.backgroundColor = '#22866b';
        const msg = document.createElement('div');
        msg.className = 'plate plate-white';
        msg.style.marginTop = '1.5rem';
        msg.innerHTML = `
          <p class="kicker">Inquiry Confirmed // PGP Node Eastwick</p>
          <h4 style="margin: 4px 0 8px;">Your consultation ticket #AGY-8492 is active.</h4>
          <p class="muted">A Principal Engineer and Practice Lead will review your architecture brief and reply with preliminary questions and calendar availability within 4 business hours.</p>
        `;
        contactForm.appendChild(msg);
      }, 900);
    });
  }
});
