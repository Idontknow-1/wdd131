// nav hamburger
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
})

// temple images
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add 3 more temple objects here...
  {
    templeName: "Puebla Mexico ",
    location: "Puebla, Mexico",
    dedicated: "2024, November, 30",
    area: 35865,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, Korea",
    dedicated: "1983, May, 9",
    area: 28057,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-63795.jpg"
  },
  {
    templeName: "San Pedro Sula Honduras",
    location: "San Pedro Sula, Cortes, Honduras",
    dedicated: "2020, September, 5",
    area: 35818,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52536.jpg"
  }
];

// temple card loop
function displayTemples(templesList) {
    const templesSection = document.querySelector("#temples");
    templesSection.innerHTML = "";

    templesList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templesSection.appendChild(card);
    })
}

    // filtering and displaying
    // home
    displayTemples(temples);

    // old
    const oldTemples = temples.filter(temple => {
        const templeYear = Number(temple.dedicated.split(",")[0]);
        return templeYear < 1900;
    });

    // new
    const newTemples = temples.filter(temple => {
        const templeYear = Number(temple.dedicated.split(",")[0]);
        return templeYear > 2000;
    });

    // large
    const largeTemples = temples.filter(temple => temple.area > 90000);

    // small
    const smallTemples = temples.filter(temple => temple.area < 10000);

const navLink = document.querySelectorAll(".navigation a");

navLink.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const filter = link.textContent;

        if (filter === "Home") {
            displayTemples(temples);
        }
        if (filter === "Old") {
            displayTemples(oldTemples);
        }
        if (filter === "New") {
            displayTemples(newTemples);
        }
        if (filter === "Large") {
            displayTemples(largeTemples);
        }
        if (filter === "Small") {
            displayTemples(smallTemples);
        }
    });
});

// footer
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML += document.lastModified;