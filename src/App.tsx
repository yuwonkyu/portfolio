import "./App.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import CompactProjectsSection from "./components/CompactProjectsSection";
import CollaborationSection from "./components/CollaborationSection";
import Footer from "./components/Footer";
import {
  collaborationHighlights,
  coreStrengths,
  featuredProjects,
  personalProjects,
  studyProjects,
} from "./data/projectsData";

function App() {
  return (
    <div className="min-h-screen text-main">
      <Header />

      <IntroSection avatar="/me.jpg" strengths={coreStrengths} />

      <FeaturedProjectsSection projects={featuredProjects} />

      <CompactProjectsSection
        id="personal-projects"
        eyebrow="Selected Projects"
        title="개인 프로젝트"
        description="직접 기획하고 구현하며 프론트엔드 구조, 상태 관리, 사용자 흐름을 꾸준히 실험해온 작업들입니다."
        projects={personalProjects}
      />

      <CompactProjectsSection
        id="study-works"
        eyebrow="Learning Archive"
        title="학습 작업물"
        description="학습 과정에서 만든 프로젝트들로, 사용 기술과 함께 협업 경험과 성장 포인트를 간단히 정리했습니다."
        projects={studyProjects}
      />

      <CollaborationSection items={collaborationHighlights} />

      <Footer />
    </div>
  );
}

export default App;
