import { Mark } from "../icons";

const CONTACT_EMAIL = "john.peterson@exalynt.com";

const APPROACH = [
  {
    title: "Show the work",
    body: "Ship in small, reviewable increments. A working thing beats a finished-looking thing that never shipped.",
  },
  {
    title: "Build for the next reader",
    body: "Readable code and honest architecture. The best systems are the ones nobody has to be a hero to maintain.",
  },
  {
    title: "Compound, don't sprint",
    body: "Small, consistent gains outlast heroic rewrites. Habits scale; adrenaline doesn't.",
  },
  {
    title: "Name the tradeoff",
    body: "Every decision has a cost. Say it out loud instead of hiding it behind polish.",
  },
];

const WORK = [
  {
    status: "Available now",
    live: true,
    title: "Consulting",
    body: "Hands-on engineering help: architecture reviews, hard technical calls, and shipping the thing that's stuck.",
    cta: true,
  },
  {
    status: "Coming soon",
    live: false,
    title: "Writing",
    body: "Notes on building software well, written in public.",
    cta: false,
  },
  {
    status: "Coming soon",
    live: false,
    title: "Products",
    body: "Small, sharp tools, built the Exalynt way.",
    cta: false,
  },
];

function Home() {
  return (
    <>
      <section id="top" className="hero">
        <Mark className="hero-watermark" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent software engineering</p>
            <h1>Steady work. Shipped often. That&rsquo;s the whole method.</h1>
            <p className="lede">
              Exalynt is one engineer&rsquo;s practice, not a pitch deck. Small, deliberate
              improvements &mdash; architecture, code, and judgment &mdash; repeated until they
              compound into something excellent.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Start a project
              </a>
              <a href="#approach" className="btn btn-secondary">
                How I work
              </a>
            </div>
          </div>
          <blockquote className="manifesto-card">
            <p className="eyebrow">The idea</p>
            <p className="manifesto-quote">
              &ldquo;We are what we repeatedly do. Excellence, then, is not an act, but a
              habit.&rdquo;
            </p>
            <cite>Aristotle</cite>
          </blockquote>
        </div>
      </section>

      <section id="approach" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Approach</p>
            <h2>Not perfection. Progress, repeated.</h2>
            <p>
              Perfection is a static target &mdash; often an excuse not to ship. Excellence is a
              practice: show up, do the work well, refine it, ship it, learn, and do it again.
            </p>
          </div>
          <ol className="approach-list">
            {APPROACH.map(({ title, body }, i) => (
              <li key={title}>
                <span className="approach-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <p className="eyebrow">Work</p>
          <h2>What&rsquo;s here (and what&rsquo;s coming)</h2>
          <ul className="work-list">
            {WORK.map(({ status, live, title, body, cta }) => (
              <li key={title} className="work-item">
                <span className={`status${live ? " status-live" : ""}`}>{status}</span>
                <div className="work-body">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                {cta && (
                  <a href="#contact" className="btn btn-secondary btn-sm work-cta">
                    Get in touch
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="cta-band surface-dark">
        <div className="container">
          <h2>Have something worth doing well?</h2>
          <p>Tell me about it. I read every message.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
