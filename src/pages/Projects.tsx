import { projects, STATUS_GROUPS, STATUS_LABEL, type Project } from "../content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-card-head">
        <h3>{project.name}</h3>
        <span className={`status project-status-${project.status}`}>
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

        {STATUS_GROUPS.map(({ status, title }) => {
          const group = projects.filter((project) => project.status === status);
          if (group.length === 0) return null;
          return (
            <div className="project-group" key={status}>
              <h2>{title}</h2>
              <div className="project-grid">
                {group.map((project) => (
                  <ProjectCard project={project} key={project.slug ?? project.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
