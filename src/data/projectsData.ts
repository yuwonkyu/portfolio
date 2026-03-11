import { ProjectData } from "../components/ProjectCard";

export const basicProjects: ProjectData[] = [
  {
    id: "4u-openmind",
    title: "4U - 오픈마인드",
    description:
      "첫 팀 프로젝트라 긴장했지만 4명이서 3주 동안 익명 질문 플랫폼을 만들었어요.\n메인 페이지랑 질문 모달을 만들면서 React 컴포넌트의 매력에 빠졌습니다.\n처음엔 CSS 때문에 밤새웠는데, 지금 보니 그때가 진짜 성장의 시작이었네요.",
    imageUrl: "/project1.png",
    imageAlt:
      "4U 오픈마인드 프로젝트 - 익명 질문 플랫폼의 메인 페이지와 질문 모달 화면을 보여주는 웹사이트 스크린샷",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Figma",
    ],
    liveUrl: "https://4-u-tau.vercel.app/",
    githubUrl: "https://github.com/codeit-FE15-4U/4U",
  },
];

export const intermediateProjects: ProjectData[] = [
  {
    id: "intermediate-1",
    title: "SGS - 술 마시는 개발자 생활",
    description:
      "팀장을 맡게 되어서 떨렸지만, 5명이서 술 리뷰 사이트를 만들어냈어요.\nGitHub 세팅부터 프로필 페이지까지 직접 구현하면서 팀 개발의 재미를 알았습니다.\n토큰 인증 구현할 때 이해를 못 했지만, 그 덕분에 JWT를 제대로 이해하게 됐어요.",
    imageUrl: "/sgs-project.png",
    imageAlt: "SGS 프로젝트 - 술 마시는 개발자 생활 웹사이트 스크린샷",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "Figma",
    ],
    liveUrl: "https://sgs-sandy.vercel.app/",
    githubUrl: "https://github.com/codeit-SGS/SGS",
  },
];

export const advancedProjects: ProjectData[] = [
  {
    id: "advanced-1",
    title: "Wazy (코드노마드) - 글로벌 노마드 플랫폼",
    description:
      "드디어 심화 프로젝트! 4주 동안 여행 플랫폼을 만들면서 진짜 개발자가 된 기분이었어요.\n체험 등록 페이지 만들 때 React Hook Form이랑 Zod 조합이 이렇게 좋은 기능인지 몰랐습니다.\n팀원들과 코드 리뷰하면서 '아, 이래서 협업이 중요하구나' 싶었던 프로젝트예요.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Axios",
      "ESLint",
      "Prettier",
    ],
    liveUrl: "https://codenomad-8itj.vercel.app/",
    githubUrl: "https://github.com/codeNomad-FE/wazy",
    imageUrl: "/wazy-project.png",
    imageAlt:
      "Wazy 코드노마드 프로젝트 - 글로벌 노마드 여행 체험 플랫폼 스크린샷",
  },
];

export const personalProjects: ProjectData[] = [
  {
    id: "template-gallery",
    title: "TemplateGallery - 포트폴리오 템플릿 에디터",
    description:
      "코드 없이도 포트폴리오를 쉽게 만들고, 내가 소유하는 HTML/PDF로 내보낼 수 있는 노코드 에디터예요.\n로컬 중심 워크플로우를 기반으로 템플릿 편집부터 미리보기, 내보내기까지 한 번에 진행할 수 있습니다.",
    technologies: [
      "Next.js 15",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Zustand",
      "next-intl",
      "html2pdf.js",
      "Zod",
      "pnpm",
    ],
    liveUrl: "https://template-gallery-two.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/TemplateGallery",
    imageUrl: "/TemplateGallery.png",
    imageAlt:
      "TemplateGallery 프로젝트 - 포트폴리오 템플릿 에디터 웹페이지 스크린샷",
  },
  {
    id: "project-sitedraw",
    title: "Project SiteDraw - 건설 도면 뷰어",
    description:
      "건설 현장 도면을 구조적으로 탐색하고 리비전 이력을 빠르게 파악할 수 있는 웹 기반 도면 뷰어예요.\n구직 중 면접 과제로 진행했으며, 실제 고객의 사용 흐름을 고려해 탐색 구조와 정보 배치를 설계했습니다.\n확장 가능한 유지보수를 위해 FSD(Feature-Sliced Design) 기반 파일/코드 구조로 설계한 프로젝트입니다.",
    technologies: [
      "Next.js 16 (App Router)",
      "Turbopack",
      "TypeScript (Strict)",
      "React 19",
      "Tailwind CSS 4",
      "FSD Architecture",
      "Node.js 18+",
    ],
    liveUrl: "https://project-site-draw.vercel.app",
    githubUrl: "https://github.com/yuwonkyu/Project_SiteDraw",
    imageUrl: "/project-sitedraw.png",
    imageAlt:
      "Project SiteDraw 프로젝트 - 건설 현장 도면 탐색 및 리비전 이력 확인 웹 뷰어 스크린샷",
  },
  {
    id: "realweather-app",
    title: "RealWeather - 실시간 날씨 앱",
    description:
      "실시간 날씨 정보와 즐겨찾기 관리를 제공하는 반응형 웹 애플리케이션이에요.\nTanStack Query로 서버 상태를 효율적으로 관리하고, Zustand로 클라이언트 상태를 처리했습니다.\nKakao Maps API와 OpenWeather API를 연동하면서 외부 API 통합의 재미를 느꼈어요.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "React Router",
      "Tailwind CSS",
      "framer-motion",
      "Kakao Maps API",
      "OpenWeather API",
    ],
    liveUrl: "https://realweather-frontend.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/realweather-frontend",
    imageUrl: "/realweather-project.png",
    imageAlt:
      "RealWeather 프로젝트 - 실시간 날씨 정보 웹 애플리케이션 스크린샷",
  },
  {
    id: "personal-1",
    title: "Make Character - 나의 캐릭터 커스터마이징",
    description:
      "게임 캐릭터 커스터마이징을 웹에서 구현하고 싶어서 만든 개인 프로젝트예요.\n테일즈위버 테마로 한/일/영 다국어 지원과 실시간 캐릭터 커스터마이징을 구현했습니다.\n혼자 작업하는 것의 어려움을 느끼면서도, Figma 디자인부터 픽셀 아트까지 직접 해보며 많이 배웠어요.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Vercel",
      "Figma",
      "LibreSprite",
    ],
    liveUrl: "https://make-character-v2.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/makeCharacter",
    imageUrl: "/mini-project.png",
    imageAlt:
      "Make Character 프로젝트 - 게임 캐릭터 커스터마이징 웹사이트 스크린샷",
  },
  {
    id: "personal-2",
    title: "Portfolio - 개발자 포트폴리오 웹사이트",
    description:
      "나의 성장 과정과 프로젝트들을 보여주고 싶어서 만든 포트폴리오 사이트예요.\nReact와 TypeScript로 컴포넌트 기반 개발을 하면서 재사용성을 고려했습니다.\nTailwind CSS로 반응형 디자인을 구현하고, Vite로 빠른 개발 환경을 구축했어요.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    liveUrl: "https://portfolio-wonkyu.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/portfolio",
    imageUrl: "/portfolio-project.png",
    imageAlt: "Portfolio 프로젝트 - 개발자 포트폴리오 웹사이트 스크린샷",
  },
];

export const colorSchemes = {
  ocean: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    titleColor: "text-slate-800",
    descColor: "text-gray-600",
    techBg: "bg-slate-100",
    techText: "text-slate-700",
    buttonBg: "bg-slate-600",
    buttonHover: "hover:bg-slate-700",
  },
  green: {
    bg: "bg-green-100",
    border: "border-green-200",
    titleColor: "text-green-800",
    descColor: "text-green-700",
    techBg: "bg-green-100",
    techText: "text-green-700",
    buttonBg: "bg-green-500",
    buttonHover: "hover:bg-green-600",
  },
  blue: {
    bg: "bg-blue-100",
    border: "border-blue-200",
    titleColor: "text-blue-800",
    descColor: "text-blue-700",
    techBg: "bg-blue-100",
    techText: "text-blue-700",
    buttonBg: "bg-blue-500",
    buttonHover: "hover:bg-blue-600",
  },
  purple: {
    bg: "bg-purple-100",
    border: "border-purple-200",
    titleColor: "text-purple-800",
    descColor: "text-purple-700",
    techBg: "bg-purple-100",
    techText: "text-purple-700",
    buttonBg: "bg-purple-500",
    buttonHover: "hover:bg-purple-600",
  },
  orange: {
    bg: "bg-orange-100",
    border: "border-orange-200",
    titleColor: "text-orange-800",
    descColor: "text-orange-700",
    techBg: "bg-orange-100",
    techText: "text-orange-700",
    buttonBg: "bg-orange-500",
    buttonHover: "hover:bg-orange-600",
  },
};
