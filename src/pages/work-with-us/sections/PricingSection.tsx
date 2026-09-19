import { useState } from "react";
import { InfoIcon } from "../../../icons";
import { EstimatesModal } from "../components/EstimatesModal";
import { PackageCards } from "../components/PackageCards";
import { ComparisonTable } from "../components/ComparisonTable";
import { CapacityCalculator } from "../components/CapacityCalculator";
import { MANAGEMENT_MONTHLY } from "../pricing";

function PricingSection() {
  const [estimatesModalOpen, setEstimatesModalOpen] = useState(false);

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Choose how much to invest.</h2>
          <p>
            Exalynt sells engineering capacity, bought in blocks. You buy a block, we spend it on
            the most valuable work we can do for you, and you decide after each iteration whether to
            buy another.
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
          <p>
            <strong>What does &ldquo;infrastructure at cost&rdquo; mean?</strong> Your software
            rents things from other companies to do its job &mdash; servers, databases, file
            storage, email, text messages, AI usage, your domain. On Exalynt Managed those charges
            are passed through at exactly what they cost, with no markup and no percentage. It is
            the same bill you would be paying if you ran the software yourself. The $
            {MANAGEMENT_MONTHLY} a month is what Exalynt charges to run it for you.
          </p>
        </div>

        <ComparisonTable />

        <div className="pricing-tools">
          <div className="pricing-tools-copy">
            <h3>What would it cost to start?</h3>
            <p>
              Pick a model and the amount of capacity you&rsquo;re comfortable buying. A single
              block is a reasonable place to begin &mdash; enough to investigate a problem, build
              something small, or find out whether building anything is the right answer.
            </p>
            <p>
              There&rsquo;s no minimum and no maximum. If you need more capacity than the calculator
              shows, tell us what you&rsquo;re working on and we&rsquo;ll size it together.
            </p>
          </div>
          <CapacityCalculator />
        </div>
      </div>

      {estimatesModalOpen && <EstimatesModal onClose={() => setEstimatesModalOpen(false)} />}
    </section>
  );
}

export default PricingSection;
