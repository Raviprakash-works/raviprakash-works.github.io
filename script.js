'use strict';

/* ─────────────────────────────────────────
   1. CUSTOM CURSOR  (desktop only)
───────────────────────────────────────── */
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

if (!isTouchDevice() && cursor && cursorRing) {
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  let rafId = null;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow ring on interactive elements
  const hoverTargets = 'a, button, .project-item, .skill-pill, .edu-card, .contact-item';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width       = '56px';
      cursorRing.style.height      = '56px';
      cursorRing.style.borderColor = 'rgba(200,245,58,0.7)';
      cursor.style.transform       = 'translate(-50%,-50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width       = '36px';
      cursorRing.style.height      = '36px';
      cursorRing.style.borderColor = 'rgba(200,245,58,0.4)';
      cursor.style.transform       = 'translate(-50%,-50%) scale(1)';
    });
  });
}

/* ─────────────────────────────────────────
   2. TYPEWRITER — hero role text
───────────────────────────────────────── */
const roleEl = document.getElementById('roleText');

if (roleEl) {
  const roles = [
    'Data Analyst',
    'Business Intelligence Dev',
    'Product Analyst',
    'SQL & Power BI Engineer',
    'Insight Builder',
  ];
  let rIdx = 0, cIdx = 0, deleting = false;

  function typeRole() {
    const word = roles[rIdx];
    if (!deleting) {
      roleEl.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) {
        deleting = true;
        setTimeout(typeRole, 1800);
        return;
      }
      setTimeout(typeRole, 75);
    } else {
      roleEl.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
        setTimeout(typeRole, 350);
        return;
      }
      setTimeout(typeRole, 38);
    }
  }

  typeRole();
}

/* ─────────────────────────────────────────
   3. TERMINAL ANIMATION
   — fires exactly once when scrolled into view
───────────────────────────────────────── */
const termBody = document.getElementById('terminalBody');

if (termBody) {
  const termLines = [
    { type: 'comment', text: '# whoami' },
    { type: 'val',     text: 'Ravi Prakash — Data & Product Jobseeker' },
    { type: 'comment', text: '# cat status.txt' },
    { type: 'key',     text: 'status:     ', val: 'Open to Work ✓' },
    { type: 'key',     text: 'location:   ', val: 'Delhi, India' },
    { type: 'key',     text: 'target:     ', val: 'Data / Product / BI roles' },
    { type: 'comment', text: '# cat experience.log' },
    { type: 'key',     text: 'intern:     ', val: 'MECON Limited (Jun–Jul 2025)' },
    { type: 'key',     text: 'impact:     ', val: '40% effort saved · 30% faster reports' },
    { type: 'key',     text: 'records:    ', val: '5,000+ SQL queries validated' },
    { type: 'comment', text: '# ./skills --list' },
    { type: 'key',     text: 'core:       ', val: 'SQL · Python · Power BI · Excel' },
    { type: 'key',     text: 'analytics:  ', val: 'Time-Series · Correlation · KPI' },
    { type: 'accent',  text: '> ready_for_next_opportunity_' },
  ];

  let tIdx = 0;
  let termStarted = false; // guard — prevents double-fire

  function buildLine(line) {
    const s = document.createElement('span');
    s.className = 't-line';
    switch (line.type) {
      case 'comment': s.innerHTML = `<span class="t-comment">${line.text}</span>`; break;
      case 'key':     s.innerHTML = `<span class="t-key">${line.text}</span><span class="t-val">${line.val}</span>`; break;
      case 'accent':  s.innerHTML = `<span class="t-accent">${line.text}</span>`; break;
      default:        s.innerHTML = `<span class="t-val">${line.text}</span>`; break;
    }
    return s;
  }

  function typeLine() {
    if (tIdx >= termLines.length) {
      // add blinking cursor at end
      const cur = document.createElement('span');
      cur.className = 't-cursor';
      termBody.appendChild(cur);
      return;
    }
    termBody.appendChild(buildLine(termLines[tIdx++]));
    setTimeout(typeLine, tIdx <= 2 ? 280 : 115);
  }

  const termObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !termStarted) {
      termStarted = true;       // set guard immediately
      termObs.disconnect();     // stop observing
      setTimeout(typeLine, 400);
    }
  }, { threshold: 0.25 });

  termObs.observe(termBody);
}

/* ─────────────────────────────────────────
   4. SCROLL REVEAL — project cards
   — uses DOM order index for consistent stagger
───────────────────────────────────────── */
const projectItems = Array.from(document.querySelectorAll('.project-item'));

if (projectItems.length) {
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // use the item's position in the full list for stagger, not batch index
        const domIdx = projectItems.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), domIdx * 80);
        revealObs.unobserve(entry.target); // once revealed, stop watching
      }
    });
  }, { threshold: 0.08 });

  projectItems.forEach(el => revealObs.observe(el));
}

/* ─────────────────────────────────────────
   5. ACTIVE NAV HIGHLIGHT on scroll
───────────────────────────────────────── */
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const sections = Array.from(document.querySelectorAll('section[id]'));

if (navLinks.length && sections.length) {
  function setActiveLink(id) {
    navLinks.forEach(l => {
      const isActive = l.getAttribute('href') === '#' + id;
      l.style.color = isActive ? 'var(--text)' : '';
    });
  }

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveLink(entry.target.id);
    });
  }, {
    // fire when section occupies at least 30% of viewport
    threshold: 0,
    rootMargin: '-20% 0px -60% 0px',
  });

  sections.forEach(s => sectionObs.observe(s));
}
