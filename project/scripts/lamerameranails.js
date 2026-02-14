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