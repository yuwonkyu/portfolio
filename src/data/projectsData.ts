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
    ],
    liveUrl: "https://4-u-tau.vercel.app/",
    githubUrl: "https://github.com/codeit-FE15-4U/4U",
  },
];

export const intermediateProjects: ProjectData[] = [
  {
    id: "intermediate-1",
    title: "프로젝트 1",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "⚛️",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const advancedProjects: ProjectData[] = [
  {
    id: "advanced-1",
    title: "프로젝트 1",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "🌐",
    technologies: ["React", "TypeScript", "Node.js"],
    liveUrl: "",
    githubUrl: "",
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
