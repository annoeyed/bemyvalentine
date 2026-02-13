# Will You Be My Valentine? 🐕

애인을 위한 귀여운 발렌타인 데이 사이트입니다.

## 🌐 배포된 사이트

**라이브 사이트**: [https://bemyvalentine-gamma-ten.vercel.app/](https://bemyvalentine-gamma-ten.vercel.app/)

**GitHub 저장소**: [https://github.com/annoeyed/bemyvalentine](https://github.com/annoeyed/bemyvalentine)

## ✨ 주요 기능

### 🎮 인터랙티브 요소
- **💗 하트 버튼**: 상단 하트 이모지를 클릭하면 이메일로 메시지를 보낼 수 있습니다
- **🐾 강아지 이모지**: 강아지 이모지를 클릭하면 랜덤 귀여운 메시지가 나타납니다
- **💖 네/아니요 버튼**: 
  - "네!" 버튼: 축하 효과와 함께 만날 시간과 카운트다운 타이머 표시
  - "음..." 버튼: 마우스 커서를 피하며 도망가는 장난스러운 버튼 (모바일에서 더 빠르게 움직임)
- **🌹 이모지 네비게이션**: 우측 상단의 꽃 이모지들 (데스크톱 전용)
  - 🌹: GitHub 저장소 링크
  - 💐: 홈페이지 링크
  - 🌷: 이메일 모달 열기

### 🎨 디자인 & 애니메이션
- 귀여운 Gaegu 폰트 (한국 손글씨 스타일)
- 부드러운 파스텔 색상 팔레트
- 움직이는 강아지 이모지 애니메이션
- 튀어오르는 하트 애니메이션
- 부드러운 전환 효과와 호버 효과
- 완전 반응형 디자인 (모바일/데스크톱)

### ⏰ 카운트다운 타이머
- 만날 날짜까지 실시간 카운트다운 (2026년 2월 14일 14:00)
- 일, 시간, 분, 초를 보기 좋게 표시

### 📧 이메일 기능
- 웹사이트에서 직접 메시지 전송
- EmailJS 통합으로 안전한 이메일 전송
- 메시지 작성용 모달 인터페이스

## 🚀 빠른 시작

### 로컬 개발

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/annoeyed/bemyvalentine.git
   cd bemyvalentine
   ```

2. `index.html`을 브라우저로 열거나, 로컬 서버를 실행합니다:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

3. 브라우저에서 `http://localhost:8000` 접속

### 이메일 설정 (선택사항)

이메일 기능을 사용하려면:

**로컬 개발:**
1. `config.example.js`를 `config.js`로 복사
2. `EMAILJS_SETUP.md`의 지침을 따르세요
3. `config.js`에 EmailJS 인증 정보 추가

**Vercel 배포:**
1. `VERCEL_SETUP.md`의 지침을 따르세요
2. Vercel 대시보드에서 환경 변수 설정
3. 자동으로 `config.js`가 생성되어 배포됩니다

**참고**: `config.js`는 `.gitignore`에 포함되어 GitHub에 업로드되지 않습니다.

## 📦 배포

이 프로젝트는 **Vercel**을 통해 배포되어 있습니다.

### Vercel에 배포하기

1. [Vercel](https://vercel.com)에 가입 (GitHub 계정으로 무료 가입)
2. "New Project" 클릭
3. `annoeyed/bemyvalentine` 저장소 선택
4. Framework Preset: "Other" 선택
5. "Deploy" 클릭
6. 몇 초 후 사이트가 라이브됩니다!

### 자동 배포

GitHub에 푸시하면 Vercel이 자동으로 재배포합니다:
```bash
git add .
git commit -m "커밋 메시지"
git push origin main
```

## 📁 프로젝트 구조

```
bemyvalentine/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트 (Gaegu 폰트, 파스텔 색상)
├── script.js           # 인터랙티브 기능 (카운트다운, 애니메이션, 이메일)
├── config.example.js   # 이메일 설정 템플릿
├── build-config.js     # Vercel 빌드 시 config.js 생성 스크립트
├── vercel.json         # Vercel 배포 설정
├── .gitignore         # Git ignore 파일 (config.js 보호)
├── EMAILJS_SETUP.md   # EmailJS 설정 가이드
├── VERCEL_SETUP.md    # Vercel 환경 변수 설정 가이드
└── README.md          # 이 파일
```

## 🛠️ 사용된 기술

- **HTML5**: 구조
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript (ES6+)**: 인터랙티브 기능
- **Google Fonts**: Gaegu, Hi Melody 폰트
- **EmailJS**: 이메일 전송 서비스
- **Vercel**: 호스팅 및 배포

## 🎨 커스터마이징

### 만날 날짜/시간 변경하기

`script.js`의 `startCountdown()` 함수에서 날짜를 수정하세요:
```javascript
const targetDate = new Date('2026-02-14T14:00:00');
```

### 색상 변경하기

`style.css`를 수정하세요:
- 배경: `body`의 background gradient
- 버튼: `.btn-yes`, `.btn-no` 클래스
- 텍스트: `.title`, `.message` 클래스

### 강아지 메시지 추가하기

`script.js`의 `puppyMessages` 배열에 메시지를 추가하세요:
```javascript
const puppyMessages = [
    "만나서 밥 먹자! 🍽️💕",
    // 여기에 커스텀 메시지 추가
];
```

## 📝 설정

### 이메일 설정

1. [emailjs.com](https://www.emailjs.com/)에서 EmailJS 계정 생성
2. `EMAILJS_SETUP.md`의 상세 가이드를 따르세요
3. `config.example.js`를 `config.js`로 복사
4. `config.js`에 EmailJS 인증 정보 입력

### 보안

- `config.js`는 민감한 정보를 포함하며 Git에서 제외됩니다
- 저장소에는 `config.example.js`만 추적됩니다
- 실제 `config.js` 파일은 절대 커밋하지 마세요

## 🎯 기능 상세 설명

### 강아지 클릭 메시지
- 세 마리 강아지 이모지(🐾 🐕 🦮) 중 하나를 클릭
- 랜덤 귀여운 메시지가 나타남
- 12개의 다양한 메시지 포함
- 부드러운 애니메이션과 함께 페이드 인

### 이메일 모달
- 상단 하트 이모지(💗) 또는 네비게이션의 🌷 클릭
- 텍스트 영역이 있는 모달 열림
- 로딩 상태가 있는 전송 버튼
- 성공/에러 피드백

### "음..." 버튼 동작
- 클릭할수록 점점 작아지고 빠르게 움직임
- 모바일에서는 거의 클릭 불가능할 정도로 작고 빠름
- 각 클릭마다 다른 메시지 표시
- 마지막에는 "미워 . 😤" 메시지와 함께 버튼 사라짐

### 카운트다운 타이머
- "네!" 버튼 클릭 시 자동 시작
- 매 초마다 업데이트
- 카드 기반 디스플레이
- 일, 시간, 분, 초 표시

## 🐛 문제 해결

### 이메일이 전송되지 않을 때
- 브라우저 콘솔에서 에러 확인
- `config.js`의 EmailJS 인증 정보 확인
- EmailJS 서비스가 제대로 연결되었는지 확인
- EmailJS 대시보드에서 사용량 제한 확인

### 카운트다운이 작동하지 않을 때
- `script.js`의 날짜 형식 확인
- 브라우저 콘솔에서 JavaScript 에러 확인

## 📄 라이선스

이 프로젝트는 개인 사용을 위해 만들어졌습니다.

---

발렌타인 데이를 위해 💗로 만들었습니다
