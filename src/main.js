
// Immediately create a heart when the page loads
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️🌹';
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-20px';
    document.body.appendChild(heart);

    // Animate the heart falling
    let position = -20;
    const interval = setInterval(() => {
        position += 2;
        heart.style.top = position + 'px';

        // Remove heart when it reaches bottom of screen
        if (position > window.innerHeight) {
            clearInterval(interval);
            heart.remove();
        }
    }, 20);
}

const today = new Date();
const valMessage = document.querySelector('.valentine-message');
if (today.getMonth() === 1 && today.getDate() === 14) {
    setInterval(createHeart, 300);
    valMessage.style.display = 'block';
}