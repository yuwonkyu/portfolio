interface TechStackProps {
  className?: string;
}

interface TechCategory {
  title: string;
  techs: string[];
}

const TechStack = ({ className = "" }: TechStackProps) => {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      techs: ["React 19", "Next.js 16", "TypeScript", "App Router"],
    },
    {
      title: "Styling & UI",
      techs: ["Tailwind CSS v4", "FSD Architecture", "Responsive UI", "Figma"],
    },
    {
      title: "State & Forms",
      techs: ["Zustand", "TanStack Query", "React Hook Form", "Upstash Redis"],
    },
    {
      title: "Dev Tools",
      techs: ["Turbopack", "Vite", "npm", "pnpm"],
    },
    {
      title: "Version Control & Deploy",
      techs: ["Git", "GitHub", "Vercel"],
    },
    {
      title: "AI Tools",
      techs: ["GitHub Copilot", "CodeRabbit"],
    },
  ];

  return (
    <div className={`surface-card rounded-[2rem] p-6 sm:p-7 ${className}`}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-third">
            Stack Overview
          </p>
          <h3 className="text-lg font-bold text-main sm:text-xl">핵심 기술 스택</h3>
        </div>
        <div className="hidden text-sm text-third sm:block">실무 프로젝트 중심</div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {techCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-[1.35rem] border border-[color:var(--line-soft)] bg-white/74 p-4"
          >
            <h4 className="mb-3 text-sm font-semibold text-main">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech}
                  className="badge-muted rounded-full px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
