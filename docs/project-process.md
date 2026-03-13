# 퍼블리싱 프로젝트 AI 활용 업무 흐름

## 역할 정의

- 👨‍💻 **Human** : 기획 분석, 구조 설계, UI 개발
- 🤖 **AI** : 자동 생성, 코드 리뷰, 문서화 지원

---

# 1. 프로젝트 초기 세팅

## Human 작업

### 저장소 및 기본 구조 생성

- Git Repository 생성
- README 생성
- 브랜치 생성
- 기획서 분석
- 기본 폴더 구조 생성
- 페이지 리스트 작성

```txt
/* 페이지 리스트 */

로그인 : login
메인   : main
어바웃 : about
```

---

## AI 작업

### 페이지 데이터 자동 생성

페이지 리스트를 기반으로 `pageData.json`에 데이터 입력

```json
[
    {
        "id": "2026-01-24161902", // 초기값: 생성 요청 시각
        "title": "회원가입 페이지", // 초기값: ko + '페이지'
        "url": "signup.html", // 초기값: en + '.html'
        "body": "", // 초기값: 공백
        "status": false // 초기값: false
    },
    {
        "id": "2026-01-24161902",
        "title": "회원가입 페이지",
        "url": "signup.html",
        "body": "",
        "status": false
    }
]
```

### AI 역할

- 페이지 목록 일괄 등록
- URL 자동 생성
- 기본 데이터 구조 생성

---

# 2. UI 컴포넌트 설계

## Human 작업

### 공통 UI 컴포넌트 식별

기획서를 기준으로 공통 UI 요소 정리

```txt
/* 컴포넌트 리스트 */

Button
Input
Select
Modal
Table
Form
Pagination
```

### Storybook 세팅

- 로컬 테스트 환경 구축
- CI / CD 연결

---

## AI 작업

전달된 컴포넌트 리스트를 기반으로 Storybook 파일 생성

```txt
button.stories.js
input.stories.js
modal.stories.js
```

---

# 3. 디자인 시스템 구축

## Human 작업

디자인 토큰 및 스타일 시스템 구축

```css
:root {
    /* Color System */
    --primary-color: #000;

    /* Typography */
    --font-size-base: 16px;

    /* Layout Grid */
    --spacing-standard: 4px;
    --container-lg: 1300px;

    /* Z Index */
    --header-z: 1000;
    --popup-z: 999;
}
```

---

## AI 작업

스타일 시스템 코드 리뷰 수행

### 검토 항목

- 중복 스타일 검사
- 네이밍 규칙 검사
- 불필요 코드 탐지

---

# 4. UI 개발 단계

## Human 작업

### 공통 레이아웃 구축

- Header
- Footer
- Navigation

### 공통 컴포넌트 개발

개발 방식

- Storybook 기반 테스트

### 페이지 개발

- 페이지 마크업 작성
- 시멘틱 구조 검증
- 링크 연결
- Javascript 인터랙션 구현
- 반응형 대응

---

## AI 작업

- 전역 코드 리뷰
- 프로젝트 README 자동 생성

---

# 5. 마무리 단계

## Human 작업

- 디자인 QA
- UI 버그 수정
- 문서 정리
- 프로젝트 docs 관리
