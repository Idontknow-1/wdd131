// static weather
const temperature = 26;
const windSpeed = 13;

// windchill cal
function calculateWindChill (temp, speed) {
    return (
        13.12 + .6215 * temp - 11.37 * Math.pow(speed, .16) + .3965 *
        temp * Math.pow(speed, .16)
    ).toFixed(1);
}

const windChillSpan = document.querySelector("#windchill");

// if valid and else
if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
}
else {
    windChillSpan.textContent = "N/A"
}

// footer js
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML += document.lastModified;