/* ============================================
   RAVI PRAKASH — script.js
   ============================================ */

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor hover states
document.querySelectorAll('a, button, .project-item, .skill-pill').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width = '60px';
    cursorRing.style.height = '60px';
    cursorRing.style.borderColor = 'rgba(200,245,58,0.7)';
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
    cursorRing.style.borderColor = 'rgba(200,245,58,0.4)';
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// ---- TYPEWRITER ROLE ----
const roles = [
  'Data Analyst',
  'SQL Engineer',
  'Power BI Developer',
  'ETL Specialist',
  'Insight Builder',
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const roleEl = document.getElementById('roleText');

function typeRole() {
  const current = roles[roleIndex];
  if (!deleting) {
    roleEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeRole, 1800);
      return;
    }
    setTimeout(typeRole, 80);
  } else {
    roleEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 300);
      return;
    }
    setTimeout(typeRole, 40);
  }
}

typeRole();

// ---- TERMINAL ANIMATION ----
const lines = [
  { type: 'comment', text: '# whoami' },
  { type: 'val', text: 'Ravi Prakash · Data & SCADA Intern' },
  { type: 'comment', text: '# cat skills.txt' },
  { type: 'key', text: 'languages:  ', val: 'SQL, Python' },
  { type: 'key', text: 'analytics:  ', val: 'Time-Series, Correlation, KPI' },
  { type: 'key', text: 'tools:      ', val: 'Power BI, Excel, Pandas' },
  { type: 'key', text: 'data:       ', val: 'ETL, Relational Models' },
  { type: 'comment', text: '# last_internship' },
  { type: 'key', text: 'company:    ', val: 'MECON Limited' },
  { type: 'key', text: 'impact:     ', val: '40% effort reduction' },
  { type: 'accent', text: '> ready for next challenge_' },
];

const terminalBody = document.getElementById('terminalBody');
let lineIdx = 0;

function renderLine(line) {
  const span = document.createElement('span');
  span.className = 't-line';
  if (line.type === 'comment') {
    span.innerHTML = `<span class="t-comment">${line.text}</span>`;
  } else if (line.type === 'key') {
    span.innerHTML = `<span class="t-key">${line.text}</span><span class="t-val">${line.val}</span>`;
  } else if (line.type === 'accent') {
    span.innerHTML = `<span class="t-accent">${line.text}</span>`;
  } else {
    span.innerHTML = `<span class="t-val">${line.text}</span>`;
  }
  return span;
}

function typeLine() {
  if (lineIdx >= lines.length) {
    const cur = document.createElement('span');
    cur.className = 't-cursor';
    terminalBody.appendChild(cur);
    return;
  }
  const el = renderLine(lines[lineIdx]);
  terminalBody.appendChild(el);
  lineIdx++;
  setTimeout(typeLine, lineIdx < 3 ? 250 : 120);
}

// Start terminal when in view
const termObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    setTimeout(typeLine, 400);
    termObserver.disconnect();
  }
}, { threshold: 0.3 });

if (terminalBody) termObserver.observe(terminalBody);

// ---- SCROLL REVEAL for projects ----
const reveals = document.querySelectorAll('.project-item');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ---- ACTIVE NAV on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--text)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
