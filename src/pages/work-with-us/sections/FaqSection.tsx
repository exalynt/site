import { HOSTING_MONTHLY, MANAGED_BLOCK_PRICE, SELF_BLOCK_PRICE } from "../pricing";

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
    q: `When does the $${HOSTING_MONTHLY}/month hosting charge begin?`,
    a: `When your software is first made available in a production environment for actual business use — or when you ask Exalynt to maintain an ongoing production environment that’s ready for that use. Development itself doesn’t start the clock: previews, staging, demos, prototypes, and testing environments are part of the build.`,
  },
  {
    q: "Does going live mean development is finished?",
    a: "No. Production just means the software is being used in your business. Most engagements keep going after launch — you continue purchasing Engineering Capacity and we continue shipping features, integrations, and improvements iteratively.",
  },
  {
    q: "Am I locked into Exalynt hosting?",
    a: "No. Exalynt Managed clients can leave hosting at any time. There’s no minimum term, no exit fee, and no software buyout.",
  },
  {
    q: "What happens if I leave Exalynt hosting?",
    a: `You keep your software. A standard handoff — source code, your data, and the normal deployment and configuration artifacts — is included. Substantial migration work or engineering specific to the destination environment uses Engineering Capacity. While Exalynt is no longer operating the software, future capacity is priced at the Self Managed rate of $${SELF_BLOCK_PRICE.toLocaleString()} per block. Nothing already completed is repriced.`,
  },
  {
    q: "What happens if infrastructure costs increase?",
    a: `Managed Hosting is $${HOSTING_MONTHLY}/month. Additional infrastructure costs resulting from higher usage or infrastructure requirements may be passed through at cost. There are no per-user fees.`,
  },
  {
    q: "Does Managed Hosting include new features?",
    a: "No. Managed Hosting covers operating the production environment — keeping it running, monitored, backed up, and deployed. New features and other engineering work use Engineering Capacity.",
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
