import TechStack from "./TechStack";

interface IntroSectionProps {
  avatar?: string;
  title?: string;
  descriptions?: string[];
  className?: string;
}

const IntroSection = ({
  avatar = "🧙‍♂️",
  title = "게임 UI/UX & 프론트엔드 개발자",
  descriptions = [
    "게임 UI/UX 및 프론트엔드, 게임 디자인에 관심이 있는 개발자입니다.",
    "늦둥이지만 풍부한 경험과 뛰어난 책임감으로 프로젝트에 임합니다.",
    "사용자에게 즐거움과 편의성을 제공하는 인터페이스 구현을 목표로 합니다.",
  ],
  className = "",
}: IntroSectionProps) => {
  return (
    <section
      id="intro"
      className={`min-h-screen bg-linear-to-br from-purple-100 via-pink-50 to-blue-50 flex items-center pt-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Avatar */}
          <div className="w-24 h-24 sm:w-40 sm:h-40 bg-linear-to-br from-purple-200 to-pink-200 rounded-full border-4 border-purple-300 shadow-xl mx-auto flex items-center justify-center text-7xl mb-6 sm:mb-8 overflow-hidden">
            {avatar.startsWith("/") || avatar.startsWith("http") ? (
              <img
                src={avatar}
                alt="프로필 사진"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span>{avatar}</span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-bold text-purple-800 mb-4 sm:mb-6">
            {title}
          </h2>

          {/* Description Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-8 max-w-4xl mx-auto shadow-2xl border border-purple-200 mb-6 sm:mb-8">
            {descriptions.map((desc, index) => (
              <p
                key={index}
                className={`
                  ${
                    index === 0
                      ? "text-gray-800 text-base sm:text-xl mb-3 sm:mb-6 leading-relaxed"
                      : ""
                  }
                  ${index === 1 ? "text-gray-700 text-sm sm:text-lg mb-3 sm:mb-6" : ""}
                  ${index === 2 ? "text-gray-600 text-sm sm:text-base" : ""}
                  ${index > 2 ? "text-gray-600 text-sm sm:text-base mt-3 sm:mt-4" : ""}
                `}
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
