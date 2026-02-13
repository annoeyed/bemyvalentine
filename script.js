const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');

let noClickCount = 0;

// 아니요 버튼이 마우스를 피하도록
noBtn.addEventListener('mouseenter', () => {
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // 랜덤한 위치로 빠르게 이동
    const maxX = Math.min(containerRect.width - btnRect.width, 200);
    const maxY = Math.min(containerRect.height - btnRect.height, 100);
    
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noBtn.style.transition = 'transform 0.15s ease-out';
});

// 마우스가 가까이 가면 더 멀리 도망가기
noBtn.addEventListener('mousemove', (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    const distanceX = e.clientX - btnCenterX;
    const distanceY = e.clientY - btnCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // 마우스가 너무 가까우면 더 멀리 이동
    if (distance < 100) {
        const escapeX = (distanceX / distance) * 150;
        const escapeY = (distanceY / distance) * 150;
        noBtn.style.transform = `translate(${escapeX}px, ${escapeY}px)`;
        noBtn.style.transition = 'transform 0.1s ease-out';
    }
});

// 버튼이 컨테이너 밖으로 나가지 않도록
noBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        noBtn.style.transform = '';
        noBtn.style.transition = '';
    }, 200);
});
const messages = [
    "정말? 다시 생각해봐요! 🐶",
    "제발요... 🥺",
    "강아지들이 슬퍼하고 있어요 😢",
    "마지막 기회예요! 🐕",
    "알았어요... 하지만 다시 생각해보세요 💔"
];

yesBtn.addEventListener('click', () => {
    result.textContent = '와아아! 사랑해요! 💗🐕💗';
    result.style.color = '#ff6b9d';
    result.style.fontSize = '2rem';
    
    // 축하 애니메이션
    createConfetti();
    
    // 버튼 숨기기
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // 2초 후에 만날 시간 메시지 표시
    setTimeout(() => {
        result.innerHTML = `
            <div style="margin-bottom: 20px;">26.02.14일 14:00에 만나 💗 🐕 💗</div>
            <div id="countdown" style="font-size: 1.5rem; font-weight: bold; color: #ff6b9d;"></div>
        `;
        result.style.fontSize = '1.8rem';
        result.style.marginTop = '20px';
        
        // 카운트다운 시작
        startCountdown();
    }, 2000);
});

noBtn.addEventListener('click', () => {
    if (noClickCount < messages.length) {
        // 메시지만 표시 (코드 형태가 아닌)
        result.innerHTML = `<div style="font-size: 1.5rem; color: #ff85a1; background: rgba(255, 182, 193, 0.2); padding: 15px; border-radius: 15px; animation: fadeIn 0.5s;">${messages[noClickCount]}</div>`;
        result.style.color = '#ff6b9d';
        noClickCount++;
        
        // 버튼 크기 조절 (점점 작아지게)
        const scaleValue = Math.max(0.3, 1 - noClickCount * 0.15);
        noBtn.style.transform = `scale(${scaleValue})`;
        const animationSpeed = Math.max(0.15, 0.3 - noClickCount * 0.05);
        noBtn.style.animation = `moveAround ${animationSpeed}s infinite`;
        
        // 마지막 메시지 후에는 버튼 숨기기
        if (noClickCount >= messages.length) {
            setTimeout(() => {
                noBtn.style.display = 'none';
                result.innerHTML = '미워 . 😤';
            }, 2000);
        }
    }
});

// 축하 효과 (confetti)
function createConfetti() {
    const emojis = ['💗', '💕', '💖', '💝', '🐕', '🐾', '💐', '🌹', '✨'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'absolute';
        confetti.style.fontSize = '30px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 카운트다운 함수
function startCountdown() {
    // 2026년 2월 14일 14:00 설정
    const targetDate = new Date('2026-02-14T14:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;
        
        if (timeLeft <= 0) {
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                countdownEl.innerHTML = '만날 시간이 왔어요! 💗 🐕 💗';
            }
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerHTML = `
                <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                    <div style="background: rgba(255, 107, 157, 0.2); padding: 10px 15px; border-radius: 10px;">
                        <div style="font-size: 2rem;">${days}</div>
                        <div style="font-size: 0.9rem;">일</div>
                    </div>
                    <div style="background: rgba(255, 107, 157, 0.2); padding: 10px 15px; border-radius: 10px;">
                        <div style="font-size: 2rem;">${hours}</div>
                        <div style="font-size: 0.9rem;">시간</div>
                    </div>
                    <div style="background: rgba(255, 107, 157, 0.2); padding: 10px 15px; border-radius: 10px;">
                        <div style="font-size: 2rem;">${minutes}</div>
                        <div style="font-size: 0.9rem;">분</div>
                    </div>
                    <div style="background: rgba(255, 107, 157, 0.2); padding: 10px 15px; border-radius: 10px;">
                        <div style="font-size: 2rem;">${seconds}</div>
                        <div style="font-size: 0.9rem;">초</div>
                    </div>
                </div>
            `;
        }
    }
    
    // 즉시 업데이트
    updateCountdown();
    
    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
}

// 강아지 클릭 시 랜덤 메시지 표시
const puppyMessages = [
    "만나서 밥 먹자! 🍽️💕",
    "날 따뜻해지면 한강 가자! 🌊💗",
    "오늘 저녁에 영화 보러 갈까? 🎬💕",
    "주말에 카페 가서 커피 마실래? ☕💗",
    "함께 산책하러 가자! 🚶‍♀️💕",
    "맛있는 디저트 먹으러 가자! 🍰💗",
    "공원에서 피크닉 할까? 🧺💕",
    "밤에 별 보러 가자! ⭐💗",
    "함께 요리해볼까? 👨‍🍳💕",
    "오늘은 집에서 편하게 쉬자! 🏠💗",
    "새로운 맛집 찾아보자! 🍴💕",
    "함께 쇼핑하러 갈까? 🛍️💗"
];

let currentPuppyMessage = null;

document.querySelectorAll('.puppy').forEach(puppy => {
    puppy.addEventListener('click', () => {
        // 랜덤 메시지 선택
        let randomMessage;
        do {
            randomMessage = puppyMessages[Math.floor(Math.random() * puppyMessages.length)];
        } while (randomMessage === currentPuppyMessage && puppyMessages.length > 1);
        
        currentPuppyMessage = randomMessage;
        
        // 메시지를 별도 팝업으로 표시 (겹침 방지)
        const messageDiv = document.createElement('div');
        messageDiv.className = 'puppy-message-popup';
        messageDiv.innerHTML = `
            <div class="puppy-message-content">
                <div class="puppy-message-text">${randomMessage}</div>
            </div>
        `;
        document.body.appendChild(messageDiv);
        
        // 애니메이션 효과
        setTimeout(() => {
            messageDiv.classList.add('show');
        }, 10);
        
        // 3초 후 제거
        setTimeout(() => {
            messageDiv.classList.remove('show');
            setTimeout(() => messageDiv.remove(), 500);
        }, 3000);
        
        // 강아지 애니메이션
        puppy.style.animation = 'none';
        puppy.style.transform = 'scale(1.3) rotate(15deg)';
        setTimeout(() => {
            puppy.style.animation = 'wiggle 3s infinite';
            puppy.style.transform = '';
        }, 300);
    });
});

// 하트 클릭 시 이메일 모달 열기
const heartBtn = document.getElementById('heartBtn');
const emailModal = document.getElementById('emailModal');
const closeModal = document.querySelector('.close');
const sendEmailBtn = document.getElementById('sendEmailBtn');
const emailMessage = document.getElementById('emailMessage');
const emailStatus = document.getElementById('emailStatus');

heartBtn.style.cursor = 'pointer';
heartBtn.addEventListener('click', () => {
    emailModal.style.display = 'flex';
    emailMessage.value = '';
    emailStatus.textContent = '';
});

// 이모지 네비게이션 - 이메일 버튼
const emailNavBtn = document.getElementById('emailNavBtn');
if (emailNavBtn) {
    emailNavBtn.addEventListener('click', (e) => {
        e.preventDefault();
        emailModal.style.display = 'flex';
        emailMessage.value = '';
        emailStatus.textContent = '';
    });
}

closeModal.addEventListener('click', () => {
    emailModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        emailModal.style.display = 'none';
    }
});

// EmailJS 초기화 및 이메일 전송
// ⚠️ EmailJS 설정이 필요합니다! EMAILJS_SETUP.md 파일을 참고하세요.
// config.example.js를 config.js로 복사하고 실제 값으로 변경하세요!

// 설정 파일이 로드되지 않았으면 기본값 사용
// config.js 파일에서 EMAIL_CONFIG를 정의해야 합니다
if (typeof EMAIL_CONFIG === 'undefined') {
    window.EMAIL_CONFIG = {
        EMAILJS_PUBLIC_KEY: "YOUR_PUBLIC_KEY",
        EMAILJS_SERVICE_ID: "YOUR_SERVICE_ID",
        EMAILJS_TEMPLATE_ID: "YOUR_TEMPLATE_ID",
        TO_EMAIL: "your-email@example.com"
    };
}

// EMAIL_CONFIG가 전역 변수로 설정되도록 보장
if (typeof window.EMAIL_CONFIG === 'undefined' && typeof EMAIL_CONFIG !== 'undefined') {
    window.EMAIL_CONFIG = EMAIL_CONFIG;
}

// EmailJS 초기화 (DOMContentLoaded 후)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof emailjs !== 'undefined' && EMAIL_CONFIG && EMAIL_CONFIG.EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAIL_CONFIG.EMAILJS_PUBLIC_KEY);
    }
});

sendEmailBtn.addEventListener('click', () => {
    const message = emailMessage.value.trim();
    
    if (!message) {
        emailStatus.innerHTML = '<span style="color: #ff6b9d;">메시지를 입력해주세요! 💕</span>';
        return;
    }
    
    // EmailJS 설정 확인
    if (!EMAIL_CONFIG || 
        EMAIL_CONFIG.EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" || 
        EMAIL_CONFIG.EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || 
        EMAIL_CONFIG.EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAIL_CONFIG.TO_EMAIL === "your-email@example.com") {
        emailStatus.innerHTML = '<span style="color: #ff6b9d;">EmailJS 설정이 필요해요! config.example.js를 config.js로 복사하고 설정하세요. 💕</span>';
        return;
    }
    
    sendEmailBtn.disabled = true;
    sendEmailBtn.textContent = '전송 중... 💌';
    emailStatus.innerHTML = '<span style="color: #ff85a1;">전송 중이에요... 💗</span>';
    
    // EmailJS를 사용한 이메일 전송
    emailjs.send(EMAIL_CONFIG.EMAILJS_SERVICE_ID, EMAIL_CONFIG.EMAILJS_TEMPLATE_ID, {
        to_email: EMAIL_CONFIG.TO_EMAIL,
        message: message,
        from_name: "발렌타인 사이트"
    })
    .then(() => {
        emailStatus.innerHTML = '<span style="color: #4CAF50;">메시지가 전송되었어요! 💗</span>';
        emailMessage.value = '';
        sendEmailBtn.textContent = 'Send 💌';
        sendEmailBtn.disabled = false;
        
        setTimeout(() => {
            emailModal.style.display = 'none';
        }, 2000);
    })
    .catch((error) => {
        emailStatus.innerHTML = '<span style="color: #ff6b9d;">전송에 실패했어요. 다시 시도해주세요! 💕</span>';
        sendEmailBtn.textContent = 'Send 💌';
        sendEmailBtn.disabled = false;
        console.error('EmailJS Error:', error);
    });
});
