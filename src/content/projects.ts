// Add real projects here as they're ready to share. Each entry below is a
// placeholder — replace the name/description/links/technologies with the
// actual project before it ships, or delete the entry if it's not ready.

export type ProjectStatus =
  | "active"
  | "in-development"
  | "open-source"
  | "experiment"
  | "coming-soon"
  | "maintained"
  | "archived";

export type Project = {
  name: string;
  slug?: string;
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  technologies?: string[];
  website?: string;
  github?: string;
  logo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Harvor",
    slug: "harvor",
    description:
      "Production-ready foundational services — authorization, organizations, audit logs, and events — so engineering teams stop rebuilding the same plumbing for every new product. Fully observable, configurable, and open source under Apache 2.0.",
    status: "in-development",
    website: "https://harvor.io",
    github: "https://github.com/harvor-io",
    logo: "/harvor-logo.svg",
    featured: true,
  },
];

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: "Active",
  "in-development": "In Development",
  "open-source": "Open Source",
  experiment: "Experiment",
  "coming-soon": "Coming Soon",
  maintained: "Maintained",
  archived: "Archived",
};

export const STATUS_GROUPS: { status: ProjectStatus; title: string }[] = [
  { status: "active", title: "Active" },
  { status: "in-development", title: "In Development" },
  { status: "open-source", title: "Open Source" },
  { status: "experiment", title: "Experiments" },
  { status: "coming-soon", title: "Coming Soon" },
  { status: "archived", title: "Past" },
];
