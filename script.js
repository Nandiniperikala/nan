function startSurprise() {
    // Display the fireworks and start the slideshow
    document.getElementById('message').style.display = 'block';
    
    const fireworksContainer = document.getElementById('fireworks');
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.animationDelay = Math.random() * 2 + 's';
        fireworksContainer.appendChild(firework);
    }
    
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showNextSlide() {
        if (currentSlide > 0) {
            slides[currentSlide - 1].style.display = 'none';
        }
        if (currentSlide < slides.length) {
            slides[currentSlide].style.display = 'block';
            currentSlide++;
            setTimeout(showNextSlide, 7000); // Show each slide for 3 seconds
        }
    }
    showNextSlide();
}
