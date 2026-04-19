interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer id="contact" className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card rounded-[2.25rem] p-8 sm:p-10 text-center">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[color:var(--accent-primary)] mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-main leading-tight">
            함께 만들고 싶은 서비스가 있다면 편하게 연락 주세요.
          </h2>
          <p className="text-second text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            서비스 목적에 맞는 화면 구조를 고민하고, 협업하기 쉬운 프론트엔드
            코드를 만드는 개발자로 계속 성장하고 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <a
              href="mailto:duck01777@naver.com"
              className="surface-panel rounded-[1.6rem] p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-main font-semibold mb-2">Email</p>
              <p className="text-[color:var(--accent-primary)] break-all">
                duck01777@naver.com
              </p>
            </a>

            <a
              href="https://github.com/yuwonkyu"
              target="_blank"
              rel="noreferrer"
              className="surface-panel rounded-[1.6rem] p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-main font-semibold mb-2">GitHub</p>
              <p className="text-[color:var(--accent-primary)]">@yuwonkyu</p>
            </a>

            <div className="surface-panel rounded-[1.6rem] p-6">
              <p className="text-main font-semibold mb-2">Portfolio</p>
              <p className="text-second">
                현재 보고 계신 사이트를 직접 설계하고 구현했습니다.
              </p>
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
