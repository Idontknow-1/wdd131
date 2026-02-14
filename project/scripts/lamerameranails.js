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

if(nailForm) {  
  nailForm.addEventListener('submit', (e) => {
    e.preventDefault();

        const nameInput = document.getElementById('name').value;
        const selectedTier = document.getElementById('tiers').options[document.getElementById('tiers').selectedIndex].text;

        localStorage.setItem("customerName", nameInput);

        successMsg.innerHTML = 
        `<h3>Thank you, ${nameInput}!</h3>
            <p>Your request for the <strong>${selectedTier}</strong> has been received.</p>`;

        nailForm.style.display = 'none';
        successMsg.style.display = 'block';
    });
  }

// sizing options
const sizing = [
  { id: "method1", name: "Measuring Tape"},
  { id: "method2", name: "Coin"},
  { id: "method3", name: "Sizing Kit"}
];

const sizingSelect = document.getElementById("sizing");

if (sizingSelect) {
  sizing.forEach(item => {
    const option = document.createElement("option");
    option.value = sizing.id;
    option.textContent = `${item.name}`;
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
  tiers.forEach(item => {
    const option = document.createElement("option");
    option.value = tiers.id;
    option.textContent = `{item.name}`;
    tiersSelect.appendChild(option);
  });
}

// localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem("customerName");
    
    if (savedName) {
        console.log(`Welcome back, ${savedName}! We saved your info from your last visit.`);
    }
});