# Will You Be My Valentine? 🐕

애인을 위한 귀여운 발렌타인 데이 사이트입니다.

## 🌐 배포된 사이트

**라이브 사이트**: [https://bemyvalentine-gamma-ten.vercel.app/](https://bemyvalentine-gamma-ten.vercel.app/)

**GitHub 저장소**: [https://github.com/annoeyed/bemyvalentine](https://github.com/annoeyed/bemyvalentine)

## ✨ 주요 기능

- 💗 귀여운 강아지 이모지 애니메이션 (🐾 🐕 🦮)
- 💕 귀여운 Gaegu 폰트 적용
- 💖 인터랙티브 버튼 (Yes/No)
  - "네!" 버튼: 축하 효과와 함께 만날 시간 메시지 표시
  - "음..." 버튼: 마우스를 피하며 움직이는 장난스러운 버튼
- ⏰ 실시간 카운트다운 타이머 (2026년 2월 14일 14:00까지)
- 🎉 축하 효과 (Yes 버튼 클릭 시)
- 📱 완전 반응형 디자인 (모바일/데스크톱 모두 지원)
- 🎨 부드러운 파스텔 색상과 애니메이션

## 🚀 로컬에서 실행하기

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/annoeyed/bemyvalentine.git
   cd bemyvalentine
   ```

2. `index.html` 파일을 더블클릭하거나 브라우저로 열기

3. 또는 간단한 웹 서버로 실행:
   ```bash
   # Python이 설치되어 있다면
   python -m http.server 8000
   
   # Node.js가 설치되어 있다면
   npx serve
   ```

## 📦 배포 방법

이 프로젝트는 **Vercel**을 통해 배포되어 있습니다.

### Vercel에 배포하기

1. [Vercel](https://vercel.com)에 가입 (GitHub 계정으로 간단히 가입 가능)
2. "New Project" 클릭
3. GitHub 저장소 `annoeyed/bemyvalentine` 선택
4. Framework Preset: "Other" 선택
5. "Deploy" 클릭
6. 몇 초 후 자동으로 배포되고 URL이 생성됩니다!

### 자동 배포

GitHub 저장소에 푸시하면 Vercel이 자동으로 재배포합니다:
```bash
git add .
git commit -m "업데이트 내용"
git push origin main
```

## 📁 파일 구조

```
bemyvalentine/
├── index.html    # 메인 HTML 파일
├── style.css     # 스타일시트 (Gaegu 폰트, 파스텔 색상)
├── script.js     # 인터랙티브 기능 (카운트다운, 애니메이션)
└── README.md     # 이 파일
```

## 🎨 사용된 기술

- **HTML5**: 구조
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript**: 인터랙티브 기능
- **Google Fonts**: Gaegu, Hi Melody 폰트
- **Vercel**: 호스팅 및 배포

## 💝 특징

- 귀여운 손글씨 스타일 폰트 (Gaegu)
- 부드러운 파스텔 색상 팔레트
- 움직이는 강아지 이모지 애니메이션
- 마우스를 피하는 장난스러운 "음..." 버튼
- 실시간 카운트다운 타이머
- 반응형 디자인으로 모든 기기에서 완벽하게 작동

## 📝 커스터마이징

### 만날 시간 변경하기

`script.js` 파일의 `startCountdown()` 함수에서 날짜를 변경하세요:
```javascript
const targetDate = new Date('2026-02-14T14:00:00');
```

### 색상 변경하기

`style.css` 파일에서 색상 값을 수정하세요:
- 배경: `background` 속성
- 버튼: `.btn-yes`, `.btn-no` 클래스
- 텍스트: `.title`, `.message` 클래스

## 🎯 라이선스

이 프로젝트는 개인 사용을 위해 만들어졌습니다.

---

즐거운 발렌타인 데이 되세요! 💗🐕💗
