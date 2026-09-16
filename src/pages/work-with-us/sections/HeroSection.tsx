const CONTACT_EMAIL = "john.peterson@exalynt.com";

function HeroSection() {
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
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
