import { getProjects } from "@/entities/project/api";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectsList from "@/components/ui/ProjectsList";

const Projects = async () => {
  const projects = await getProjects();
  const featuredProjectIds = [11, 52, 76];
  const orderedProjects = [...projects].sort((leftProject, rightProject) => {
    const leftIndex = featuredProjectIds.indexOf(leftProject.id);
    const rightIndex = featuredProjectIds.indexOf(rightProject.id);
    const leftRank = leftIndex === -1 ? featuredProjectIds.length : leftIndex;
    const rightRank = rightIndex === -1 ? featuredProjectIds.length : rightIndex;

    return leftRank - rightRank;
  });

  return (
    <section id="projects">
      <div className="mx-auto max-w-360 px-[90px] max-[1395px]:px-0">
        <h2 className="title">Проекты</h2>

        <ProjectsList>
          {orderedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              variant={
                project.id === 11
                  ? "featured"
                  : featuredProjectIds.includes(project.id)
                    ? "compact"
                    : "default"
              }
            />
          ))}
        </ProjectsList>
      </div>
    </section>
  );
};

export default Projects;
