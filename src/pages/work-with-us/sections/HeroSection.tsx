import { useContactModal } from "../../../useContactModal";

function HeroSection() {
  const { openContactModal } = useContactModal();
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Work With Exalynt</p>
          <h1>Have a problem technology might solve?</h1>
          <p>
            We work with organizations to understand problems, explore solutions, and build software
            that creates real value.
          </p>
          <p>
            We don&rsquo;t begin with a predetermined solution or a giant project plan. We begin
            with the problem.
          </p>
        </div>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={openContactModal}>
            Start a Conversation →
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
