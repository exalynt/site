import { Link } from "react-router-dom";

const CONTACT_EMAIL = "john.peterson@exalynt.com";

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

const VISIBILITY = [
  "What Exalynt is currently working on",
  "What has been completed",
  "What has been learned",
  "What decisions need to be made",
  "What Exalynt recommends exploring next",
  "How much time has been used",
];

const CONTROLS = [
  "Increase the investment",
  "Reduce the investment",
  "Pause work",
  "Change direction",
  "Stop when the software meets their needs",
];

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

const CLIENT_OWNED_POINTS = [
  "Client owns the custom software/deliverables defined by the agreement.",
  "Client receives the source code.",
  "Client can operate the software independently.",
  "Exalynt can continue developing or operating it if desired.",
  "Third-party software remains subject to its respective licenses.",
  "Exalynt retains ownership of its pre-existing IP and general-purpose tools/libraries.",
];

const HOSTED_POINTS = [
  "Own the underlying software",
  "Invest in its continued development",
  "Host and operate the service",
  "Maintain infrastructure",
  "Provide updates and improvements",
  "Offer the product to additional customers",
];

function WorkWithUs() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Work With Exalynt</p>
            <h1>Have a problem technology might solve?</h1>
            <p>
              We work with organizations to understand problems, explore solutions, and build
              software that creates real value.
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

      <section id="why-not-estimates" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Estimates</p>
            <h2>Why don&rsquo;t we quote the whole project?</h2>
            <p>Software development is a process of discovery.</p>
            <p>
              At the beginning of an engagement, we understand the problem less than we will after
              we&rsquo;ve built something and you&rsquo;ve had an opportunity to use it.
            </p>
            <p>
              Traditional project estimates require assumptions about both the problem and the
              solution before much of that learning has happened. We could turn those assumptions
              into a scope, price, and delivery date &mdash; but doing so doesn&rsquo;t make the
              assumptions true.
            </p>
            <p>
              Instead, Exalynt works incrementally. We build something valuable. You use it. We
              learn. Then we decide what deserves investment next.
            </p>
            <p>The objective isn&rsquo;t to deliver everything imagined on day one.</p>
          </div>

          <blockquote className="pull-quote">The objective is to solve the problem.</blockquote>
        </div>
      </section>

      <section id="control" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Your control</p>
            <h2>You control the investment.</h2>
            <p>Working hourly does not mean unlimited spending.</p>
            <p>
              Before work begins, the client and Exalynt agree on how much engineering capacity
              Exalynt is authorized to use. For example: up to 10 hours per week at $200/hour.
            </p>
          </div>

          <div className="calc-box">
            <p className="calc-line">Up to 10 hours/week × $200/hour</p>
            <p className="calc-result">= up to $2,000/week</p>
          </div>

          <div className="control-grid">
            <div>
              <h3>You&rsquo;ll always know</h3>
              <ul className="check-list">
                {VISIBILITY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>You can</h3>
              <ul className="check-list">
                {CONTROLS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="pull-quote">We replace estimates with control.</blockquote>
          <p className="contact-note">
            Continue investing while the next increment is worth more to your business than it costs
            to build.
          </p>
        </div>
      </section>

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
                development capacity? Establish a weekly limit. Increase, decrease, pause, or stop
                as your needs change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ownership" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Ownership</p>
            <h2>Who owns what we build?</h2>
            <p>
              Different problems call for different arrangements. Exalynt supports two broad models.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="ownership-card">
              <p className="ownership-subtitle">You own it.</p>
              <h3>Client-Owned Software</h3>
              <p>
                For organizations that want custom software built specifically for their business.
                The client funds the engineering work at the standard hourly rate.
              </p>
              <ul className="check-list">
                {CLIENT_OWNED_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-secondary">
                Build Software You Own →
              </a>
            </div>

            <div className="ownership-card">
              <p className="ownership-subtitle">Let Exalynt operate it.</p>
              <h3>Exalynt-Owned &amp; Hosted Software</h3>
              <p>
                Sometimes a client problem represents an opportunity for software that could provide
                value beyond a single organization. When Exalynt believes a solution has broader
                product potential, Exalynt may offer to invest in it as a product rather than asking
                the client to fund the entire cost of owning and operating custom software.
              </p>
              <ul className="check-list">
                {HOSTED_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="ownership-note">
                This option is offered selectively by Exalynt, based on the opportunity &mdash; not
                as a way to avoid funding highly specialized software.
              </p>
            </div>
          </div>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Client-Owned</th>
                  <th>Exalynt Hosted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Software ownership</td>
                  <td>Client</td>
                  <td>Exalynt</td>
                </tr>
                <tr>
                  <td>Development</td>
                  <td>$200/hour</td>
                  <td>Depends on arrangement</td>
                </tr>
                <tr>
                  <td>Hosting</td>
                  <td>Client or separately arranged</td>
                  <td>Exalynt</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Client or hourly Exalynt engagement</td>
                  <td>Exalynt</td>
                </tr>
                <tr>
                  <td>Product direction</td>
                  <td>Client controls their custom software</td>
                  <td>Exalynt manages the broader product</td>
                </tr>
                <tr>
                  <td>Can Exalynt sell it to others?</td>
                  <td>Generally no, for client-specific deliverables</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Client owns their data</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="contact-note">
            Contractual terms ultimately govern ownership. Actual agreements will define the
            specifics of any engagement.
          </p>
        </div>
      </section>

      <section id="client-data" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Your data</p>
            <h2>Your data is yours.</h2>
            <p>
              Regardless of the ownership model, Exalynt may own the software, but customers retain
              ownership of their business and customer data, subject to the applicable service
              agreement.
            </p>
          </div>
        </div>
      </section>

      <section id="start-small" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Getting started</p>
            <h2>Start with the problem.</h2>
            <p>You don&rsquo;t need to commit to months of development.</p>
            <p>You don&rsquo;t even need to know exactly what should be built.</p>
            <p>
              Start with a few hours. We&rsquo;ll explore the problem, understand the current
              process, identify opportunities, and decide whether software is worth pursuing.
            </p>
            <p>
              Sometimes the right answer may even be not to build custom software. That is a
              successful outcome if it prevents you from investing in something you don&rsquo;t
              need.
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-band surface-dark">
        <div className="container">
          <p className="eyebrow">Ready when you are</p>
          <h2>Tell us about the problem.</h2>
          <p>
            No specification required, and no obligation to a giant project. Start with a
            conversation and see where it leads.
          </p>
          <div className="cta-actions">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
              Start a Conversation →
            </a>
            <Link to="/contact" className="btn btn-secondary">
              More ways to get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkWithUs;
