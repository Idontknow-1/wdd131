const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0}
];

// populate product
const productSelect = document.getElementById("product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// review increment counter
const countDisplay = document.querySelector("#review-count");

if (countDisplay) {
    let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount-ls", reviewCount);
    countDisplay.textContent = reviewCount;
}

// footer
// current year id
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// last modified
document.getElementById("lastModified").innerHTML += document.lastModified;