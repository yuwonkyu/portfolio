interface TechStackProps {
  className?: string;
}

interface TechCategory {
  title: string;
  techs: { name: string; color: string }[];
}

const TechStack = ({ className = "" }: TechStackProps) => {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      techs: [
        { name: "React 19", color: "accent-pill" },
        { name: "Next.js 16", color: "warm-pill" },
        { name: "TypeScript", color: "accent-pill" },
        { name: "App Router", color: "warm-pill" },
      ],
    },
    {
      title: "Styling & UI",
      techs: [
        { name: "Tailwind CSS v4", color: "accent-pill" },
        { name: "FSD Architecture", color: "warm-pill" },
        { name: "Responsive UI", color: "accent-pill" },
        { name: "Figma", color: "warm-pill" },
      ],
    },
    {
      title: "State & Forms",
      techs: [
        { name: "Zustand", color: "accent-pill" },
        { name: "TanStack Query", color: "warm-pill" },
        { name: "React Hook Form", color: "accent-pill" },
        { name: "Upstash Redis", color: "warm-pill" },
      ],
    },
    {
      title: "Dev Tools",
      techs: [
        { name: "Turbopack", color: "warm-pill" },
        { name: "Vite", color: "accent-pill" },
        { name: "npm", color: "warm-pill" },
        { name: "pnpm", color: "accent-pill" },
      ],
    },
    {
      title: "Version Control & Deploy",
      techs: [
        { name: "Git", color: "accent-pill" },
        { name: "GitHub", color: "warm-pill" },
        { name: "Vercel", color: "accent-pill" },
      ],
    },
    {
      title: "AI Tools",
      techs: [
        { name: "GitHub Copilot", color: "warm-pill" },
        { name: "CodeRabbit", color: "accent-pill" },
      ],
    },
  ];

  return (
    <div className={`surface-card rounded-[2rem] p-6 sm:p-7 ${className}`}>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-third mb-2">
            Stack Overview
          </p>
          <h3 className="text-main font-bold text-xl">핵심 기술 스택</h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-third text-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-primary)]" />
          실무 프로젝트 중심
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {techCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-[1.5rem] border border-[color:var(--line-soft)] bg-white/70 p-4"
          >
            <h4 className="text-sm font-semibold text-main mb-3">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech.name}
                  className={`${tech.color} rounded-full px-3 py-1 text-sm font-medium`}
                >
                  {tech.name}
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
