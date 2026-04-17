interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer id="contact" className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card rounded-[2rem] border border-slate-800/80 p-8 sm:p-10 text-center">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-sky-300 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-main">
            함께 만들 이야기가 있다면 편하게 연락 주세요
          </h2>
          <p className="text-second text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            운영 목적에 맞는 화면 구조를 고민하고, 협업 가능한 프론트엔드 코드를
            함께 만들고 싶습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <a
              href="mailto:duck01777@naver.com"
              className="surface-panel rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <p className="text-main font-semibold mb-2">Email</p>
              <p className="text-sky-300 break-all">duck01777@naver.com</p>
            </a>

            <a
              href="https://github.com/yuwonkyu"
              target="_blank"
              rel="noreferrer"
              className="surface-panel rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <p className="text-main font-semibold mb-2">GitHub</p>
              <p className="text-sky-300">@yuwonkyu</p>
            </a>

            <div className="surface-panel rounded-2xl p-6">
              <p className="text-main font-semibold mb-2">Portfolio</p>
              <p className="text-second">현재 보고 계신 사이트를 직접 설계하고 구현했습니다.</p>
            </div>
          </div>

          <p className="text-third text-sm">
            2026 유원규 포트폴리오. React와 TypeScript로 만들었습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
