import { DocumentIcon, GitHubIcon, LinkedInIcon } from "../../../icons";
import { PERSONAL_GITHUB_URL, PERSONAL_LINKEDIN_URL } from "../../../constants";

const QUALIFICATIONS = [
  "AWS Certified Solutions Architect – Associate",
  "ITIL Foundations",
  "CompTIA Security+, Network+, Project+, A+",
  "Software architecture & design patterns",
  "GraphQL & Apollo Server",
  "DevOps: CI/CD, IaC, Docker, Kubernetes, Terraform",
];

function ProfileSection() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h1>Hi, I&rsquo;m John.</h1>
          <p>
            I&rsquo;m a software architect based in Logan, Utah. What keeps me showing up is simple:
            building solutions to real problems, continuously improving how I work, and treating
            every mistake as the fastest way to learn something worth keeping.
          </p>
          <p>
            Exalynt is the company I founded and run: it builds custom software for organizations,
            software products, and open-source tools &mdash; all under one roof. When you work with
            Exalynt, you work directly with me; there&rsquo;s no hand-off to a larger team. Exalynt
            is also where I articulate engineering principles, write about lessons and ideas,
            experiment, and connect with other engineers.
          </p>
          <div className="about-actions">
            <a
              href={PERSONAL_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <GitHubIcon className="btn-icon" />
              GitHub
            </a>
            <a
              href={PERSONAL_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
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
  );
}

export default ProfileSection;
