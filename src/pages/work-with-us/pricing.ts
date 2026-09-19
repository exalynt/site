/*
 * Single source of truth for the two standard engagement models.
 * Every price shown on the Work With Exalynt page reads from here.
 */

export const BLOCK_HOURS = 10;
export const MANAGEMENT_MONTHLY = 199;
export const BLOCK_OPTIONS = [1, 2, 3, 4];

export type PackageId = "managed" | "self";

export type Package = {
  id: PackageId;
  name: string;
  subline: string;
  blockPrice: number;
  monthly: string;
  monthlyNote: string;
  recommended: boolean;
  highlights: string[];
  cta: string;
};

/*
 * Infrastructure is everything the software runs on and pays other companies to
 * use. Exalynt bills it at cost, so these are described in plain terms rather
 * than in cloud-provider vocabulary.
 */
export type InfrastructureItem = { label: string; detail: string };

export const INFRASTRUCTURE_ITEMS: InfrastructureItem[] = [
  {
    label: "Servers",
    detail: "The computers that actually run your software, rented from a cloud provider.",
  },
  {
    label: "Databases",
    detail: "Where your business and customer information is stored.",
  },
  {
    label: "File storage",
    detail: "Room for uploads, images, documents, exports, and backup copies.",
  },
  {
    label: "Email",
    detail: "Messages your software sends: receipts, notifications, password resets.",
  },
  {
    label: "Text messages",
    detail: "Per-message charges when your software texts customers or staff.",
  },
  {
    label: "AI usage",
    detail: "Charged per use when your software asks an AI model to do something.",
  },
  {
    label: "Domain and certificates",
    detail: "Your web address and the security certificate behind the padlock.",
  },
  {
    label: "Other paid services",
    detail: "Anything else your software depends on — payments, maps, mapping data, and the like.",
  },
];

/*
 * The operational work the $199/month management fee covers — stated as work
 * someone has to do, because on Self Managed that someone is the client.
 */
export const MANAGEMENT_COVERS = [
  "Sizing the infrastructure so it's big enough to work and small enough not to waste money",
  "Deployments and releases, including rollbacks when something goes wrong",
  "Monitoring and alerting, so problems are noticed before your customers notice them",
  "Watching performance and errors, and telling you what they mean in plain language",
  "Backups, and confirming the backups can actually be restored",
  "Security patching, dependency updates, and certificate renewals",
  "Scaling up when usage grows and back down when it doesn't",
  "Responding to production incidents",
  "Setting up and keeping the provider accounts and billing in order",
];

export const PACKAGES: Package[] = [
  {
    id: "managed",
    name: "Exalynt Managed",
    subline: "You own the software. Exalynt runs it.",
    blockPrice: 1850,
    monthly: `$${MANAGEMENT_MONTHLY}/month`,
    monthlyNote: "Management fee, plus infrastructure billed at cost, once in production",
    recommended: true,
    highlights: [
      "You own the custom software",
      "Source code included",
      "Exalynt runs and operates production",
      "Capacity sizing, deployments, monitoring, observability, and backups included",
      "Infrastructure billed at cost — no markup, no resale margin",
      "No per-user fees",
      "Management fee starts when your software goes into real business use",
      "Keep buying capacity and shipping improvements after launch",
      "Leave whenever you want — no exit fee",
    ],
    cta: "Build with Exalynt Managed",
  },
  {
    id: "self",
    name: "Self Managed",
    subline: "You own the software and operate it wherever you choose.",
    blockPrice: 2250,
    monthly: "No monthly fee",
    monthlyNote: "You arrange and pay for infrastructure yourself",
    recommended: false,
    highlights: [
      "You own the custom software",
      "Source code included",
      "You host and operate production",
      "You size, monitor, patch, back up, and pay for the infrastructure",
      "No recurring Exalynt management fee",
      "Exalynt stays available for future Engineering Capacity",
    ],
    cta: "Talk about Self Managed",
  },
];

export function getPackage(id: PackageId): Package {
  return PACKAGES.find((pkg) => pkg.id === id) ?? PACKAGES[0];
}

export const MANAGED_BLOCK_PRICE = getPackage("managed").blockPrice;
export const SELF_BLOCK_PRICE = getPackage("self").blockPrice;
