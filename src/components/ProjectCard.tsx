export interface ProjectData {
  id: string;
  title: string;
  description: string;
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
      parent.innerHTML = '<div class="text-7xl text-gray-400">🚀</div>';
    }
  };

  return (
    <div
      className={`bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-2 ${colorScheme.border} hover:shadow-3xl transition-all duration-500 hover:scale-102 hover:-translate-y-2 group min-h-[600px]`}
    >
      <div
        className={`h-80 ${colorScheme.bg} rounded-2xl mb-8 flex items-center justify-center overflow-hidden relative shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt || `${project.title} 프로젝트 스크린샷`}
            className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="text-7xl text-gray-400">🚀</div>
        )}
      </div>

      <h3
        className={`text-2xl font-bold ${colorScheme.titleColor} mb-6 group-hover:text-opacity-80 transition-all duration-300`}
      >
        {project.title}
      </h3>

      <p
        className={`${colorScheme.descColor} mb-6 text-base leading-relaxed min-h-[6rem] group-hover:text-opacity-90 transition-all duration-300`}
      >
        {project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < project.description.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="mb-8">
        {/* 첫 번째 줄 */}
        <div className="flex flex-wrap gap-3 mb-3">
          {project.technologies
            .slice(0, Math.ceil(project.technologies.length / 2))
            .map((tech, index) => (
              <span
                key={index}
                className={`${colorScheme.techBg} ${colorScheme.techText} px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105`}
              >
                {tech}
              </span>
            ))}
        </div>
        {/* 두 번째 줄 */}
        <div className="flex flex-wrap gap-3">
          {project.technologies
            .slice(Math.ceil(project.technologies.length / 2))
            .map((tech, index) => (
              <span
                key={index + Math.ceil(project.technologies.length / 2)}
                className={`${colorScheme.techBg} ${colorScheme.techText} px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105`}
              >
                {tech}
              </span>
            ))}
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        {project.liveUrl && (
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className={`${colorScheme.buttonBg} text-white px-6 py-3 rounded-xl ${colorScheme.buttonHover} transition-all duration-300 cursor-pointer font-medium shadow-lg hover:shadow-xl hover:scale-105 flex-1 text-center`}
          >
            Live Demo
          </button>
        )}
        {project.githubUrl && (
          <button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer font-medium shadow-lg hover:shadow-xl hover:scale-105 flex-1 text-center"
          >
            GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
