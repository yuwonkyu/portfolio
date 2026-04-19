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
<<<<<<< HEAD
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--line-soft)] bg-[rgba(252,250,245,0.82)] backdrop-blur-xl ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <h1 className="flex shrink-0 items-center text-sm font-semibold text-main sm:text-base">
            <span className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(41,95,86,0.08)] text-[color:var(--accent-primary)]">
=======
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--line-soft)] bg-[rgba(251,248,242,0.78)] backdrop-blur-xl ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <h1 className="font-bold text-main text-sm sm:text-lg shrink-0 flex items-center">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(31,122,106,0.12)] text-[color:var(--accent-primary)] mr-2">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
              {logo}
            </span>
            <span className="hidden sm:inline">{title}</span>
          </h1>

<<<<<<< HEAD
          <nav className="flex items-center gap-1.5 overflow-x-auto sm:gap-2">
=======
          <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
<<<<<<< HEAD
                className="whitespace-nowrap rounded-full border border-[color:var(--line-soft)] bg-white/80 px-3 py-1.5 text-[12px] text-second transition-all duration-200 hover:border-[color:var(--line-strong)] hover:text-main sm:text-[13px]"
=======
                className="whitespace-nowrap rounded-full border border-[color:var(--line-soft)] bg-white/75 px-3 py-1.5 text-xs sm:text-sm text-second transition-all duration-200 hover:border-[color:var(--line-strong)] hover:bg-white hover:text-main"
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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
