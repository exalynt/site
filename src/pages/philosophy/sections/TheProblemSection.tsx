const FLOW_STEPS = [
  "People & Needs",
  "Understanding",
  "Engineering Judgment",
  "Software & Systems",
  "Better Outcomes",
];

function TheProblemSection() {
  return (
    <section id="the-problem" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Care about the problem</p>
          <h2>The best code is not the point.</h2>
          <p>
            A beautifully designed system that solves the wrong problem is still the wrong system.
            Excellent engineering begins before the first line of code.
          </p>
          <p>
            Who are we helping? What are they actually trying to accomplish? What problem are we
            solving? What constraints actually matter? Should software solve this problem at all?
            What is the simplest responsible solution?
          </p>
          <p>
            Only once that&rsquo;s understood do the tools of the craft &mdash; code, architecture,
            systems thinking, communication, experimentation, and judgment &mdash; turn that
            understanding into something useful.
          </p>
        </div>

        <div className="purpose-flow">
          {FLOW_STEPS.map((step, i) => (
            <div className="flow-step-wrap" key={step}>
              <span className="flow-step">{step}</span>
              {i < FLOW_STEPS.length - 1 && <span className="flow-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <p className="flow-outcome">
          Code is a tool. Software is a means. Helping people is the outcome.
        </p>
      </div>
    </section>
  );
}

export default TheProblemSection;
