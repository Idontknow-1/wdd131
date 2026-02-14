// hamburger nav
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// nail form
const nailForm = document.getElementById('nail-form');
    const successMsg = document.getElementById('success-msg');

    nailForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            sizing: document.getElementById('sizing').value,
            notes: document.getElementById('details').value
        };

        console.log("Form Submitted Successfully!", formData);

        nailForm.style.display = 'none';
        successMsg.style.display = 'block';
    });

// gallery
function changeSlide(button, direction) {
    const container = button.parentElement;
    const slideWrap = container.querySelectorAll('.slide-wrap');
    const slides = slideWrap.querySelectorAll('.slide-wrap')

    if (slides.length === 0) return;
    
    let currentIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
        }
    });

    slides[currentIndex].classList.remove('active');
    
    let nextIndex = currentIndex + direction;

    if (nextIndex >= slides.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = slides.length - 1;

    slides[nextIndex].classList.add('active');
}