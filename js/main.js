/* ================================================================
   RAVI PRAKASH — PRODUCT MANAGEMENT PORTFOLIO
   Main JavaScript — Navigation, Animations, Interactions
   ================================================================ */

(function () {
  'use strict';

  /* ── 1. MOBILE NAVIGATION ── */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── 2. SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── 3. ACTIVE NAV LINK HIGHLIGHT ── */
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (navLinks.length) {
    const sections = [];
    navLinks.forEach(link => {
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) sections.push({ link, section });
    });

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const match = sections.find(s => s.section === entry.target);
          if (match) match.link.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(s => navObserver.observe(s.section));
  }

  /* ── 4. TYPEWRITER EFFECT ── */
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    const roles = [
      'Product Manager',
      'AI Platform Builder',
      'Data Products Strategist',
      'Technical PM',
      '0-to-1 Product Builder'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeStep() {
      const currentRole = roles[roleIdx];

      if (!isDeleting) {
        typedEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === currentRole.length) {
          isDeleting = true;
          setTimeout(typeStep, 2000);
          return;
        }
        setTimeout(typeStep, 70);
      } else {
        typedEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          setTimeout(typeStep, 400);
          return;
        }
        setTimeout(typeStep, 40);
      }
    }

    setTimeout(typeStep, 800);
  }

  /* ── 5. PRD TAB SWITCHER ── */
  const tabBtns = document.querySelectorAll('.prd-tab-btn');
  const tabPanels = document.querySelectorAll('.prd-tab-panel');

  if (tabBtns.length && tabPanels.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ── 6. NAV SCROLL BACKGROUND ── */
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const st = window.scrollY;
      if (st > 100) {
        siteNav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
      } else {
        siteNav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
      }
      lastScroll = st;
    }, { passive: true });
  }

})();
