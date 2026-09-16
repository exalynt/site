import { GitHubIcon, LinkedInIcon } from "../icons";
import { EXALYNT_GITHUB_URL, PERSONAL_LINKEDIN_URL } from "../constants";

const CONTACT_EMAIL = "john.peterson@exalynt.com";

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Get in touch</p>
          <h1>Say hello.</h1>
          <p>
            Exalynt builds custom software, products, and open-source tools. If you have a problem
            you think we could help solve, tell me about it.
          </p>
          <p>
            You don&rsquo;t need a project or consulting engagement to reach out, though. I&rsquo;m
            also happy to talk about something I&rsquo;ve written, software architecture, an
            interesting problem you&rsquo;re working through, something you&rsquo;re building, or
            engineering in general.
          </p>
        </div>

        <div className="contact-methods">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
            Email {CONTACT_EMAIL}
          </a>
          <a
            href={EXALYNT_GITHUB_URL}
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
