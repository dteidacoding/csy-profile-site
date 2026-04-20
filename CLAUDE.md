# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

**최서영 SWAI 강사**를 위한 인터랙티브 정적 웹 이력서입니다.
빌드 도구나 프레임워크 없이 순수 정적 파일로 구성되며, 브라우저에서 직접 열거나 정적 호스팅 서비스로 배포합니다.

- **기술 스택:** HTML5, CSS3, JavaScript (ES6+), TailwindCSS v3
- **배포:** GitHub Pages 또는 Netlify (정적 호스팅)
- **진행 단계:** ROADMAP.md 참고

---

## 개발 명령어

### 로컬 실행
```bash
# 별도 빌드 불필요 — index.html을 브라우저에서 직접 열기
open index.html        # macOS
start index.html       # Windows
```

### TailwindCSS (CLI 방식 사용 시)
```bash
# 의존성 설치
npm install

# 개발 모드 (파일 변경 감지 + 자동 빌드)
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/custom.css --watch

# 프로덕션 빌드 (미사용 CSS 제거)
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/custom.css --minify
```

### CDN 방식 사용 시 (빌드 불필요)
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### 배포
```bash
# GitHub Pages — main 브랜치 루트 또는 /docs 폴더로 설정
git add .
git commit -m "feat: 이력서 페이지 업데이트"
git push origin main
```

---

## 아키텍처 및 구조

```
resume/
├── index.html            # 진입점 — 모든 섹션을 단일 페이지로 구성
├── assets/
│   ├── css/
│   │   ├── input.css     # TailwindCSS @layer 지시어 (CLI 방식)
│   │   └── custom.css    # 빌드 결과물 또는 커스텀 스타일
│   ├── js/
│   │   └── main.js       # 스크롤 애니메이션, 타이핑 효과, 네비 활성화
│   └── images/
│       └── profile.jpg   # 프로필 사진
└── tailwind.config.js    # 커스텀 컬러 토큰 정의 (CLI 방식)
```

### 페이지 섹션 순서 (`index.html`)
1. **Hero** — 이름(최서영), 직함, 프로필 사진, SNS 링크
2. **About** — 자기소개 + 핵심 가치 뱃지 6개
3. **Skills** — 기술 스택 카테고리별 카드 + 프로그레스 바
4. **Experience** — 타임라인 형태 경력 카드
5. **Education** — 교육 이력 카드
6. **Portfolio** — 프로젝트/강의 포트폴리오 그리드
7. **Certifications** — 자격증 + 수상 뱃지
8. **Contact / Footer** — 이메일, SNS, 노션 링크

### JavaScript (`main.js`) 주요 역할
- `Intersection Observer API` — 섹션 진입 시 페이드인/슬라이드 애니메이션
- 타이핑 효과 — 히어로 섹션 직함 텍스트 (외부 라이브러리 없이 순수 JS)
- 스크롤 위치 감지 — 네비게이션 활성 링크 표시
- 스킬 프로그레스 바 — 스크롤 진입 시 애니메이션 트리거

---

## 디자인 시스템 (컬러 토큰)

브라운 & 베이지 계열의 Warm Minimal 테마를 사용합니다.
`tailwind.config.js`의 `extend.colors`에 아래 토큰이 정의됩니다.

| 토큰 | HEX | 주요 용도 |
|------|-----|----------|
| `linen` | `#FAF7F2` | 전체 페이지 배경 |
| `beige` | `#F0E9DC` | 카드·섹션 배경, 뱃지 배경 |
| `sand` | `#E8DDD0` | 사이드바 배경, 테두리 |
| `brown.light` (Caramel) | `#C49A6C` | 뱃지 강조, 타임라인 선, 프로필 테두리 |
| `brown` (Mocha) | `#A07850` | 포인트 색상, 링크, 프로그레스 바 시작 |
| `brown.dark` (Warm Brown) | `#7C5C3E` | 주요 텍스트, 버튼 배경 |
| `brown.deeper` (Espresso) | `#3E2C1E` | 제목 텍스트, 푸터 배경 |
| `cream` | `#FFFDF9` | 카드 내부 배경 |

---

## 주요 콘텐츠 정보

이력서 소유자 정보는 `index.html` 내 각 섹션에 하드코딩됩니다.

- **이름:** 최서영
- **소속:** 동탄에이다 대표
- **직함:** SWAI 강사 | 소프트웨어·AI 교육 전문가
- **연락처:** eidacoding_dt@naver.com / 010.5598.4748 / Instagram @dteida / 노션 포트폴리오
- **전문 분야:** 블록코딩(엔트리·스크래치), AI·스포츠 융합 교육, 실버 AI·디지털 융합 교육, SWAI 강사양성
