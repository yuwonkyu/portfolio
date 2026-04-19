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
<<<<<<< HEAD
  title = "문제의 맥락을 읽고, 설명 가능한 구조로 화면을 만드는 프론트엔드 개발자입니다.",
  descriptions = [
    "화면을 구현하는 데서 그치지 않고, 사용자가 무엇을 먼저 보고 어떤 행동으로 이어질지까지 고려하며 구조를 설계합니다.",
=======
  title = "문제의 맥락을 이해하고, 설계 이유가 보이는 UI를 만드는 프론트엔드 개발자입니다.",
  descriptions = [
    "단순히 화면을 구현하는 데서 끝나지 않고, 사용자가 무엇을 먼저 보고 어떤 행동으로 이어질지까지 고려하며 구조를 설계합니다.",
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
    "브랜드 사이트, 랜딩 페이지, 운영형 관리자 화면까지 서로 다른 목적의 프로젝트를 만들며 정보 구조와 인터랙션 감각을 함께 키워 왔습니다.",
    "비전공자로 시작했지만 빠르게 배우고 공유하는 태도, 갈등을 조율하는 커뮤니케이션, 유지보수 가능한 구조 설계를 제 강점으로 만들고 있습니다.",
  ],
  strengths = [],
  className = "",
}: IntroSectionProps) => {
  return (
    <section
      id="intro"
<<<<<<< HEAD
      className={`relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28 ${className}`}
    >
      <div className="hero-orb left-[8%] top-[10%] h-40 w-40 bg-[rgba(41,95,86,0.12)]" />
      <div className="hero-orb bottom-[10%] right-[12%] h-52 w-52 bg-[rgba(41,95,86,0.08)]" />
      <div className="hero-grid absolute inset-x-0 top-0 h-[70%] opacity-35" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--line-soft)] bg-white/80 px-4 py-2 text-xs text-second sm:text-sm">
=======
      className={`relative min-h-[92vh] flex items-center overflow-hidden pt-24 sm:pt-28 ${className}`}
    >
      <div className="hero-orb top-[10%] left-[6%] h-40 w-40 bg-[rgba(126,167,200,0.35)]" />
      <div className="hero-orb top-[18%] right-[12%] h-56 w-56 bg-[rgba(216,129,77,0.24)]" />
      <div className="hero-orb bottom-[6%] right-[24%] h-44 w-44 bg-[rgba(31,122,106,0.18)]" />
      <div className="hero-grid absolute inset-x-0 top-0 h-[72%] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-soft)] bg-white/75 px-4 py-2 text-sm text-second mb-6">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-primary)]" />
              Frontend Portfolio
            </div>

<<<<<<< HEAD
            <h1 className="max-w-4xl text-[2.3rem] font-bold leading-[1.16] tracking-[-0.03em] text-main sm:text-[3rem] lg:max-w-3xl lg:text-[3.75rem]">
=======
            <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold text-main leading-[1.12] mb-6">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
              {title}
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-[0.98rem] leading-7 text-second sm:text-[1.03rem]">
              {descriptions.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>

<<<<<<< HEAD
            <div className="mb-8 mt-8 flex flex-wrap gap-3">
=======
            <div className="flex flex-wrap gap-3 mt-8 mb-8">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
              <a
                href="#featured-work"
                className="rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                대표 프로젝트 보기
              </a>
              <a
                href="#collaboration"
<<<<<<< HEAD
                className="rounded-full border border-[color:var(--line-strong)] bg-white/84 px-5 py-3 text-sm font-semibold text-main"
=======
                className="rounded-full border border-[color:var(--line-strong)] bg-white/80 px-5 py-3 text-sm font-semibold text-main"
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
              >
                협업 경험 보기
              </a>
            </div>

            {strengths.length > 0 && (
<<<<<<< HEAD
              <div className="grid gap-3 sm:grid-cols-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="surface-panel rounded-[1.4rem] px-4 py-4 text-sm leading-6 text-main"
=======
              <div className="grid sm:grid-cols-3 gap-3">
                {strengths.map((strength, index) => (
                  <div
                    key={strength}
                    className="surface-panel rounded-[1.5rem] px-4 py-4 text-sm sm:text-base text-main"
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-third mb-2">
                      Point {index + 1}
                    </p>
                    <p className="leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

<<<<<<< HEAD
          <div className="space-y-5">
            <div className="surface-card rounded-[2rem] p-6 sm:p-7">
              <div className="mb-6 grid items-center gap-4 sm:grid-cols-[auto_1fr]">
                <div className="flex h-22 w-22 items-center justify-center overflow-hidden rounded-[1.35rem] border border-[color:var(--line-soft)] bg-[rgba(41,95,86,0.06)] sm:h-24 sm:w-24">
=======
          <div className="space-y-6">
            <div className="surface-card rounded-[2rem] p-6 sm:p-8">
              <div className="grid grid-cols-[auto_1fr] gap-5 items-center mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[1.5rem] overflow-hidden bg-[rgba(126,167,200,0.2)] flex items-center justify-center border border-[color:var(--line-soft)]">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                  {avatar.startsWith("/") || avatar.startsWith("http") ? (
                    <img
                      src={avatar}
                      alt="프로필 사진"
<<<<<<< HEAD
                      className="h-full w-full object-cover"
=======
                      className="w-full h-full object-cover"
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                    />
                  ) : (
                    <span className="text-4xl">{avatar}</span>
                  )}
                </div>

                <div>
<<<<<<< HEAD
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-third">
                    Profile Snapshot
                  </p>
                  <h2 className="mb-2 text-[1.4rem] font-bold leading-tight text-main sm:text-[1.6rem]">
                    제품 감각과 협업 감각을 함께 키운 개발자
                  </h2>
                  <p className="text-[0.96rem] leading-7 text-second">
                    보기 좋은 화면을 넘어서 사용 흐름과 운영 맥락까지 함께 설계하는
                    프론트엔드를 지향합니다.
=======
                  <p className="text-xs uppercase tracking-[0.22em] text-third mb-2">
                    Profile Snapshot
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-main mb-2">
                    제품 감각과 협업 감각을 함께 키운 개발자
                  </h2>
                  <p className="text-second leading-relaxed">
                    화면을 예쁘게 만드는 데서 그치지 않고, 사용 흐름과 운영
                    맥락까지 함께 설계하는 프론트엔드를 지향합니다.
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
                  </p>
                </div>
              </div>

<<<<<<< HEAD
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
=======
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-[1.5rem] bg-[rgba(255,255,255,0.7)] p-4 border border-[color:var(--line-soft)]">
                  <p className="text-main font-semibold mb-1">관심사</p>
                  <p className="text-second text-sm">서비스 목적에 맞는 UI 구조</p>
                </div>
                <div className="rounded-[1.5rem] bg-[rgba(255,255,255,0.7)] p-4 border border-[color:var(--line-soft)]">
                  <p className="text-main font-semibold mb-1">강점</p>
                  <p className="text-second text-sm">함께 작업하기 쉬운 구조 설계</p>
                </div>
                <div className="rounded-[1.5rem] bg-[rgba(255,255,255,0.7)] p-4 border border-[color:var(--line-soft)]">
                  <p className="text-main font-semibold mb-1">기준</p>
                  <p className="text-second text-sm">읽기 쉽고 설명 가능한 코드</p>
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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
