// Vercel 빌드 시 환경 변수를 config.js로 생성하는 스크립트
const fs = require('fs');

const config = {
    EMAILJS_PUBLIC_KEY: process.env.VERCEL_ENV_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
    EMAILJS_SERVICE_ID: process.env.VERCEL_ENV_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    EMAILJS_TEMPLATE_ID: process.env.VERCEL_ENV_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
    TO_EMAIL: process.env.VERCEL_ENV_TO_EMAIL || process.env.TO_EMAIL || "your-email@example.com"
};

const configContent = `// EmailJS 설정 (Vercel 환경 변수에서 자동 생성됨)
const EMAIL_CONFIG = {
    EMAILJS_PUBLIC_KEY: "${config.EMAILJS_PUBLIC_KEY}",
    EMAILJS_SERVICE_ID: "${config.EMAILJS_SERVICE_ID}",
    EMAILJS_TEMPLATE_ID: "${config.EMAILJS_TEMPLATE_ID}",
    TO_EMAIL: "${config.TO_EMAIL}"
};
`;

fs.writeFileSync('config.js', configContent);
console.log('✅ config.js 파일이 생성되었습니다 (Vercel 환경 변수 사용)');
