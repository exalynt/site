// Add real projects here as they're ready to share. Each entry below is a
// placeholder — replace the name/description/links/technologies with the
// actual project before it ships, or delete the entry if it's not ready.

export type ProjectStatus =
  "active" | "open-source" | "experiment" | "coming-soon" | "maintained" | "archived";

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
    name: "Project details coming soon",
    description:
      "The first thing built under the Exalynt name is still taking shape. Check back soon for details.",
    status: "coming-soon",
    featured: true,
  },
  {
    name: "A second project in the works",
    description:
      "Another idea currently being explored. More to share once there's something worth showing.",
    status: "coming-soon",
    featured: true,
  },
];

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: "Active",
  "open-source": "Open Source",
  experiment: "Experiment",
  "coming-soon": "Coming Soon",
  maintained: "Maintained",
  archived: "Archived",
};

export const STATUS_GROUPS: { status: ProjectStatus; title: string }[] = [
  { status: "active", title: "Active" },
  { status: "open-source", title: "Open Source" },
  { status: "experiment", title: "Experiments" },
  { status: "coming-soon", title: "Coming Soon" },
  { status: "archived", title: "Past" },
];
