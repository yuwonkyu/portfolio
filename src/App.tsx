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
        description="직접 기획하고 구현하며 정보 구조, 상태 관리, 사용자 흐름을 스스로 설계해 본 작업들입니다."
        projects={personalProjects}
      />

      <CompactProjectsSection
        id="study-works"
        eyebrow="Learning Archive"
        title="협업과 학습 프로젝트"
        description="학습 과정에서 진행한 팀 프로젝트를 통해 협업 방식, 역할 분리, 코드 리뷰 경험을 쌓아 온 흐름을 정리했습니다."
        projects={studyProjects}
      />

      <CollaborationSection items={collaborationHighlights} />

      <Footer />
    </div>
  );
}

export default App;
