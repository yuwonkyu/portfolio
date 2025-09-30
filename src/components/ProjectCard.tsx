export interface ProjectData {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string; // 프로젝트 이미지 URL 추가
  imageAlt?: string; // SEO를 위한 이미지 alt 텍스트
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
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const iconSpan = parent.querySelector(".fallback-icon") as HTMLElement;
      if (iconSpan) {
        iconSpan.style.display = "block";
      }
    }
  };

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${colorScheme.border} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
    >
      <div
        className={`h-48 ${colorScheme.bg} rounded-xl mb-6 flex items-center justify-center overflow-hidden relative`}
      >
        {project.imageUrl ? (
          <>
            <img
              src={project.imageUrl}
              alt={project.imageAlt || `${project.title} 프로젝트 스크린샷`}
              className="w-full h-full object-cover rounded-xl"
              onError={handleImageError}
            />
            <span className="fallback-icon text-6xl absolute hidden">
              {project.icon}
            </span>
          </>
        ) : (
          <span className="text-6xl">{project.icon}</span>
        )}
      </div>

      <h3 className={`text-xl font-bold ${colorScheme.titleColor} mb-4`}>
        {project.title}
      </h3>

      <p
        className={`${colorScheme.descColor} mb-4 text-sm leading-relaxed min-h-[4rem]`}
      >
        {project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < project.description.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

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
            className={`${colorScheme.buttonBg} text-white px-4 py-2 rounded-lg ${colorScheme.buttonHover} transition-colors cursor-pointer`}
          >
            Live Demo
          </button>
        )}
        {project.githubUrl && (
          <button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
          >
            GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
