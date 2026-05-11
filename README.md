# 유원규 포트폴리오

> 클라이언트 납품부터 앱 스토어 출시까지, 완성된 제품을 만드는 프론트엔드 개발자

## 기술 스택

| 영역 | 기술 |
|---|---|
| Frontend · Web | React 19, Next.js 16, TypeScript, App Router |
| Frontend · Mobile | React Native, Expo, NativeWind, EAS Build |
| Styling & Architecture | Tailwind CSS v4, FSD Architecture, Figma |
| State & Data | Zustand, TanStack Query, React Hook Form, Supabase |
| Infra & Deploy | Vercel, Upstash Redis, Cloudinary, Git / GitHub |
| AI & Dev Tools | Claude API, GitHub Copilot, CodeRabbit, Vite |

## 프로젝트 구성

### 주요 프로젝트

| 프로젝트 | 설명 | 스택 |
|---|---|---|
| [InstaLink](https://kku-ui.vercel.app/) | 1인 사업자를 위한 템플릿형 링크 페이지 서비스 | Next.js, Tailwind CSS v4, Cloudinary |
| [윤슬이집](https://sun-glitter.vercel.app/) | 예약 현황 공유 기능을 결합한 실운영 서비스 | Next.js, Upstash Redis |
| [OMGN](https://omgn.vercel.app/) | 클라이언트 의뢰 포트폴리오 사이트 (5일 납품) | Next.js 16, FSD, Tailwind CSS v4 |

### 개인 · 앱 프로젝트

| 프로젝트 | 설명 | 스택 |
|---|---|---|
| [랜덤냠냠](https://github.com/yuwonkyu/random-nyamnyam) | 슬라임 캐릭터가 오늘 메뉴를 골라주는 Android 앱 (Google Play 베타) | React Native, Expo, Supabase |
| [TemplateGallery](https://template-gallery-two.vercel.app/) | 코드 없이 포트폴리오를 만들고 내보내는 템플릿 편집 서비스 | Next.js 15, Zustand, html2pdf.js |
| [Project SiteDraw](https://project-site-draw.vercel.app) | FSD 구조 기반 건축 도면 뷰어 | Next.js 16, React 19, Turbopack |
| [RealWeather](https://realweather-frontend.vercel.app/) | TanStack Query · Zustand 기반 날씨 앱 | React, Vite, TanStack Query |

### 학습 팀 프로젝트

| 프로젝트 | 단계 | 링크 |
|---|---|---|
| Wazy | 심화 | [Live](https://codenomad-8itj.vercel.app/) · [GitHub](https://github.com/codeNomad-FE/wazy) |
| SGS | 중급 | [Live](https://sgs-sandy.vercel.app/) · [GitHub](https://github.com/codeit-SGS/SGS) |
| 4U | 초급 | [Live](https://4-u-tau.vercel.app/) · [GitHub](https://github.com/codeit-FE15-4U/4U) |

## 프로젝트 구조

```
introduce/
├── public/
│   ├── images/                    # 프로젝트 스크린샷
│   └── me.jpg                     # 프로필 사진
├── src/
│   ├── components/
│   │   ├── Header.tsx             # 네비게이션
│   │   ├── IntroSection.tsx       # 히어로 · 프로필
│   │   ├── TechStack.tsx          # 기술 스택
│   │   ├── FeaturedProjectsSection.tsx   # 주요 프로젝트
│   │   ├── CompactProjectsSection.tsx    # 개인 · 팀 프로젝트
│   │   ├── CollaborationSection.tsx      # 협업 스토리
│   │   └── Footer.tsx             # 연락처
│   ├── data/
│   │   └── projectsData.ts        # 모든 프로젝트 데이터
│   ├── App.tsx
│   ├── App.css                    # 디자인 시스템 (CSS 변수)
│   └── main.tsx
└── package.json
```

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 배포

Vercel 자동 배포. `main` 브랜치 푸시 시 즉시 반영됩니다.

## 연락

- Email: [duck01777@naver.com](mailto:duck01777@naver.com)
- GitHub: [@yuwonkyu](https://github.com/yuwonkyu)
