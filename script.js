'use strict';

/* ── 1. CUSTOM CURSOR (desktop only) ── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (!window.matchMedia('(hover: none)').matches && cursor && cursorRing) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function raf() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(raf);
  })();

  document.querySelectorAll('a, button, .project-card, .skill-tags span, .contact-row').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width       = '52px';
      cursorRing.style.height      = '52px';
      cursorRing.style.borderColor = 'rgba(200,245,58,.7)';
      cursor.style.transform       = 'translate(-50%,-50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width       = '32px';
      cursorRing.style.height      = '32px';
      cursorRing.style.borderColor = 'rgba(200,245,58,.35)';
      cursor.style.transform       = 'translate(-50%,-50%) scale(1)';
    });
  });
}

/* ── 2. TYPEWRITER ── */
const roleEl = document.getElementById('roleText');
if (roleEl) {
  const roles = [
    'Data Analyst',
    'Business Intelligence Developer',
    'Product Analyst',
    'SQL & Power BI Engineer',
    'Insight Builder',
  ];
  let rIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const word = roles[rIdx];
    if (!deleting) {
      roleEl.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) { deleting = true; setTimeout(type, 1800); return; }
      setTimeout(type, 72);
    } else {
      roleEl.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; setTimeout(type, 350); return; }
      setTimeout(type, 36);
    }
  }
  type();
}

/* ── 3. SCROLL REVEAL — project cards ── */
const cards = Array.from(document.querySelectorAll('.project-card'));
if (cards.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const i = cards.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => obs.observe(c));
}

/* ── 4. SKILL BAR ANIMATION ── */
const fills = Array.from(document.querySelectorAll('.sk-fill'));
if (fills.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fills.forEach(f => obs.observe(f));
}

/* ── 5. ACTIVE NAV HIGHLIGHT ── */
const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const sections = Array.from(document.querySelectorAll('section[id]'));

if (navLinks.length && sections.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));
}
