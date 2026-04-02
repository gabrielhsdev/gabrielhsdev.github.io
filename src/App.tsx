/*
git add .
git commit -m "update portfolio"
git push origin main
npm run build
npm run deploy
*/

// ─── Toggle to show your photo ────────────────────────
const USE_MY_IMAGE = false;
// ─────────────────────────────────────────────────────

const DATA = {
  name:       "Gabriel Henrique da Silva",
  title:      "Full Stack Developer",
  location:   "São Paulo, Brazil",
  email:      "henriquegabrielhs21@gmail.com",
  phone:      "+55 (19) 98966-8625",
  linkedin:   { label: "linkedin.com/in/gabrielhenriquedev", href: "https://www.linkedin.com/in/gabrielhenriquedev" },
  github:     { label: "github.com/gabrielhsdev",            href: "https://github.com/gabrielhsdev" },

  about: "Full Stack Developer with 3+ years building and scaling web products. I work across the stack — React, TypeScript, Laravel, PostgreSQL — and care about performance, clean code, and shipping things that last.",

  skills: [
    { label: "Languages",       value: "TypeScript, JavaScript, Python, Go, C++, PHP" },
    { label: "Frameworks / UI", value: "React, Next.js, Laravel, Tailwind, MUI, React Native" },
    { label: "Infra / Tools",   value: "Docker, NGINX, AWS, PostgreSQL, MySQL, Firebase, Vercel" },
    { label: "Languages",       value: "Portuguese — native · English — fluent" },
  ],

  education: [
    { degree: "B.Sc. Software Engineering", school: "PUC Campinas",   period: "2022 – 2025" },
    { degree: "Aerospace Engineering",       school: "IST Lisbon",     period: "2020 – 2022" },
    { degree: "Technician, Software Dev.",   school: "Unicamp",        period: "2016 – 2018" },
  ],

  experience: [
    {
      role:    "Software Developer",
      company: "OneTouch Health",
      where:   "São Paulo, BR · Remote",
      period:  "2025 – now",
      bullets: [
        "Built the first carer-facing API and React app from scratch, serving 50+ client companies and handling 2,000 scheduling events/min across 1,000–2,000 active carers.",
        "Fixed query bottlenecks on 10M+ row tables, dropping execution time from minutes to under 2 seconds for 20,000+ users.",
        "Cut 50–100 redundant API calls/min by fixing unguarded re-renders — ~60% reduction in server load.",
        "Onboarded 10+ developers with internal docs and 1-on-1 reviews, reducing ramp-up from 2 weeks to 3–4 days.",
        "Resolved 50+ production incidents, cutting weekly support escalations by ~50%.",
      ],
    },
    {
      role:    "Software Developer",
      company: "OneTouch Health",
      where:   "São Paulo, BR · Remote",
      period:  "2022 – 2024",
      bullets: [
        "Migrated legacy PHP/HTML/jQuery to Laravel + React across 50+ clients, cutting worst-case page loads from 1–2 min to under 5 seconds.",
        "Shipped 100+ React features as primary frontend developer, at pixel-level fidelity.",
        "Built reporting dashboards adopted by 20+ clients, saving each 5–10 hours of manual work per week.",
      ],
    },
  ],

  projects: [
    {
      name:  "ImprovedTube",
      type:  "Chrome Extension",
      badge: "400,000+ active users",
      href:  "https://github.com/code-charity/youtube",
      desc:  "Merged 2 PRs adding features and UI improvements to one of the most popular open-source YouTube extensions.",
    },
    {
      name:  "Rosindex",
      type:  "ROS Index",
      badge: null,
      href:  "https://github.com/ros-infrastructure/rosindex",
      desc:  "Implemented structured GitHub issue forms, achieving 100% error reporting coverage and cleaner bug triage.",
    },
  ],
};

// ─── Tiny icons ───────────────────────────────────────
const Arrow = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── App ──────────────────────────────────────────────
export default function App() {
  return (
    <div>

      {/* Nav */}
      <nav className="nav">
        <div className="nav__inner">
          <span className="nav__logo">gabriel.hs</span>
          <ul className="nav__links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container" style={{ position: "relative" }}>

          {USE_MY_IMAGE ? (
            <div className="hero__photo-wrap">
              <img src="./assets/me.jpeg" alt={DATA.name} className="hero__photo" />
            </div>
          ) : (
            <div className="hero__photo-wrap">
              <div className="hero__avatar-fallback">G</div>
            </div>
          )}

          <div className="hero__eyebrow">{DATA.title}</div>
          <h1 className="hero__name">
            Gabriel<br /><em>da Silva</em>
          </h1>
          <p className="hero__sub">{DATA.about}</p>
          <div className="hero__meta">
            <span className="hero__meta-item">{DATA.location}</span>
          </div>
          <div className="hero__links">
            <a href={DATA.github.href} target="_blank" rel="noreferrer" className="inline-link">
              GitHub <Arrow />
            </a>
            <a href={DATA.linkedin.href} target="_blank" rel="noreferrer" className="inline-link">
              LinkedIn <Arrow />
            </a>
            <a href={`mailto:${DATA.email}`} className="inline-link">
              Email <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="section-label">About</div>
          <h2 className="section-title">Skills & Background</h2>

          <div className="row-table">
            {DATA.skills.map((row, i) => (
              <div key={i} className="row-table__item">
                <span className="row-table__label">{row.label}</span>
                <span className="row-table__value">{row.value}</span>
              </div>
            ))}
            {DATA.education.map((e, i) => (
              <div key={i} className="row-table__item">
                <span className="row-table__label">{e.period}</span>
                <span className="row-table__value">{e.degree} — {e.school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="container">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Work History</h2>
          <div className="exp-list">
            {DATA.experience.map((job, i) => (
              <div key={i} className="exp-item">
                <div>
                  <span className="exp-item__period">{job.period}</span>
                  <span className="exp-item__company">{job.company}<br />{job.where}</span>
                </div>
                <div>
                  <div className="exp-item__role">{job.role}</div>
                  <div className="exp-item__bullets">
                    {job.bullets.map((b, j) => (
                      <div key={j} className="exp-item__bullet">{b}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="section-label">Open Source</div>
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            {DATA.projects.map((p, i) => (
              <div key={i} className="project-item">
                <div>
                  <span className="project-item__name">{p.name}</span>
                  <span className="project-item__type">{p.type}</span>
                </div>
                <div>
                  {p.badge && <span className="project-item__badge">{p.badge}</span>}
                  <p className="project-item__desc">{p.desc}</p>
                  <a href={p.href} target="_blank" rel="noreferrer" className="project-item__link">
                    View on GitHub <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact__note">
            Open to full-time roles, contract work, and interesting collaborations.
          </p>
          <div className="row-table" style={{ maxWidth: 500 }}>
            <div className="row-table__item">
              <span className="row-table__label">Email</span>
              <a href={`mailto:${DATA.email}`} className="row-table__value inline-link">{DATA.email} <Arrow /></a>
            </div>
            <div className="row-table__item">
              <span className="row-table__label">LinkedIn</span>
              <a href={DATA.linkedin.href} target="_blank" rel="noreferrer" className="row-table__value inline-link">{DATA.linkedin.label} <Arrow /></a>
            </div>
            <div className="row-table__item">
              <span className="row-table__label">GitHub</span>
              <a href={DATA.github.href} target="_blank" rel="noreferrer" className="row-table__value inline-link">{DATA.github.label} <Arrow /></a>
            </div>
            <div className="row-table__item">
              <span className="row-table__label">Phone</span>
              <span className="row-table__value">{DATA.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__copy">© {new Date().getFullYear()} Gabriel Henrique da Silva</span>
          <span className="footer__built">React · TypeScript</span>
        </div>
      </footer>

    </div>
  );
}