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
    imageUrl: "/mini-project.png.png",
    imageAlt:
      "Make Character 프로젝트 - 게임 캐릭터 커스터마이징 웹사이트 스크린샷",
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
