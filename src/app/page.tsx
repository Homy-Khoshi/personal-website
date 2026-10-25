
import Link from "next/link";
import { entries, skillGroups } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";

export default function Home() {
  const experiences = entries.filter(
    (item) => item.kind === "experience"
  );

  const projects = entries.filter(
    (item) => item.kind === "project"
  );

  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            HK<span>.</span>
          </Link>

          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero container" id="about">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="dot" />
            SOFTWARE DEVELOPER · VANCOUVER, BC
          </div>

          <h1>
            Hi, I’m <span>Homayoun.</span>
          </h1>

          <p className="lead">
            Full-stack developer and Computing Science student at
            Simon Fraser University.
          </p>

          <p className="muted">
            I build thoughtful, reliable software, from modern web
            applications to systems projects and human–computer
            interaction research.
          </p>

          <div className="actions">
            <a className="button primary" href="#projects">
              Explore projects <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé
            </a>
          </div>

          <div className="social">
            <a
              href="https://github.com/Homy-Khoshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/homayoun-khoshi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <ImageSlot
          src="/profile.jpg"
          label="Homayoun Khoshi"
          className="portrait"
        />
      </section>

      {/* Experience */}
      <section className="section section-tint" id="experience">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="kicker">PROFESSIONAL WORK</p>
              <h2>Experience</h2>
            </div>

            <p>
              Click a card to read about the work,
              responsibilities, and technologies.
            </p>
          </div>

          <div className="cards experience-grid">
            {experiences.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="work-card"
              >
                {/* Keep existing company logos */}
                <ImageSlot
                  src={item.image}
                  label={item.imageLabel}
                  className="card-image"
                />

                <div className="card-content">
                  <div className="card-meta">
                    <span>{item.period}</span>
                    <span>EXPERIENCE</span>
                  </div>

                  <h3>{item.subtitle}</h3>
                  <p className="role">{item.title}</p>
                  <p className="summary">{item.summary}</p>

                  <div className="tags">
                    {item.technologies.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="card-link">
                    View experience{" "}
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - text-only cards, no image placeholders */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="kicker">SELECTED WORK</p>
              <h2>Projects</h2>
            </div>

            <p>
              Software engineering, machine learning,
              and research projects.
            </p>
          </div>

          <div className="cards project-grid">
            {projects.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="work-card"
              >
                <div className="card-content">
                  <div className="card-meta">
                    <span>{item.subtitle}</span>
                    <span>PROJECT</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p className="summary">{item.summary}</p>

                  <div className="tags">
                    {item.technologies.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="card-link">
                    Explore project{" "}
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section section-tint" id="education">
        <div className="container">
          <p className="kicker">BACKGROUND</p>
          <h2>Education & certification</h2>

          <div className="education-grid">
            <div className="info-card">
              <p className="small-label">EXPECTED MAY 2028</p>
              <h3>Simon Fraser University</h3>
              <p>Bachelor of Science in Computing Science</p>
              <span>Burnaby, BC</span>
            </div>

            <div className="info-card">
              <p className="small-label">DECEMBER 2025</p>
              <h3>British Columbia Institute of Technology</h3>
              <p>
                Diploma in Computer Systems Technology
                (Database Option) with Distinction
              </p>
              <span>Vancouver, BC</span>
            </div>

            <div className="info-card">
              <p className="small-label">JULY 2024</p>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p>Amazon Web Services</p>
              <span>Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section" id="skills">
        <div className="container">
          <p className="kicker">TOOLKIT</p>
          <h2>Technical skills</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="info-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="tags">
                  {group.values.map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container contact-inner">
          <p className="kicker">GET IN TOUCH</p>
          <h2>Let’s build something useful.</h2>

          <p>
            Open to connecting about software engineering,
            research, and collaboration.
          </p>

          <div className="actions">
            <a
              className="button primary"
              href="mailto:homayoun_khoshi@sfu.ca"
            >
              Email me ↗
            </a>

            <a
              className="button secondary"
              href="https://github.com/Homy-Khoshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Homayoun Khoshi</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
