const HELP_CATEGORIES = [
  {
    title: "Workflow automation",
    items: [
      "Automating expensive or repetitive business processes",
      "Replacing spreadsheets or manual workflows",
      "Building internal tools",
    ],
  },
  {
    title: "Applications & integrations",
    items: [
      "Creating customer-facing applications",
      "Connecting systems that don't work well together",
      "Designing APIs and integrations",
      "Prototyping and validating new product ideas",
    ],
  },
  {
    title: "Existing-system improvements",
    items: [
      "Modernizing existing software",
      "Architecture and technical strategy",
      "Production engineering, infrastructure, and reliability",
    ],
  },
];

function HowWeHelpSection() {
  return (
    <section id="how-we-help" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Where we help</p>
          <h2>Start with the problem, not a spec.</h2>
          <p>
            Every engagement starts with a problem, not a technology. You don&rsquo;t need a
            software specification, a multi-month commitment, or even a clear idea of what should be
            built &mdash; start with a few hours and we&rsquo;ll explore the problem together.
            Sometimes the right answer is not to build anything, and that is a successful outcome.
          </p>
          <p>Some examples of the kinds of problems we help organizations work through:</p>
        </div>

        <div className="help-category-grid">
          {HELP_CATEGORIES.map(({ title, items }) => (
            <div className="help-category" key={title}>
              <h3>{title}</h3>
              <ul className="check-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <blockquote className="pull-quote">
          You don&rsquo;t need to arrive with a software specification. Bring the problem.
        </blockquote>
      </div>
    </section>
  );
}

export default HowWeHelpSection;
