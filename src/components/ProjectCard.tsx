export interface ProjectData {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
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

const ProjectCard = ({ project, colorScheme }: ProjectCardProps) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${colorScheme.border} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
    >
      <div
        className={`h-48 ${colorScheme.bg} rounded-xl mb-6 flex items-center justify-center`}
      >
        <span className="text-6xl">{project.icon}</span>
      </div>

      <h3 className={`text-xl font-bold ${colorScheme.titleColor} mb-4`}>
        {project.title}
      </h3>

      <p className={`${colorScheme.descColor} mb-4`}>{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`${colorScheme.techBg} ${colorScheme.techText} px-2 py-1 rounded text-sm`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {project.liveUrl && (
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className={`${colorScheme.buttonBg} text-white px-4 py-2 rounded-lg ${colorScheme.buttonHover} transition-colors`}
          >
            Live Demo
          </button>
        )}
        {project.githubUrl && (
          <button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
