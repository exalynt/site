import { TrajectoryLine } from "../../../icons";

const PERFECTION_TRAITS = [
  "Avoids mistakes.",
  "Treats failure as something to hide.",
  "Waits for certainty.",
  "Focuses on appearing finished.",
  "Creates an impossible destination.",
];

const EXCELLENCE_TRAITS = [
  "Owns mistakes.",
  "Learns from failure.",
  "Acts thoughtfully despite uncertainty.",
  "Continually improves the work.",
  "Pursues high standards without pretending to be flawless.",
];

function NotPerfectionSection() {
  return (
    <section id="not-perfection" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">The distinction</p>
          <h2>Excellence is not perfection.</h2>
          <p>
            Excellent engineers aren&rsquo;t perfect engineers. They make mistakes. They choose the
            wrong abstraction. They miss an edge case. They ship things that need to change. They
            try ideas that fail.
          </p>
          <p>
            Excellence is found in what happens next: owning the mistake, learning from it,
            improving the work, and carrying that knowledge forward.
          </p>
        </div>

        <div className="comparison-grid">
          <div className="comparison-col">
            <h3>Perfection</h3>
            <ul>
              {PERFECTION_TRAITS.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>
          <TrajectoryLine className="comparison-trajectory" />
          <div className="comparison-col comparison-col-excellence">
            <h3>Excellence</h3>
            <ul>
              {EXCELLENCE_TRAITS.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="pull-quote">
          Excellence does not mean never failing. It means caring enough to learn, improve, and try
          again.
        </blockquote>
      </div>
    </section>
  );
}

export default NotPerfectionSection;
