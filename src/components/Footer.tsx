interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      id="contact"
      className={`bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            연락하기
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            함께 성장할 수 있는 기회를 기대합니다!
            <br />
            언제든지 편하게 연락해주세요 😊
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">이메일</h3>
              <a
                href="mailto:duck01777@naver.com"
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                duck01777@naver.com
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <img
                  src="/github-icon.svg"
                  alt="GitHub"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/yuwonkyu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                @yuwonkyu
              </a>
            </div>

            {/* Portfolio */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">포트폴리오</h3>
              <span className="text-gray-300">
                현재 보고 계시는 사이트입니다!
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="border-t border-gray-700 pt-8">
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "늦둥이지만 풍부한 경험과 뛰어난 책임감으로 프로젝트에 임합니다."
            </blockquote>
            <p className="text-gray-400">
              © 2025 원뀨의 포트폴리오. Made with ❤️ and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
