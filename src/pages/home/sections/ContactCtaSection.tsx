import { Link } from "react-router-dom";
import { useContactModal } from "../../../useContactModal";

function ContactCtaSection() {
  const { openContactModal } = useContactModal();
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
          <button type="button" className="btn btn-primary" onClick={openContactModal}>
            Discuss Your Project →
          </button>
          <Link to="/work-with-us" className="btn btn-secondary">
            See how we work →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCtaSection;
