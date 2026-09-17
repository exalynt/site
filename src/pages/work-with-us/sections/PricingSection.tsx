import { useState } from "react";
import { InfoIcon } from "../../../icons";
import { EstimatesModal } from "../components/EstimatesModal";

const BLOCK_PRICE = 2250;
const BLOCK_HOURS = 10;
const REFERENCE_RATE = 225;
const BLOCK_OPTIONS = [1, 2, 3, 4];
const DEFAULT_BLOCKS = 1;

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
  const [blocks, setBlocks] = useState(DEFAULT_BLOCKS);
  const [estimatesModalOpen, setEstimatesModalOpen] = useState(false);
  const authorizedInvestment = blocks * BLOCK_PRICE;
  const approximateHours = blocks * BLOCK_HOURS;

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Choose how much to invest.</h2>
          <p>
            Engineering capacity controls the size of your investment. Iterations control the
            feedback loop &mdash; usually one week, occasionally two, ending in a review where we
            decide together what&rsquo;s next.
          </p>
          <p>
            Capacity is purchased in blocks rather than billable hours. Authorize the capacity
            you&rsquo;re comfortable investing; we&rsquo;ll use it to pursue the most valuable work
            and review the results with you at the end of the iteration.
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
            <span className="price-amount">${BLOCK_PRICE.toLocaleString()}</span>
            <span className="price-unit">Engineering Capacity Block</span>
            <span className="price-approx">
              &asymp; {BLOCK_HOURS} hours of engineering capacity
            </span>
            <span className="price-reference">${REFERENCE_RATE}/hour reference rate</span>
            <p className="price-note">
              A block is a bounded amount of Exalynt&rsquo;s attention and expertise. Hours are a
              familiar way to picture its size &mdash; not a timesheet, and not a fixed scope of
              work.
            </p>
          </div>

          <div className="calc-box">
            <p className="calc-eyebrow">Capacity calculator</p>

            <div className="calc-head">
              <span className="calc-label">Engineering capacity</span>
              <span className="calc-value">
                {blocks} {blocks === 1 ? "block" : "blocks"}
              </span>
            </div>

            <div
              className="capacity-options"
              role="radiogroup"
              aria-label="Engineering capacity blocks"
            >
              {BLOCK_OPTIONS.map((count) => (
                <label
                  key={count}
                  className={`capacity-option${count === blocks ? " is-selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="capacity-blocks"
                    value={count}
                    checked={count === blocks}
                    onChange={() => setBlocks(count)}
                  />
                  <span className="capacity-option-count">{count}</span>
                  <span className="capacity-option-label">{count === 1 ? "block" : "blocks"}</span>
                </label>
              ))}
            </div>

            <div className="calc-result-row">
              <p className="calc-line">&asymp; {approximateHours} hours of engineering capacity</p>
              <p className="calc-result">
                <span className="calc-result-amount">${authorizedInvestment.toLocaleString()}</span>
                <span className="calc-result-unit">authorized investment</span>
              </p>
            </div>

            <p className="calc-note">
              Authorize capacity as you need it, or prepay blocks in advance. Authorizing more than
              one block doesn&rsquo;t commit you to a long-term engagement &mdash; the iteration
              review is still where we decide what happens next.
            </p>
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
            Want to investigate something small first? A single block is a reasonable place to
            start. Capacity can change at any iteration review as needs evolve.
          </p>
        </div>
      </div>

      {estimatesModalOpen && <EstimatesModal onClose={() => setEstimatesModalOpen(false)} />}
    </section>
  );
}

export default PricingSection;
