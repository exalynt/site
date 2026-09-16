const CONTACT_EMAIL = "john.peterson@exalynt.com";

const CLIENT_OWNED_POINTS = [
  "Client owns the custom software/deliverables defined by the agreement.",
  "Client receives the source code.",
  "Client can operate the software independently.",
  "Exalynt can continue developing or operating it if desired.",
  "Third-party software remains subject to its respective licenses.",
  "Exalynt retains ownership of its pre-existing IP and general-purpose tools/libraries.",
];

const HOSTED_POINTS = [
  "Own the underlying software",
  "Invest in its continued development",
  "Host and operate the service",
  "Maintain infrastructure",
  "Provide updates and improvements",
  "Offer the product to additional customers",
];

function OwnershipSection() {
  return (
    <section id="ownership" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Ownership</p>
          <h2>Who owns what we build?</h2>
          <p>
            Different problems call for different arrangements. Exalynt supports two broad models.
          </p>
        </div>

        <div className="two-col-grid">
          <div className="ownership-card">
            <p className="ownership-subtitle">You own it.</p>
            <h3>Client-Owned Software</h3>
            <p>
              For organizations that want custom software built specifically for their business. The
              client funds the engineering work at the standard hourly rate.
            </p>
            <ul className="check-list">
              {CLIENT_OWNED_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-secondary">
              Build Software You Own →
            </a>
          </div>

          <div className="ownership-card">
            <p className="ownership-subtitle">Let Exalynt operate it.</p>
            <h3>Exalynt-Owned &amp; Hosted Software</h3>
            <p>
              Sometimes a client problem represents an opportunity for software that could provide
              value beyond a single organization. When Exalynt believes a solution has broader
              product potential, Exalynt may offer to invest in it as a product rather than asking
              the client to fund the entire cost of owning and operating custom software.
            </p>
            <ul className="check-list">
              {HOSTED_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="ownership-note">
              This option is offered selectively by Exalynt, based on the opportunity &mdash; not as
              a way to avoid funding highly specialized software.
            </p>
          </div>
        </div>

        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Client-Owned</th>
                <th>Exalynt Hosted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Software ownership</td>
                <td>Client</td>
                <td>Exalynt</td>
              </tr>
              <tr>
                <td>Development</td>
                <td>$200/hour</td>
                <td>Depends on arrangement</td>
              </tr>
              <tr>
                <td>Hosting</td>
                <td>Client or separately arranged</td>
                <td>Exalynt</td>
              </tr>
              <tr>
                <td>Maintenance</td>
                <td>Client or hourly Exalynt engagement</td>
                <td>Exalynt</td>
              </tr>
              <tr>
                <td>Product direction</td>
                <td>Client controls their custom software</td>
                <td>Exalynt manages the broader product</td>
              </tr>
              <tr>
                <td>Can Exalynt sell it to others?</td>
                <td>Generally no, for client-specific deliverables</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Client owns their data</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="contact-note">
          Contractual terms ultimately govern ownership. Actual agreements will define the specifics
          of any engagement.
        </p>
      </div>
    </section>
  );
}

export default OwnershipSection;
