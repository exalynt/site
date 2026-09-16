const FLOW_STEPS = ["Understand", "Build", "Use", "Learn", "Decide"];

const PROCESS = [
  {
    num: "01",
    title: "Understand",
    body: "Learn about the problem, the people experiencing it, existing processes, constraints, and what a successful outcome might look like.",
  },
  {
    num: "02",
    title: "Build",
    body: "Create the smallest useful version that helps us test assumptions or provide real value.",
  },
  {
    num: "03",
    title: "Use",
    body: "Put working software into the hands of the people who actually need it.",
  },
  {
    num: "04",
    title: "Learn",
    body: "Observe what works, what doesn't, and what we misunderstood.",
  },
  {
    num: "05",
    title: "Decide",
    body: "Use what we've learned to determine what deserves investment next.",
  },
];

function HowWeBuildSection() {
  return (
    <section id="how-we-build" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">How we build</p>
          <h2>Understand → Build → Use → Learn → Decide.</h2>
          <p>Rather than committing to a fixed plan up front, we work in short, honest cycles.</p>
        </div>

        <div className="purpose-flow">
          {FLOW_STEPS.map((step, i) => (
            <div className="flow-step-wrap" key={step}>
              <span className="flow-step">{step}</span>
              {i < FLOW_STEPS.length - 1 && <span className="flow-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <ol className="approach-list">
          {PROCESS.map(({ num, title, body }) => (
            <li key={title}>
              <span className="approach-num">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="flow-outcome">
          Then we repeat &mdash; using what we&rsquo;ve learned to decide what deserves investment
          next.
        </p>
      </div>
    </section>
  );
}

export default HowWeBuildSection;
