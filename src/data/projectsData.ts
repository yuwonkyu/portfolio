import { ProjectData } from "../components/ProjectCard";

export const basicProjects: ProjectData[] = [
  {
    id: "4u-openmind",
    title: "4U - 오픈마인드",
    description:
      "코드잇 부트캠프 기초 프로젝트로 팀원 4명과 3주간 진행한 익명 질문 플랫폼입니다.\n메인 페이지 개발, 질문 모달 구현, 공통 컴포넌트 적용을 담당했습니다.",
    icon: "💭",
    imageUrl: "/project1.png", // 실제 이미지 경로
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
      "코드잇 부트캠프 중급 프로젝트로 5인 팀에서 팀장을 맡아 약 3주간 진행했습니다.\n팀 환경 세팅, GitHub 레포지토리 구성, 프로필 페이지 구현, 공통 컴포넌트 제작을 담당했습니다.\nAccess/Refresh Token을 활용한 인증 시스템과 재사용 가능한 컴포넌트 아키텍처를 구현했습니다.",
    icon: "🍻",
    imageUrl: "/sgs-project.png", // 실제 이미지 경로
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
      "코드잇 부트캠프 심화 프로젝트로 5인 팀에서 약 4주간 진행한 여행·체험 플랫폼입니다.\n체험 등록/수정 페이지와 공통 컴포넌트를 담당하여 에어비앤비와 유사한 기능을 구현했습니다.\nReact Hook Form + Zod를 활용한 유효성 검증과 Zustand 상태 관리를 도입했습니다.",
    icon: "�",
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

export const colorSchemes = {
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
};
