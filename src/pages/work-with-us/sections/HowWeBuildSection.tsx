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
    body: "Use what we've learned to determine what deserves investment next.",
  },
];

function HowWeBuildSection() {
  return (
    <section id="how-we-build" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">How we build</p>
          <h2>A short cycle, repeated.</h2>
          <p>
            Rather than committing to a fixed plan up front, we work in short, honest cycles. Short
            cycles mean fast feedback &mdash; so when something&rsquo;s off, we find out in days,
            not months, and course-correct before much time or money is spent.
          </p>
        </div>

        <BuildCycleDiagram steps={PROCESS} />
      </div>
    </section>
  );
}

export default HowWeBuildSection;
