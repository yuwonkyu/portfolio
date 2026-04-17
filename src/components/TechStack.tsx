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
        { name: "React 19", color: "bg-sky-900/50 text-sky-200" },
        { name: "Next.js 16", color: "bg-slate-700/70 text-slate-100" },
        { name: "TypeScript", color: "bg-blue-900/50 text-blue-200" },
        { name: "App Router", color: "bg-slate-800 text-slate-200" },
      ],
    },
    {
      title: "Styling & UI",
      techs: [
        { name: "Tailwind CSS v4", color: "bg-cyan-900/50 text-cyan-200" },
        { name: "FSD Architecture", color: "bg-indigo-900/50 text-indigo-200" },
        { name: "Responsive UI", color: "bg-rose-900/50 text-rose-200" },
        { name: "Figma", color: "bg-violet-900/50 text-violet-200" },
      ],
    },
    {
      title: "State & Forms",
      techs: [
        { name: "Zustand", color: "bg-emerald-900/50 text-emerald-200" },
        { name: "TanStack Query", color: "bg-red-900/50 text-red-200" },
        { name: "React Hook Form", color: "bg-pink-900/50 text-pink-200" },
        { name: "Upstash Redis", color: "bg-amber-900/50 text-amber-200" },
      ],
    },
    {
      title: "Dev Tools",
      techs: [
        { name: "Turbopack", color: "bg-purple-900/50 text-purple-200" },
        { name: "Vite", color: "bg-violet-900/50 text-violet-200" },
        { name: "npm", color: "bg-red-900/50 text-red-200" },
        { name: "pnpm", color: "bg-orange-900/50 text-orange-200" },
      ],
    },
    {
      title: "Version Control & Deploy",
      techs: [
        { name: "Git", color: "bg-red-900/50 text-red-200" },
        { name: "GitHub", color: "bg-slate-700 text-slate-100" },
        { name: "Vercel", color: "bg-black/80 text-slate-100" },
      ],
    },
    {
      title: "AI Tools",
      techs: [
        { name: "GitHub Copilot", color: "bg-slate-700 text-slate-100" },
        { name: "CodeRabbit", color: "bg-emerald-900/50 text-emerald-200" },
      ],
    },
  ];

  return (
    <div
      className={`surface-card rounded-2xl p-6 max-w-4xl mx-auto ${className}`}
    >
      <h3 className="text-main font-bold mb-6 text-lg text-center">
        기술 스택
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-3">
            <h4 className="text-sm font-semibold text-second text-center border-b pb-1">
              {category.title}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {category.techs.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`${tech.color} px-3 py-1 rounded-full font-medium text-sm transition-transform hover:scale-105 cursor-default`}
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
