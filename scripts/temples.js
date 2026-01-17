const hamButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
})

// footer
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML += document.lastModified;