# 🚀 Frontend Developer Portfolio

> 게임 UI/UX & 프론트엔드 개발자의 성장 여정을 담은 포트폴리오

## 📖 Overview

안녕하세요! 게임 UI/UX 및 프론트엔드 개발에 관심이 많은 개발자입니다.  
코드잇 부트캠프를 통해 체계적으로 학습하며, 기초부터 심화까지 단계별로 성장한 과정을 포트폴리오에 담았습니다.

**🎯 핵심 가치**: 사용자에게 즐거움과 편의성을 제공하는 인터페이스 구현

## 🎨 Portfolio Highlights

### 🌱 4U - 오픈마인드 (기초 프로젝트)

- **기간**: 2025.03 ~ 2025.04 (3주)
- **역할**: 메인 페이지 & 질문 모달 개발
- **성과**: 첫 팀 프로젝트로 React 컴포넌트 기반 개발 경험
- **기술**: React, JavaScript, Tailwind CSS, Axios, React Router
- **배포**: [Live Demo](https://4-u-tau.vercel.app/) | [GitHub](https://github.com/codeit-FE15-4U/4U)

### 🍻 SGS - 술 마시는 개발자 생활 (중급 프로젝트)

- **기간**: 2025.05 ~ 2025.06 (3주)
- **역할**: 팀장, GitHub 환경 구성, 프로필 페이지 & 공통 컴포넌트 개발
- **성과**: JWT 인증 시스템 구현, 팀 리더십 경험
- **기술**: Next.js, TypeScript, React, Tailwind CSS, Axios
- **배포**: [Live Demo](https://sgs-sandy.vercel.app/) | [GitHub](https://github.com/codeit-SGS/SGS)

### 🌍 Wazy - 글로벌 노마드 플랫폼 (심화 프로젝트)

- **기간**: 2025.07 ~ 2025.07 (4주)
- **역할**: 체험 등록/수정 페이지, 공통 컴포넌트 개발
- **성과**: React Hook Form + Zod 조합으로 폼 검증 시스템 구현
- **기술**: Next.js, TypeScript, Zustand, React Hook Form, Zod, Tailwind CSS
- **배포**: [Live Demo](https://codenomad-8itj.vercel.app/) | [GitHub](https://github.com/codeNomad-FE/wazy)

### 🎮 Make Character - 나의 캐릭터 커스터마이징 (개인 프로젝트)

- **기간**: 2025.08 ~ 2025.09 (1개월)
- **역할**: 전체 기획, 디자인, 개발 (개인 프로젝트)
- **성과**: 게임 캐릭터 커스터마이징 웹 서비스, 한/일/영 다국어 지원
- **기술**: Next.js, TypeScript, Tailwind CSS, Zustand, Figma, LibreSprite
- **배포**: [Live Demo](https://make-character-v2.vercel.app/) | [GitHub](https://github.com/yuwonkyu/makeCharacter)

## 🛠 Tech Stack

### Frontend & Styling

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)

### State & Forms

![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat-square&logo=zustand&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)

### Dev Tools

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)

### Design & Collaboration

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![LibreSprite](https://img.shields.io/badge/LibreSprite-4B8BBE?style=flat-square&logo=pixelart&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

## 🏗 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── me.jpg             # Profile image
│   ├── project1.png       # 4U project screenshot
│   ├── sgs-project.png    # SGS project screenshot
│   ├── wazy-project.png   # Wazy project screenshot
│   └── character-project.png # Make Character project screenshot
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── IntroSection.tsx   # Hero section with profile
│   │   ├── ProjectSection.tsx # Project showcase section
│   │   ├── ProjectCard.tsx    # Individual project card
│   │   └── TechStack.tsx      # Technology stack display
│   ├── data/
│   │   └── projectsData.ts    # Project data and configurations
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (권장) 또는 npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yuwonkyu/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Features

- **🎯 반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응
- **✨ 모던 UI/UX**: Tailwind CSS 기반의 세련된 인터페이스
- **🚀 빠른 로딩**: Vite 기반의 최적화된 번들링
- **📱 SEO 최적화**: 메타 태그 및 접근성 고려
- **🎨 인터랙티브 효과**: 부드러운 호버 애니메이션
- **📊 프로젝트 쇼케이스**: 체계적인 난이도별 프로젝트 분류

## 🏆 Development Journey

### 📈 성장 지표

- **프로젝트 완료**: 4개 (기초 → 중급 → 심화 → 개인)
- **팀 프로젝트 경험**: 5인 팀 리더 경험
- **개인 프로젝트**: 기획부터 디자인, 개발까지 전체 사이클 경험
- **기술 스택 확장**: JavaScript → TypeScript, React → Next.js
- **협업 도구 활용**: GitHub, Figma, CodeRabbit, LibreSprite

### 🎯 주요 성취

1. **컴포넌트 설계**: 재사용 가능한 컴포넌트 아키텍처 구현
2. **상태 관리**: JWT 인증, Zustand를 활용한 클라이언트 상태 관리
3. **폼 검증**: React Hook Form + Zod 조합으로 견고한 폼 시스템
4. **팀 리더십**: 개발 환경 세팅, 코드 리뷰, 일정 관리 경험
5. **개인 프로젝트**: 기획·디자인·개발 전체 사이클 경험, 다국어 지원 시스템 구현

## 📞 Contact

- **Email**: [이메일주소](duck01777@naver.com)
- **GitHub**: [@yuwonkyu](https://github.com/yuwonkyu)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

---

> **"늦둥이지만 풍부한 경험과 뛰어난 책임감으로 프로젝트에 임합니다."**  
> 함께 성장할 수 있는 기회를 기대합니다! 🚀
