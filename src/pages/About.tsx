import { DocumentIcon, LinkedInIcon } from "../icons";

const LINKEDIN_URL = "https://www.linkedin.com/in/john-peterson-dev/";

const QUALIFICATIONS = [
  "AWS Certified Solutions Architect – Associate",
  "ITIL Foundations",
  "CompTIA Security+, Network+, Project+, A+",
  "Software architecture & design patterns",
  "GraphQL & Apollo Server",
  "DevOps: CI/CD, IaC, Docker, Kubernetes, Terraform",
];

const HOBBIES = [
  "Hiking",
  "Camping",
  "Mountain biking",
  "Golf",
  "Pickleball",
  "Reading",
  "Video games with friends and family",
];

function About() {
  return (
    <>
      <section className="section">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h1>The engineer behind Exalynt</h1>
            <p>
              I&rsquo;m John Peterson, a software architect based in Logan, Utah. What keeps me
              showing up is simple: building solutions to real problems, continuously improving how
              I work, and treating every mistake as the fastest way to learn something worth
              keeping.
            </p>
            <p>
              That mindset is the whole idea behind Exalynt &mdash; small, deliberate improvements,
              repeated until they compound into something excellent. My focus spans software
              architecture and design patterns, platform engineering, and DevOps: CI/CD,
              infrastructure as code, Docker, Kubernetes, Terraform, and AWS.
            </p>
            <div className="about-actions">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <LinkedInIcon className="btn-icon" />
                Connect on LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                <DocumentIcon className="btn-icon" />
                Resume
              </a>
            </div>
          </div>
          <ul className="about-qualifications">
            {QUALIFICATIONS.map((qualification) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Beyond the code</p>
            <h2>When I&rsquo;m not shipping</h2>
            <p>Outside of engineering, I&rsquo;m usually outside, period.</p>
          </div>
          <ul className="hobby-list">
            {HOBBIES.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
