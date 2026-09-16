const VISIBILITY = [
  "What Exalynt is currently working on",
  "What has been completed",
  "What has been learned",
  "What decisions need to be made",
  "What Exalynt recommends exploring next",
  "How much time has been used",
];

const CONTROLS = [
  "Increase the investment",
  "Reduce the investment",
  "Pause work",
  "Change direction",
  "Stop when the software meets their needs",
];

function ControlSection() {
  return (
    <section id="control" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Your control</p>
          <h2>You control the investment.</h2>
          <p>Working hourly does not mean unlimited spending.</p>
          <p>
            Before work begins, the client and Exalynt agree on how much engineering capacity
            Exalynt is authorized to use. For example: up to 10 hours per week at $200/hour.
          </p>
        </div>

        <div className="calc-box">
          <p className="calc-line">Up to 10 hours/week × $200/hour</p>
          <p className="calc-result">= up to $2,000/week</p>
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
            <h3>You can</h3>
            <ul className="check-list">
              {CONTROLS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="pull-quote">We replace estimates with control.</blockquote>
        <p className="contact-note">
          Continue investing while the next increment is worth more to your business than it costs
          to build.
        </p>
      </div>
    </section>
  );
}

export default ControlSection;
