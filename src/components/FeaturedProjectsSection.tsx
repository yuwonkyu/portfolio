import { FeaturedProject } from "../data/projectsData";

interface FeaturedProjectsSectionProps {
  projects: FeaturedProject[];
}

const FeaturedProjectsSection = ({
  projects,
}: FeaturedProjectsSectionProps) => {
  return (
<<<<<<< HEAD
    <section id="featured-work" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-primary)]">
            Featured Work
          </p>
          <h2 className="mb-4 max-w-4xl text-[2rem] font-bold leading-[1.18] tracking-[-0.03em] text-main sm:text-[2.75rem] lg:max-w-3xl">
            문제를 어떻게 정리하고 어떤 판단으로 풀어냈는지 보여주는 프로젝트
          </h2>
          <p className="max-w-2xl text-[1rem] leading-7 text-second sm:text-[1.04rem]">
            기능을 많이 나열하기보다 문제 정의, 해결 방식, 협업 과정, 결과를
            읽기 쉽게 정리했습니다. 면접관이 맥락을 빠르게 파악할 수 있는 흐름을
            목표로 구성했습니다.
=======
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
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
<<<<<<< HEAD
              className="surface-card overflow-hidden rounded-[2.1rem]"
            >
              <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                <div className="border-b border-[color:var(--line-soft)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
                  <div className="mb-5 flex flex-wrap items-center gap-2.5">
                    <span className="badge-soft rounded-full px-3 py-1 text-sm font-medium">
                      {project.period}
                    </span>
                    <span className="badge-muted rounded-full px-3 py-1 text-sm font-medium">
                      {project.team}
                    </span>
                    <span className="badge-muted rounded-full px-3 py-1 text-sm">
                      Project {index + 1}
                    </span>
                  </div>

                  <h3 className="mb-3 text-[1.72rem] font-bold leading-tight tracking-[-0.02em] text-main sm:text-[2.05rem]">
                    {project.title}
                  </h3>
                  <p className="mb-5 max-w-2xl text-[1rem] leading-7 text-second sm:text-[1.03rem]">
                    {project.summary}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="badge-soft rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="surface-panel mb-6 rounded-[1.45rem] p-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-third">
                      My Role
                    </p>
                    <p className="text-[0.97rem] leading-7 text-second">{project.role}</p>
                  </div>

                  {project.imageUrl && (
                    <div className="rounded-[1.55rem] border border-[color:var(--line-soft)] bg-white/72 p-4">
                      <div className="overflow-hidden rounded-[1.2rem] border border-[color:var(--line-soft)] bg-white">
                        <img
                          src={project.imageUrl}
                          alt={project.imageAlt ?? `${project.title} 미리보기`}
                          className="h-[19rem] w-full object-contain sm:h-[25rem] lg:h-[32rem]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
=======
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
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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

<<<<<<< HEAD
                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="grid gap-4">
                    <div className="rounded-[1.4rem] border border-[color:var(--line-soft)] bg-white/78 p-5">
                      <h4 className="mb-3 text-base font-semibold text-main">문제 정의</h4>
                      <ul className="list-disc space-y-2 pl-5 text-[0.95rem] leading-7 text-second">
=======
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-5">
                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/72 p-5">
                      <h4 className="text-main font-semibold mb-3">문제 정의</h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                        {project.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    <div className="rounded-[1.4rem] border border-[color:var(--line-soft)] bg-white/78 p-5">
                      <h4 className="mb-3 text-base font-semibold text-main">해결 방식</h4>
                      <ul className="list-disc space-y-2 pl-5 text-[0.95rem] leading-7 text-second">
=======
                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/72 p-5">
                      <h4 className="text-main font-semibold mb-3">해결 방식</h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                        {project.contribution.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    <div className="rounded-[1.4rem] border border-[color:var(--line-soft)] bg-white/78 p-5">
                      <h4 className="mb-3 text-base font-semibold text-main">
                        협업과 판단
                      </h4>
                      <ul className="list-disc space-y-2 pl-5 text-[0.95rem] leading-7 text-second">
=======
                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/72 p-5">
                      <h4 className="text-main font-semibold mb-3">협업과 판단</h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                        {project.collaboration.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    <div className="rounded-[1.4rem] border border-[color:var(--line-soft)] bg-[rgba(41,95,86,0.04)] p-5">
                      <h4 className="mb-3 text-base font-semibold text-main">
                        결과와 임팩트
                      </h4>
                      <ul className="list-disc space-y-2 pl-5 text-[0.95rem] leading-7 text-second">
=======
                    <div className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-[rgba(31,122,106,0.05)] p-5">
                      <h4 className="text-main font-semibold mb-3">
                        결과와 임팩트
                      </h4>
                      <ul className="space-y-2 text-second leading-relaxed list-disc pl-5">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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
<<<<<<< HEAD
                            className="rounded-xl border border-[color:var(--line-strong)] bg-white px-3 py-1.5 text-sm font-medium text-second"
=======
                            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                              techIndex % 2 === 0 ? "accent-pill" : "warm-pill"
                            }`}
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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
<<<<<<< HEAD
                          className="flex-1 rounded-2xl bg-[color:var(--accent-primary)] px-4 py-3 text-center text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
=======
                          className="flex-1 rounded-2xl bg-[color:var(--accent-primary)] px-4 py-3 text-center font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                        >
                          서비스 보기
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
<<<<<<< HEAD
                          className="flex-1 rounded-2xl border border-[color:var(--line-strong)] bg-white px-4 py-3 text-center text-sm font-semibold text-main"
=======
                          className="flex-1 rounded-2xl border border-[color:var(--line-strong)] bg-white px-4 py-3 text-center font-medium text-main"
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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
