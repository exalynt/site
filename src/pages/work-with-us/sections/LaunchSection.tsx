import {
  INFRASTRUCTURE_ITEMS,
  MANAGEMENT_COVERS,
  MANAGEMENT_MONTHLY,
  SELF_BLOCK_PRICE,
} from "../pricing";

const STAGES = [
  {
    num: "01",
    title: "Build",
    body: "Buy a block of Engineering Capacity and we go to work on the highest-value problem, reviewing progress with you every iteration.",
  },
  {
    num: "02",
    title: "Launch",
    body: `When the software is ready to do real work for your business, it goes into production. On Exalynt Managed, that’s when the $${MANAGEMENT_MONTHLY}/month management fee begins, alongside the infrastructure it runs on, billed at cost.`,
  },
  {
    num: "03",
    title: "Keep improving",
    body: "Launch isn’t the finish line. Buy more capacity whenever there’s a feature, integration, or improvement worth pursuing — and stop whenever there isn’t.",
  },
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
          <p className="eyebrow">Launch, operations &amp; ownership</p>
          <h2>Launch when it&rsquo;s useful. Keep improving from there.</h2>
          <p>
            Software doesn&rsquo;t need to be finished to be valuable. We put working software into
            production as soon as it can earn its keep, then keep improving it for as long as
            there&rsquo;s worthwhile work to do.
          </p>
          <p>
            Building doesn&rsquo;t trigger a monthly fee. Development environments, previews,
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
          The monthly fee starts when your software starts working for your business &mdash; not
          when development ends.
        </blockquote>
        <p className="fine-print">
          More precisely: the management fee begins when, at your direction, Exalynt makes the
          software available in a production environment for actual business use &mdash; or when you
          ask Exalynt to maintain an ongoing production environment that&rsquo;s ready for it.
        </p>

        <div className="split-heading">
          <h3>Two lines on the bill, and only one of them is ours.</h3>
          <p>
            Exalynt Managed is a flat ${MANAGEMENT_MONTHLY} a month to run your software, plus
            whatever the infrastructure actually costs. We don&rsquo;t mark infrastructure up,
            resell it, or take a percentage of it &mdash; it&rsquo;s the same bill you&rsquo;d be
            paying if you ran the software yourself.
          </p>
        </div>

        <div className="two-col-grid">
          <div className="info-card">
            <p className="info-card-subtitle">${MANAGEMENT_MONTHLY}/month, flat</p>
            <h3>Exalynt runs it</h3>
            <p>
              This is the part you&rsquo;re buying: a production environment that somebody competent
              is actually responsible for.
            </p>
            <ul className="check-list">
              {MANAGEMENT_COVERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine-print">
              No per-user fees. The fee doesn&rsquo;t change because you added people, and it
              doesn&rsquo;t change because we had a busy month.
            </p>
          </div>
          <div className="info-card">
            <p className="info-card-subtitle">At cost &mdash; no markup</p>
            <h3>Infrastructure is what the software runs on</h3>
            <p>
              Your software rents things from other companies to do its job. Those charges are
              passed straight through to you at exactly what they cost:
            </p>
            <ul className="check-list">
              {INFRASTRUCTURE_ITEMS.map(({ label, detail }) => (
                <li key={label}>
                  <strong>{label}</strong> &mdash; {detail}
                </li>
              ))}
            </ul>
            <p className="fine-print">
              Infrastructure costs scale with real usage, so they grow as your business uses the
              software more. We size things to keep them sensible and tell you before anything
              meaningful changes.
            </p>
          </div>
        </div>

        <blockquote className="pull-quote">
          You&rsquo;d pay for the servers either way. The ${MANAGEMENT_MONTHLY} is for never having
          to think about them.
        </blockquote>

        <div className="split-heading">
          <h3>What Self Managed actually means.</h3>
          <p>
            Self Managed isn&rsquo;t cheaper infrastructure &mdash; it&rsquo;s the same
            infrastructure, plus the job of running it. That job lands on someone in your
            organization: choosing and sizing the servers, opening accounts with each provider,
            wiring up deployments, noticing the outage at 11pm, applying security updates, checking
            that the backups restore, and deciding what to do when usage spikes. Some teams already
            have the people for that and would rather keep control. Most would rather not find out.
          </p>
        </div>

        <div className="split-heading">
          <h3>Management keeps the software running. Engineering Capacity changes what it does.</h3>
          <p>
            The monthly fee doesn&rsquo;t include new features. Changing what the software does is
            always engineering work, bought in blocks whenever you want it:
          </p>
        </div>

        <ul className="check-list check-list-2col">
          {CAPACITY_COVERS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

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
            There&rsquo;s no minimum term, no annual contract, no termination fee, and no software
            buyout. The infrastructure accounts hold your software and your data, and they go with
            you. We hand over your source code, your data, and the normal deployment and
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
