# Will You Be My Valentine? 🐶

애인을 위한 귀여운 발렌타인 데이 사이트입니다.

## 로컬에서 실행하기

1. 파일들을 다운로드합니다
2. `index.html` 파일을 더블클릭하거나 브라우저로 열기
3. 또는 간단한 웹 서버로 실행:
   ```bash
   # Python이 설치되어 있다면
   python -m http.server 8000
   
   # Node.js가 설치되어 있다면
   npx serve
   ```

## 인터넷에서 접근 가능하게 배포하기

로컬호스트는 다른 사람이 접근할 수 없으므로, 다음 방법 중 하나를 사용하세요:

### 방법 1: Vercel (추천 - 가장 쉬움)

1. [Vercel](https://vercel.com)에 가입 (GitHub 계정으로 간단히 가입 가능)
2. "New Project" 클릭
3. 이 폴더를 드래그 앤 드롭하거나 GitHub에 업로드 후 연결
4. 몇 초 후 자동으로 배포되고 URL이 생성됩니다!
5. 생성된 URL을 애인에게 공유하면 됩니다

### 방법 2: Netlify

1. [Netlify](https://www.netlify.com)에 가입
2. "Add new site" → "Deploy manually"
3. 이 폴더를 드래그 앤 드롭
4. 자동으로 URL이 생성됩니다!

### 방법 3: GitHub Pages

1. GitHub에 새 저장소 생성
2. 이 파일들을 업로드
3. Settings → Pages → Source를 "main branch"로 설정
4. `https://[사용자명].github.io/[저장소명]` 형태의 URL이 생성됩니다

### 방법 4: Cloudflare Pages

1. [Cloudflare Pages](https://pages.cloudflare.com)에 가입
2. GitHub 저장소 연결 또는 직접 업로드
3. 자동 배포됩니다

## 추천 배포 방법

**Vercel**을 가장 추천합니다:
- 완전 무료
- 설정이 매우 간단 (드래그 앤 드롭만으로 가능)
- 자동으로 HTTPS 적용
- 빠른 속도
- 커스텀 도메인도 무료로 사용 가능

## 파일 구조

```
valentine-site/
├── index.html    # 메인 HTML 파일
├── style.css     # 스타일시트
├── script.js     # 인터랙티브 기능
└── README.md     # 이 파일
```

## 기능

- 💕 귀여운 강아지 이모지 애니메이션
- 💖 인터랙티브 버튼 (Yes/No)
- 🐶 반응형 디자인 (모바일/데스크톱 모두 지원)
- 💐 축하 효과 (Yes 버튼 클릭 시)

즐거운 발렌타인 데이 되세요! 💕
