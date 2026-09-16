import { Link } from "react-router-dom";

const CONTACT_EMAIL = "john.peterson@exalynt.com";

function CtaSection() {
  return (
    <section id="cta" className="cta-band surface-dark">
      <div className="container">
        <p className="eyebrow">Ready when you are</p>
        <h2>Tell us about the problem.</h2>
        <p>
          No specification required, and no obligation to a giant project. Start with a conversation
          and see where it leads.
        </p>
        <div className="cta-actions">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
            Start a Conversation →
          </a>
          <Link to="/contact" className="btn btn-secondary">
            More ways to get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
