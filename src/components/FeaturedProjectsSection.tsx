import { FeaturedProject } from "../data/projectsData";

interface FeaturedProjectsSectionProps {
  projects: FeaturedProject[];
}

const FeaturedProjectsSection = ({
  projects,
}: FeaturedProjectsSectionProps) => {
  return (
    <section id="featured-work" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-sky-300 mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-main mb-4">
            실제 운영 서비스
          </h2>
          <p className="text-second text-base sm:text-lg leading-relaxed">
            직접 운영하거나 의뢰를 받아 제작한 서비스들입니다. 단순히 화면을
            만드는 데 그치지 않고, 사용 목적과 운영 흐름을 함께 고려해 구조를
            설계했습니다.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="surface-card rounded-[2rem] border border-slate-800/80 overflow-hidden"
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0">
                <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 text-sm">
                      {project.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-second text-sm">
                      {project.team}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-main mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <p className="text-second leading-relaxed mb-6">
                    {project.role}
                  </p>

                  {project.imageUrl && (
                    <div className="h-[24rem] sm:h-[36rem] lg:h-[48rem] rounded-[1.5rem] overflow-hidden border border-slate-800/70 bg-slate-950/80 p-4 sm:p-5">
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt ?? `${project.title} 미리보기`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="space-y-7">
                    <div>
                      <h4 className="text-main font-semibold mb-3">
                        어떤 문제를 풀었는지
                      </h4>
                      <ul className="space-y-2 text-second leading-relaxed">
                        {project.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-main font-semibold mb-3">
                        프론트엔드 기여
                      </h4>
                      <ul className="space-y-2 text-second leading-relaxed">
                        {project.contribution.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-main font-semibold mb-3">
                        협업과 조율
                      </h4>
                      <ul className="space-y-2 text-second leading-relaxed">
                        {project.collaboration.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-main font-semibold mb-3">결과</h4>
                      <ul className="space-y-2 text-second leading-relaxed">
                        {project.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-main font-semibold mb-3">기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-full bg-slate-800 text-second text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-xl bg-sky-600 hover:bg-sky-500 transition-colors text-white text-center px-4 py-3 font-medium"
                        >
                          서비스 보기
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors text-main text-center px-4 py-3 font-medium"
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
