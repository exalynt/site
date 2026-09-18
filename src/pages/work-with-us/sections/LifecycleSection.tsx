import { HOSTING_MONTHLY } from "../pricing";

const STAGES = [
  {
    num: "01",
    title: "Build",
    body: "Authorize a block of Engineering Capacity and we go to work on the highest-value problem, reviewing progress with you every iteration.",
  },
  {
    num: "02",
    title: "Launch",
    body: `When the software is ready to do real work for your business, it goes into production. On Exalynt Managed, that’s when the $${HOSTING_MONTHLY}/month Managed Hosting fee begins.`,
  },
  {
    num: "03",
    title: "Keep improving",
    body: "Launch isn’t the finish line. Buy more capacity whenever there’s a feature, integration, or improvement worth pursuing — and stop whenever there isn’t.",
  },
];

const HOSTING_COVERS = [
  "Running the production environment",
  "Deployments and releases",
  "Monitoring and alerting",
  "Backups",
  "Certificates and routine hosting configuration",
  "Routine platform maintenance",
];

const CAPACITY_COVERS = [
  "New features",
  "New integrations",
  "Workflow and process changes",
  "Significant application changes",
  "Custom migrations",
  "Any other engineering work",
];

function LifecycleSection() {
  return (
    <section id="lifecycle" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Before and after launch</p>
          <h2>Launch when it&rsquo;s useful. Keep improving from there.</h2>
          <p>
            Software doesn&rsquo;t need to be finished to be valuable. We put working software into
            production as soon as it can earn its keep, then keep improving it as long as
            there&rsquo;s worthwhile work to do.
          </p>
          <p>
            Building doesn&rsquo;t trigger a hosting fee. Development environments, previews,
            staging, demos, and prototypes are all just part of the work.
          </p>
        </div>

        <div className="principles-grid">
          {STAGES.map(({ num, title, body }) => (
            <div className="principle-card lifecycle-card" key={num}>
              <span className="lifecycle-num">{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <blockquote className="pull-quote">
          Hosting starts when your software starts working for your business &mdash; not when
          development ends.
        </blockquote>
        <p className="fine-print">
          More precisely: Managed Hosting begins when, at your direction, Exalynt makes the software
          available in a production environment for actual business use &mdash; or when you ask
          Exalynt to maintain an ongoing production environment that&rsquo;s ready for it.
        </p>

        <div className="split-heading">
          <h3>Hosting keeps the software running. Engineering Capacity changes what it does.</h3>
        </div>

        <div className="two-col-grid">
          <div className="info-card">
            <p className="info-card-subtitle">${HOSTING_MONTHLY}/month once in production</p>
            <h3>Managed Hosting covers</h3>
            <ul className="check-list">
              {HOSTING_COVERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <p className="info-card-subtitle">Purchased in blocks, whenever you want it</p>
            <h3>Engineering Capacity covers</h3>
            <ul className="check-list">
              {CAPACITY_COVERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifecycleSection;
