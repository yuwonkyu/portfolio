import TechStack from "./TechStack";

interface IntroSectionProps {
  avatar?: string;
  title?: string;
  descriptions?: string[];
  className?: string;
}

const IntroSection = ({
  avatar = "",
  title = "프론트엔드 개발자",
  descriptions = [
    "프론트엔드 개발자입니다.",
    "늦은 나이에 개발을 시작했지만, 하루하루 즐거움을 느끼며 개발에 진심을 담아 작업하고 있습니다.",
    "사용자에게 즐거움과 편의성을 제공하는 인터페이스 구현을 목표로 합니다.",
  ],
  className = "",
}: IntroSectionProps) => {
  return (
    <section
      id="intro"
      className={`min-h-[60vh] flex items-center pt-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Avatar */}
          <div className="w-24 h-24 sm:w-40 sm:h-40  rounded-xs mx-auto flex items-center justify-center text-7xl mb-6 sm:mb-8 overflow-hidden">
            {avatar.startsWith("/") || avatar.startsWith("http") ? (
              <img
                src={avatar}
                alt="프로필 사진"
                className="w-full h-full object-cover rounded-xs"
              />
            ) : (
              <span>{avatar}</span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-bold text-main mb-4 sm:mb-6">
            {title}
          </h2>

          {/* Description Card */}
          <div className="surface-card rounded-3xl p-4 sm:p-8 max-w-4xl mx-auto mb-6 sm:mb-8">
            {descriptions.map((desc, index) => (
              <p
                key={index}
                className={`
                  ${
                    index === 0
                      ? "text-main text-base sm:text-xl mb-3 sm:mb-6 leading-relaxed"
                      : ""
                  }
                  ${index === 1 ? "text-second text-sm sm:text-lg mb-3 sm:mb-6" : ""}
                  ${index === 2 ? "text-third text-sm sm:text-base" : ""}
                  ${index > 2 ? "text-third text-sm sm:text-base mt-3 sm:mt-4" : ""}
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
