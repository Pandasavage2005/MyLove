function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random horizontal position (vw)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration
    const duration = Math.random() * 3 + 2; // 2s - 5s
    heart.style.animationDuration = duration + 's';
    
    // Add heart to body
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts at regular intervals
// Initial burst
for(let i=0; i<5; i++) {
    setTimeout(createHeart, i * 200);
}

// Continuous flow
setInterval(createHeart, 300);
