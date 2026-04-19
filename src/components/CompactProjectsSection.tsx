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
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[color:var(--accent-primary)] mb-3">
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
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="surface-card rounded-[1.85rem] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
<<<<<<< HEAD
                <span className="badge-soft rounded-full px-3 py-1 text-xs font-medium">
=======
                <span className="accent-pill rounded-full px-3 py-1 text-xs font-medium">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                  {project.category}
                </span>
                <span className="text-third text-xs">#{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-main mb-3">
                {project.title}
              </h3>
              <p className="text-second leading-relaxed mb-4">
                {project.summary}
              </p>

              <div className="space-y-3 text-second text-sm leading-relaxed mb-5">
                {project.description.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
<<<<<<< HEAD
                    className="rounded-xl border border-[color:var(--line-strong)] bg-white px-3 py-1 text-xs font-medium text-second"
=======
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      techIndex % 2 === 0 ? "accent-pill" : "warm-pill"
                    }`}
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto space-y-3 text-sm leading-relaxed mb-5">
                {project.collaborationNote && (
                  <p className="text-second">
                    <span className="text-main font-medium">협업 관점</span>{" "}
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

              <div className="flex gap-3 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-[color:var(--accent-primary)] px-4 py-2.5 text-center font-medium text-white"
                  >
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-[color:var(--line-strong)] bg-white px-4 py-2.5 text-center font-medium text-main"
                  >
                    GitHub
                  </a>
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
