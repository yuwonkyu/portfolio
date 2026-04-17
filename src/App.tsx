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
  liveServiceProjects,
  personalProjects,
  colorSchemes,
} from "./data/projectsData";

function App() {
  const growthProjects = useMemo(
    () => [...basicProjects, ...intermediateProjects, ...advancedProjects],
    [],
  );

  return (
    <div className="min-h-screen text-main">
      <Header />

      <IntroSection avatar="/me.jpg" />

      <ProjectSection
        id="live-services"
        title="🚀 실제 운영 서비스"
        bgGradient="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"
        projects={liveServiceProjects}
        enableCarousel
        colorScheme={colorSchemes.ocean}
      />

      <ProjectSection
        id="personal"
        title="🎮 개인 프로젝트"
        bgGradient="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        projects={personalProjects}
        enableCarousel
        colorScheme={colorSchemes.ocean}
      />

      <ProjectSection
        id="growth"
        title="📚 성장 프로젝트 (기초 · 중급 · 심화)"
        bgGradient="bg-gradient-to-b from-slate-950 via-slate-900 to-black"
        projects={growthProjects}
        enableCarousel
        colorScheme={colorSchemes.ocean}
      />

      <Footer />
    </div>
  );
}

export default App;
