import { useState } from "react";
import {
  BLOCK_HOURS,
  BLOCK_OPTIONS,
  HOSTING_MONTHLY,
  PACKAGES,
  getPackage,
  type PackageId,
} from "../pricing";

const DEFAULT_BLOCKS = 1;

export function CapacityCalculator() {
  const [packageId, setPackageId] = useState<PackageId>("managed");
  const [blocks, setBlocks] = useState(DEFAULT_BLOCKS);

  const selected = getPackage(packageId);
  const authorizedInvestment = blocks * selected.blockPrice;
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
          <span className="calc-result-amount">${authorizedInvestment.toLocaleString()}</span>
          <span className="calc-result-unit">authorized investment</span>
        </p>
      </div>

      <p className="calc-hosting">
        {packageId === "managed" ? (
          <>
            <strong>Managed Hosting: ${HOSTING_MONTHLY}/month</strong>, starting when your software
            goes into real business use. It isn&rsquo;t part of the amount above.
          </>
        ) : (
          <>
            <strong>No recurring Exalynt hosting fee.</strong> You host and operate the software
            yourself.
          </>
        )}
      </p>

      <p className="calc-note">
        Authorize capacity as you need it, or prepay blocks in advance. Authorizing more than one
        block doesn&rsquo;t fix a scope, a delivery date, or a long-term commitment &mdash; the
        iteration review is still where we decide what happens next.
      </p>
    </div>
  );
}
