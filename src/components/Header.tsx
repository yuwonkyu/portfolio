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
      colorScheme: "bg-purple-100 hover:bg-purple-200 text-purple-700",
    },
    {
      id: "personal",
      label: "개인",
      href: "#personal",
      colorScheme: "bg-sky-100 hover:bg-sky-200 text-sky-700",
    },
    {
      id: "growth",
      label: "학습",
      href: "#growth",
      colorScheme: "bg-cyan-100 hover:bg-cyan-200 text-cyan-700",
    },
    {
      id: "contact",
      label: "연락",
      href: "#contact",
      colorScheme: "bg-blue-100 hover:bg-blue-200 text-blue-700",
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-lg ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <h1 className="font-bold text-purple-600 text-sm sm:text-lg">
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
