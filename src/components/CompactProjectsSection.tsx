import { CompactProject } from "../data/projectsData";

interface CompactProjectsSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: CompactProject[];
}

const CompactProjectsSection = ({
  id,
  eyebrow,
  title,
  description,
  projects,
}: CompactProjectsSectionProps) => {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-cyan-300 mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-main mb-4">
            {title}
          </h2>
          <p className="text-second text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="surface-card rounded-[1.75rem] border border-slate-800/80 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-second text-xs">
                  {project.category}
                </span>
                <div className="flex gap-2 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-300 hover:text-sky-200"
                    >
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-300 hover:text-sky-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-main mb-3">
                {project.title}
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                {project.summary}
              </p>

              <div className="space-y-3 text-second text-sm leading-relaxed mb-5">
                {project.description.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-800 text-second text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto space-y-3 text-sm leading-relaxed">
                {project.collaborationNote && (
                  <p className="text-second">
                    <span className="text-main font-medium">협업 경험</span>{" "}
                    {project.collaborationNote}
                  </p>
                )}
                {project.learningNote && (
                  <p className="text-second">
                    <span className="text-main font-medium">배운 점</span>{" "}
                    {project.learningNote}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactProjectsSection;
