import ProjectCard, { ProjectData } from "./ProjectCard";

interface ProjectSectionProps {
  id: string;
  title: string;
  bgGradient: string;
  projects: ProjectData[];
  colorScheme: {
    bg: string;
    border: string;
    titleColor: string;
    descColor: string;
    techBg: string;
    techText: string;
    buttonBg: string;
    buttonHover: string;
  };
}

const ProjectSection = ({
  id,
  title,
  bgGradient,
  projects,
  colorScheme,
}: ProjectSectionProps) => {
  return (
    <section id={id} className={`min-h-screen ${bgGradient} flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <h2
          className={`text-4xl font-bold ${colorScheme.titleColor} text-center mb-12`}
        >
          {title}
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              colorScheme={colorScheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
