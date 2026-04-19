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
<<<<<<< HEAD
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
=======
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
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
    },
  ];

  return (
    <div className={`surface-card rounded-[2rem] p-6 sm:p-7 ${className}`}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 12cabbc283c0e6e6f6d54fe214b2b376af59c11f
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
