import { BuildCycleDiagram } from "../components/BuildCycleDiagram";

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
    body: "Review what we accomplished and learned, then decide together whether to continue, reprioritize, pivot, adjust engineering capacity, pause, or stop.",
  },
];

function HowWeBuildSection() {
  return (
    <section id="how-we-build" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">How we build</p>
          <h2>Short iterations. Frequent decisions.</h2>
          <p>
            Exalynt works in iterations &mdash; usually one week, occasionally two. Each one ends at
            a deliberate checkpoint: we stop, review what happened, and decide what&rsquo;s next
            before continuing. That keeps feedback fast, so when something&rsquo;s off, we find out
            in days, not months.
          </p>
          <p>
            Engineering capacity and iteration length are separate decisions. Capacity sets how much
            you&rsquo;re investing; the iteration sets how soon you get to judge whether that
            investment is working.
          </p>
        </div>

        <BuildCycleDiagram steps={PROCESS} />
      </div>
    </section>
  );
}

export default HowWeBuildSection;
