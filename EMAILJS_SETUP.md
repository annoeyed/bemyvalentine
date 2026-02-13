# EmailJS 설정 가이드

이메일 전송 기능을 사용하려면 EmailJS를 설정해야 합니다.

## 1. EmailJS 계정 생성

1. [EmailJS](https://www.emailjs.com/)에 가입 (무료)
2. 대시보드로 이동

## 2. 이메일 서비스 연결

1. 대시보드에서 "Add New Service" 클릭
2. Gmail 선택 (또는 원하는 이메일 서비스)
3. Gmail 계정 연결 및 인증
4. Service ID 복사 (예: `service_xxxxx`)

## 3. 이메일 템플릿 생성

1. "Email Templates" → "Create New Template" 클릭
2. 템플릿 설정:
   - **To Email**: `nykim727@gmail.com`
   - **Subject**: `발렌타인 사이트에서 메시지가 도착했어요! 💗`
   - **Content**:
     ```
     발렌타인 사이트에서 새로운 메시지가 도착했어요! 💗
     
     메시지 내용:
     {{message}}
     
     보낸 사람: {{from_name}}
     ```
3. Template ID 복사 (예: `template_xxxxx`)

## 4. Public Key 확인

1. 대시보드 → "Account" → "General"
2. Public Key 복사 (예: `xxxxxxxxxxxxx`)

## 5. 설정 파일 생성

1. `config.example.js` 파일을 `config.js`로 복사하세요
2. `config.js` 파일을 열고 실제 값으로 변경하세요:

```javascript
const EMAIL_CONFIG = {
    EMAILJS_PUBLIC_KEY: "여기에_Public_Key_입력",
    EMAILJS_SERVICE_ID: "여기에_Service_ID_입력",
    EMAILJS_TEMPLATE_ID: "여기에_Template_ID_입력",
    TO_EMAIL: "받을_이메일_주소@example.com"  // 실제 이메일 주소 입력
};
```

**중요**: `config.js` 파일은 `.gitignore`에 포함되어 있어 GitHub에 업로드되지 않습니다!

## 무료 플랜 제한

- 월 200통 이메일까지 무료
- 발렌타인 데이용으로는 충분합니다!

## 문제 해결

- 이메일이 전송되지 않으면 브라우저 콘솔에서 에러 확인
- Service ID, Template ID, Public Key가 정확한지 확인
- Gmail 연결이 제대로 되었는지 확인
