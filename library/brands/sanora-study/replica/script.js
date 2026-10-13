/* ==========================================================================
   SANORA — Medical Center Interactions & Real-Time Booking Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Interactive Toast Feedback System
  function showToast(message, icon = '✓') {
    let toast = document.getElementById('sanoraToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sanoraToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        background: #0B2545;
        color: #FFFFFF;
        padding: 14px 22px;
        border-radius: 999px;
        font-size: 14px;
        font-family: var(--font-display);
        font-weight: 600;
        box-shadow: 0 16px 40px rgba(11, 37, 69, 0.35);
        border: 1px solid rgba(0, 136, 255, 0.3);
        opacity: 0;
        transform: translateY(12px);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color:#0088FF;font-size:16px">${icon}</span> ${message}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    toast.style.pointerEvents = 'auto';

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.pointerEvents = 'none';
    }, 3800);
  }

  // 3. Appointment Booking Form Submission
  const bookingForm = document.getElementById('appointmentForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const doctorSelect = document.getElementById('doctorSelect');
      const patientName = document.getElementById('patientName');
      const docName = doctorSelect ? doctorSelect.options[doctorSelect.selectedIndex].text : 'Specialist';
      const pName = patientName && patientName.value ? patientName.value.trim() : 'Patient';

      showToast(`Appointment confirmed with ${docName} for ${pName}! SMS dispatched.`, '🩺');
      bookingForm.reset();
    });
  }

  // 4. Quick-select Doctor from Card Click
  document.querySelectorAll('.doctor-card').forEach(card => {
    card.addEventListener('click', () => {
      const docName = card.querySelector('.doctor-name')?.textContent;
      const docSelect = document.getElementById('doctorSelect');
      if (docSelect && docName) {
        for (let i = 0; i < docSelect.options.length; i++) {
          if (docSelect.options[i].text.includes(docName.trim())) {
            docSelect.selectedIndex = i;
            break;
          }
        }
        const formSection = document.getElementById('appointment');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
        showToast(`Selected ${docName} in appointment form!`, '👉');
      }
    });
  });

  // 5. Smooth Anchor Scrolling
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
