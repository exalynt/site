import { GitHubIcon, LinkedInIcon } from "../icons";

const CONTACT_EMAIL = "john.peterson@exalynt.com";
const GITHUB_URL = "https://github.com/john-peterson-g17";
const LINKEDIN_URL = "https://www.linkedin.com/in/john-peterson-dev/";

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Get in touch</p>
          <h1>Say hello.</h1>
          <p>You don&rsquo;t need a project or consulting engagement to reach out.</p>
          <p>
            If you want to talk about something I&rsquo;ve written, software architecture, an
            interesting problem you&rsquo;re working through, something you&rsquo;re building, or
            engineering in general, send me a note.
          </p>
          <p>
            And if you&rsquo;re looking for consulting or contract engineering help, I&rsquo;m open
            to hearing about that too.
          </p>
        </div>

        <div className="contact-methods">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
            Email {CONTACT_EMAIL}
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <GitHubIcon className="btn-icon" />
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <LinkedInIcon className="btn-icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
