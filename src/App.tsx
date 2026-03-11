import { useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import {
  basicProjects,
  intermediateProjects,
  advancedProjects,
  personalProjects,
  colorSchemes,
} from "./data/projectsData";

function App() {
  const growthProjects = useMemo(
    () => [...basicProjects, ...intermediateProjects, ...advancedProjects],
    [],
  );

  return (
    <div className="min-h-screen">
      <Header />

      <IntroSection
        avatar="/me.jpg"
        className="bg-gradient-to-b from-sky-100 via-cyan-100 to-blue-200"
      />

      <ProjectSection
        id="personal"
        title="🎮 개인 프로젝트"
        bgGradient="bg-gradient-to-b from-blue-200 via-indigo-300 to-indigo-500"
        projects={personalProjects}
        enableCarousel
        sectionTitleColor="text-white"
        colorScheme={colorSchemes.ocean}
      />

      <ProjectSection
        id="growth"
        title="📚 성장 프로젝트 (기초 · 중급 · 심화)"
        bgGradient="bg-gradient-to-b from-indigo-500 via-slate-700 to-slate-900"
        projects={growthProjects}
        enableCarousel
        sectionTitleColor="text-white"
        colorScheme={colorSchemes.ocean}
      />

      <Footer />
    </div>
  );
}

export default App;
