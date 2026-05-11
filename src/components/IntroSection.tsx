import TechStack from "./TechStack";

interface IntroSectionProps {
  avatar?: string;
  title?: string;
  descriptions?: string[];
  strengths?: string[];
  className?: string;
}

const IntroSection = ({
  avatar = "",
  title = "클라이언트 납품부터 앱 스토어 출시까지, 완성된 제품을 만드는 프론트엔드 개발자입니다.",
  descriptions = [
    "React · Next.js 기반 웹 서비스 납품 경험과 React Native 앱 Google Play 출시 경험을 보유하고 있습니다.",
    "사용자 흐름 설계, 유지보수 가능한 컴포넌트 구조, 빠른 납기 대응을 강점으로 다양한 목적의 제품을 완성해 왔습니다.",
    "클라이언트 커뮤니케이션부터 팀장 경험까지, 다양한 협업 환경에 빠르게 적응하고 역할을 수행합니다.",
  ],
  strengths = [],
  className = "",
}: IntroSectionProps) => {
  return (
    <section
      id="intro"
      className={`relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28 ${className}`}
    >
      <div className="hero-orb left-[8%] top-[10%] h-40 w-40 bg-[rgba(41,95,86,0.12)]" />
      <div className="hero-orb bottom-[10%] right-[12%] h-52 w-52 bg-[rgba(41,95,86,0.08)]" />
      <div className="hero-grid absolute inset-x-0 top-0 h-[70%] opacity-35" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--line-soft)] bg-white/80 px-4 py-2 text-xs text-second sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-primary)]" />
              Frontend Portfolio
            </div>

            <h1 className="max-w-4xl text-[2.3rem] font-bold leading-[1.16] tracking-[-0.03em] text-main sm:text-[3rem] lg:max-w-3xl lg:text-[3.75rem]">
              {title}
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-[0.98rem] leading-7 text-second sm:text-[1.03rem]">
              {descriptions.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>

            <div className="mb-8 mt-8 flex flex-wrap gap-3">
              <a
                href="#featured-work"
                className="rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                대표 프로젝트 보기
              </a>
              <a
                href="#collaboration"
                className="rounded-full border border-[color:var(--line-strong)] bg-white/84 px-5 py-3 text-sm font-semibold text-main"
              >
                협업 경험 보기
              </a>
            </div>

            {strengths.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="surface-panel rounded-[1.4rem] px-4 py-4 text-sm leading-6 text-main"
                  >
                    {strength}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="surface-card rounded-[2rem] p-6 sm:p-7">
              <div className="mb-6 grid items-center gap-4 sm:grid-cols-[auto_1fr]">
                <div className="flex h-22 w-22 items-center justify-center overflow-hidden rounded-[1.35rem] border border-[color:var(--line-soft)] bg-[rgba(41,95,86,0.06)] sm:h-24 sm:w-24">
                  {avatar.startsWith("/") || avatar.startsWith("http") ? (
                    <img
                      src={avatar}
                      alt="프로필 사진"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">{avatar}</span>
                  )}
                </div>

                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-third">
                    Profile Snapshot
                  </p>
                  <h2 className="mb-2 text-[1.4rem] font-bold leading-tight text-main sm:text-[1.6rem]">
                    웹과 앱 실서비스를 모두 만들어 본 개발자
                  </h2>
                  <p className="text-[0.96rem] leading-7 text-second">
                    납품·출시까지 완수한 경험을 바탕으로, 사용 흐름과 유지보수를
                    함께 고려한 프론트엔드를 만듭니다.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/75 p-4">
                  <p className="mb-1 text-sm font-semibold text-main">스택</p>
                  <p className="text-sm leading-6 text-second">
                    React · Next.js · React Native
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/75 p-4">
                  <p className="mb-1 text-sm font-semibold text-main">경험</p>
                  <p className="text-sm leading-6 text-second">
                    납품 · 앱 스토어 출시 · 팀장
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/75 p-4">
                  <p className="mb-1 text-sm font-semibold text-main">기준</p>
                  <p className="text-sm leading-6 text-second">
                    유지보수 가능한 구조와 명확한 소통
                  </p>
                </div>
              </div>
            </div>

            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
