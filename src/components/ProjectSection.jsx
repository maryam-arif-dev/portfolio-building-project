import ProjectSectionCards from "./ProjectSectionCards";

export default function ProjectSection({ infoProjects }) {
  return (
    <div className="general-project-container" id="project">
      <div className="project-header">Projects</div>
      <div className="project-items">
        {infoProjects.map((projects, index) => (
          <ProjectSectionCards
            key={index}
            title={projects.title}
            description={projects.teckStackTaks}
            link={projects.link}
          ></ProjectSectionCards>
        ))}
      </div>
    </div>
  );
}
