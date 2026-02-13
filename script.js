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
    result.textContent = '와아아! 사랑해요! 💕🐶💕';
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
            <div style="margin-bottom: 20px;">26.02.14일 14:00에 만나 💕 🐶 💖</div>
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
        // 메시지를 배열 형태로 표시
        const messagesDisplay = messages.map((msg, index) => {
            if (index <= noClickCount) {
                return `    "${msg}"`;
            }
            return null;
        }).filter(msg => msg !== null).join(',\n');
        
        result.innerHTML = `<pre style="text-align: left; display: inline-block; background: rgba(255, 182, 193, 0.2); padding: 15px; border-radius: 10px; font-size: 1rem;">const messages = [\n${messagesDisplay}\n];</pre>`;
        result.style.color = '#ff6b9d';
        noClickCount++;
        
        // 버튼 크기 조절 (점점 작아지게)
        noBtn.style.transform = `scale(${1 - noClickCount * 0.1})`;
        noBtn.style.animation = `moveAround ${2 - noClickCount * 0.2}s infinite`;
        
        // 마지막 메시지 후에는 버튼 숨기기
        if (noClickCount >= messages.length) {
            setTimeout(() => {
                noBtn.style.display = 'none';
                result.innerHTML = '그래도 사랑해요... 💕';
            }, 2000);
        }
    }
});

// 축하 효과 (confetti)
function createConfetti() {
    const emojis = ['💕', '💖', '💗', '💝', '🐶', '🐕', '💐', '🌹'];
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
                countdownEl.innerHTML = '만날 시간이 왔어요! 💕 🐶 💖';
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

// 강아지 클릭 이벤트
document.querySelectorAll('.puppy').forEach(puppy => {
    puppy.addEventListener('click', () => {
        puppy.style.animation = 'none';
        setTimeout(() => {
            puppy.style.animation = 'wiggle 3s infinite';
        }, 10);
    });
});
