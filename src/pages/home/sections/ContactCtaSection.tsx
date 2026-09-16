import { Link } from "react-router-dom";

function ContactCtaSection() {
  return (
    <section id="contact" className="cta-band surface-dark">
      <div className="container">
        <p className="eyebrow">Get in touch</p>
        <h2>Let&rsquo;s talk.</h2>
        <p>
          Want to talk software architecture? Explore an open-source idea? See what we&rsquo;re
          building? Or think Exalynt could help solve a problem for your organization? We&rsquo;d be
          glad to hear from you.
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
  );
}

export default ContactCtaSection;
