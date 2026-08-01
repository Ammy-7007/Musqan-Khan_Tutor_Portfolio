  // ====== EDIT YOUR REAL CONTACT DETAILS HERE ======
  const WHATSAPP_NUMBER = "923321917357"; // country code + number, no + no leading 0, no spaces/dashes
  const PHONE_NUMBER    = "+923390040539"; // shown as tel: link
  const EMAIL_ADDRESS   = "wmusqan@email.com";
  // ===================================================

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => a.href = `https://wa.me/${WHATSAPP_NUMBER}`);
  document.querySelectorAll('a[href^="tel:"]').forEach(a => a.href = `tel:${PHONE_NUMBER}`);
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => a.href = `mailto:${EMAIL_ADDRESS}`);

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fname').value.trim();
      const subject = document.getElementById('fsubject').value.trim();
      const msg = document.getElementById('fmsg').value.trim();
      if (!name) { document.getElementById('fname').focus(); return; }
      let text = `Hi! My name is ${name}.`;
      if (subject) text += ` I'm interested in tuition for: ${subject}.`;
      if (msg) text += ` ${msg}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // mobile nav
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }));

  // bookshelf panels
  document.querySelectorAll('.book-spine').forEach(spine => {
    spine.addEventListener('click', () => {
      const id = spine.getAttribute('data-panel');
      const panel = document.getElementById(id);
      const wasOpen = panel.classList.contains('open');
      document.querySelectorAll('.book-panel').forEach(p => p.classList.remove('open'));
      if (!wasOpen) panel.classList.add('open');
    });
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
