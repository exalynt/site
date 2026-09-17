const VISIBILITY = [
  "What Exalynt is currently working on",
  "What has been completed",
  "What has been learned",
  "What decisions need to be made",
  "What Exalynt recommends exploring next",
  "How much of your authorized engineering capacity has been used",
];

const DECISIONS = [
  "Continue in the current direction",
  "Reprioritize — something else has become more valuable",
  "Pivot based on what we learned",
  "Adjust engineering capacity up or down",
  "Pause before investing further",
  "Stop — the problem is solved, or it’s no longer worth it",
];

function ControlSection() {
  return (
    <section id="control" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Your control</p>
          <h2>You decide what happens next.</h2>
          <p>
            At the end of each iteration, we review what we did, what we learned, and what looks
            most valuable next. Then, together, we decide:
          </p>
        </div>

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
            <h3>At each iteration review, we can</h3>
            <ul className="check-list">
              {DECISIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="contact-note">
          The iteration review is the natural checkpoint for these decisions &mdash; it&rsquo;s not
          the only time you can reach us.
        </p>

        <blockquote className="pull-quote">
          The client risks only the investment they&rsquo;ve approved. Exalynt earns the next
          iteration by making the current one worthwhile.
        </blockquote>

        <div className="commitment-box">
          <p className="eyebrow">The Exalynt Commitment</p>
          <p className="commitment-lead">
            We won&rsquo;t exceed the engineering capacity you&rsquo;ve authorized without your
            agreement, and you keep everything we build along the way.
          </p>
          <p>
            If reaching a sensible stopping point takes a little more effort than we expected,
            that&rsquo;s our responsibility &mdash; not an automatic increase to your bill.
          </p>
          <p>
            At the end of each iteration, we&rsquo;ll show you what we did, what we learned, and
            what we recommend next. You decide whether continuing to invest still makes sense.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ControlSection;
