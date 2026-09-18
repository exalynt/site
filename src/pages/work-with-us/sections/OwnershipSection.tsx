import { CLIENT_BLOCK_PRICE, HOSTING_MONTHLY } from "../pricing";

const YOU_OWN = [
  "The custom software and deliverables defined by the agreement",
  "The source code",
  "Your business and customer data",
  "The freedom to run it yourself, or have someone else run it",
];

const HOSTING_INCLUDES = [
  "Production hosting",
  "Deployment management",
  "Monitoring and alerting",
  "Backups",
  "TLS certificates and routine hosting configuration",
  "Routine infrastructure operations and platform maintenance",
  "Management of the production environment",
  "No per-user fees",
];

function OwnershipSection() {
  return (
    <section id="ownership" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Ownership &amp; hosting</p>
          <h2>You own it. We can run it.</h2>
          <p>
            Ownership isn&rsquo;t a package you choose &mdash; it&rsquo;s the same in both models.
            You own the custom software Exalynt builds for you, in every engagement. The only
            question is who operates it.
          </p>
        </div>

        <div className="two-col-grid">
          <div className="info-card">
            <p className="info-card-subtitle">In both models</p>
            <h3>What you own</h3>
            <ul className="check-list">
              {YOU_OWN.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine-print">
              Exalynt keeps its own pre-existing IP, reusable and general-purpose libraries,
              internal tooling, and frameworks &mdash; the things we bring to every engagement
              rather than build for yours. Third-party and open-source software stays subject to its
              own licenses.
            </p>
          </div>

          <div className="info-card">
            <p className="info-card-subtitle">Exalynt Managed only</p>
            <h3>Hosting without the lock-in</h3>
            <p>
              Once your software is running your business, Exalynt can keep it running. Managed
              Hosting is ${HOSTING_MONTHLY}/month and covers the routine work of operating the
              production environment.
            </p>
            <ul className="check-list">
              {HOSTING_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine-print">
              Additional infrastructure costs resulting from higher usage or infrastructure
              requirements may be passed through at cost. Managed Hosting doesn&rsquo;t include new
              features &mdash; that work uses Engineering Capacity.
            </p>
          </div>
        </div>

        <div className="commitment-box">
          <p className="eyebrow">No lock-in</p>
          <p className="commitment-lead">
            You own the software and can move it elsewhere whenever you want.
          </p>
          <p>
            There&rsquo;s no minimum hosting term, no annual contract, no termination fee, and no
            software buyout. Leaving Exalynt hosting doesn&rsquo;t change what you own. We hand over
            your source code, your data, and the normal deployment and configuration artifacts a
            standard handoff requires.
          </p>
          <p>
            If you&rsquo;d like Exalynt to do more than hand off &mdash; build infrastructure with
            another provider, rework the deployment architecture, or carry out a custom migration
            &mdash; that&rsquo;s engineering work, and it uses Engineering Capacity. Once
            we&rsquo;re no longer operating the software, future capacity is priced at the Client
            Managed rate of ${CLIENT_BLOCK_PRICE.toLocaleString()} per block. Work already completed
            is never repriced.
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

export default OwnershipSection;
