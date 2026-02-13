# Vercel 환경 변수 설정 가이드

Vercel에 배포할 때 EmailJS 설정을 환경 변수로 추가하는 방법입니다.

## Vercel 환경 변수 설정 방법

1. **Vercel 대시보드 접속**
   - [vercel.com](https://vercel.com)에 로그인
   - 프로젝트 선택 (`bemyvalentine`)

2. **환경 변수 추가**
   - 프로젝트 설정 → "Environment Variables" 클릭
   - "Add New" 클릭
   - 다음 환경 변수들을 추가:

   | Name | Value | 설명 |
   |------|-------|------|
   | `VERCEL_ENV_EMAILJS_PUBLIC_KEY` | (EmailJS Public Key) | EmailJS Public Key |
   | `VERCEL_ENV_EMAILJS_SERVICE_ID` | (EmailJS Service ID) | EmailJS Service ID |
   | `VERCEL_ENV_EMAILJS_TEMPLATE_ID` | (EmailJS Template ID) | EmailJS Template ID |
   | `VERCEL_ENV_TO_EMAIL` | nykim727@gmail.com | 받을 이메일 주소 |

   또는 더 짧은 이름으로:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `TO_EMAIL`

3. **환경 변수 적용 범위**
   - Production, Preview, Development 모두 선택
   - 또는 Production만 선택

4. **재배포**
   - 환경 변수 추가 후 자동으로 재배포됩니다
   - 또는 수동으로 "Redeploy" 클릭

## 작동 원리

- Vercel 빌드 시 `build-config.js` 스크립트가 실행됩니다
- 환경 변수를 읽어서 `config.js` 파일을 자동 생성합니다
- 생성된 `config.js`가 사이트에 포함되어 배포됩니다

## 로컬 개발

로컬에서는 `config.js` 파일을 직접 생성합니다:
1. `config.example.js`를 `config.js`로 복사
2. 실제 EmailJS 값 입력

## 참고

- 환경 변수는 빌드 시점에 `config.js`로 변환됩니다
- 로컬에서는 수동으로 `config.js`를 만들어야 합니다
- Vercel에서는 환경 변수만 설정하면 자동으로 처리됩니다
