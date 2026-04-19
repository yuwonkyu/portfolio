interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface HeaderProps {
  title?: string;
  logo?: string;
  navItems?: NavItem[];
  className?: string;
}

const Header = ({
  title = "유원규 포트폴리오",
  logo = "WK",
  navItems = [
    { id: "intro", label: "소개", href: "#intro" },
    { id: "featured-work", label: "대표 프로젝트", href: "#featured-work" },
    { id: "personal-projects", label: "개인 프로젝트", href: "#personal-projects" },
    { id: "study-works", label: "협업 프로젝트", href: "#study-works" },
    { id: "collaboration", label: "협업 경험", href: "#collaboration" },
    { id: "contact", label: "연락", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--line-soft)] bg-[rgba(251,248,242,0.78)] backdrop-blur-xl ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <h1 className="font-bold text-main text-sm sm:text-lg shrink-0 flex items-center">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(31,122,106,0.12)] text-[color:var(--accent-primary)] mr-2">
              {logo}
            </span>
            <span className="hidden sm:inline">{title}</span>
          </h1>

          <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
                className="whitespace-nowrap rounded-full border border-[color:var(--line-soft)] bg-white/75 px-3 py-1.5 text-xs sm:text-sm text-second transition-all duration-200 hover:border-[color:var(--line-strong)] hover:bg-white hover:text-main"
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
