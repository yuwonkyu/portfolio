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
  title = "문제의 맥락을 읽고, 설명 가능한 구조로 화면을 만드는 프론트엔드 개발자입니다.",
  descriptions = [
    "화면을 구현하는 데서 그치지 않고, 사용자가 무엇을 먼저 보고 어떤 행동으로 이어질지까지 고려하며 구조를 설계합니다.",
    "브랜드 사이트, 랜딩 페이지, 운영형 관리자 화면까지 서로 다른 목적의 프로젝트를 만들며 정보 구조와 인터랙션 감각을 함께 키워 왔습니다.",
    "비전공자로 시작했지만 빠르게 배우고 공유하는 태도, 갈등을 조율하는 커뮤니케이션, 유지보수 가능한 구조 설계를 제 강점으로 만들고 있습니다.",
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
                    제품 감각과 협업 감각을 함께 키운 개발자
                  </h2>
                  <p className="text-[0.96rem] leading-7 text-second">
                    보기 좋은 화면을 넘어서 사용 흐름과 운영 맥락까지 함께 설계하는
                    프론트엔드를 지향합니다.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/75 p-4">
                  <p className="mb-1 text-sm font-semibold text-main">관심사</p>
                  <p className="text-sm leading-6 text-second">
                    서비스 목적에 맞는 UI 구조
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/75 p-4">
                  <p className="mb-1 text-sm font-semibold text-main">강점</p>
                  <p className="text-sm leading-6 text-second">
                    함께 작업하기 쉬운 구조 설계
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/75 p-4">
                  <p className="mb-1 text-sm font-semibold text-main">기준</p>
                  <p className="text-sm leading-6 text-second">
                    읽기 쉽고 설명 가능한 코드
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
