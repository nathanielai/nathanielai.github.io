const skills = [
  {
    number: "01",
    title: "AI & machine learning",
    text: "From an initial prompt to a dependable product. LLM integrations, retrieval pipelines, and thoughtful evaluation.",
    tags: [
      "OpenAI API",
      "Python",
      "RAG",
      "Embeddings",
      "OpenCV",
      "Agent evaluation",
    ],
  },
  {
    number: "02",
    title: "Full stack development",
    text: "The whole picture, from the interface people touch to the services that keep everything moving.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "Laravel"],
  },
  {
    number: "03",
    title: "Cloud & data systems",
    text: "Infrastructure that supports real workloads. Event-driven services, data pipelines, and scalable architecture.",
    tags: ["AWS", "PostgreSQL", "Redis", "Docker", "CI/CD", "Microservices"],
  },
];
const work = [
  {
    kind: "APPLIED AI",
    title: "Making information actionable.",
    text: "AI assistants and document-processing workflows for information extraction, classification, and automation. Built with LLM APIs, structured outputs, embeddings, and retrieval pipelines.",
    tags: ["LLM integration", "Document intelligence", "RAG"],
    className: "intelligence",
    art: ["DOCUMENT", "UNDERSTAND", "STRUCTURED OUTPUT"],
  },
  {
    kind: "PRODUCT ENGINEERING",
    title: "Complex workflows. Clear experiences.",
    text: "Production web applications connecting responsive interfaces with REST APIs, authentication, dashboards, and business workflows. Modular architecture with reusable components.",
    tags: ["React & TypeScript", "API design", "Architecture"],
    className: "product",
    art: ["INTERFACE", "SERVICES", "DATA"],
  },
  {
    kind: "DATA & INFRASTRUCTURE",
    title: "Built for the scale of the real world.",
    text: "High-volume data processing and IoT analytics supporting hundreds of thousands of connected devices, with background jobs, queues, caching, and event-driven processing.",
    tags: ["AWS", "IoT analytics", "Event-driven systems"],
    className: "systems",
    art: ["INGEST", "PROCESS", "ANALYZE"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a className="wordmark" href="#" aria-label="Nathaniel home">
          nathaniel<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <Arrow />
        </a>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AI ENGINEER & FULL STACK DEVELOPER
            </div>
            <h1 id="hero-title">
              Intelligent systems.
              <br />
              Thoughtful products.
              <br />
              <span>Built to work.</span>
            </h1>
            <p className="hero-description">
              I’m Nathaniel Blaiklock. I bring AI and software engineering
              together to turn complex problems into reliable, human-centered
              products.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="text-link"
                href="/Nathaniel_Blaiklock_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="location">
              <span aria-hidden="true">◎</span> Based in Canada{" "}
              <span className="location-line" /> Building with a global
              perspective
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Abstract illustration of connected intelligence"
          >
            <div className="visual-top">
              <span>CONNECTED INTELLIGENCE</span>
              <span>01 / 03</span>
            </div>
            <div className="orb">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orb-core">
                n<span>.</span>
              </div>
              <i className="node node-one" />
              <i className="node node-two" />
              <i className="node node-three" />
            </div>
            <span className="floating-label label-ai">AI / ML</span>
            <span className="floating-label label-code">
              &lt;/&gt; ENGINEERING
            </span>
            <div className="visual-bottom">
              <span className="status-dot" />
              <span>IDEA → INTELLIGENCE → IMPACT</span>
              <span className="cross">+</span>
            </div>
          </div>
        </section>
        <div className="stack-strip">
          <div className="wrap stack-inner">
            <span className="stack-label">MY EVERYDAY TOOLKIT</span>
            <span>Python</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>AWS</span>
          </div>
        </div>
        <section id="work" className="section wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / SELECTED FOCUS</div>
              <h2>Engineering with purpose.</h2>
            </div>
            <p>
              A look at the problems I work on
              <br className="desktop-break" /> and the systems I build.
            </p>
          </div>
          <div className="work-grid">
            {work.map((item, i) => (
              <article className="work-card" key={item.kind}>
                <div
                  className={`project-art ${item.className}`}
                  aria-hidden="true"
                >
                  <span className="art-index">0{i + 1}</span>
                  <div className="diagram">
                    {item.art.map((label, j) => (
                      <div className="diagram-step" key={label}>
                        <span className="diagram-icon">
                          {i === 0
                            ? ["≡", "✳", "{ }"][j]
                            : i === 1
                              ? ["▦", "⌘", "▤"][j]
                              : ["⋮", "◈", "↗"][j]}
                        </span>
                        <span>{label}</span>
                        {j < 2 && <i>→</i>}
                      </div>
                    ))}
                  </div>
                  <div className="art-line" />
                </div>
                <div className="work-content">
                  <div className="eyebrow">{item.kind}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="section about-section">
          <div className="wrap">
            <div className="about-intro">
              <div>
                <div className="eyebrow">02 / ABOUT ME</div>
                <h2>
                  Curiosity drives me.
                  <br />
                  <span className="muted">Craft keeps me grounded.</span>
                </h2>
              </div>
              <div className="about-copy">
                <p>
                  I’m an AI engineer and senior full stack developer with
                  experience across web applications, intelligent automation,
                  and large-scale data systems.
                </p>
                <p>
                  I enjoy connecting the dots between emerging AI capabilities
                  and practical software engineering. My focus is on reliable
                  systems, clear interfaces, and products that solve real
                  problems.
                </p>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/nathaniel-blaiklock-793a67330/"
                  target="_blank"
                  rel="noreferrer"
                >
                  More about me on LinkedIn <Arrow />
                </a>
              </div>
            </div>
            <div className="capabilities">
              {skills.map((skill) => (
                <article key={skill.number}>
                  <span className="skill-number">{skill.number} /</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                  <div className="tags">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="section wrap experience">
          <div>
            <div className="eyebrow">03 / THE JOURNEY</div>
            <h2>
              Experience that
              <br />
              connects the dots.
            </h2>
            <p className="experience-note">
              A foundation in computer science.
              <br />A career building things that matter.
            </p>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-meta">
                <span>Nov 2016 — Mar 2026</span>
                <span>Vancouver, Canada</span>
              </div>
              <h3>AI Engineer / Senior Full Stack Developer</h3>
              <h4>First National Financial Corporation</h4>
              <p>
                Developed AI-powered applications and production web platforms,
                integrating LLMs, building scalable backend services, and
                delivering responsive user experiences.
              </p>
              <ul>
                <li>AI assistants, document processing, and computer vision</li>
                <li>Full stack applications, APIs, and business workflows</li>
                <li>Cloud infrastructure, data pipelines, and IoT analytics</li>
              </ul>
            </article>
            <article>
              <div className="timeline-meta">
                <span>Graduated 2016</span>
                <span>Burnaby, Canada</span>
              </div>
              <h3>Bachelor’s Degree in Computer Science</h3>
              <h4>Simon Fraser University</h4>
            </article>
          </div>
        </section>
        <section id="contact" className="contact-section wrap">
          <div className="contact-box">
            <div className="eyebrow">
              <span className="status-dot" /> LET’S CONNECT
            </div>
            <h2>
              Have something
              <br />
              in mind? <span>Let’s build it.</span>
            </h2>
            <p>
              For AI products, full stack challenges, or a good conversation
              about what’s next.
            </p>
            <a className="contact-email" href="mailto:nblaiklock@gmail.com">
              nblaiklock@gmail.com <Arrow />
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/nathanielai"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/nathaniel-blaiklock-793a67330/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
              <a
                href="/Nathaniel_Blaiklock_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#">
          nathaniel<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Nathaniel Blaiklock</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
