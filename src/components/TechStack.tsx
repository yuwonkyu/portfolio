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
        { name: "React", color: "bg-blue-200 text-blue-800" },
        { name: "Next.js", color: "bg-gray-200 text-gray-800" },
        { name: "TypeScript", color: "bg-blue-300 text-blue-900" },
        { name: "JavaScript", color: "bg-yellow-200 text-yellow-800" },
      ],
    },
    {
      title: "Styling & UI",
      techs: [
        { name: "Tailwind CSS", color: "bg-cyan-200 text-cyan-800" },
        { name: "MUI", color: "bg-indigo-200 text-indigo-800" },
        { name: "Figma", color: "bg-purple-300 text-purple-900" },
      ],
    },
    {
      title: "State & Forms",
      techs: [
        { name: "Zustand", color: "bg-green-200 text-green-800" },
        { name: "React Hook Form", color: "bg-pink-200 text-pink-800" },
      ],
    },
    {
      title: "Dev Tools",
      techs: [
        { name: "Vite", color: "bg-purple-200 text-purple-800" },
        { name: "npm", color: "bg-red-200 text-red-800" },
        { name: "pnpm", color: "bg-orange-200 text-orange-800" },
      ],
    },
    {
      title: "Version Control & Deploy",
      techs: [
        { name: "Git", color: "bg-red-300 text-red-900" },
        { name: "GitHub", color: "bg-gray-300 text-gray-900" },
        { name: "Vercel", color: "bg-black text-white" },
      ],
    },
    {
      title: "AI Tools",
      techs: [
        { name: "GitHub Copilot", color: "bg-slate-200 text-slate-800" },
        { name: "CodeRabbit", color: "bg-emerald-200 text-emerald-800" },
      ],
    },
  ];

  return (
    <div
      className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-xl border border-purple-100 ${className}`}
    >
      <h3 className="text-purple-700 font-bold mb-6 text-lg text-center">
        기술 스택
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 text-center border-b border-gray-300 pb-1">
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
