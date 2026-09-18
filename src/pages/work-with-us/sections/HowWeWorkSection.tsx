import { BuildCycleDiagram } from "../components/BuildCycleDiagram";
import { MANAGED_BLOCK_PRICE, SELF_BLOCK_PRICE } from "../pricing";

const BUYING_STEPS = [
  {
    num: "01",
    title: "Start a conversation",
    body: "Free, and no specification required. Tell us about the problem; we’ll tell you honestly whether we think software can help, and what we’d look at first.",
  },
  {
    num: "02",
    title: "Buy a block of capacity",
    body: `One block — $${MANAGED_BLOCK_PRICE.toLocaleString()} or $${SELF_BLOCK_PRICE.toLocaleString()}, depending on which model fits. That is the entire commitment: no fixed-scope contract, no minimum number of blocks, no retainer.`,
  },
  {
    num: "03",
    title: "We work an iteration",
    body: "Usually one week, occasionally two. We spend the capacity on the most valuable work available, and put something real in front of you at the end of it.",
  },
  {
    num: "04",
    title: "Review, then decide",
    body: "We show you what we did and what we learned. If continuing is worth it, buy another block. If it isn’t, stop — you keep everything built so far.",
  },
];

const CAPACITY_USES = [
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
    body: "Review what we accomplished and learned, then decide together what happens next.",
  },
];

const VISIBILITY = [
  "What Exalynt is currently working on",
  "What has been completed",
  "What has been learned",
  "What decisions need to be made",
  "What Exalynt recommends exploring next",
  "How much of your capacity has been used",
];

const DECISIONS = [
  "Continue in the current direction",
  "Reprioritize — something else has become more valuable",
  "Pivot based on what we learned",
  "Adjust engineering capacity up or down",
  "Pause before investing further",
  "Stop — the problem is solved, or it’s no longer worth it",
];

function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">How we work</p>
          <h2>Buy a block. See results in a week. Decide what&rsquo;s next.</h2>
          <p>
            A block of Engineering Capacity is a bounded amount of Exalynt&rsquo;s attention and
            expertise &mdash; roughly ten hours&rsquo; worth, as a familiar way to picture its size.
            It isn&rsquo;t a timesheet and it isn&rsquo;t a fixed scope of work. We may spend more
            or less time than that to reach a sensible stopping point; either way, your investment
            is the block you bought.
          </p>
          <p>
            You buy capacity one block at a time and decide after every iteration whether to buy
            more. That&rsquo;s the whole arrangement.
          </p>
        </div>

        <ol className="approach-list">
          {BUYING_STEPS.map(({ num, title, body }) => (
            <li key={num}>
              <span className="approach-num">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="split-heading">
          <h3>A block can be spent on any of this</h3>
        </div>
        <ul className="check-list check-list-2col capacity-uses">
          {CAPACITY_USES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="fine-print">
          Capacity isn&rsquo;t only coding time. Discovery, architecture, and technical strategy are
          often the most valuable things we can spend it on &mdash; and sometimes the right answer
          is not to build anything at all.
        </p>

        <div className="split-heading">
          <h3>Inside an iteration</h3>
          <p>
            Every iteration ends at a deliberate checkpoint: we stop, review what happened, and
            decide what&rsquo;s next before continuing. That keeps feedback fast, so when
            something&rsquo;s off we find out in days, not months.
          </p>
        </div>

        <BuildCycleDiagram steps={PROCESS} />

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
            <h3>At each review, you can</h3>
            <ul className="check-list">
              {DECISIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="pull-quote">
          You risk only the capacity you&rsquo;ve bought. We earn the next block by making the
          current one worthwhile.
        </blockquote>

        <div className="commitment-box">
          <p className="eyebrow">The Exalynt Commitment</p>
          <p className="commitment-lead">
            We won&rsquo;t exceed the capacity you&rsquo;ve bought without your agreement, and you
            keep everything we build along the way.
          </p>
          <p>
            If reaching a sensible stopping point takes a little more effort than we expected,
            that&rsquo;s our responsibility &mdash; not an automatic increase to your bill.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
