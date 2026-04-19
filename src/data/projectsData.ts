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

export interface CollaborationStory {
  title: string;
  description: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "live-sunglitter",
    title: "윤슬이집",
    period: "2026",
    team: "예약 랜딩 페이지 및 관리자 기능 단독 작업",
    role: "예약 안내 페이지부터 관리자 예약 관리 화면, 데이터 저장 구조까지 프론트엔드 전반 설계 및 구현",
    summary:
      "링크트리 형태의 소개 페이지에 예약 현황 확인 기능을 결합한 서비스입니다. 고객이 예약 가능 여부를 직접 확인할 수 있게 해 DM 문의를 줄이고, 관리자는 최소한의 조작으로 예약을 등록하고 공유할 수 있도록 설계했습니다.",
    description: [
      "예약 안내, 위치 확인, 인스타그램 이동, 문의 동선을 한 화면에 정리해 고객이 필요한 정보를 빠르게 찾을 수 있도록 구성했습니다.",
      "관리자는 예약 가능, 대기, 완료의 세 가지 상태를 캘린더에 등록할 수 있고, 고객은 공유된 캘린더를 통해 예약 상황을 바로 확인할 수 있습니다.",
      "반복적인 DM 문의를 줄이고 운영자가 빠르게 예약 상태를 관리할 수 있는 실용적인 구조가 핵심 과제였습니다.",
    ],
    contribution: [
      "관리자 전용 페이지와 예약 관리 UX 설계",
      "2중 비밀번호 인증과 추측이 어려운 슬러그 라우팅 적용",
      "캘린더 기반 예약 슬롯 등록 기능 및 상태 관리 구현",
      "예약 건수에 따라 날짜 색상을 다르게 표시하는 시각화 로직 구현",
      "토스트 알림을 통한 등록 완료 피드백 설계",
      "Upstash Redis를 활용한 예약 데이터 저장 및 공유 구조 적용",
    ],
    collaboration: [
      "운영자가 최소한의 작업으로 빠르게 성취감을 느낄 수 있도록, 복잡한 입력보다 빠른 등록 흐름과 즉각적인 피드백에 집중했습니다.",
      "제주도의 시원하고 맑은 인상을 전달하기 위해 배경색 `#f3efe8`을 중심으로 첫 방문 경험을 설계했습니다.",
      "링크형 소개 페이지와 관리자 화면이 분리되지 않고 하나의 운영 경험으로 이어지도록 정보 구조를 정리했습니다.",
    ],
    outcomes: [
      "관리자가 저장한 예약 일정을 고객과 공유 가능한 형태로 운영할 수 있어 반복적인 DM 응대를 줄이는 데 도움이 되는 구조를 만들었습니다.",
      "예약 수에 따른 날짜 색상 구분과 간결한 등록 폼 덕분에 캘린더 상태를 빠르게 읽고 관리할 수 있게 했습니다.",
      "운영 목적이 분명한 링크형 서비스와 관리자 화면을 하나의 제품 경험으로 연결한 프로젝트가 되었습니다.",
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
    imageAlt: "윤슬이집 관리자 예약 현황판",
    liveUrl: "https://sun-glitter.vercel.app/",
    githubUrl: "https://github.com/yuwonkyu/SunGlitter",
  },
  {
    id: "live-omgn",
    title: "OMGN",
    period: "2026",
    team: "클라이언트 의뢰 기반 포트폴리오 사이트 제작",
    role: "클라이언트 커뮤니케이션, 랜딩 페이지 구현, 포트폴리오 구조 설계, 유지보수 가능한 코드 구조 정리 담당",
    summary:
      "클라이언트의 브랜딩과 작업 영상을 효과적으로 보여주기 위한 포트폴리오 사이트입니다. 짧은 기간 안에 맞춤형 사이트를 제작하면서도, 이후 유지보수와 확장을 고려한 구조로 설계했습니다.",
    description: [
      "클라이언트의 인트로 영상과 포트폴리오 영상을 자연스럽게 연결하는 랜딩 경험이 필요했고, 짧은 제작 기간 안에서 현실적인 구현 방법을 선택해야 했습니다.",
      "초기에는 GIF와 하드코딩 기반 모션 디자인을 직접 구현하려 했지만, 로고 모션 종료 시점과 홈 UI가 완전히 동기화되어야 하는 요구사항을 만족시키기 어려웠습니다.",
      "단기간 납기와 유지보수 가능성을 동시에 만족하는 구조를 만드는 것이 가장 중요한 문제였습니다.",
    ],
    contribution: [
      "Next.js App Router 기반 사이트 구조 설계",
      "최초 1회 재생되는 MP4 인트로 영상 흐름 구현",
      "유튜브 임베드 기반 포트폴리오 영상 구조 설계",
      "연도별 영상 분류를 통한 콘텐츠 탐색성과 성능 최적화",
      "사이드바 내비게이션을 통한 페이지 이동 UX 개선",
      "FSD 구조 적용으로 유지보수성과 타 개발자 인수인계 편의성 확보",
    ],
    collaboration: [
      "5일이라는 짧은 제작 기간 동안 클라이언트와 지속적으로 작업 내용을 공유하며 우선순위를 빠르게 조율했습니다.",
      "직접 만든 모션 구현을 고집하기보다, 클라이언트가 원하는 완성도와 일정 안착 가능성을 기준으로 MP4 방식으로 방향을 전환했습니다.",
      "깃허브는 비공식 저장소로 관리한 뒤 클라이언트가 포크해 후속 개발자가 포크 싱크와 커밋 수정으로 유지보수할 수 있게 구조를 열어두었습니다.",
    ],
    outcomes: [
      "브랜딩 소개 페이지이면서도 개인 포트폴리오 영상을 안정적으로 공유할 수 있는 사이트를 빠른 일정 안에 완성했습니다.",
      "1주일가량의 후속 보수 작업까지 포함해 실제 클라이언트 만족도를 높였고, 이후 확장과 유지보수에 유리한 코드베이스를 남겼습니다.",
      "기술적 이상향보다 프로젝트 목표와 일정, 유지보수 현실을 우선하는 판단 경험을 얻은 작업이었습니다.",
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
    id: "live-instalink",
    title: "InstaLink",
    period: "2026",
    team: "1인 사업자 대상 템플릿형 링크 서비스",
    role: "제품 기획, 템플릿 구조 설계, 확장 가능한 데이터와 컴포넌트 아키텍처 설계 및 구현",
    summary:
      "인스타그램 중심으로 고객을 유치하는 1인 사업자를 위한 링크 전용 페이지 서비스입니다. 기존 링크 모음 서비스보다 예약과 상담 전환에 더 초점을 맞춰, 불필요한 DM과 반복 문의를 줄이기 위해 기획했습니다.",
    description: [
      "브랜드 소개, 서비스 종류와 가격, 후기, 운영시간, 위치, SNS 링크를 한 흐름 안에서 확인할 수 있도록 구성했습니다.",
      "모든 정보를 본 고객이 바로 예약 또는 필요한 질문으로 연결될 수 있도록 카카오톡 오픈채팅 CTA를 중심 동선으로 배치했습니다.",
      "여러 업종이 사용할 수 있는 템플릿형 서비스로 확장성과 운영 전략까지 함께 설계하는 것이 중요한 과제였습니다.",
    ],
    contribution: [
      "슬러그 기반 페이지 분기 구조 설계",
      "템플릿형 서비스에 맞는 데이터와 UI 컴포넌트 분리",
      "중복 타입 정리와 옵션화 가능한 구조 설계",
      "기본, 다크, 필라테스, 헬스, 아이보리, 트렌드 컬러 등 6개 테마 구현",
      "이미지 성능 문제를 고려한 Cloudinary 연동 방식 적용",
      "향후 유료화와 운영 확장을 고려한 유지보수 구조 설계",
    ],
    collaboration: [
      "이 프로젝트는 개인 수익화를 목표로 한 제품 성격이 강했기 때문에, 단일 사이트가 아니라 여러 고객에게 반복 제공 가능한 구조로 설계했습니다.",
      "처음 만드는 템플릿 판매형 서비스였기 때문에 배포 방식과 고객 데이터 관리 구조를 초기에 함께 고민했습니다.",
      "이미지를 직접 저장할 경우 성능과 용량 문제가 커질 수 있어 Cloudinary에 저장 후 링크를 가져오는 방식으로 관리 전략을 정리했습니다.",
    ],
    outcomes: [
      "1인 사업자가 DM 상담을 줄이고 예약 전환에 집중할 수 있도록 돕는 목적형 링크 서비스를 구현했습니다.",
      "데이터와 템플릿 컴포넌트를 분리한 구조 덕분에 새로운 업종, 테마, 옵션을 추가하기 쉬운 확장성 있는 기반을 마련했습니다.",
      "서비스형 템플릿을 실제 수익 모델로 연결하기 위한 초기 제품 구조를 만든 프로젝트였습니다.",
    ],
    technologies: [
      "Next.js",
      "App Router",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel",
      "Cloudinary",
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
      "코드 없이 포트폴리오를 만들고 HTML과 PDF로 내보낼 수 있도록 구성한 템플릿 편집 서비스입니다.",
    description: [
      "템플릿 선택, 편집, 미리보기, 내보내기까지 한 서비스 안에서 자연스럽게 이어지도록 흐름을 설계했습니다.",
      "상태 변화가 많은 화면이라 사용자 흐름과 데이터 구조가 함께 정리되도록 설계하는 데 집중했습니다.",
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
    collaborationNote:
      "개인 작업이지만 실제 서비스처럼 사용 흐름, 검증 로직, 확장 가능성을 함께 고려하며 구현했습니다.",
    learningNote:
      "복잡한 편집 상태와 출력 흐름을 제품 경험으로 연결하는 방법을 많이 배운 프로젝트입니다.",
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
      "건축 도면을 구조적으로 탐색하고 리뷰 이력을 확인할 수 있도록 만든 도면 뷰어 프로젝트입니다.",
    description: [
      "탐색 구조와 정보 배치를 실제 사용 시나리오에 맞춰 정리해 화면 이해 비용을 줄이려 했습니다.",
      "유지보수를 고려해 FSD 기반으로 파일과 책임을 분리하며 설계했습니다.",
    ],
    technologies: [
      "Next.js 16",
      "Turbopack",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "FSD Architecture",
    ],
    collaborationNote:
      "과제 성격의 프로젝트였지만 실사용 흐름을 가정하고 화면과 구조를 설계했습니다.",
    learningNote:
      "큰 화면 구조를 작은 책임 단위로 나누는 감각을 많이 훈련한 작업이었습니다.",
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
      "실시간 날씨와 즐겨찾기 관리를 함께 제공하는 반응형 웹 애플리케이션입니다.",
    description: [
      "서버 상태와 클라이언트 상태를 분리해 화면 반응성과 데이터 흐름이 명확하게 드러나도록 구성했습니다.",
      "여러 API를 연결하면서도 사용자가 흐름을 자연스럽게 따라갈 수 있게 인터랙션을 정리했습니다.",
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
    collaborationNote:
      "개인 프로젝트이지만 상태 관리 책임을 분명히 나누고 실무 코드처럼 구조를 정리했습니다.",
    learningNote:
      "서버 상태와 로컬 상태의 역할을 구분하는 기준을 스스로 세우는 데 도움이 된 프로젝트였습니다.",
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
    category: "학습 팀 프로젝트",
    summary:
      "질문과 답변 흐름을 중심으로 컴포넌트 기반 UI를 처음부터 구현하며 협업 경험을 쌓은 프로젝트입니다.",
    description: [
      "메인 페이지와 질문 모달을 구현하며 React 컴포넌트 분리 기준을 익혔습니다.",
      "처음으로 Git 기반 협업 방식을 경험하며 작업 분리와 충돌 대응을 배웠습니다.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Figma",
    ],
    collaborationNote:
      "짧은 기간 안에 여러 명이 함께 기능을 나누어 구현하며 협업 리듬을 익혔습니다.",
    learningNote:
      "기능 구현 자체보다 작업 흐름과 컴포넌트 책임 분리가 중요하다는 점을 많이 배웠습니다.",
    liveUrl: "https://4-u-tau.vercel.app/",
    githubUrl: "https://github.com/codeit-FE15-4U/4U",
    imageUrl: "/images/project1.png",
    imageAlt: "4U 화면",
  },
  {
    id: "intermediate-1",
    title: "SGS",
    category: "학습 팀 프로젝트",
    summary:
      "리뷰 서비스 구현 과정에서 페이지 개발부터 인증 흐름 이해까지 함께 경험한 팀 프로젝트입니다.",
    description: [
      "GitHub 협업과 화면 단위 분업을 경험하며 팀 개발 리듬을 익혔습니다.",
      "JWT 기반 인증 흐름을 직접 다루며 프론트엔드가 이해해야 할 경계를 넓혔습니다.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Axios",
      "Figma",
    ],
    collaborationNote:
      "여러 명이 동시에 작업하는 상황에서 충돌을 줄이는 방법과 커뮤니케이션 방식을 배웠습니다.",
    learningNote:
      "인증, 리뷰, UI를 나누어 작업하면서 구조화된 협업의 필요성을 체감했습니다.",
    liveUrl: "https://sgs-sandy.vercel.app/",
    githubUrl: "https://github.com/codeit-SGS/SGS",
    imageUrl: "/images/sgs-project.png",
    imageAlt: "SGS 화면",
  },
  {
    id: "advanced-1",
    title: "Wazy",
    category: "학습 팀 프로젝트",
    summary:
      "폼 처리와 상태 관리, 코드 리뷰 경험을 집중적으로 다루며 한 단계 더 깊게 협업한 프로젝트입니다.",
    description: [
      "React Hook Form과 Zod를 조합해 입력 경험과 검증 흐름을 정리했습니다.",
      "코드 리뷰를 주고받으며 구현 속도보다 읽기 좋은 구조의 중요성을 체감했습니다.",
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
    collaborationNote:
      "팀원들과 코드 리뷰를 반복하며 작업 기준을 맞춰가는 과정을 경험했습니다.",
    learningNote:
      "작동하는 코드보다 설명 가능한 코드가 협업에서 더 중요하다는 점을 배웠습니다.",
    liveUrl: "https://codenomad-8itj.vercel.app/",
    githubUrl: "https://github.com/codeNomad-FE/wazy",
    imageUrl: "/images/wazy-project.png",
    imageAlt: "Wazy 화면",
  },
];

export const collaborationHighlights: CollaborationStory[] = [
  {
    title: "낯선 분야에서도 팀 안에서 배우고 공유한 태도",
    description:
      "비전공자로 부트캠프를 시작했지만, 모르는 것을 숨기기보다 근본적인 질문을 던지고 배운 것을 다시 팀원과 공유하는 방식으로 학습했습니다. 20대 중심의 학습 환경에서도 먼저 어울리고 스터디에 참여하며 협업 리듬을 빠르게 익혔습니다.",
  },
  {
    title: "갈등 상황에서 중간을 잇는 조율 역할",
    description:
      "초급 프로젝트에서는 팀 분위기가 흔들리는 상황에서 각자의 의견과 감정을 풀어서 설명하고, 답답해하는 마음을 들어주며 중간에서 조율하려 노력했습니다. 개발 외의 커뮤니케이션도 프로젝트 완수에 큰 영향을 준다는 점을 체감했습니다.",
  },
  {
    title: "팀장 경험을 통해 배운 결단과 책임",
    description:
      "세 번째 팀에서는 팀장을 맡아 코어타임 지각과 작업 지연 문제를 직접 다뤘습니다. 맡은 범위를 조정하고 최소 기능을 다시 배분하며 프로젝트를 수습하려 했고, 배포 실패까지 겪으며 리더는 공감뿐 아니라 결단도 필요하다는 점을 배웠습니다.",
  },
  {
    title: "기술 선택의 모호함을 정리하는 협업 방식",
    description:
      "심화 프로젝트에서는 React Hook Form, Zod, Zustand 같은 기술을 실제 서비스에 어떻게 적용할지 팀 내에서 합의하는 과정이 쉽지 않았습니다. 멘토링과 토론을 반복하며 선택 기준을 정리하려 했고, 이후 상태 관리를 리팩터링하며 판단 기준의 중요성을 더 크게 느꼈습니다.",
  },
  {
    title: "프로젝트가 끝난 뒤에도 이어지는 협업 네트워크",
    description:
      "부트캠프 기간 동안 프로젝트가 끝날 때마다 디스코드 서버를 직접 만들어 동기들과 공유했고, 최종적으로는 기수 전체가 모일 수 있는 서버까지 운영했습니다. 필요한 정보나 교육, 취업 관련 자료를 꾸준히 공유하며 관계를 일회성 협업으로 끝내지 않으려 했습니다.",
  },
];

export const coreStrengths = [
  "실제 서비스 목적에 맞춰 정보 구조와 UI 흐름을 설계합니다.",
  "React, Next.js, TypeScript 기반으로 유지보수 가능한 구조를 만드는 데 강점이 있습니다.",
  "코드 리뷰, 역할 분리, 조율 경험을 통해 함께 일하기 쉬운 프론트엔드를 지향합니다.",
];
