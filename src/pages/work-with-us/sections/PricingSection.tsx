import { useState } from "react";
import { InfoIcon } from "../../../icons";
import { EstimatesModal } from "../components/EstimatesModal";
import { PackageCards } from "../components/PackageCards";
import { ComparisonTable } from "../components/ComparisonTable";
import { CapacityCalculator } from "../components/CapacityCalculator";

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
  const [estimatesModalOpen, setEstimatesModalOpen] = useState(false);

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Choose how much to invest.</h2>
          <p>
            Exalynt sells engineering capacity, purchased in blocks. One Engineering Capacity Block
            is a bounded amount of our attention and expertise &mdash; roughly ten hours&rsquo;
            worth, as a familiar way to picture its size.
          </p>
          <p>
            You decide how much capacity to authorize. We decide how to spend it on the most
            valuable work. At the end of each iteration &mdash; usually one week, occasionally two
            &mdash; we show you what we did and what we learned, and decide together what&rsquo;s
            next.
          </p>
          <p>
            No giant upfront project quote. No timesheets to reconcile. No long-term commitment. You
            control the investment one block at a time.
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

        <PackageCards />

        <div className="package-footnote">
          <p>
            <strong>Why is Managed capacity less expensive?</strong> Because we can build and
            operate inside a standardized production environment, instead of designing around
            &mdash; and handing off to &mdash; a separate hosting stack. The Managed rate applies
            while Exalynt is building toward and operating the production environment.
          </p>
        </div>

        <ComparisonTable />

        <div className="pricing-tools">
          <div className="pricing-tools-copy">
            <h3>What would it cost to start?</h3>
            <p>
              Pick a model and the amount of capacity you&rsquo;re comfortable authorizing. A single
              block is a reasonable place to begin &mdash; enough to investigate a problem, build
              something small, or find out whether building anything is the right answer.
            </p>
            <h3 className="pricing-tools-subhead">Capacity can be spent on</h3>
            <ul className="check-list check-list-2col">
              {PRICING_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <CapacityCalculator />
        </div>
      </div>

      {estimatesModalOpen && <EstimatesModal onClose={() => setEstimatesModalOpen(false)} />}
    </section>
  );
}

export default PricingSection;
