(() => {
  const footer = document.querySelector('footer');
  if (footer) {
    let target = footer.querySelector('.site-pages-links');
    if (!target) {
      target = footer.querySelector('nav');
      if (!target) {
        target = document.createElement('nav');
        target.className = 'site-pages-links';
        footer.append(target);
      }
    }
    [['About','about.html'],['Contact','contact.html']].forEach(([label,href]) => {
      if (!target.querySelector(`a[href="${href}"]`)) {
        const link = document.createElement('a'); link.href = href; link.textContent = label;
        target.append(link);
      }
    });
  }
  document.querySelectorAll('.contact-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`${form.dataset.subject || 'Website inquiry'} — ${data.get('name') || ''}`);
    const body = encodeURIComponent([...data.entries()].map(([key,value]) => `${key}: ${value}`).join('\n'));
    window.location.href = `mailto:${form.dataset.email}?subject=${subject}&body=${body}`;
  }));
})();
