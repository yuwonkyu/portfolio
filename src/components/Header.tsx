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
      id: "basic",
      label: "기초",
      href: "#basic",
      colorScheme: "bg-green-100 hover:bg-green-200 text-green-700",
    },
    {
      id: "intermediate",
      label: "중급",
      href: "#intermediate",
      colorScheme: "bg-blue-100 hover:bg-blue-200 text-blue-700",
    },
    {
      id: "advanced",
      label: "심화",
      href: "#advanced",
      colorScheme: "bg-purple-100 hover:bg-purple-200 text-purple-700",
    },
    {
      id: "personal",
      label: "개인",
      href: "#personal",
      colorScheme: "bg-orange-100 hover:bg-orange-200 text-orange-700",
    },
    {
      id: "contact",
      label: "연락",
      href: "#contact",
      colorScheme: "bg-pink-100 hover:bg-pink-200 text-pink-700",
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
            {logo} {title}
          </h1>

          {/* Navigation */}
          <nav className="space-x-4 flex items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`${item.colorScheme} flex items-center justify-center px-3 py-1 rounded-full text-sm transition-all duration-200 text-center`}
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
