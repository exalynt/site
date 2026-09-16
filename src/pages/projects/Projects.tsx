import { projects, STATUS_GROUPS } from "../../content/projects";
import { ProjectCard } from "./components/ProjectCard";

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Building</p>
          <h1>What we&rsquo;re building.</h1>
          <p>
            Products, open-source software, experiments, and other things Exalynt is currently
            building or contributing to.
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
