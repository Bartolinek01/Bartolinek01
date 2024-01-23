let energy = parseInt(localStorage.getItem('energy')) || 0;

document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
});

function GainPower() {
    energy++;
    updateCounter();
}

function updateCounter() {
    const energyElement = document.getElementById('energy_counter');
    const coinsElement = document.getElementById('coins_counter');

    energyElement.innerText = energy;
    coinsElement.innerText = 0; // Update this line with your actual coins value

    localStorage.setItem('energy', energy.toString());
}