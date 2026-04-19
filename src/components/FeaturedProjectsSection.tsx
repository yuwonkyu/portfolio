import { FeaturedProject } from "../data/projectsData";

interface FeaturedProjectsSectionProps {
  projects: FeaturedProject[];
}

const FeaturedProjectsSection = ({
  projects,
}: FeaturedProjectsSectionProps) => {
  return (
    <section id="featured-work" className="py-18 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-10 sm:mb-14">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[color:var(--accent-primary)] mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-main mb-4 leading-tight">
            문제 해결 방식과 제품 감각이 함께 보이는 대표 프로젝트
          </h2>
          <p className="text-second text-base sm:text-lg leading-relaxed max-w-3xl">
            어떤 기능을 만들었는지보다 어떤 문제를 정의했고, 어떤 판단으로
            해결했는지가 드러나는 프로젝트를 중심으로 정리했습니다.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="surface-card overflow-hidden rounded-[2.25rem]"
            >
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[color:var(--line-soft)]">
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(126,167,200,0.08),transparent_48%,rgba(216,129,77,0.08))]" />

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="accent-pill rounded-full px-3 py-1 text-sm font-medium">
                        {project.period}
                      </span>
                      <span className="warm-pill rounded-full px-3 py-1 text-sm font-medium">
                        {project.team}
                      </span>
                      <span className="rounded-full border border-[color:var(--line-soft)] bg-white/70 px-3 py-1 text-sm text-third">
                        Project {index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-main mb-3">
                      {project.title}
                    </h3>
                    <p className="text-main/90 text-base sm:text-lg leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    <div className="surface-panel rounded-[1.5rem] p-5 mb-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-third mb-2">
                        My Role
                      </p>
                      <p className="text-second leading-relaxed">{project.role}</p>
                    </div>

                    {project.imageUrl && (
                      <div className="rounded-[1.75rem] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,#fffdf8,#f7efe2)] p-4 sm:p-5">
                        <div className="overflow-hidden rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/80">
                          <img
                            src={project.imageUrl}
                            alt={project.imageAlt ?? `${project.title} 미리보기`}
                            className="h-[22rem] sm:h-[30rem] lg:h-[40rem] w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-5">
                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/72 p-5">
                      <h4 className="text-main font-semibold mb-3">문제 정의</h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
                        {project.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/72 p-5">
                      <h4 className="text-main font-semibold mb-3">해결 방식</h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
                        {project.contribution.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/72 p-5">
                      <h4 className="text-main font-semibold mb-3">협업과 판단</h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
                        {project.collaboration.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-[rgba(31,122,106,0.05)] p-5">
                      <h4 className="text-main font-semibold mb-3">
                        결과와 임팩트
                      </h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
                        {project.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold text-main">기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                              techIndex % 2 === 0 ? "accent-pill" : "warm-pill"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-2xl bg-[color:var(--accent-primary)] px-4 py-3 text-center font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                        >
                          서비스 보기
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-2xl border border-[color:var(--line-strong)] bg-white px-4 py-3 text-center font-medium text-main"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
