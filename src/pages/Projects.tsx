import type { ComponentType } from "react";
import {
  ArchiveIcon,
  ClockIcon,
  FlaskIcon,
  GitHubIcon as GitHubStatusIcon,
  LiveSignalIcon,
  ProgressDotsIcon,
  ShieldCheckIcon,
} from "../icons";
import {
  projects,
  STATUS_GROUPS,
  STATUS_LABEL,
  type Project,
  type ProjectStatus,
} from "../content/projects";

const STATUS_ICON: Record<ProjectStatus, ComponentType<{ className?: string }>> = {
  active: LiveSignalIcon,
  "in-development": ProgressDotsIcon,
  "open-source": GitHubStatusIcon,
  experiment: FlaskIcon,
  "coming-soon": ClockIcon,
  maintained: ShieldCheckIcon,
  archived: ArchiveIcon,
};

export function ProjectCard({ project }: { project: Project }) {
  const StatusIcon = STATUS_ICON[project.status];
  return (
    <div className="project-card">
      <div className="project-card-head">
        <div className="project-card-title">
          {project.logo && <img src={project.logo} alt="" className="project-card-logo" />}
          <h3>{project.name}</h3>
        </div>
        <span className={`status project-status-${project.status}`}>
          <StatusIcon className="status-icon" />
          {STATUS_LABEL[project.status]}
        </span>
      </div>
      <p>{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <p className="project-tags">{project.technologies.join(" · ")}</p>
      )}
      {(project.github || project.website) && (
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noreferrer">
              Visit Project ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Building</p>
          <h1>Things I&rsquo;m building.</h1>
          <p>
            Projects, open-source software, experiments, and other things I&rsquo;m currently
            exploring.
          </p>
        </div>

        <div className="project-grid">
          {STATUS_GROUPS.flatMap(({ status }) =>
            projects.filter((project) => project.status === status),
          ).map((project) => (
            <ProjectCard project={project} key={project.slug ?? project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
