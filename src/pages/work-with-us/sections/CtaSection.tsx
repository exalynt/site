import { useContactModal } from "../../../useContactModal";

function CtaSection() {
  const { openContactModal } = useContactModal();
  return (
    <section id="cta" className="cta-band surface-dark">
      <div className="container">
        <p className="eyebrow">Ready when you are</p>
        <h2>Tell us about the problem.</h2>
        <p>
          The first conversation is free, no specification required, and there&rsquo;s no obligation
          to a giant project. Start by talking it through, buy a block of engineering capacity when
          it makes sense, and see where it leads.
        </p>
        <div className="cta-actions">
          <button type="button" className="btn btn-primary" onClick={openContactModal}>
            Start a Conversation →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
