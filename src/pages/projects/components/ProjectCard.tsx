import type { ComponentType } from "react";
import {
  ArchiveIcon,
  ClockIcon,
  FlaskIcon,
  GitHubIcon as GitHubStatusIcon,
  LiveSignalIcon,
  ProgressDotsIcon,
  ShieldCheckIcon,
} from "../../../icons";
import { STATUS_LABEL, type Project, type ProjectStatus } from "../../../content/projects";

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
