import { MANAGED_BLOCK_PRICE, MANAGEMENT_MONTHLY, SELF_BLOCK_PRICE } from "../pricing";

const FAQS = [
  {
    q: "Do I own the software?",
    a: `Yes. In both engagement models you own the custom software and receive the source code. Exalynt keeps only its pre-existing and reusable IP — libraries, internal tooling, and frameworks we bring to every engagement — and third-party software stays subject to its own licenses.`,
  },
  {
    q: "What is an Engineering Capacity Block?",
    a: `A block is a bounded amount of Exalynt’s attention and expertise, priced at $${MANAGED_BLOCK_PRICE.toLocaleString()} on Exalynt Managed and $${SELF_BLOCK_PRICE.toLocaleString()} on Self Managed. Roughly ten hours is a familiar way to picture its size — it isn’t a timesheet, and it isn’t a fixed scope of work. We may spend more or less time than that to reach a sensible stopping point; either way, your investment is the block you bought.`,
  },
  {
    q: `What does the $${MANAGEMENT_MONTHLY}/month actually pay for?`,
    a: `Exalynt running your software in production: sizing the infrastructure, deployments and releases, monitoring and alerting, observability, backups and restore checks, security patching and certificate renewals, scaling, and responding to incidents. It’s a flat fee — it doesn’t change with the number of users, and it doesn’t change in a busy month.`,
  },
  {
    q: "What counts as infrastructure, in plain terms?",
    a: "Everything your software rents from other companies in order to work: the servers it runs on, the database holding your information, file storage for uploads and backups, the email it sends, text messages, AI usage, your domain and security certificates, and any other paid services it depends on.",
  },
  {
    q: "How is infrastructure billed?",
    a: `At cost. Exalynt adds no markup, no resale margin, and no percentage. You pay exactly what the providers charge — the same bill you’d be paying if you ran the software yourself. The $${MANAGEMENT_MONTHLY}/month is the only thing Exalynt charges to operate it.`,
  },
  {
    q: `When does the $${MANAGEMENT_MONTHLY}/month charge begin?`,
    a: `When your software is first made available in a production environment for actual business use — or when you ask Exalynt to maintain an ongoing production environment that’s ready for that use. Development itself doesn’t start the clock: previews, staging, demos, prototypes, and testing environments are part of the build.`,
  },
  {
    q: "Does going live mean development is finished?",
    a: "No. Production just means the software is being used in your business. Most engagements keep going after launch — you continue purchasing Engineering Capacity and we continue shipping features, integrations, and improvements iteratively.",
  },
  {
    q: "Am I locked into Exalynt Managed?",
    a: "No. Exalynt Managed clients can leave at any time. There’s no minimum term, no exit fee, and no software buyout.",
  },
  {
    q: "What happens if I leave Exalynt Managed?",
    a: `You keep your software. A standard handoff — source code, your data, and the normal deployment and configuration artifacts — is included. Substantial migration work or engineering specific to the destination environment uses Engineering Capacity. While Exalynt is no longer operating the software, future capacity is priced at the Self Managed rate of $${SELF_BLOCK_PRICE.toLocaleString()} per block. Nothing already completed is repriced.`,
  },
  {
    q: "What happens if infrastructure costs increase?",
    a: `Infrastructure grows with real usage — more customers, more data, more messages, more AI usage. Whatever it costs is what you pay, with no markup, and the $${MANAGEMENT_MONTHLY}/month management fee stays the same. Part of what we do for that fee is keep the infrastructure sized sensibly and tell you before anything meaningful changes. There are no per-user fees.`,
  },
  {
    q: "Isn’t Self Managed cheaper?",
    a: `Not on infrastructure — that’s the same bill either way. Self Managed saves the $${MANAGEMENT_MONTHLY}/month and costs you the work instead: sizing servers, opening provider accounts, running deployments, watching for outages, patching, testing backups, and handling incidents when they happen. If you already have people doing that well, Self Managed makes sense. If you don’t, that work doesn’t disappear — it just becomes someone’s second job.`,
  },
  {
    q: "Does the management fee include new features?",
    a: "No. It covers operating the production environment — keeping it running, monitored, backed up, and deployed. New features and other engineering work use Engineering Capacity.",
  },
  {
    q: "Why is Engineering Capacity cheaper with Exalynt Managed?",
    a: "Less friction. When we operate the production environment ourselves, we aren’t designing around, documenting, and handing off to a hosting stack we don’t run — so more of each block goes into your software instead of into the seams between us and someone else.",
  },
  {
    q: "What if I plan to self-host?",
    a: `That’s the Self Managed model, at $${SELF_BLOCK_PRICE.toLocaleString()} per block. If you start out heading toward Exalynt Managed and change your mind before launch, future capacity simply moves to the Self Managed rate — there’s no penalty and no retroactive adjustment.`,
  },
];

function FaqSection() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Questions</p>
          <h2>Common questions.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map(({ q, a }) => (
            <details className="faq-item" key={q}>
              <summary>
                <span className="faq-question">{q}</span>
                <span className="faq-marker" aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
