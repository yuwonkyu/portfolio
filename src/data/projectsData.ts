export interface BaseProject {
  id: string;
  title: string;
  summary: string;
  description: string[];
  technologies: string[];
  imageUrl?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface FeaturedProject extends BaseProject {
  period: string;
  team: string;
  role: string;
  contribution: string[];
  collaboration: string[];
  outcomes: string[];
}

export interface CompactProject extends BaseProject {
  category: string;
  collaborationNote?: string;
  learningNote?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "live-omgn",
    title: "OMGN",
    period: "2026",
    team: "프론트엔드 단독 작업",
    role: "브랜드 경험을 전달하는 포트폴리오형 운영 사이트 설계 및 구현",
    summary:
      "스튜디오 소개와 프로젝트 결과물을 함께 보여주는 운영 사이트로, 브랜드 톤과 미디어 소비 흐름이 자연스럽게 이어지도록 구성했습니다.",
    description: [
      "브랜드 컬러와 이미지를 중심으로 첫 인상과 탐색 흐름이 이어지도록 정보 구조를 설계했습니다.",
      "모바일과 데스크톱 모두에서 무리 없이 콘텐츠를 소비할 수 있도록 레이아웃과 간격을 세밀하게 조정했습니다.",
      "운영자가 작업물을 쉽게 교체하고 관리할 수 있도록 구조를 단순하게 유지했습니다.",
    ],
    contribution: [
      "App Router 기반 구조 설계",
      "섹션 단위 컴포넌트 분리와 재사용 구조 정리",
      "영상 임베드와 프로젝트 소개 흐름 최적화",
      "반응형 레이아웃과 시각 밀도 조정",
    ],
    collaboration: [
      "브랜드 방향성과 보여주고 싶은 결과물을 먼저 정리한 뒤 화면 우선순위를 맞췄습니다.",
      "시안 피드백을 반영하면서 문구와 이미지 비중을 반복 조정했습니다.",
    ],
    outcomes: [
      "브랜드 소개와 작업물 소개가 분리되지 않고 하나의 경험으로 이어지도록 구성",
      "운영 목적에 맞춰 관리 포인트를 줄이고 확장 가능한 구조 확보",
    ],
    technologies: [
      "Next.js 16",
      "App Router",
      "TypeScript",
      "Tailwind CSS v4",
      "FSD",
      "Vercel",
    ],
    imageUrl: "/images/OMGN.png",
    imageAlt: "OMGN 메인 화면",
    liveUrl: "https://omgn.vercel.app/",
    githubUrl: "https://github.com/WK-Friends/OMGN",
  },
  {
    id: "live-sunglitter",
    title: "썬글리터",
    period: "2026",
    team: "프론트엔드 단독 작업",
    role: "스튜디오 예약 유입을 위한 랜딩 페이지 설계 및 구현",
    summary:
      "예약 안내, 위치, 문의 흐름이 빠르게 연결되는 랜딩 페이지로, 실제 문의 전환을 고려해 핵심 정보의 노출 순서를 설계했습니다.",
    description: [
      "방문자가 궁금해하는 정보가 상단에서 바로 보이도록 콘텐츠 우선순위를 재배치했습니다.",
      "모바일에서 길게 읽지 않아도 핵심 정보를 빠르게 파악할 수 있도록 섹션 길이를 조절했습니다.",
      "예약 가능 상태를 단순히 보여주는 데 그치지 않고 운영 편의성도 함께 고려했습니다.",
    ],
    contribution: [
      "랜딩 페이지 정보 구조 설계",
      "문의 전환을 고려한 CTA 배치",
      "예약 상태 표시 로직 연결",
      "반응형 UI 구현",
    ],
    collaboration: [
      "운영자가 실제로 자주 받는 문의를 기준으로 콘텐츠 순서를 정리했습니다.",
      "안내 문구와 예약 흐름을 함께 조율해 사용자가 덜 헤매도록 다듬었습니다.",
    ],
    outcomes: [
      "서비스 소개보다 문의 연결이 우선되는 운영 목적에 맞는 구조 정리",
      "운영자가 자주 수정하는 정보를 비교적 간단하게 관리할 수 있게 구성",
    ],
    technologies: [
      "Next.js",
      "App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Upstash Redis",
    ],
    imageUrl: "/images/sunglitter.png",
    imageAlt: "썬글리터 메인 화면",
    liveUrl: "https://sun-glitter.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/SunGlitter",
  },
  {
    id: "live-instalink",
    title: "InstaLink",
    period: "2026",
    team: "프론트엔드 단독 작업",
    role: "1인 사업자용 링크 허브 페이지 제작",
    summary:
      "여러 채널과 상담 경로를 한 페이지에 정리해 소개부터 문의 연결까지 이어지는 링크 허브 형태로 구성한 운영 페이지입니다.",
    description: [
      "복잡한 설명보다 신뢰감 있는 첫 화면과 빠른 이동이 중요하다고 보고 화면 구조를 단순하게 설계했습니다.",
      "업종에 따라 링크 우선순위가 달라질 수 있어 수정이 쉬운 형태로 컴포넌트를 구성했습니다.",
      "짧은 체류 시간 안에 행동을 유도할 수 있도록 CTA 밀도를 조절했습니다.",
    ],
    contribution: [
      "단일 목적 페이지 구조 설계",
      "업종별로 응용 가능한 링크 섹션 UI 정리",
      "빠른 배포와 수정에 적합한 컴포넌트 구조 구성",
    ],
    collaboration: [
      "실제 사용자가 어떤 링크를 가장 먼저 눌러야 하는지 기준을 맞추며 우선순위를 정리했습니다.",
      "운영자 피드백을 반영해 문구와 강조 영역을 여러 번 수정했습니다.",
    ],
    outcomes: [
      "짧은 소개형 서비스에 적합한 구조를 빠르게 제작하고 재사용 가능한 패턴 확보",
      "의뢰 성격이 다른 소규모 서비스에도 확장 가능한 UI 자산 축적",
    ],
    technologies: [
      "Next.js",
      "App Router",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel",
    ],
    imageUrl: "/images/linktree.png",
    imageAlt: "InstaLink 메인 화면",
    liveUrl: "https://kku-ui.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/InstaLink",
  },
];

export const personalProjects: CompactProject[] = [
  {
    id: "template-gallery",
    title: "TemplateGallery",
    category: "개인 프로젝트",
    summary:
      "코드 없이 포트폴리오를 만들고 HTML/PDF로 내보낼 수 있는 템플릿 편집 서비스입니다.",
    description: [
      "템플릿 선택, 편집, 미리보기, 내보내기 흐름을 한 서비스 안에서 연결했습니다.",
      "상태 변화가 많은 화면이라 사용성 흐름과 폼 구조를 세심하게 설계했습니다.",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Zustand",
      "next-intl",
      "html2pdf.js",
      "Zod",
    ],
    collaborationNote: "개인 작업이지만 실서비스처럼 사용자 흐름과 확장성을 먼저 고려했습니다.",
    learningNote: "복잡한 편집 상태와 출력 흐름을 한 제품 경험으로 연결하는 연습을 했습니다.",
    liveUrl: "https://template-gallery-two.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/TemplateGallery",
    imageUrl: "/images/TemplateGallery.png",
    imageAlt: "TemplateGallery 화면",
  },
  {
    id: "project-sitedraw",
    title: "Project SiteDraw",
    category: "개인 프로젝트",
    summary:
      "건축 도면을 구조적으로 탐색하고 리뷰 이력을 함께 확인할 수 있도록 만든 도면 뷰어 프로젝트입니다.",
    description: [
      "탐색 구조와 정보 배치를 실사용 시나리오에 맞춰 정리했습니다.",
      "유지보수를 고려해 FSD 기반으로 파일과 역할을 분리했습니다.",
    ],
    technologies: [
      "Next.js 16",
      "Turbopack",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "FSD Architecture",
    ],
    collaborationNote: "과제 성격이었지만 실제 사용자 흐름을 가정해 화면을 설계했습니다.",
    learningNote: "대형 화면 구조를 작은 단위의 책임으로 나누는 감각을 많이 익혔습니다.",
    liveUrl: "https://project-site-draw.vercel.app",
    githubUrl: "https://github.com/yuwonkyu/Project_SiteDraw",
    imageUrl: "/images/project-sitedraw.png",
    imageAlt: "Project SiteDraw 화면",
  },
  {
    id: "realweather-app",
    title: "RealWeather",
    category: "개인 프로젝트",
    summary:
      "실시간 날씨와 즐겨찾기 관리 기능을 제공하는 반응형 웹 애플리케이션입니다.",
    description: [
      "서버 상태와 클라이언트 상태를 분리해 다루며 UI 반응성을 신경 썼습니다.",
      "외부 API를 연결하면서 실제 사용 흐름에 맞는 인터랙션을 정리했습니다.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "React Router",
      "Tailwind CSS",
    ],
    collaborationNote: "개인 프로젝트로 진행했지만 상태 관리 전략을 팀 코드처럼 명확히 정리했습니다.",
    learningNote: "서버 상태와 로컬 상태의 책임을 나누는 기준을 몸에 익혔습니다.",
    liveUrl: "https://realweather-frontend.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/realweather-frontend",
    imageUrl: "/images/realweather-project.png",
    imageAlt: "RealWeather 화면",
  },
];

export const studyProjects: CompactProject[] = [
  {
    id: "4u-openmind",
    title: "4U",
    category: "학습 작업물",
    summary:
      "팀 프로젝트로 진행한 익명 질문 플랫폼으로, 컴포넌트 기반 개발과 화면 구현의 기초를 다졌습니다.",
    description: [
      "메인 페이지와 질문 모달을 구현하며 React 컴포넌트 분리 감각을 익혔습니다.",
      "처음으로 협업 흐름을 경험하며 Git 기반 작업 방식을 배웠습니다.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Figma",
    ],
    collaborationNote: "4명 팀으로 역할을 나눠 짧은 기간 안에 기능을 맞춰본 경험이 있습니다.",
    learningNote: "구현 자체보다 협업 흐름과 컴포넌트 책임 분리가 크게 남았습니다.",
    liveUrl: "https://4-u-tau.vercel.app/",
    githubUrl: "https://github.com/codeit-FE15-4U/4U",
    imageUrl: "/images/project1.png",
    imageAlt: "4U 화면",
  },
  {
    id: "intermediate-1",
    title: "SGS",
    category: "학습 작업물",
    summary:
      "5인 팀으로 만든 리뷰 서비스로, 페이지 구현부터 인증 흐름 이해까지 폭넓게 경험한 프로젝트입니다.",
    description: [
      "GitHub 협업과 화면 단위 분업을 경험하며 팀 개발 리듬을 익혔습니다.",
      "JWT 기반 인증 흐름을 직접 다루며 프론트엔드에서 필요한 이해 폭을 넓혔습니다.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Axios",
      "Figma",
    ],
    collaborationNote: "여러 명이 동시에 작업하는 상황에서 충돌을 줄이는 방법을 배웠습니다.",
    learningNote: "인증, 리뷰, 레이아웃 분업을 통해 협업용 구조의 중요성을 크게 느꼈습니다.",
    liveUrl: "https://sgs-sandy.vercel.app/",
    githubUrl: "https://github.com/codeit-SGS/SGS",
    imageUrl: "/images/sgs-project.png",
    imageAlt: "SGS 화면",
  },
  {
    id: "advanced-1",
    title: "Wazy",
    category: "학습 작업물",
    summary:
      "팀 단위 심화 프로젝트로, 폼 처리와 상태 관리, 코드리뷰 경험이 한 번에 응축된 작업입니다.",
    description: [
      "React Hook Form과 Zod를 함께 사용하며 입력 경험과 검증 흐름을 설계했습니다.",
      "코드리뷰를 주고받으며 구현뿐 아니라 읽기 좋은 구조의 중요성을 체감했습니다.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    collaborationNote: "팀원 간 코드리뷰를 반복하며 작업 기준을 맞춰가는 경험을 했습니다.",
    learningNote: "폼과 상태 관리보다도 협업 중 설명 가능한 코드가 중요하다는 걸 배웠습니다.",
    liveUrl: "https://codenomad-8itj.vercel.app/",
    githubUrl: "https://github.com/codeNomad-FE/wazy",
    imageUrl: "/images/wazy-project.png",
    imageAlt: "Wazy 화면",
  },
];

export const collaborationHighlights = [
  {
    title: "협업을 위한 구조화",
    description:
      "컴포넌트 책임을 나누고 파일 구조를 정리해 다른 사람이 이어서 읽기 쉬운 프론트엔드 구조를 만드는 편입니다.",
  },
  {
    title: "리뷰를 반영하는 작업 방식",
    description:
      "코드리뷰를 받으면 단순 수정에 그치지 않고 기준 자체를 정리해 다음 작업에도 같은 품질을 유지하려고 합니다.",
  },
  {
    title: "운영 맥락을 고려한 UI 판단",
    description:
      "예쁜 화면보다 먼저, 실제 사용자가 어디서 멈추고 무엇을 눌러야 하는지 기준으로 정보 우선순위를 조정합니다.",
  },
  {
    title: "디자인과 개발 사이 연결",
    description:
      "시안을 그대로 옮기기보다 브랜드 톤, 콘텐츠 밀도, 반응형 흐름까지 함께 보고 구현 방향을 조율합니다.",
  },
];

export const coreStrengths = [
  "실제 운영 목적에 맞춰 정보 구조와 UI 흐름을 설계합니다.",
  "React, Next.js, TypeScript 기반으로 유지보수 가능한 구조를 만드는 데 강점이 있습니다.",
  "협업 과정에서 코드리뷰, 역할 분리, 커뮤니케이션을 통해 결과물의 완성도를 높입니다.",
];
