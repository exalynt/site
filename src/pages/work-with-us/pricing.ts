/*
 * Single source of truth for the two standard engagement models.
 * Every price shown on the Work With Exalynt page reads from here.
 */

export const BLOCK_HOURS = 10;
export const HOSTING_MONTHLY = 299;
export const BLOCK_OPTIONS = [1, 2, 3, 4];

export type PackageId = "managed" | "client";

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

export const PACKAGES: Package[] = [
  {
    id: "managed",
    name: "Exalynt Managed",
    subline: "You own the software. Exalynt runs it.",
    blockPrice: 1850,
    monthly: `$${HOSTING_MONTHLY}/month`,
    monthlyNote: "Managed Hosting, once your software is in production",
    recommended: true,
    highlights: [
      "You own the custom software",
      "Source code included",
      "Exalynt hosts and operates production",
      "Deployments, monitoring, and backups included",
      "No per-user fees",
      "Additional infrastructure costs may be passed through at cost",
      "Hosting starts when your software goes into real business use",
      "Keep buying capacity and shipping improvements after launch",
      "Leave hosting whenever you want — no exit fee",
    ],
    cta: "Build with Exalynt Managed",
  },
  {
    id: "client",
    name: "Client Managed",
    subline: "You own the software and operate it wherever you choose.",
    blockPrice: 2250,
    monthly: "No monthly fee",
    monthlyNote: "You arrange hosting with the provider of your choice",
    recommended: false,
    highlights: [
      "You own the custom software",
      "Source code included",
      "You host and operate production",
      "You manage infrastructure, monitoring, and backups",
      "No recurring Exalynt hosting fee",
      "Exalynt stays available for future Engineering Capacity",
    ],
    cta: "Talk about Client Managed",
  },
];

export function getPackage(id: PackageId): Package {
  return PACKAGES.find((pkg) => pkg.id === id) ?? PACKAGES[0];
}

export const MANAGED_BLOCK_PRICE = getPackage("managed").blockPrice;
export const CLIENT_BLOCK_PRICE = getPackage("client").blockPrice;
