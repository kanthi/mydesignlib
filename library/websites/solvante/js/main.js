document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const header = document.querySelector('header');
  const menuToggle = document.getElementById('menuToggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      header.classList.toggle('open');
    });
  }

  // Consultation Modal controls
  const modal = document.getElementById('consultModal');
  const openBtns = document.querySelectorAll('.open-consult-modal');
  const closeBtn = document.querySelector('.modal-close');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Project Portfolio Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectShowcase = document.querySelector('.project-showcase');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (projectShowcase) {
        projectShowcase.style.opacity = '0.7';
        projectShowcase.style.transform = 'scale(0.99)';
        setTimeout(() => {
          projectShowcase.style.opacity = '1';
          projectShowcase.style.transform = 'none';
        }, 180);
      }
    });
  });

  // Smooth scroll with fixed header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        header.classList.remove('open');
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

