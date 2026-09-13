# ROEN TRADING 웹 프로젝트 현황 (PROJECT_STATUS)

**최종 점검 일시**: 2026-09-13 23:55 (KST)  
**작성 목적**: 작업 종료 시점의 시스템 상태를 안전하게 보존하고, 다음 작업 재개 시 빠른 온보딩을 지원하기 위함.

---

## 1. 배포 및 저장소 인프라

- **실서버 운영 URL**: [https://roen-trading-web.vercel.app](https://roen-trading-web.vercel.app)
  - Vercel Production 상태: `● Ready (HTTP/2 200 OK)`
- **GitHub 저장소**: [https://github.com/maestrojunk/roen-trading-web](https://github.com/maestrojunk/roen-trading-web)
  - 연동 Branch: `main` (로컬과 원격 저장소 동기화 완료: `dbd4cf5`)
- **환경변수 설정 (Vercel & .env.local)**:
  - `NEXT_PUBLIC_SUPABASE_URL` (등록 완료)
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (등록 완료)
  - `RESEND_API_KEY` (Vercel Production/Preview/Dev Secret 등록 완료)
  - *보안 원칙: 실제 API Key 및 시크릿 토큰은 저장소 코드에 절대 포함되지 않으며 환경변수로만 관리됨.*

---

## 2. 현재 구현된 핵심 기능

1. **Brand Visual Storytelling & UX (Apple 스타일 인터랙션)**
   - Hero: 고화질 캐시미어 비주얼 스크롤 줌 애니메이션 (`1.0 → 1.08`) 및 타이포그래피 페이드
   - Cashmere Story: 스티키 스크롤 쇼케이스 (01 Raw Purity, 02 Artisan Gauge, 03 Timeless Value)
   - Business & Categories: 스티키 탭 전환, 카테고리 심층 카드 호버 및 줌 뎁스
   - Multilingual: 한/영 (KR / EN) 즉각 토글 (페이지 리로드 없음)
2. **공식 기업 정보 반영**
   - 상호명: 로엔 트레이딩 (ROEN TRADING)
   - 사업자등록번호: 156-76-00593
   - 대표자: Jayden Kim (김준현)
   - 대표전화: 010-8199-0625
   - 공식 이메일: jayden@roentrading.com
3. **Contact B2B 문의 시스템 (`/api/contact`)**
   - **Supabase 연동**: 문의 접수 시 `inquiries` 테이블에 실시간 레코드 저장
   - **Resend 메일 발송**: 접수된 문의 내용을 공식 알림 이메일(`maestro.990625@gmail.com`)로 자동 전송 (발신: `onboarding@resend.dev`, 회신처: 문의자 이메일)

---

## 3. 백엔드 및 서비스 연결 상태

- **Supabase**:
  - 프로젝트 URL: `https://tockgjyiqcdhdzslwjgi.supabase.co`
  - 대상 테이블: `public.inquiries`
  - RLS 정책: `Allow anon insert` 적용 완료 (익명 방문자의 INSERT 정상 허용)
  - 연결 검증: 정상 쿼리 및 연결 확인 완료
- **Resend 이메일 발송**:
  - API Route: `app/api/contact/route.ts`
  - 현재 발송 모드: Resend Free Tier 테스트 도메인 발송 (`maestro.990625@gmail.com` 수신)
  - 회신(reply-to): 문의자가 입력한 이메일로 자동 지정되어 바로 답장 가능

---

## 4. 빌드 및 코드 무결성 검증

- **Build 상태**: `npm run build` 성공 (0 errors, 0 warnings)
  - Next.js 16 App Router (Turbopack)
  - TypeScript 타입 검사 통과
  - 린트 및 번들 최적화 완료

---

## 5. 아직 남은 TODO & 향후 과제

1. **Resend 커스텀 도메인 등록 (선택/권장)**
   - 현황: 현재는 Resend 미인증 상태이므로 계정 소유자 이메일(`maestro.990625@gmail.com`)로만 수신됨.
   - 필요 시 작업: `resend.com/domains`에 `roentrading.com` 도메인 등록 후 DNS 레코드(TXT/MX)를 추가하면 `jayden@roentrading.com`으로 직접 수신 가능하도록 변경 가능.
2. **Vercel 커스텀 도메인 연결 (선택)**
   - `roentrading.com` 또는 `www.roentrading.com`을 Vercel 프로젝트 Domains에 바인딩.
3. **대표자 프로필 및 공식 로고 Asset 교체**
   - Jayden Kim 대표 공식 사진 및 벡터 로고(SVG)가 준비되면 교체.
4. **실제 비즈니스 수치 확정 시 반영**
   - `data/numbers.ts`의 지표가 확정되면 실데이터 입력 (자동 카운트업 애니메이션 적용 대기 중).

---

## 6. 다음 작업 시작 시 확인할 항목

1. 로컬 개발 서버 실행: `npm run dev` (포트 3000)
2. Git 상태 확인: `git status` 및 `git pull origin main`
3. 환경변수 확인: 로컬 `.env.local` 파일 유지 여부 확인
