# SWAI 강사 웹 이력서 개발 로드맵

## 프로젝트 개요

SWAI 강사를 위한 인터랙티브 웹 이력서 개발 프로젝트입니다.
정적 HTML/CSS/JavaScript와 TailwindCSS를 활용하여 세련되고 반응형인 이력서를 구축합니다.

- **기술 스택:** HTML5, CSS3, JavaScript (ES6+), TailwindCSS v3
- **배포 방식:** 정적 웹 페이지 (GitHub Pages / Netlify 등)
- **대상:** SWAI(소프트웨어·AI) 강사

---

## 마일스톤 개요

| 단계 | 내용 | 상태 |
|------|------|------|
| Phase 1 | 프로젝트 환경 세팅 | ⬜ 대기 |
| Phase 2 | 레이아웃 및 디자인 시스템 구성 | ⬜ 대기 |
| Phase 3 | 섹션별 콘텐츠 구현 | ⬜ 대기 |
| Phase 4 | 인터랙션 및 애니메이션 | ⬜ 대기 |
| Phase 5 | 반응형 최적화 | ⬜ 대기 |
| Phase 6 | 성능 최적화 및 배포 | ⬜ 대기 |

---

## Phase 1 — 프로젝트 환경 세팅

### 목표
개발 환경을 구성하고 프로젝트 디렉토리 구조를 확립합니다.

### 작업 목록
- [ ] 프로젝트 폴더 구조 생성
- [ ] TailwindCSS CDN 또는 CLI 설정
- [ ] 기본 `index.html` 뼈대 작성
- [ ] 폰트 설정 (Google Fonts — Noto Sans KR, Playfair Display)
- [ ] 파비콘 및 메타태그 설정 (OG 태그 포함)

### 디렉토리 구조
```
resume/
├── index.html
├── assets/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── profile.jpg
├── tailwind.config.js   (CLI 사용 시)
└── ROADMAP.md
```

---

## Phase 2 — 레이아웃 및 디자인 시스템 구성

### 목표
전체 페이지의 색상, 타이포그래피, 컴포넌트 스타일을 정의합니다.

### 컬러 팔레트 (브라운 & 베이지 계열)

| 역할 | 색상명 | HEX 코드 | 용도 |
|------|--------|----------|------|
| Background | Linen | `#FAF7F2` | 전체 페이지 배경 |
| Surface | Warm Beige | `#F0E9DC` | 카드, 섹션 배경 |
| Sidebar | Pale Sand | `#E8DDD0` | 사이드바 배경 |
| Primary | Warm Brown | `#7C5C3E` | 주요 텍스트, 버튼 |
| Secondary | Mocha | `#A07850` | 포인트 색상, 링크 |
| Accent | Caramel | `#C49A6C` | 뱃지, 강조 요소 |
| Muted | Taupe | `#B0A090` | 보조 텍스트, 구분선 |
| Dark | Espresso | `#3E2C1E` | 제목 텍스트 |
| White | Cream | `#FFFDF9` | 카드 내부 배경 |

### TailwindCSS 커스텀 색상 설정 예시
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        linen:    '#FAF7F2',
        beige:    '#F0E9DC',
        sand:     '#E8DDD0',
        brown: {
          light:  '#C49A6C',  // Caramel
          DEFAULT:'#A07850',  // Mocha
          dark:   '#7C5C3E',  // Warm Brown
          deeper: '#3E2C1E',  // Espresso
        },
        taupe:    '#B0A090',
        cream:    '#FFFDF9',
      },
      fontFamily: {
        sans:  ['Noto Sans KR', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
}
```

### 디자인 방향
- **무드:** 따뜻하고 차분한 고급스러움 (Warm Minimal)
- **레이아웃:** 좌측 사이드바(프로필 · 기술) + 우측 메인 콘텐츠 (2단 구조)
- **서체:** 제목은 Playfair Display(세리프), 본문은 Noto Sans KR(산세리프)
- **그림자:** `box-shadow: 0 2px 12px rgba(124, 92, 62, 0.08)` — 브라운 틴트 그림자
- **보더:** `border-color: #E8DDD0` — 베이지 계열 경계선

### 작업 목록
- [ ] TailwindCSS 커스텀 색상 토큰 설정
- [ ] 네비게이션 바 구현 (배경: Warm Beige, 텍스트: Espresso)
- [ ] 히어로(Hero) 섹션 레이아웃 구성 (배경: Linen)
- [ ] 사이드바(Pale Sand) / 메인 영역(Linen) 그리드 구성
- [ ] 섹션 카드 공통 스타일 정의 (배경: Cream, 테두리: Sand)
- [ ] 버튼 스타일 정의 (Primary: Warm Brown, Hover: Espresso)

---

## Phase 3 — 섹션별 콘텐츠 구현

### 3-1. 헤더 / 히어로 섹션

**포함 내용:**
- 프로필 사진 (원형 아바타 — 테두리: Caramel 2px)
- 이름: 최서영
- 직함: SWAI 강사 | 소프트웨어·AI 교육 전문가
- 한 줄 소개: "기술과 교육의 경계를 허무는 SWAI 전문 강사"
- 연락처 아이콘 링크 (이메일, 전화, Instagram)

**스타일 포인트:**
- 배경: `#FAF7F2` (Linen)
- 이름 텍스트: `#3E2C1E` (Espresso), Playfair Display
- 직함 텍스트: `#A07850` (Mocha)
- SNS 아이콘: `#7C5C3E` (Warm Brown), 호버 시 `#C49A6C` (Caramel)

**작업 목록:**
- [ ] 히어로 섹션 HTML 마크업
- [ ] 프로필 이미지 원형 스타일링 (Caramel 테두리)
- [ ] 직함 타이핑 애니메이션 준비 (Phase 4 연동)
- [ ] SNS/연락처 링크 버튼 구성

---

### 3-2. 자기소개 (About Me)

**포함 내용:**
```
소프트웨어 개발과 AI 기술을 쉽고 재미있게 전달하는 교육 전문가입니다.
블록코딩부터 Python, 머신러닝, 생성형 AI 활용까지 다양한 연령층과 직군을
대상으로 단계별 맞춤 교육 커리큘럼을 설계하고 진행해 왔습니다.
초등학생도 이해할 수 있는 블록코딩 입문부터 실무자를 위한 AI 심화 과정,
AI·스포츠 융합 교육, 실버 세대를 위한 디지털 AI 교육까지
교육생의 눈높이에 맞는 커스터마이징 강의와 핵심 개념 전달을 강점으로 합니다.
```

**핵심 가치 뱃지:**
- 블록코딩 입문 교육
- 실무 중심 AI 강의
- AI·스포츠 융합 교육
- 실버 AI·디지털 융합 교육
- 맞춤형 커리큘럼 설계
- 지속 성장 지원

**스타일 포인트:**
- 섹션 배경: `#FFFDF9` (Cream) 카드
- 핵심 가치 뱃지 배경: `#F0E9DC` (Warm Beige), 텍스트: `#7C5C3E` (Warm Brown)
- 구분선: `#E8DDD0` (Sand)

**작업 목록:**
- [ ] About 섹션 HTML 마크업
- [ ] 핵심 가치 뱃지 6가지 구현

---

### 3-3. 기술 스택 (Skills)

**포함 내용:**

| 카테고리 | 기술 |
|----------|------|
| 블록코딩 | 엔트리(Entry), 스크래치(Scratch), 앱 인벤터 |
| 프로그래밍 언어 | Python, JavaScript, SQL |
| AI / ML | 생성형 AI 활용, LangChain, ChatGPT API, Claude API |
| 개발 도구 | Git, Jupyter Notebook, VS Code, Google Colab |
| 강의 도구 | Notion, Canva, Zoom, Miro |

**스타일 포인트:**
- 카테고리 헤더: `#3E2C1E` (Espresso), Playfair Display
- 스킬 태그 배경: `#E8DDD0` (Sand), 텍스트: `#7C5C3E` (Warm Brown)
- 프로그레스 바 색상: `#A07850` (Mocha) → `#C49A6C` (Caramel) 그라디언트

**작업 목록:**
- [ ] 스킬 카테고리별 카드 구현 (블록코딩 카테고리 포함)
- [ ] 숙련도 프로그레스 바 (Mocha → Caramel 그라디언트)
- [ ] 기술 아이콘 적용 (Devicons / Simple Icons CDN)

---

### 3-4. 경력 사항 (Experience)

**포함 내용:**
```
[현재]  동탄에이다 — 대표

[현재]  화성다가치탐사대 — AI바디어드벤처 교육개발 및 운영관리

[현재]  화성시여성가족청소년재단 — SWAI 교육개발 및 대표강사

[현재]  화성시 평생장학금 — 실버 디지털 AI교실 기획 및 운영

[2021, 2023, 2024]  화성교육협력지원본부
- 찾아가는 코딩교실 운영이사

[진행]  CTS교육방송 — 코딩프로그램 교육기획 및 진행

[진행]  에듀테크 교사연수 — 다수 운영

[진행]  오산공유학교 — SWAI 강사

[출판]  스크래치블록깨기 — 저자
```

**스타일 포인트:**
- 타임라인 세로선 색상: `#C49A6C` (Caramel)
- 타임라인 도트: `#A07850` (Mocha) 채움, `#FAF7F2` 테두리
- 기간/역할 뱃지: `#F0E9DC` 배경, `#7C5C3E` 텍스트
- 기관명: `#3E2C1E` (Espresso) 굵게

**작업 목록:**
- [ ] 타임라인 형태의 경력 카드 UI 구현
- [ ] 기간 뱃지 스타일링
- [ ] 업무 내용 불릿 리스트 스타일링

---

### 3-5. 교육 이력 (Education)

**포함 내용:**
```
[2005.02]  동원대학교 실내건축과 학사 졸업
[2005.02]  실기교원자격증 취득
[2017.07]  Codemon Coding Teacher's Training 취득
[2022.05]  동탄에이다 설립
[2021, 2023, 2024]  화성교육협력지원본부 — 찾아가는 코딩교실 운영
[2024.10]  디지털튜터 인증 과정 수료
```

**작업 목록:**
- [ ] 교육 이력 카드 UI 구현 (Cream 배경, Sand 테두리)
- [ ] 수료/취득/설립 구분 뱃지 스타일링

---

### 3-6. 주요 프로젝트 / 강의 포트폴리오 (Portfolio)

**포함 내용:**
```
1. 블록코딩 입문 교육 콘텐츠 개발 및 출판 (2022)
   - 초등학생 대상 스크래치 활용 SW 기초 및 활용 120편 커리큘럼
   - 수강생 만족도 4.7/5.0

2. EduTV 초등경제코딩 (2023)
   - 초등학생 대상 스크래치 활용 SW·경제 융합 8주 커리큘럼
   - 수강생 만족도 4.9/5.0

3. 화성시여성가족청소년재단 SWAI 강사양성 실무 교육 과정 개발 (2024~2025)
   - 비개발자 직군 대상 SWAI 강사양성 실무 교육 40차시 커리큘럼
   - 수강생 만족도 4.8/5.0

4. Python License 온라인 강의 (2025)
   - 자기 주도형 온라인 강의 및 콘텐츠 제작
   - 온라인코딩파티 채택

5. 화성다가치탐사대 AI바디어드벤처 교육개발 및 운영관리 (현재 진행 중)
   - AI를 활용한 자기 주도형 데이터 분석 및 스포츠 융합 교육 개발·강의

6. 화성시 평생장학금 실버 디지털 AI교실 기획 및 운영 (현재 진행 중)
   - AI·디지털을 활용한 실버 대상 예술창작·건강·인지·키오스크 교육 개발 및 기획
```

**스타일 포인트:**
- 카드 배경: `#FFFDF9` (Cream)
- 카드 상단 포인트 바: `#A07850` (Mocha) 4px 높이
- 호버 시 카드 배경: `#F0E9DC` (Warm Beige), 그림자 강화
- 링크 버튼: `#7C5C3E` (Warm Brown) 아웃라인 스타일

**작업 목록:**
- [ ] 포트폴리오 카드 그리드 레이아웃 구현
- [ ] 카드 상단 Mocha 포인트 바 구현
- [ ] 카드 호버 효과 (Phase 4 연동)
- [ ] 상세보기 링크 버튼 구현

---

### 3-7. 자격증 / 수상 (Certifications & Awards)

**포함 내용:**

**자격증:**
- 실기교원자격증 (2005)
- Codemon Coding Teacher's Training (2017)
- Coding Specialist (2021)
- ITQ (2025)

**수상:**
- 인공지능교육 공로상 수상 (2021)
- 국회의원 표창장 수상 (2021)
- 화성시 전문코딩강사 공로상 수상 (2021)
- 화성시 사업운영기획부문 공로상 수상 (2023)

**스타일 포인트:**
- 자격증 뱃지 배경: `#F0E9DC` (Warm Beige), 텍스트: `#7C5C3E` (Warm Brown)
- 수상 뱃지 배경: `#E8DDD0` (Sand), 아이콘 색상: `#C49A6C` (Caramel)
- 자격증/수상 탭 또는 구분 구획으로 표시

**작업 목록:**
- [ ] 자격증·수상 구분 카드 또는 탭 UI 구현
- [ ] 취득일 및 발급기관 표시

---

### 3-8. 연락처 / 푸터 (Contact & Footer)

**포함 내용:**
- 이메일: eidacoding_dt@naver.com
- 전화: 010.5598.4748
- Instagram: @dteida (`https://instagram.com/dteida`)
- 노션 포트폴리오 링크

**스타일 포인트:**
- 푸터 배경: `#3E2C1E` (Espresso)
- 푸터 텍스트: `#F0E9DC` (Warm Beige)
- PDF 다운로드 버튼: `#C49A6C` (Caramel) 배경, Espresso 텍스트
- 링크 호버: `#A07850` (Mocha)

**작업 목록:**
- [ ] 연락처 섹션 레이아웃 구현
- [ ] 이메일·SNS·노션 링크 아이콘 버튼 구현
- [ ] PDF 다운로드 버튼 구현 (`window.print()` 또는 정적 PDF 링크)
- [ ] 푸터 카피라이트 구현

---

## Phase 4 — 인터랙션 및 애니메이션

### 목표
사용자 경험을 향상시키는 인터랙티브 요소를 추가합니다.

### 작업 목록
- [ ] **타이핑 애니메이션:** 히어로 섹션 직함 텍스트 타이핑 효과 (순수 JS)
- [ ] **스크롤 애니메이션:** 섹션 진입 시 페이드인 + 위로 슬라이드 효과 (Intersection Observer API)
- [ ] **네비게이션 활성화:** 스크롤 위치에 따른 네비 링크 활성 상태 표시 (Mocha 언더라인)
- [ ] **스킬 프로그레스 바:** 스크롤 진입 시 Mocha→Caramel 그라디언트로 채워지는 효과
- [ ] **포트폴리오 카드 호버:** 호버 시 Warm Beige 배경 전환 + 그림자 강화
- [ ] **부드러운 스크롤:** 앵커 링크 클릭 시 smooth scroll 적용

---

## Phase 5 — 반응형 최적화

### 목표
모바일, 태블릿, 데스크탑 모든 환경에서 완벽하게 동작하도록 최적화합니다.

### 브레이크포인트 기준 (TailwindCSS 기본값)
| 구분 | 범위 |
|------|------|
| 모바일 | < 640px |
| 태블릿 | 640px ~ 1023px |
| 데스크탑 | 1024px 이상 |

### 작업 목록
- [ ] 모바일: 1단 세로 레이아웃으로 변환
- [ ] 태블릿: 2단 혼합 레이아웃 조정
- [ ] 햄버거 메뉴 네비게이션 구현 (모바일용, Warm Brown 색상)
- [ ] 터치 친화적 버튼 크기 최적화
- [ ] 이미지 최적화 (srcset, lazy loading)
- [ ] 크로스 브라우저 테스트 (Chrome, Firefox, Safari, Edge)

---

## Phase 6 — 성능 최적화 및 배포

### 목표
페이지 성능을 최적화하고 외부에 배포합니다.

### 작업 목록

**성능 최적화:**
- [ ] TailwindCSS PurgeCSS 적용 (불필요한 CSS 제거)
- [ ] 이미지 WebP 변환 및 압축
- [ ] JavaScript 파일 최소화 (minify)
- [ ] Google Lighthouse 점수 90점 이상 달성 목표

**SEO:**
- [ ] 메타 태그 최적화 (title, description, keywords)
- [ ] Open Graph 태그 설정 (SNS 공유 미리보기)
- [ ] 구조화 데이터 마크업 (Schema.org Person)

**배포:**
- [ ] GitHub 저장소 생성 및 코드 푸시
- [ ] GitHub Pages 또는 Netlify 배포 설정
- [ ] 커스텀 도메인 연결 (선택 사항)
- [ ] HTTPS 적용 확인

---

## 이력서 콘텐츠 요약

```
이름:       최서영
소속:       동탄에이다 대표
직함:       SWAI 강사 | 소프트웨어·AI 교육 전문가
연락처:     eidacoding_dt@naver.com / 010.5598.4748
            Instagram @dteida / 노션 포트폴리오
주요 활동:  화성시여성가족청소년재단 SWAI 교육개발 및 대표강사
            화성다가치탐사대 AI바디어드벤처 교육개발 및 운영관리
            화성시 평생장학금 실버 디지털 AI교실 기획 및 운영
            화성교육협력지원본부 찾아가는 코딩교실 운영이사 (2021·2023·2024)
            CTS교육방송 코딩프로그램 교육기획 및 진행
            오산공유학교 SWAI 강사
출판:       스크래치블록깨기 저자
전문분야:   블록코딩(엔트리·스크래치), AI·스포츠 융합 교육,
            실버 AI·디지털 융합 교육, SWAI 강사양성, 커리큘럼 설계
주요 수상:  인공지능교육 공로상 / 국회의원 표창장 /
            화성시 전문코딩강사 공로상 / 화성시 사업운영기획부문 공로상
```

---

## 참고 자료

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [Intersection Observer API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Google Fonts — Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR)
- [Google Fonts — Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Devicons (기술 아이콘)](https://devicon.dev/)
- [Simple Icons (브랜드 아이콘)](https://simpleicons.org/)

---

*최종 수정: 2026-03-19*
