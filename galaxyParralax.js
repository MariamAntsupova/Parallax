// script.js
const starsLayer = document.getElementById('starsLayer');

// Create stars
const createStars = (numStars) => {
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starsLayer.appendChild(star);
    }
};

createStars(500);

document.addEventListener('mousemove', function(e) {
    const rect = starsLayer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const starRect = star.getBoundingClientRect();
        const starX = starRect.left + starRect.width / 2;
        const starY = starRect.top + starRect.height / 2;

        const distanceX = Math.abs(mouseX - starX);
        const distanceY = Math.abs(mouseY - starY);

        if (distanceX < 100 && distanceY < 100) {
            const scale = 1.5 - (Math.max(distanceX, distanceY) / 200);
            star.style.transform = `scale(${scale})`;
            star.style.opacity = `1`;
        } else {
            star.style.transform = `scale(1)`;
            star.style.opacity = `0.8`;
        }
    });
});
