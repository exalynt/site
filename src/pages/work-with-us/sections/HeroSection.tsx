import { useContactModal } from "../../../useContactModal";

const ENGAGEMENT_SUMMARY = [
  "$225/hour",
  "Agree on a spending limit before work starts",
  "Start with a small investigation",
  "Receive source code for your custom deliverables under the agreement",
];

const JUMP_LINKS = [
  { to: "#how-we-help", label: "What we build" },
  { to: "#start-small", label: "Getting started" },
  { to: "#pricing", label: "Pricing" },
  { to: "#how-we-build", label: "Process" },
  { to: "#ownership", label: "Ownership & support" },
];

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

        <div className="engagement-summary-bar">
          <p className="engagement-summary">{ENGAGEMENT_SUMMARY.join(" · ")}</p>
          <nav className="section-jump-nav" aria-label="Jump to a section on this page">
            {JUMP_LINKS.map(({ to, label }) => (
              <a href={to} key={to}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
