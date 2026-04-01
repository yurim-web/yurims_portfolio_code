# ✨ Lee Yu Rim - Frontend Portfolio

> React + GSAP 기반의 개인 포트폴리오 웹사이트입니다.

📅 **Last Updated** : 2026.04.01

<br/>

## 🔗 Demo

👉 [https://yurim-web.github.io/yurimss_portfolio/](https://yurim-web.github.io/yurimss_portfolio/)

<br/>

## 🛠 Tech Stack

| 분류 | 기술 |
|------|------|
| ⚛️ Frontend | React |
| 🎬 Animation | GSAP, ScrollTrigger |
| 🎨 Styling | CSS (반응형 웹) |
| 🚀 Deploy | GitHub Pages (gh-pages) |

<br/>

## 🌟 Features

- 🎞 스크롤 기반 인터랙티브 애니메이션
- 📱 반응형 웹 (PC / Mobile)
- 🧩 React 컴포넌트 기반 구조
- 🖼 포트폴리오 8개 프로젝트 소개

<br/>

## 📁 폴더 구조

```
src/
├── animation/                  # GSAP 애니메이션 설정
│   ├── motion.js               # 모션 값 정의
│   ├── targets.js              # 타겟 클래스 정의
│   └── triggers.js             # ScrollTrigger 설정
│
├── components/
│   ├── common/                 # 공통 컴포넌트
│   │   ├── box/                # 박스 UI (ImgBox, PortfolioBox 등)
│   │   ├── button/             # 버튼 UI (Stack, StrengthToggle)
│   │   ├── layer/              # 레이어 (Layer.jsx)
│   │   ├── shape/              # 도형 (Circle.jsx)
│   │   └── text/               # 텍스트 (OutlineText, SlideText 등)
│   │
│   ├── layout/                 # 섹션 레이아웃
│   │   ├── portfolio/          # 포트폴리오 1~8
│   │   ├── Carrer.jsx          # 경력 섹션
│   │   ├── Contact.jsx         # 연락처 섹션
│   │   ├── Infobox.jsx         # 프로필 섹션
│   │   └── Strength.jsx        # 강점 섹션
│   │
│   └── presentation/           # 메인 슬라이드 텍스트
│       └── MainSlideTexts.jsx
│
├── css/                        # 스타일시트
│   ├── App.css
│   ├── Carrer.css
│   ├── Contact.css
│   ├── Infobox.css
│   ├── Portfolio.css
│   ├── Strength.css
│   ├── background.css
│   └── reset.css
│
└── App.jsx                     # 메인 앱 (GSAP 타임라인 구성)
```

<br/>

## 📌 섹션 구성

| 섹션 | 설명 |
|------|------|
| 🏠 Hero | LEE YU RIM + FRONTEND 텍스트 애니메이션 |
| 👤 Profile | 자기소개, ABOUT ME, EDUCATION |
| 💪 Strength | 강점 소개 |
| 💼 Career | 경력 사항 |
| 🖼 Portfolio | 프로젝트 8개 (스크롤 슬라이드) |
| 📞 Contact | 연락처, GitHub, 카카오톡 QR |

<br/>

## 🚀 Getting Started

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm start

# 빌드 및 배포
npm run deploy
```
