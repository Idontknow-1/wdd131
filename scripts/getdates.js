// current year id
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// last modified
document.getElementById("lastModified").innerHTML += document.lastModified;