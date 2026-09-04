import { Link } from "react-router-dom";
import { DocumentIcon, GitHubIcon, LinkedInIcon } from "../icons";
import { PERSONAL_GITHUB_URL, PERSONAL_LINKEDIN_URL } from "../constants";

const QUALIFICATIONS = [
  "AWS Certified Solutions Architect – Associate",
  "ITIL Foundations",
  "CompTIA Security+, Network+, Project+, A+",
  "Software architecture & design patterns",
  "GraphQL & Apollo Server",
  "DevOps: CI/CD, IaC, Docker, Kubernetes, Terraform",
];

const INTERESTS = [
  "Software architecture",
  "Distributed systems",
  "Backend engineering",
  "Platform engineering",
  "Observability",
  "Developer experience",
  "Engineering leadership",
  "Experimentation",
];

const HOBBIES = [
  "Family time",
  "Video games with friends and family",
  "Reading",
  "Hiking",
  "Camping",
  "Mountain biking",
  "Golf",
  "Pickleball",
];

function About() {
  return (
    <>
      <section className="section">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h1>Hi, I&rsquo;m John.</h1>
            <p>
              I&rsquo;m a software architect based in Logan, Utah. What keeps me showing up is
              simple: building solutions to real problems, continuously improving how I work, and
              treating every mistake as the fastest way to learn something worth keeping.
            </p>
            <p>
              Exalynt comes from an interest in understanding and encouraging excellence in software
              engineering. It&rsquo;s a place to articulate engineering principles, write about
              lessons and ideas, build software, experiment, share what I learn, and connect with
              other engineers.
            </p>
            <div className="about-actions">
              <a href={PERSONAL_GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <GitHubIcon className="btn-icon" />
                GitHub
              </a>
              <a href={PERSONAL_LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <LinkedInIcon className="btn-icon" />
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                <DocumentIcon className="btn-icon" />
                Resume
              </a>
            </div>
          </div>
          <div className="about-side">
            <div className="about-photo-frame">
              <img src="/john-peterson.jpg" alt="John Peterson" className="about-photo" />
            </div>
            <ul className="about-qualifications">
              {QUALIFICATIONS.map((qualification) => (
                <li key={qualification}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">What I&rsquo;m interested in</p>
            <h2>Where I spend my attention.</h2>
          </div>
          <ul className="hobby-list">
            {INTERESTS.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Beyond the code</p>
            <h2>When I&rsquo;m not creating</h2>
            <p>I&rsquo;m usually with family, reading, or outside.</p>
          </div>
          <ul className="hobby-list">
            {HOBBIES.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt working-with-me">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Working with me</p>
            <h2>Select consulting &amp; contract work.</h2>
            <p>
              I am open to select consulting and contract work where thoughtful engineering, sound
              architecture, and experienced technical judgment can make a meaningful difference:
              software architecture, system design, backend/platform engineering, architecture
              reviews, difficult technical decisions, technical strategy, and engineering mentorship
              and guidance.
            </p>
          </div>
          <Link to="/contact" className="btn btn-secondary">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
