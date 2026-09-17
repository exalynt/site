import { useState } from "react";
import { InfoIcon } from "../../../icons";
import { EstimatesModal } from "../components/EstimatesModal";

const HOURLY_RATE = 225;
const MIN_HOURS = 10;
const MAX_HOURS = 40;
const STEP_HOURS = 10;
const DEFAULT_HOURS = 10;
const HOUR_MARKS = [10, 20, 30, 40];

const PRICING_INCLUDES = [
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

function PricingSection() {
  const [hours, setHours] = useState(DEFAULT_HOURS);
  const [estimatesModalOpen, setEstimatesModalOpen] = useState(false);
  const weeklyCost = hours * HOURLY_RATE;
  const fillPercent = ((hours - MIN_HOURS) / (MAX_HOURS - MIN_HOURS)) * 100;

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Choose how much to invest.</h2>
          <p>
            Capacity controls the size of the investment. Iterations control the length of the
            feedback loop &mdash; usually one week, when we review progress together and decide
            what&rsquo;s next.
          </p>
          <button
            type="button"
            className="info-trigger"
            onClick={() => setEstimatesModalOpen(true)}
          >
            <InfoIcon className="info-trigger-icon" />
            Why don&rsquo;t we quote the whole project?
          </button>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <span className="price-amount">$225</span>
            <span className="price-unit">/ hour</span>
            <p className="price-note">
              The ceiling on what we&rsquo;re authorized to spend each week &mdash; not a promise
              about which features ship by when.
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
        </div>

        <div className="pricing-included">
          <h3>This can include:</h3>
          <ul className="check-list check-list-2col">
            {PRICING_INCLUDES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Need only a few hours to investigate something? Start there. Capacity can change at any
            iteration review as needs evolve.
          </p>
        </div>
      </div>

      {estimatesModalOpen && <EstimatesModal onClose={() => setEstimatesModalOpen(false)} />}
    </section>
  );
}

export default PricingSection;
