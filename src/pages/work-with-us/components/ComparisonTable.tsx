import { MANAGED_BLOCK_PRICE, MANAGEMENT_MONTHLY, SELF_BLOCK_PRICE } from "../pricing";

const MANAGED = "Exalynt Managed";
const SELF = "Self Managed";

type Row = { label: string; managed: string; self: string };
type Group = { group: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    group: "What it costs",
    rows: [
      {
        label: "Engineering Capacity Block",
        managed: `$${MANAGED_BLOCK_PRICE.toLocaleString()}`,
        self: `$${SELF_BLOCK_PRICE.toLocaleString()}`,
      },
      {
        label: "Monthly management fee",
        managed: `$${MANAGEMENT_MONTHLY}*`,
        self: "None",
      },
      {
        label: "Infrastructure (servers, databases, email, AI usage)",
        managed: "At cost — no markup",
        self: "Paid directly by you",
      },
      { label: "Per-user fees", managed: "None", self: "None" },
    ],
  },
  {
    group: "What you own",
    rows: [
      { label: "Custom software and source code", managed: "Yours", self: "Yours" },
      { label: "Business and customer data", managed: "Yours", self: "Yours" },
    ],
  },
  {
    group: "Who does the work",
    rows: [
      { label: "Sizing and scaling the infrastructure", managed: "Exalynt", self: "You" },
      { label: "Deployments and releases", managed: "Exalynt", self: "You" },
      { label: "Monitoring, alerting, and observability", managed: "Exalynt", self: "You" },
      { label: "Backups and restore testing", managed: "Exalynt", self: "You" },
      { label: "Security patching and updates", managed: "Exalynt", self: "You" },
      { label: "Production incidents, including at night", managed: "Exalynt", self: "You" },
      { label: "Provider accounts and infrastructure billing", managed: "Exalynt", self: "You" },
    ],
  },
  {
    group: "After launch",
    rows: [
      {
        label: "New features and changes",
        managed: "Engineering Capacity",
        self: "Engineering Capacity",
      },
      {
        label: "Leaving Exalynt Managed",
        managed: "Anytime, no exit fee",
        self: "Not applicable",
      },
    ],
  },
];

export function ComparisonTable() {
  return (
    <div className="compare-block">
      <h3>Ownership is the same. The infrastructure bill is the same. The work is not.</h3>
      <p className="fine-print">
        Both models run on the same kind of infrastructure, and in both models you pay what it
        costs. The difference is who spends their evenings keeping it healthy.
      </p>
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th className="is-recommended">{MANAGED}</th>
              <th>{SELF}</th>
            </tr>
          </thead>
          {GROUPS.map(({ group, rows }) => (
            <tbody key={group}>
              <tr className="compare-group-row">
                <th scope="colgroup" colSpan={3}>
                  {group}
                </th>
              </tr>
              {rows.map(({ label, managed, self }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td className="is-recommended" data-label={MANAGED}>
                    {managed}
                  </td>
                  <td data-label={SELF}>{self}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
      <p className="fine-print">
        * Begins AFTER the software is in use in a production capacity &mdash; not during
        development.
      </p>
    </div>
  );
}
