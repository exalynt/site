import { CLIENT_BLOCK_PRICE, HOSTING_MONTHLY, MANAGED_BLOCK_PRICE } from "../pricing";

type Row = { label: string; managed: string; client: string };
type Group = { group: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    group: "What it costs",
    rows: [
      {
        label: "Engineering Capacity Block",
        managed: `$${MANAGED_BLOCK_PRICE.toLocaleString()}`,
        client: `$${CLIENT_BLOCK_PRICE.toLocaleString()}`,
      },
      {
        label: "Capacity reference",
        managed: "≈ 10 hours",
        client: "≈ 10 hours",
      },
      {
        label: "Monthly Exalynt hosting",
        managed: `$${HOSTING_MONTHLY} once in production`,
        client: "None",
      },
      { label: "Per-user fees", managed: "None", client: "None" },
      {
        label: "Additional infrastructure costs",
        managed: "May be passed through at cost",
        client: "Paid directly by you",
      },
    ],
  },
  {
    group: "What you own",
    rows: [
      { label: "Custom software", managed: "You own it", client: "You own it" },
      { label: "Source code", managed: "Included", client: "Included" },
      { label: "Business and customer data", managed: "Yours", client: "Yours" },
    ],
  },
  {
    group: "Who runs it",
    rows: [
      { label: "Production hosting", managed: "Exalynt", client: "You" },
      { label: "Deployments", managed: "Exalynt", client: "You" },
      { label: "Monitoring and alerting", managed: "Included", client: "You" },
      { label: "Backups", managed: "Included", client: "You" },
      { label: "Routine infrastructure operations", managed: "Included", client: "You" },
    ],
  },
  {
    group: "After launch",
    rows: [
      {
        label: "New features and changes",
        managed: "Engineering Capacity",
        client: "Engineering Capacity",
      },
      { label: "Development continues after launch", managed: "Yes", client: "Yes" },
      { label: "Leave Exalynt hosting", managed: "Anytime", client: "Not applicable" },
      { label: "Exit or buyout fee", managed: "None", client: "Not applicable" },
    ],
  },
];

export function ComparisonTable() {
  return (
    <div className="compare-block">
      <h3>Ownership is the same. Operational responsibility is different.</h3>
      <p className="compare-hint">Swipe or scroll the table sideways to compare.</p>
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th className="is-recommended">Exalynt Managed</th>
              <th>Client Managed</th>
            </tr>
          </thead>
          {GROUPS.map(({ group, rows }) => (
            <tbody key={group}>
              <tr className="compare-group-row">
                <th scope="colgroup" colSpan={3}>
                  {group}
                </th>
              </tr>
              {rows.map(({ label, managed, client }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td className="is-recommended">{managed}</td>
                  <td>{client}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
