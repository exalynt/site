import { Link } from "react-router-dom";
import {
  BracketsIcon,
  BranchIcon,
  CompassIcon,
  Mark,
  OpenBookIcon,
  PeopleIcon,
  TargetIcon,
} from "../icons";
import { projects } from "../content/projects";
import { ProjectCard } from "./Projects";

const CONTACT_EMAIL = "john.peterson@exalynt.com";

const PRINCIPLES = [
  {
    icon: CompassIcon,
    title: "Own the outcome",
    body: "Take responsibility for the work — especially when it goes wrong. Be honest about mistakes, fix what needs fixing, and carry the lesson forward.",
  },
  {
    icon: OpenBookIcon,
    title: "Stay a student",
    body: "There is always more to learn. Seek feedback, question assumptions, experiment with new ideas, and let experience refine your judgment.",
  },
  {
    icon: BracketsIcon,
    title: "Practice the craft",
    body: "Engineering is a profession and a craft worth doing well. Care about clarity, simplicity, maintainability, and the small details that make good systems dependable.",
  },
  {
    icon: TargetIcon,
    title: "Solve the right problem",
    body: "Code is a tool, not the goal. Understand the problem first, then choose the simplest solution that creates the right outcome — whether that requires sophisticated software or very little software at all.",
  },
  {
    icon: BranchIcon,
    title: "Be willing to fail",
    body: "Progress requires trying things whose outcomes are not guaranteed. Take thoughtful risks, test ideas, learn quickly, and treat failed attempts as information rather than wasted effort.",
  },
  {
    icon: PeopleIcon,
    title: "Lift others",
    body: "Great engineering is not a solo pursuit. Share what you know, help others grow, listen to the people you serve, and use your skills to make their work and lives better.",
  },
];

const featuredProjects = projects.filter((project) => project.featured);

function Home() {
  return (
    <>
      <section id="top" className="hero">
        <Mark className="hero-watermark" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Exalynt Engineering</p>
            <h1>The pursuit of excellence in software engineering.</h1>
            <p className="lede">
              Software engineering is more than writing code. Exalynt is my exploration of what it
              means to practice engineering exceptionally well &mdash; not perfectly.
            </p>
            <p className="lede">
              It is about better judgment, continual learning, pride in the craft, solving problems
              that matter, and leaving our software and the people around us better than we found
              them.
            </p>
            <div className="hero-actions">
              <Link to="/engineering" className="btn btn-primary">
                Explore Engineering →
              </Link>
              <Link to="/about" className="btn btn-secondary">
                About Me →
              </Link>
            </div>
          </div>
          <blockquote className="definition-card">
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
        </div>
      </section>

      <section id="distinction" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The idea</p>
            <h2>Excellence is not perfection.</h2>
            <p>
              Excellent engineers aren&rsquo;t perfect engineers. They make mistakes. They choose
              the wrong abstraction. They miss an edge case. They ship things that need to change.
            </p>
            <p>
              Excellence is found in what happens next: owning the mistake, learning from it, and
              carrying that knowledge forward.
            </p>
          </div>

          <blockquote className="pull-quote">
            Excellence does not mean never failing. It means caring enough to learn, improve, and
            try again.
          </blockquote>

          <div className="section-cta">
            <Link to="/engineering" className="btn btn-secondary">
              What excellence means →
            </Link>
          </div>
        </div>
      </section>

      <section id="practice" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The practice</p>
            <h2>What excellence looks like.</h2>
          </div>

          <div className="principles-grid">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <div className="principle-card" key={title}>
                <Icon className="principle-icon" />
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/engineering" className="btn btn-secondary">
              Explore the principles →
            </Link>
          </div>
        </div>
      </section>

      <section id="building" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Building</p>
            <h2>Building in public.</h2>
            <p>
              Excellence is something to practice, not just write about. These are some of the
              things I am currently building, experimenting with, or contributing to.
            </p>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} key={project.slug ?? project.name} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/projects" className="btn btn-secondary">
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      <section id="about-preview" className="section">
        <div className="container about-preview-grid">
          <img src="/john-peterson.jpg" alt="John Peterson" className="about-preview-photo" />
          <div>
            <p className="eyebrow">About</p>
            <h2>Hi, I&rsquo;m John.</h2>
            <p>
              I&rsquo;m a software architect and engineer who enjoys building systems, solving
              difficult problems, learning, teaching, and thinking deeply about what makes
              engineering genuinely good.
            </p>
            <p>
              Exalynt grew from my desire to explore and share those ideas while building things of
              my own.
            </p>
            <div className="section-cta">
              <Link to="/about" className="btn btn-secondary">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-band surface-dark">
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&rsquo;s talk.</h2>
          <p>
            Want to talk software architecture? Disagree with something I wrote? Have an interesting
            engineering problem? Want to show me something you&rsquo;re building? Or interested in
            working together?
          </p>
          <p>
            I&rsquo;d be glad to hear from you. You don&rsquo;t need a project or consulting
            engagement in mind to reach out.
          </p>
          <p className="contact-note">
            I am also available for select consulting and contract software engineering work.
          </p>
          <div className="cta-actions">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
              Email {CONTACT_EMAIL}
            </a>
            <Link to="/contact" className="btn btn-secondary">
              More ways to get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
