
/* ── Nav hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  /* ── Contact form ── */
  function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('form-success').style.display = 'block';
      btn.style.display = 'none';
      e.target.reset();
    }, 1000);
  }

  /* ── Typed hero role ── */
  const roles = ['Data Analyst', 'Business Intelligence' ,'BI Engineer', 'Web Developer','Problem Solver'];
  const roleEl = document.querySelector('.hero-role');
  let ri = 0, ci = 0, deleting = false;
  function typeRole() {
    const cur = roles[ri];
    if (!deleting) {
      roleEl.textContent = cur.slice(0, ci + 1) + ' · Dhaka, Bangladesh';
      ci++;
      if (ci === cur.length) { deleting = true; setTimeout(typeRole, 1800); return; }
    } else {
      ci--;
      roleEl.textContent = cur.slice(0, ci) + ' · Dhaka, Bangladesh';
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(typeRole, deleting ? 50 : 80);
  }
  typeRole();

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    navAs.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
    });
  }, { passive: true });
