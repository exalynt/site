import { useContactModal } from "../../../useContactModal";
import { BLOCK_HOURS, PACKAGES } from "../pricing";

export function PackageCards() {
  const { openContactModal } = useContactModal();

  return (
    <div className="package-grid">
      {PACKAGES.map((pkg) => (
        <article className={`package-card${pkg.recommended ? " is-recommended" : ""}`} key={pkg.id}>
          {pkg.recommended && <span className="package-badge">Recommended</span>}
          <h3>{pkg.name}</h3>
          <p className="package-subline">{pkg.subline}</p>

          <div className="package-price">
            <span className="package-price-amount">${pkg.blockPrice.toLocaleString()}</span>
            <span className="package-price-unit">per Engineering Capacity Block</span>
            <span className="package-price-approx">
              &asymp; {BLOCK_HOURS} hours of engineering capacity &mdash; a familiar reference, not
              a timesheet
            </span>
          </div>

          <div className="package-price package-price-secondary">
            <span className="package-price-amount">{pkg.monthly}</span>
            <span className="package-price-unit">{pkg.monthlyNote}</span>
          </div>

          <ul className="check-list">
            {pkg.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button
            type="button"
            className={`btn ${pkg.recommended ? "btn-primary" : "btn-secondary"}`}
            onClick={openContactModal}
          >
            {pkg.cta} →
          </button>
        </article>
      ))}
    </div>
  );
}
