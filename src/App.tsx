import "./App.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";
import {
  basicProjects,
  intermediateProjects,
  advancedProjects,
  personalProjects,
  colorSchemes,
} from "./data/projectsData";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <IntroSection avatar="/me.jpg" />

      <ProjectSection
        id="basic"
        title="🌱 기초 프로젝트"
        bgGradient="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50"
        projects={basicProjects}
        colorScheme={colorSchemes.green}
      />

      <ProjectSection
        id="intermediate"
        title="⚡ 중급 프로젝트"
        bgGradient="bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-50"
        projects={intermediateProjects}
        colorScheme={colorSchemes.blue}
      />

      <ProjectSection
        id="advanced"
        title="🚀 심화 프로젝트"
        bgGradient="bg-gradient-to-br from-purple-100 via-violet-50 to-fuchsia-50"
        projects={advancedProjects}
        colorScheme={colorSchemes.purple}
      />

      <ProjectSection
        id="personal"
        title="🎮 개인 프로젝트"
        bgGradient="bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50"
        projects={personalProjects}
        colorScheme={colorSchemes.orange}
      />
    </div>
  );
}

export default App;
