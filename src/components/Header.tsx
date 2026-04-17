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
  logo = "YK",
  navItems = [
    { id: "intro", label: "소개", href: "#intro" },
    { id: "featured-work", label: "운영 서비스", href: "#featured-work" },
    {
      id: "personal-projects",
      label: "개인 프로젝트",
      href: "#personal-projects",
    },
    { id: "study-works", label: "학습 작업물", href: "#study-works" },
    { id: "collaboration", label: "협업", href: "#collaboration" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/75 backdrop-blur-md border-b border-slate-900/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <h1 className="font-bold text-main text-sm sm:text-lg shrink-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/15 text-sky-200 mr-2">
              {logo}
            </span>
            <span className="hidden sm:inline">{title}</span>
          </h1>

          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
                className="whitespace-nowrap bg-slate-900/90 hover:bg-slate-800 text-second hover:text-main px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200"
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
