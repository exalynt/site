const PRICING_INCLUDES = [
  "Discovery",
  "Software architecture",
  "Technical strategy",
  "Software development",
  "APIs and integrations",
  "Infrastructure",
  "Production engineering",
  "Technical leadership",
  "Existing system improvements",
];

function PricingSection() {
  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Software Engineering &amp; Consulting</h2>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <span className="price-amount">$200</span>
            <span className="price-unit">/ hour</span>
            <p className="price-note">
              Clients authorize a maximum amount of time rather than committing to an estimated
              project cost.
            </p>
          </div>
          <div className="pricing-included">
            <h3>This can include:</h3>
            <ul className="check-list check-list-2col">
              {PRICING_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Need only a few hours to investigate something? Start there. Want consistent
              development capacity? Establish a weekly limit. Increase, decrease, pause, or stop as
              your needs change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
