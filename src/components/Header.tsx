interface NavItem {
  id: string;
  label: string;
  href: string;
  colorScheme: string;
}

interface HeaderProps {
  title?: string;
  logo?: string;
  navItems?: NavItem[];
  className?: string;
}

const Header = ({
  title = "원뀨의 포트폴리오",
  logo = "🎮",
  navItems = [
    {
      id: "intro",
      label: "소개",
      href: "#intro",
      colorScheme:
        "bg-slate-800/90 hover:bg-slate-700 text-main border border-slate-600/70",
    },
    {
      id: "live-services",
      label: "서비스",
      href: "#live-services",
      colorScheme:
        "bg-slate-800/90 hover:bg-slate-700 text-second border border-slate-600/70",
    },
    {
      id: "personal",
      label: "개인",
      href: "#personal",
      colorScheme:
        "bg-slate-800/90 hover:bg-slate-700 text-second border border-slate-600/70",
    },
    {
      id: "growth",
      label: "학습",
      href: "#growth",
      colorScheme:
        "bg-slate-800/90 hover:bg-slate-700 text-third border border-slate-600/70",
    },
    {
      id: "contact",
      label: "연락",
      href: "#contact",
      colorScheme:
        "bg-slate-800/90 hover:bg-slate-700 text-third border border-slate-600/70",
    },
  ],
  className = "",
}: HeaderProps) => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/75 backdrop-blur-md border-b border-slate-700/80 shadow-lg ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <h1 className="font-bold text-main text-sm sm:text-lg">
            <span>{logo}</span>
            <span className="hidden sm:inline"> {title}</span>
          </h1>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`${item.colorScheme} flex items-center justify-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm transition-all duration-200 text-center`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
