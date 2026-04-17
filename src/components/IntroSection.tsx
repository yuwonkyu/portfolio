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
  title = "프론트엔드 개발자 유원규입니다.",
  descriptions = [
    "실제 운영 목적에 맞는 정보 구조와 UI 흐름을 설계하는 프론트엔드 개발자입니다.",
    "단순히 예쁜 화면을 만드는 데 그치지 않고, 사용자가 어디서 멈추고 무엇을 눌러야 하는지까지 함께 고민합니다.",
    "React, Next.js, TypeScript 기반으로 유지보수 가능한 구조를 만들고 협업 과정에서 더 읽기 좋은 코드를 남기려 합니다.",
  ],
  strengths = [],
  className = "",
}: IntroSectionProps) => {
  return (
    <section
      id="intro"
      className={`min-h-[88vh] flex items-center pt-20 sm:pt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] uppercase text-sky-300 mb-4">
              Frontend Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-main leading-tight mb-5">
              {title}
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-second leading-relaxed max-w-3xl">
              {descriptions.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>

            {strengths.length > 0 && (
              <div className="grid gap-3 mt-8">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="surface-panel rounded-2xl px-4 py-4 text-sm sm:text-base text-main"
                  >
                    {strength}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="surface-card rounded-[2rem] p-6 sm:p-8 border border-slate-800/80">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[1.5rem] mx-auto mb-6 overflow-hidden bg-slate-900 flex items-center justify-center">
                {avatar.startsWith("/") || avatar.startsWith("http") ? (
                  <img
                    src={avatar}
                    alt="프로필 사진"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl">{avatar}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-900/80 p-4 text-center">
                  <p className="text-main font-semibold mb-1">관심사</p>
                  <p className="text-second text-sm">운영형 UI 구조</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4 text-center">
                  <p className="text-main font-semibold mb-1">강점</p>
                  <p className="text-second text-sm">협업 가능한 구조화</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4 text-center">
                  <p className="text-main font-semibold mb-1">기준</p>
                  <p className="text-second text-sm">읽기 쉬운 코드</p>
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
