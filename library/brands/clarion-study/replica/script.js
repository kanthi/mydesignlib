/* ==========================================================================
   CLARION — Interactions, Telemetry Animations & State Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Nav Header
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Forecast Chart Timeframe Switching & Dynamic SVG Paths
  const chartTabs = document.querySelectorAll('.chart-tab-btn');
  const chartPathActual = document.getElementById('chartActualPath');
  const chartAreaActual = document.getElementById('chartActualArea');
  const chartPathForecast = document.getElementById('chartForecastPath');
  const statClosed = document.getElementById('statClosedVal');
  const statProjected = document.getElementById('statProjectedVal');
  const statAccuracy = document.getElementById('statAccuracyVal');
  const tooltipPin = document.getElementById('chartTooltip');

  const chartData = {
    '3M': {
      actual: 'M 10 145 C 70 140, 130 135, 190 120 C 250 105, 310 95, 370 75 C 430 55, 490 60, 540 38',
      area: 'M 10 145 C 70 140, 130 135, 190 120 C 250 105, 310 95, 370 75 C 430 55, 490 60, 540 38 L 540 180 L 10 180 Z',
      forecast: 'M 370 75 C 440 60, 510 40, 580 25 C 650 12, 720 18, 790 8',
      closed: '$1.24M',
      closedDelta: '+14.8%',
      projected: '$1.86M',
      accuracy: '94.2%',
      tooltipLeft: '56%',
      tooltipTop: '48px',
      tooltipDate: 'Week of 27 Jul 2026',
      tooltipVal: '$520,400',
      tooltipGrowth: '↑ 9.6%',
      tooltipPipe: 'Pipeline created: $1.31M'
    },
    '6M': {
      actual: 'M 10 160 C 80 150, 150 140, 220 125 C 290 110, 360 85, 430 65 C 500 50, 570 42, 640 28',
      area: 'M 10 160 C 80 150, 150 140, 220 125 C 290 110, 360 85, 430 65 C 500 50, 570 42, 640 28 L 640 180 L 10 180 Z',
      forecast: 'M 430 65 C 510 50, 590 35, 670 20 C 730 10, 760 8, 790 5',
      closed: '$2.82M',
      closedDelta: '+21.4%',
      projected: '$3.45M',
      accuracy: '95.6%',
      tooltipLeft: '58%',
      tooltipTop: '62px',
      tooltipDate: 'Week of 14 Jun 2026',
      tooltipVal: '$498,200',
      tooltipGrowth: '↑ 14.1%',
      tooltipPipe: 'Pipeline created: $2.15M'
    },
    '1Y': {
      actual: 'M 10 170 C 90 165, 180 145, 270 130 C 360 115, 450 78, 540 50 C 620 32, 700 24, 750 14',
      area: 'M 10 170 C 90 165, 180 145, 270 130 C 360 115, 450 78, 540 50 C 620 32, 700 24, 750 14 L 750 180 L 10 180 Z',
      forecast: 'M 540 50 C 610 38, 690 20, 790 6',
      closed: '$5.18M',
      closedDelta: '+28.2%',
      projected: '$6.70M',
      accuracy: '96.8%',
      tooltipLeft: '68%',
      tooltipTop: '50px',
      tooltipDate: 'Week of 08 Mar 2026',
      tooltipVal: '$612,900',
      tooltipGrowth: '↑ 18.5%',
      tooltipPipe: 'Pipeline created: $3.90M'
    },
    'YTD': {
      actual: 'M 10 155 C 70 145, 140 135, 210 115 C 280 95, 350 82, 420 60 C 490 44, 560 38, 610 25',
      area: 'M 10 155 C 70 145, 140 135, 210 115 C 280 95, 350 82, 420 60 C 490 44, 560 38, 610 25 L 610 180 L 10 180 Z',
      forecast: 'M 420 60 C 500 45, 590 28, 790 10',
      closed: '$3.75M',
      closedDelta: '+19.6%',
      projected: '$4.90M',
      accuracy: '95.1%',
      tooltipLeft: '52%',
      tooltipTop: '58px',
      tooltipDate: 'Week of 18 May 2026',
      tooltipVal: '$545,000',
      tooltipGrowth: '↑ 11.2%',
      tooltipPipe: 'Pipeline created: $2.60M'
    },
    'Max': {
      actual: 'M 10 175 C 100 168, 200 150, 300 120 C 400 90, 500 65, 600 35 C 680 18, 740 12, 790 6',
      area: 'M 10 175 C 100 168, 200 150, 300 120 C 400 90, 500 65, 600 35 C 680 18, 740 12, 790 6 L 790 180 L 10 180 Z',
      forecast: 'M 600 35 C 660 22, 720 12, 790 4',
      closed: '$8.90M',
      closedDelta: '+34.5%',
      projected: '$11.2M',
      accuracy: '97.4%',
      tooltipLeft: '72%',
      tooltipTop: '36px',
      tooltipDate: 'All-Time Aggregate',
      tooltipVal: '$8,920,000',
      tooltipGrowth: '↑ 34.5%',
      tooltipPipe: 'Pipeline created: $18.4M'
    }
  };

  chartTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      chartTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const frame = tab.getAttribute('data-frame');
      const d = chartData[frame];
      if (!d) return;

      if (chartPathActual) chartPathActual.setAttribute('d', d.actual);
      if (chartAreaActual) chartAreaActual.setAttribute('d', d.area);
      if (chartPathForecast) chartPathForecast.setAttribute('d', d.forecast);

      if (statClosed) statClosed.innerHTML = `${d.closed} <span>${d.closedDelta}</span>`;
      if (statProjected) statProjected.textContent = d.projected;
      if (statAccuracy) statAccuracy.textContent = d.accuracy;

      if (tooltipPin) {
        tooltipPin.style.left = d.tooltipLeft;
        tooltipPin.style.top = d.tooltipTop;
        tooltipPin.querySelector('.tt-date').textContent = d.tooltipDate;
        tooltipPin.querySelector('.tt-val').innerHTML = `${d.tooltipVal} <span style="color:#10B981;font-size:10px">${d.tooltipGrowth}</span>`;
        tooltipPin.querySelector('.tt-pipe').textContent = d.tooltipPipe;
      }
    });
  });

  // 3. Pricing Cadence Switcher (Monthly vs Annual -20%)
  const cadenceBtns = document.querySelectorAll('.cadence-btn');
  const pricePro = document.getElementById('pricePro');
  const priceTeam = document.getElementById('priceTeam');
  const cadenceLabels = document.querySelectorAll('.tier-cadence-label');

  cadenceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cadenceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isAnnual = btn.getAttribute('data-cadence') === 'annual';

      if (isAnnual) {
        if (pricePro) pricePro.textContent = '$10';
        if (priceTeam) priceTeam.textContent = '$24';
        cadenceLabels.forEach(lbl => lbl.textContent = '/month (billed annually)');
      } else {
        if (pricePro) pricePro.textContent = '$12';
        if (priceTeam) priceTeam.textContent = '$29';
        cadenceLabels.forEach(lbl => lbl.textContent = '/month');
      }
    });
  });

  // 4. Writing Assistant Histogram Bar Hover/Click
  const histBars = document.querySelectorAll('.hist-bar');
  const histScoreVal = document.getElementById('histScoreVal');
  histBars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      histBars.forEach(b => b.classList.remove('active'));
      bar.classList.add('active');
      const score = bar.getAttribute('data-score');
      if (histScoreVal && score) {
        histScoreVal.textContent = score;
      }
    });
  });

  // 5. Toast Notification System
  function showToast(message, icon = '✦') {
    let toast = document.getElementById('clarionToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'clarionToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        background: #151D18;
        border: 1px solid rgba(16, 185, 129, 0.4);
        color: #F9FAFB;
        padding: 12px 18px;
        border-radius: 999px;
        font-size: 13px;
        font-family: var(--font-display);
        font-weight: 500;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
        opacity: 0;
        transform: translateY(12px);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color:#10B981;font-size:15px">${icon}</span> ${message}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    toast.style.pointerEvents = 'auto';

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.pointerEvents = 'none';
    }, 3600);
  }

  // 6. Interactive Action Pills
  document.querySelectorAll('.rec-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const txt = pill.textContent.trim();
      showToast(`Action queued: ${txt}`, '⚡');
    });
  });

  // 7. Launch Announcement Badge Click
  const launchBadge = document.querySelector('.launch-badge');
  if (launchBadge) {
    launchBadge.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('AI 3.0 Engine deployed: 2.8x faster reasoning active across all pipelines', '✨');
    });
  }

  // 8. Command Palette (⌘K)
  const cmdOverlay = document.getElementById('cmdPalette');
  const cmdInput = document.getElementById('cmdInput');
  const cmdItems = document.querySelectorAll('.cmd-item');

  function openCmd() {
    if (cmdOverlay) {
      cmdOverlay.classList.add('open');
      if (cmdInput) {
        cmdInput.value = '';
        cmdInput.focus();
      }
    }
  }

  function closeCmd() {
    if (cmdOverlay) {
      cmdOverlay.classList.remove('open');
    }
  }

  // Open on Search Bar Click in Chrome
  const searchBar = document.querySelector('.chrome-search');
  if (searchBar) {
    searchBar.addEventListener('click', openCmd);
  }

  // Global Keyboard Shortcut: ⌘K or Ctrl+K or Esc
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdOverlay && cmdOverlay.classList.contains('open')) {
        closeCmd();
      } else {
        openCmd();
      }
    } else if (e.key === 'Escape') {
      closeCmd();
    }
  });

  if (cmdOverlay) {
    cmdOverlay.addEventListener('click', (e) => {
      if (e.target === cmdOverlay) closeCmd();
    });
  }

  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action') || item.textContent.trim();
      closeCmd();
      if (action.includes('annual')) {
        const annualBtn = document.querySelector('.cadence-btn[data-cadence="annual"]');
        if (annualBtn) annualBtn.click();
        const priceSec = document.getElementById('pricing');
        if (priceSec) priceSec.scrollIntoView({ behavior: 'smooth' });
        showToast('Switched to Annual cadence (20% savings unlocked)', '💳');
      } else if (action.includes('forecast')) {
        const maxTab = document.querySelector('.chart-tab-btn[data-frame="Max"]');
        if (maxTab) maxTab.click();
        showToast('Loaded All-Time aggregate telemetry trajectory', '📈');
      } else {
        showToast(`Executed: ${action}`, '✓');
      }
    });
  });

  // Filter Command Items on Typing
  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      cmdItems.forEach(item => {
        const txt = item.textContent.toLowerCase();
        if (txt.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 9. Newsletter Subscription
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      if (input && input.value) {
        showToast(`Subscribed ${input.value} to weekly dispatch!`, '📬');
        input.value = '';
      }
    });
  }

  // 10. Smooth Anchor Scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
