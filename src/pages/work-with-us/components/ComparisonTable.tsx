import { HOSTING_MONTHLY, MANAGED_BLOCK_PRICE, SELF_BLOCK_PRICE } from "../pricing";

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
        label: "Monthly Exalynt hosting",
        managed: `$${HOSTING_MONTHLY}*`,
        self: "None",
      },
      {
        label: "Additional infrastructure costs",
        managed: "May be passed through at cost",
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
    group: "Who runs it",
    rows: [
      {
        label: "Hosting, deployments, monitoring, and backups",
        managed: "Exalynt",
        self: "You",
      },
      {
        label: "Production environment and incidents",
        managed: "Exalynt",
        self: "You",
      },
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
        label: "Leaving Exalynt hosting",
        managed: "Anytime, no exit fee",
        self: "Not applicable",
      },
    ],
  },
];

export function ComparisonTable() {
  return (
    <div className="compare-block">
      <h3>Ownership is the same. Operational responsibility is different.</h3>
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
