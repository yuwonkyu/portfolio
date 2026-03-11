import { memo, useMemo, useState } from "react";

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
  const [isImageHidden, setIsImageHidden] = useState(false);
  const descriptionLines = useMemo(
    () => project.description.split("\n"),
    [project.description],
  );

  const handleImageError = () => {
    setIsImageHidden(true);
  };

  return (
    <div
      className={`bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-10 shadow-2xl border-2 ${colorScheme.border}`}
    >
      <div
        className={`h-48 sm:h-80 ${colorScheme.bg} rounded-2xl mb-4 sm:mb-8 flex items-center justify-center overflow-hidden relative shadow-lg`}
      >
        {project.imageUrl && !isImageHidden ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt || `${project.title} 프로젝트 스크린샷`}
            className="w-full h-full object-contain rounded-2xl"
            onError={handleImageError}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="text-7xl text-gray-400">🚀</div>
        )}
      </div>

      <h3
        className={`text-lg sm:text-2xl font-bold ${colorScheme.titleColor} mb-3 sm:mb-6`}
      >
        {project.title}
      </h3>

      <p
        className={`${colorScheme.descColor} mb-3 sm:mb-6 text-sm sm:text-base leading-relaxed`}
      >
        {descriptionLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < descriptionLines.length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="mb-4 sm:mb-8">
        <div className="flex flex-wrap gap-1.5 sm:gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className={`${colorScheme.techBg} ${colorScheme.techText} px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        {project.liveUrl && (
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className={`${colorScheme.buttonBg} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl ${colorScheme.buttonHover} cursor-pointer font-medium shadow-lg flex-1 text-center text-sm sm:text-base`}
          >
            Live Demo
          </button>
        )}
        {project.githubUrl && (
          <button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-gray-700 cursor-pointer font-medium shadow-lg flex-1 text-center text-sm sm:text-base"
          >
            GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(ProjectCard);
