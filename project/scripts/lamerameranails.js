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

// sizing options
const sizing = [
  { id: "method1", name: "Measuring Tape"},
  { id: "method2", name: "Coin"},
  { id: "method3", name: "Sizing Kit"}
];

const sizingSelect = document.getElementById("sizing");

if (sizingSelect) {
  sizing.forEach(sizing => {
    const option = document.createElement("option");
    option.value = sizing.id;
    option.textContent = sizing.name;
    sizingSelect.appendChild(option);
  });
}

// tiers options
const tiers = [
  { id: "tier1", name: "Allium Tier"},
  { id: "tier2", name: "Lavender Tier"},
  { id: "tier3", name: "Time Circuits"},
  { id: "tier4", name: "Low Voltage Reactor"}
];

const tiersSelect = document.getElementById("tiers");

if (tiersSelect) {
  tiers.forEach(tiers => {
    const option = document.createElement("option");
    option.value = tiers.id;
    option.textContent = tiers.name;
    tiersSelect.appendChild(option);
  });
}