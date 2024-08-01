//banner auto slide
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.banner');
    const slides = slider.querySelectorAll('li');
    const slideCount = slides.length;
    let activeSlide = 0;

  
    slides[activeSlide].classList.add('active');

    setInterval(() => {
        slides[activeSlide].classList.remove('active');
        activeSlide = (activeSlide + 1) % slideCount; 
        slides[activeSlide].classList.add('active');
    }, 2000); 
});


// Form validation JavaScript
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;

    if (!name || !email || !subject) {
        alert('Please fill out all fields.');
        event.preventDefault(); 
    }
});
