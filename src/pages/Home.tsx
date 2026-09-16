import { Link } from "react-router-dom";
import { BracketsIcon, Mark, PeopleIcon } from "../icons";

const OFFERINGS = [
  {
    icon: BracketsIcon,
    title: "Products & Open Source",
    tagline: "Software built, operated, and shared in the open by Exalynt.",
    body: "We identify problems shared by many organizations, build solutions, and make those solutions available as products, hosted services, and open-source libraries and tools.",
    cta: "Explore Products & Open Source",
    to: "/projects",
  },
  {
    icon: PeopleIcon,
    title: "Custom Software & Consulting",
    tagline: "Have a problem you think technology could solve?",
    body: "Exalynt works directly with organizations to understand problems, explore possible solutions, and build custom software when it makes sense.",
    cta: "How We Work",
    to: "/work-with-us",
  },
];

function Home() {
  return (
    <>
      <section id="top" className="hero">
        <Mark className="hero-watermark" />
        <div className="container hero-copy">
          <p className="eyebrow">Exalynt</p>
          <h1>Technology should solve problems.</h1>
          <p className="lede">
            Exalynt builds custom software, software products, and open-source tools that solve
            practical problems. We help organizations automate workflows, connect systems, and build
            applications &mdash; from understanding the problem through development and operation.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project →
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Explore Products & Open Source →
            </Link>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">How we work</p>
            <h2>Three ways we solve problems.</h2>
            <p>
              Software is our medium, not our mission. Exalynt solves problems through a few
              different models, depending on what the problem actually calls for.
            </p>
          </div>

          <div className="project-grid">
            {OFFERINGS.map(({ icon: Icon, title, tagline, body, cta, to }) => (
              <Link to={to} className="project-card offering-card" key={title}>
                <Icon className="offering-icon" />
                <h3>{title}</h3>
                <p className="offering-tagline">{tagline}</p>
                <p>{body}</p>
                <span className="offering-cta">{cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="excellence" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Philosophy</p>
            <h2>Excellence is a practice.</h2>
            <p>
              Excellence isn&rsquo;t a destination. It&rsquo;s the continuous pursuit of doing
              things better.
            </p>
            <p>
              At Exalynt, that means understanding problems before reaching for solutions, building
              intentionally, learning from what we create, and continuously improving.
            </p>
            <p>
              Sometimes the result is a product. Sometimes it&rsquo;s an open-source project.
              Sometimes it&rsquo;s software built specifically for one organization. The common
              thread is thoughtfully using technology to solve meaningful problems.
            </p>
          </div>

          <blockquote className="definition-card definition-card-standalone">
            <p className="definition-word">excellence</p>
            <p className="definition-pos">noun</p>
            <p className="definition-body">
              The ongoing pursuit of doing worthwhile things exceptionally well.
            </p>
            <p className="definition-note">
              Not flawlessness. Not a destination. A standard we choose to pursue, learn from, and
              return to every day.
            </p>
          </blockquote>

          <blockquote className="pull-quote">
            We believe excellent software starts with understanding the problem &mdash; not assuming
            we already know the solution.
          </blockquote>

          <div className="cta-actions section-cta">
            <Link to="/philosophy" className="btn btn-secondary">
              Read Our Philosophy →
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-band surface-dark">
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&rsquo;s talk.</h2>
          <p>
            Want to talk software architecture? Explore an open-source idea? See what we&rsquo;re
            building? Or think Exalynt could help solve a problem for your organization? We&rsquo;d
            be glad to hear from you.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project →
            </Link>
            <Link to="/work-with-us" className="btn btn-secondary">
              See how we work →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
