/* ============================================
   RAVI PRAKASH — PORTFOLIO
   Aesthetic: Raw Editorial × Data Terminal
   Desktop-first, fully responsive
   ============================================ */

:root {
  --bg: #080808;
  --bg2: #0f0f0f;
  --surface: #141414;
  --border: rgba(255,255,255,0.08);
  --accent: #c8f53a;
  --text: #f0ede6;
  --muted: rgba(240,237,230,0.45);
  --mono: 'Space Mono', monospace;
  --display: 'Syne', sans-serif;
  --nav-h: 64px;
}

*, *::before, *::after {
  margin: 0; padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--mono);
  cursor: none;
  overflow-x: hidden;
  min-width: 320px;
}

/* ---- NOISE OVERLAY ---- */
.noise {
  position: fixed;
  inset: 0;
  z-index: 9000;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.35;
  mix-blend-mode: overlay;
}

/* ---- CUSTOM CURSOR ---- */
.cursor {
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s;
  top: 0; left: 0;
}
.cursor-ring {
  width: 36px; height: 36px;
  border: 1px solid rgba(200,245,58,0.4);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease, border-color 0.15s ease;
  top: 0; left: 0;
}

/* ---- NAV ---- */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  border-bottom: 1px solid var(--border);
  background: rgba(8,8,8,0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.nav-logo {
  font-family: var(--display);
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  color: var(--accent);
  flex-shrink: 0;
}

.blink { animation: blink 1s step-end infinite; }
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

nav ul {
  display: flex;
  gap: 32px;
  list-style: none;
}

nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
nav a:hover { color: var(--text); }

.num { color: var(--accent); font-size: 0.62rem; }

/* ---- HERO ---- */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--nav-h) + 60px) 6% 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.hero-bg-text {
  position: absolute;
  top: 50%;
  right: -2%;
  transform: translateY(-58%);
  font-family: var(--display);
  font-weight: 900;
  font-size: clamp(100px, 18vw, 240px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(200,245,58,0.05);
  letter-spacing: -0.05em;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  line-height: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 860px;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 28px;
}

.dot {
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

.hero-name {
  font-family: var(--display);
  font-weight: 900;
  font-size: clamp(56px, 9vw, 128px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.line-reveal {
  display: block;
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.delay-1 { animation-delay: 0.1s; color: var(--accent); }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-role {
  font-size: 0.95rem;
  color: var(--accent);
  margin-bottom: 18px;
  font-style: italic;
  min-height: 1.6em;
}

.hero-desc {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.9;
  max-width: 500px;
  margin-bottom: 36px;
}

.hero-cta {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--accent);
  color: #080808;
  padding: 13px 26px;
  text-decoration: none;
  font-size: 0.75rem;
  font-family: var(--mono);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: background 0.2s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn-primary:hover { background: #d8ff44; transform: translateY(-2px); }

.btn-ghost {
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 13px 26px;
  text-decoration: none;
  font-size: 0.75rem;
  font-family: var(--mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: border-color 0.2s, color 0.2s;
}
.btn-ghost:hover { border-color: rgba(255,255,255,0.35); color: var(--text); }

.hero-stat-bar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  display: flex;
  align-items: center;
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 18px 6%;
  flex-wrap: wrap;
  gap: 0;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-right: 36px;
}

.stat-num {
  font-family: var(--display);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--accent);
  letter-spacing: -0.03em;
  line-height: 1;
}

.stat-label {
  font-size: 0.62rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--border);
  margin-right: 36px;
  flex-shrink: 0;
}

/* ---- SECTIONS ---- */
.section {
  padding: 96px 6%;
  border-bottom: 1px solid var(--border);
}

.section-label {
  font-size: 0.67rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 36px;
  font-style: italic;
}

.section-heading {
  font-family: var(--display);
  font-weight: 900;
  font-size: clamp(32px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 52px;
}

.section-heading em { color: var(--accent); font-style: italic; }

/* ---- ABOUT ---- */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.about-left p {
  font-size: 0.83rem;
  line-height: 1.95;
  color: var(--muted);
  margin-bottom: 18px;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.about-tags span {
  border: 1px solid var(--border);
  padding: 5px 12px;
  font-size: 0.7rem;
  border-radius: 2px;
  color: var(--muted);
  letter-spacing: 0.06em;
}

/* Profile photo */
.about-photo {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: top center;
  border-radius: 4px;
  border: 1px solid var(--border);
  display: block;
  background: var(--surface);
}

.about-photo-placeholder {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 4px;
  border: 1px dashed rgba(200,245,58,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  background: var(--surface);
}
.about-photo-placeholder .ph-icon { font-size: 2.5rem; opacity: 0.2; }

/* TERMINAL */
.terminal {
  background: #080808;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.76rem;
  width: 100%;
}

.terminal-bar {
  background: #1c1c1c;
  padding: 11px 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid var(--border);
}

.t-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.t-dot.red    { background: #ff5f57; }
.t-dot.yellow { background: #febc2e; }
.t-dot.green  { background: #28c840; }
.t-title { margin-left: 8px; color: var(--muted); font-size: 0.7rem; }

.terminal-body {
  padding: 20px;
  line-height: 2.1;
  min-height: 260px;
  color: #a0f080;
}

.t-line   { display: block; }
.t-comment { color: rgba(160,240,128,0.35); }
.t-key    { color: #79d7f5; }
.t-val    { color: var(--text); }
.t-accent { color: var(--accent); }
.t-cursor {
  display: inline-block;
  width: 8px; height: 14px;
  background: var(--accent);
  vertical-align: middle;
  animation: blink 0.8s step-end infinite;
}

/* ---- SKILLS ---- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: var(--border);
  border: 1px solid var(--border);
}

.skill-group { background: var(--bg); padding: 28px; }

.skill-group-label {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.skill-items { display: flex; flex-direction: column; gap: 0; }

.skill-pill {
  font-size: 0.78rem;
  color: var(--muted);
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s, padding-left 0.2s;
  position: relative;
}
.skill-pill:last-child { border-bottom: none; }
.skill-pill::before {
  content: '→';
  color: var(--accent);
  opacity: 0;
  transition: opacity 0.2s;
  margin-right: 6px;
}
.skill-pill:hover { color: var(--text); padding-left: 6px; }
.skill-pill:hover::before { opacity: 1; }

/* ---- EXPERIENCE ---- */
.exp-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  max-width: 900px;
}

.exp-header {
  background: var(--surface);
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--border);
  gap: 20px;
}

.exp-company {
  font-family: var(--display);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.exp-role {
  font-size: 0.72rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.exp-date { font-size: 0.7rem; color: var(--muted); text-align: right; white-space: nowrap; padding-top: 4px; }

.exp-list {
  list-style: none;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.exp-list li {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.85;
  padding-left: 20px;
  position: relative;
}

.exp-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.68rem;
  top: 3px;
}

.exp-list strong { color: var(--text); }

/* ---- PROJECTS ---- */
.projects-list {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
}

.project-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 32px;
  align-items: start;
  padding: 36px 32px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.55s ease, transform 0.55s ease, background 0.2s;
}

.project-item.visible { opacity: 1; transform: translateY(0); }
.project-item:last-child { border-bottom: none; }
.project-item:hover { background: rgba(200,245,58,0.025); }

.project-num {
  font-family: var(--display);
  font-weight: 800;
  font-size: 0.68rem;
  color: rgba(200,245,58,0.5);
  letter-spacing: 0.06em;
  padding-top: 4px;
  white-space: nowrap;
}

.project-info h3 {
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  line-height: 1.2;
}

.project-info p {
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.85;
  margin-bottom: 14px;
}

.project-info strong { color: var(--accent); }

.project-stack { display: flex; gap: 7px; flex-wrap: wrap; }

.project-stack span {
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 2px;
  color: var(--muted);
}

.project-arrow {
  font-size: 1.3rem;
  color: rgba(255,255,255,0.1);
  padding-top: 2px;
  transition: color 0.2s, transform 0.2s;
  flex-shrink: 0;
}

.project-item:hover .project-arrow { color: var(--accent); transform: translate(3px, -3px); }

/* Optional project screenshot */
.project-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid var(--border);
  margin-bottom: 14px;
  display: block;
}

/* ---- CONTACT ---- */
.contact-section { border-bottom: none; }

.contact-heading {
  font-family: var(--display);
  font-weight: 900;
  font-size: clamp(44px, 8vw, 100px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 60px;
}

.contact-heading em { color: var(--accent); font-style: italic; }

.contact-links {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  max-width: 680px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  transition: background 0.2s;
  gap: 16px;
}

.contact-item:last-child { border-bottom: none; }
.contact-item:hover { background: rgba(200,245,58,0.03); }

.c-label {
  font-size: 0.62rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  min-width: 65px;
  flex-shrink: 0;
}

.c-val { font-size: 0.8rem; color: var(--muted); transition: color 0.2s; word-break: break-all; }
.contact-item:hover .c-val { color: var(--text); }

/* ---- FOOTER ---- */
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 6%;
  font-size: 0.66rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
  letter-spacing: 0.06em;
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (min-width: 1400px) {
  .hero-content { max-width: 1000px; }
}

@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid { gap: 40px; }
}

@media (max-width: 768px) {
  body { cursor: auto; }
  .cursor, .cursor-ring { display: none; }

  nav { padding: 0 5%; }
  nav ul { gap: 14px; }
  nav a { font-size: 0.65rem; }
  .num { display: none; }

  .hero { padding: calc(var(--nav-h) + 40px) 5% 140px; }
  .hero-stat-bar { flex-wrap: wrap; gap: 16px; padding: 16px 5%; }
  .stat-divider { display: none; }
  .stat { padding-right: 0; }

  .section { padding: 72px 5%; }

  .about-grid { grid-template-columns: 1fr; gap: 36px; }

  .skills-grid { grid-template-columns: 1fr 1fr; }

  .project-item { grid-template-columns: 48px 1fr 24px; gap: 16px; padding: 24px 18px; }

  .exp-header { flex-direction: column; gap: 6px; }
  .exp-date { text-align: left; }
  .exp-list { padding: 20px; }

  .contact-item { flex-direction: column; align-items: flex-start; gap: 4px; }
  .contact-heading { margin-bottom: 36px; }
}

@media (max-width: 480px) {
  .skills-grid { grid-template-columns: 1fr; }
  nav ul { gap: 10px; }
}

/* ── EDU / LOGO CARDS ── */
.edu-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
}

.edu-card {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--border);
  padding: 14px 18px;
  border-radius: 4px;
  background: var(--surface);
  transition: border-color 0.2s;
}
.edu-card:hover { border-color: rgba(200,245,58,0.25); }

.edu-logo {
  flex-shrink: 0;
  font-family: var(--display);
  font-weight: 900;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  padding: 8px 10px;
  border-radius: 4px;
  min-width: 60px;
  text-align: center;
}

.nsut-badge  { background: #1a3a6e; color: #90b8ff; border: 1px solid #2a4a8e; }
.mecon-badge { background: #1a3300; color: #a0e060; border: 1px solid #2a5500; }

/* smaller variants for exp header */
.exp-logo { margin-bottom: 8px; }
.nsut-badge-sm  { display:inline-block; background:#1a3a6e; color:#90b8ff; border:1px solid #2a4a8e; font-family:var(--display); font-weight:900; font-size:0.62rem; padding:4px 8px; border-radius:3px; letter-spacing:0.04em; }
.mecon-badge-sm { display:inline-block; background:#1a3300; color:#a0e060; border:1px solid #2a5500; font-family:var(--display); font-weight:900; font-size:0.62rem; padding:4px 8px; border-radius:3px; letter-spacing:0.04em; }

.edu-info { display: flex; flex-direction: column; gap: 3px; }
.edu-name { font-size: 0.78rem; color: var(--text); font-weight: bold; }
.edu-sub  { font-size: 0.68rem; color: var(--muted); }

/* ── PROJECT LINKS ── */
.project-links {
  margin-top: 10px;
  display: flex;
  gap: 12px;
}

.proj-link {
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid rgba(200,245,58,0.3);
  padding-bottom: 1px;
  transition: border-color 0.2s;
}
.proj-link:hover { border-color: var(--accent); }

/* ── COURSEWORK ── */
.coursework {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.coursework-label {
  font-size: 0.64rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
  margin-bottom: 14px;
}

.coursework-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.coursework-pills span {
  font-size: 0.72rem;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 100px;
  transition: color 0.2s, border-color 0.2s;
}
.coursework-pills span:hover {
  color: var(--text);
  border-color: rgba(200,245,58,0.3);
}

/* ── PHOTO PLACEHOLDER code tag ── */
.about-photo-placeholder code {
  font-size: 0.55rem;
  color: rgba(200,245,58,0.4);
  font-family: var(--mono);
  margin-top: 4px;
  display: block;
  text-align: center;
}
