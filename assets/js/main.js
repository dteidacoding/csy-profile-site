/* =============================================
   main.js — 최서영 SWAI 강사 웹 이력서
   기능: 타이핑 효과 / 스크롤 애니메이션 / 네비 활성화 / 스킬 바 / 햄버거 메뉴
   ============================================= */

/* ── 1. 타이핑 효과 (히어로 직함) ── */
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  // 순환할 문구 목록
  const phrases = [
    'SWAI 강사',
    '블록코딩 교육 전문가',
    'AI 교육 기획자',
    '커리큘럼 디자이너',
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      // 지우는 중
      charIdx--;
      el.textContent = current.slice(0, charIdx);
    } else {
      // 타이핑 중
      charIdx++;
      el.textContent = current.slice(0, charIdx);
    }

    let delay = isDeleting ? 60 : 110;

    if (!isDeleting && charIdx === current.length) {
      // 완성 후 잠시 대기
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      // 다 지운 후 다음 문구
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 300;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ── 2. 스크롤 진입 애니메이션 (Intersection Observer) ── */
function initScrollAnimation() {
  const targets = document.querySelectorAll('.fade-up');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 한 번 보이면 관찰 중단
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ── 3. 스킬 프로그레스 바 애니메이션 ── */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.dataset.width || '0';
          entry.target.style.width = target + '%';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ── 4. 네비게이션 활성 링크 표시 ── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 모든 링크에서 active 제거
          navLinks.forEach((l) => l.classList.remove('active'));
          // 현재 섹션 id와 일치하는 링크에 active 추가
          const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ── 5. 스크롤 시 네비바 그림자 ── */
function initNavShadow() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ── 6. 햄버거 메뉴 토글 ── */
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('hidden');
    btn.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  // 모바일 메뉴 링크 클릭 시 닫기
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── 7. PDF 다운로드 (인쇄 다이얼로그) ── */
function initPrintBtn() {
  const btn = document.getElementById('btn-print');
  if (!btn) return;
  btn.addEventListener('click', () => window.print());
}

/* ── 초기화 실행 ── */
document.addEventListener('DOMContentLoaded', () => {
  initTyping();
  initScrollAnimation();
  initSkillBars();
  initNavHighlight();
  initNavShadow();
  initHamburger();
  initPrintBtn();
});
