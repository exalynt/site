import { Link } from "react-router-dom";
import { TrajectoryLine } from "../icons";

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

const FLOW_STEPS = [
  "People & Needs",
  "Understanding",
  "Engineering Judgment",
  "Software & Systems",
  "Better Outcomes",
];

const PRACTICE = [
  {
    num: "04",
    title: "Care about the craft",
    body: "Engineering is a profession and a craft worth doing well. Care about clarity, simplicity, maintainability, reliability, thoughtful architecture, and communication. That said, avoid turning craft into dogma — rules about “clean code” matter less than judgment and context.",
  },
  {
    num: "05",
    title: "Own the outcome",
    body: "Excellent engineers take responsibility for the work, especially when it goes wrong. Mistakes should not be hidden or treated primarily as opportunities to assign blame. Own it, understand it, fix what needs fixing, and improve the system — or your own judgment — so the lesson compounds.",
  },
  {
    num: "06",
    title: "Be willing to fail",
    body: "Engineering contains uncertainty. Trying only things that are guaranteed to work limits learning and innovation. Thoughtful experimentation is valuable even when the result is failure — a failed idea that teaches something important is not necessarily wasted work.",
  },
  {
    num: "07",
    title: "Exercise judgment",
    body: "There is rarely one universally correct architecture, technology, pattern, or practice. Excellent engineers understand tradeoffs and choose solutions based on the problem and its context — not trends, ideology, résumé value, or technical novelty.",
  },
  {
    num: "08",
    title: "Lift others",
    body: "Engineering excellence should improve more than software. Share knowledge, mentor, listen, give useful feedback, and help teammates succeed. Care about the users affected by the work. There is real satisfaction in making the people around you — and the systems they depend on — a little better.",
  },
];

function Engineering() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The philosophy</p>
            <h1>What does excellent software engineering look like?</h1>
            <p>
              Excellence is the ongoing pursuit of doing worthwhile things exceptionally well. It
              requires standards &mdash; a real bar worth reaching for &mdash; while recognizing
              that the pursuit of improvement never truly ends.
            </p>
            <p>
              This page is the closest thing Exalynt has to a manifesto: not a final word, but a
              working description of what the practice of excellent engineering looks like.
            </p>
          </div>
        </div>
      </section>

      <section id="not-perfection" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The distinction</p>
            <h2>Excellence is not perfection.</h2>
            <p>
              Excellent engineers aren&rsquo;t perfect engineers. They make mistakes. They choose
              the wrong abstraction. They miss an edge case. They ship things that need to change.
              They try ideas that fail.
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
            Excellence does not mean never failing. It means caring enough to learn, improve, and
            try again.
          </blockquote>
        </div>
      </section>

      <section id="the-problem" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Care about the problem</p>
            <h2>The best code is not the point.</h2>
            <p>
              A beautifully designed system that solves the wrong problem is still the wrong system.
              Excellent engineering begins before the first line of code.
            </p>
            <p>
              Who are we helping? What are they actually trying to accomplish? What problem are we
              solving? What constraints actually matter? Should software solve this problem at all?
              What is the simplest responsible solution?
            </p>
            <p>
              Only once that&rsquo;s understood do the tools of the craft &mdash; code,
              architecture, systems thinking, communication, experimentation, and judgment &mdash;
              turn that understanding into something useful.
            </p>
          </div>

          <div className="purpose-flow">
            {FLOW_STEPS.map((step, i) => (
              <div className="flow-step-wrap" key={step}>
                <span className="flow-step">{step}</span>
                {i < FLOW_STEPS.length - 1 && <span className="flow-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <p className="flow-outcome">
            Code is a tool. Software is a means. Helping people is the outcome.
          </p>
        </div>
      </section>

      <section id="the-practice" className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The practice</p>
            <h2>What excellence asks of us day to day.</h2>
            <p>
              These are the habits that turn the idea of excellence into how the work actually gets
              done.
            </p>
          </div>

          <TrajectoryLine className="practice-trajectory" />

          <ol className="approach-list">
            {PRACTICE.map(({ num, title, body }) => (
              <li key={title}>
                <span className="approach-num">{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="keep-improving" className="idea-section surface-dark deep">
        <div className="container idea-inner">
          <h2>Excellence compounds.</h2>
          <p>
            We will make mistakes. Some ideas will fail. Technologies will change. The problems in
            front of us will change.
          </p>
          <p className="idea-lead-in">The pursuit remains the same:</p>
          <p className="idea-cycle">Learn. Build. Reflect. Improve. Help others. Repeat.</p>
          <p>Each cycle should leave us a little better than where we started.</p>
          <div className="cta-actions idea-actions">
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Engineering;
