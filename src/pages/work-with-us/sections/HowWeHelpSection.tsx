const HELP_EXAMPLES = [
  "Automating expensive or repetitive business processes",
  "Replacing spreadsheets or manual workflows",
  "Connecting systems that don't work well together",
  "Building internal tools",
  "Creating customer-facing applications",
  "Designing APIs and integrations",
  "Modernizing existing software",
  "Architecture and technical strategy",
  "Prototyping and validating new product ideas",
  "Production engineering, infrastructure, and reliability",
];

function HowWeHelpSection() {
  return (
    <section id="how-we-help" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Where we help</p>
          <h2>Examples, not a service menu.</h2>
          <p>
            Every engagement starts with a problem, not a technology. These are examples of the
            kinds of problems we help organizations work through:
          </p>
        </div>

        <ul className="check-list check-list-2col">
          {HELP_EXAMPLES.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>

        <blockquote className="pull-quote">
          You don&rsquo;t need to arrive with a software specification. Bring the problem.
        </blockquote>
      </div>
    </section>
  );
}

export default HowWeHelpSection;
