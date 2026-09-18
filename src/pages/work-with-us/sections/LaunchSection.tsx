import { HOSTING_MONTHLY, SELF_BLOCK_PRICE } from "../pricing";

const STAGES = [
  {
    num: "01",
    title: "Build",
    body: "Buy a block of Engineering Capacity and we go to work on the highest-value problem, reviewing progress with you every iteration.",
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
  "Production hosting",
  "Deployments and releases",
  "Monitoring and alerting",
  "Backups",
  "TLS certificates and routine hosting configuration",
  "Routine infrastructure operations and platform maintenance",
  "Management of the production environment",
  "No per-user fees",
];

const CAPACITY_COVERS = [
  "New features",
  "New integrations",
  "Workflow and process changes",
  "Significant application changes",
  "Custom migrations",
  "Any other engineering work",
];

const YOU_OWN = [
  "The custom software and deliverables defined by the agreement",
  "The source code",
  "Your business and customer data",
  "The freedom to run it yourself, or have someone else run it",
];

function LaunchSection() {
  return (
    <section id="launch" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Launch, hosting &amp; ownership</p>
          <h2>Launch when it&rsquo;s useful. Keep improving from there.</h2>
          <p>
            Software doesn&rsquo;t need to be finished to be valuable. We put working software into
            production as soon as it can earn its keep, then keep improving it for as long as
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
            <p className="fine-print">
              Additional infrastructure costs resulting from higher usage or infrastructure
              requirements may be passed through at cost.
            </p>
          </div>
          <div className="info-card">
            <p className="info-card-subtitle">Bought in blocks, whenever you want it</p>
            <h3>Engineering Capacity covers</h3>
            <ul className="check-list">
              {CAPACITY_COVERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine-print">
              Managed Hosting doesn&rsquo;t include new features. Changing what the software does is
              always engineering work.
            </p>
          </div>
        </div>

        <div className="split-heading">
          <h3>You own what we build.</h3>
          <p>
            Ownership isn&rsquo;t a package you choose &mdash; it&rsquo;s the same in both models.
            The only question is who operates the software.
          </p>
        </div>

        <ul className="check-list check-list-2col">
          {YOU_OWN.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="fine-print">
          Exalynt keeps its own pre-existing IP, reusable and general-purpose libraries, internal
          tooling, and frameworks &mdash; the things we bring to every engagement rather than build
          for yours. Third-party and open-source software stays subject to its own licenses.
        </p>

        <div className="commitment-box">
          <p className="eyebrow">No lock-in</p>
          <p className="commitment-lead">
            You own the software and can move it elsewhere whenever you want.
          </p>
          <p>
            There&rsquo;s no minimum hosting term, no annual contract, no termination fee, and no
            software buyout. We hand over your source code, your data, and the normal deployment and
            configuration artifacts a standard handoff requires. Migration work beyond that handoff
            uses Engineering Capacity, priced from then on at the Self Managed rate of $
            {SELF_BLOCK_PRICE.toLocaleString()} per block.
          </p>
        </div>

        <p className="contact-note">
          Contractual terms ultimately govern ownership. Actual agreements define the specifics of
          any engagement.
        </p>
      </div>
    </section>
  );
}

export default LaunchSection;
