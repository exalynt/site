import { useState } from "react";
import {
  BLOCK_HOURS,
  BLOCK_OPTIONS,
  MANAGEMENT_MONTHLY,
  PACKAGES,
  getPackage,
  type PackageId,
} from "../pricing";

const DEFAULT_BLOCKS = 1;

export function CapacityCalculator() {
  const [packageId, setPackageId] = useState<PackageId>("managed");
  const [blocks, setBlocks] = useState(DEFAULT_BLOCKS);

  const selected = getPackage(packageId);
  const totalInvestment = blocks * selected.blockPrice;
  const approximateHours = blocks * BLOCK_HOURS;

  return (
    <div className="calc-box">
      <p className="calc-eyebrow">Capacity calculator</p>

      <div className="calc-head">
        <span className="calc-label">Engagement model</span>
      </div>

      <div
        className="capacity-options capacity-options-2"
        role="radiogroup"
        aria-label="Engagement model"
      >
        {PACKAGES.map((pkg) => (
          <label
            key={pkg.id}
            className={`capacity-option capacity-option-wide${pkg.id === packageId ? " is-selected" : ""}`}
          >
            <input
              type="radio"
              name="engagement-model"
              value={pkg.id}
              checked={pkg.id === packageId}
              onChange={() => setPackageId(pkg.id)}
            />
            <span className="capacity-option-count">{pkg.name}</span>
            <span className="capacity-option-label">
              ${pkg.blockPrice.toLocaleString()} / block
            </span>
          </label>
        ))}
      </div>

      <div className="calc-head">
        <span className="calc-label">Engineering capacity</span>
        <span className="calc-value">
          {blocks} {blocks === 1 ? "block" : "blocks"}
        </span>
      </div>

      <div className="capacity-options" role="radiogroup" aria-label="Engineering capacity blocks">
        {BLOCK_OPTIONS.map((count) => (
          <label key={count} className={`capacity-option${count === blocks ? " is-selected" : ""}`}>
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
          <span className="calc-result-amount">${totalInvestment.toLocaleString()}</span>
          <span className="calc-result-unit">total investment</span>
        </p>
      </div>

      <p className="calc-hosting">
        {packageId === "managed" ? (
          <>
            <strong>Once in production: ${MANAGEMENT_MONTHLY}/month</strong> for Exalynt to run it,
            plus infrastructure at cost &mdash; servers, databases, email, and the like, billed with
            no markup. Neither is part of the amount above, and neither starts until your software
            is in real business use.
          </>
        ) : (
          <>
            <strong>No recurring Exalynt fee.</strong> You arrange, pay for, and operate the
            infrastructure yourself.
          </>
        )}
      </p>

      <p className="calc-note">
        Buy capacity as you need it, or prepay blocks in advance. Buying more than one block
        doesn&rsquo;t fix a scope, a delivery date, or a long-term commitment &mdash; the iteration
        review is still where we decide what happens next.
      </p>
    </div>
  );
}
