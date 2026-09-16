import { useState } from "react";

const HOURLY_RATE = 225;
const MIN_HOURS = 10;
const MAX_HOURS = 40;
const STEP_HOURS = 10;
const DEFAULT_HOURS = 10;
const HOUR_MARKS = [10, 20, 30, 40];

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
  const [hours, setHours] = useState(DEFAULT_HOURS);
  const weeklyCost = hours * HOURLY_RATE;
  const fillPercent = ((hours - MIN_HOURS) / (MAX_HOURS - MIN_HOURS)) * 100;

  return (
    <section id="control" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Your control</p>
          <h2>You control the investment.</h2>
          <p>Working hourly does not mean unlimited spending.</p>
          <p>
            Before work begins, the client and Exalynt agree on how much engineering capacity
            Exalynt is authorized to use each week.
          </p>
        </div>

        <div className="calc-box">
          <p className="calc-eyebrow">Capacity calculator</p>

          <div className="calc-slider-head">
            <label htmlFor="hours-slider" className="calc-slider-label">
              Weekly capacity
            </label>
            <span className="calc-slider-value">{hours} hrs/week</span>
          </div>
          <input
            id="hours-slider"
            type="range"
            className="calc-slider"
            min={MIN_HOURS}
            max={MAX_HOURS}
            step={STEP_HOURS}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--accent) ${fillPercent}%, var(--border) ${fillPercent}%)`,
            }}
          />
          <div className="calc-slider-marks" aria-hidden="true">
            {HOUR_MARKS.map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </div>

          <div className="calc-result-row">
            <p className="calc-line">
              {hours} hours/week &times; ${HOURLY_RATE}/hour
            </p>
            <p className="calc-result">
              <span className="calc-result-amount">${weeklyCost.toLocaleString()}</span>
              <span className="calc-result-unit">/week</span>
            </p>
          </div>
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
