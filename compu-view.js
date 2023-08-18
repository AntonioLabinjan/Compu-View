
const computerForm = document.getElementById('computerForm');
const activityForm = document.getElementById('activityForm');
const chartsContainer = document.getElementById('charts');
const computerTable = document.getElementById('computerTable');
const activityTable = document.getElementById('activityTable');


let computers = [];
let activities = [];



computerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const computerData = {
        type: event.target.elements.computerType.value,
        model: event.target.elements.computerModel.value,
        manufacturingYear: event.target.elements.manufacturingYear.value,
        romMemory: event.target.elements.romMemory.value,
        ramMemory: event.target.elements.ramMemory.value,
        operatingSystem: event.target.elements.operatingSystem.value,
        graphicsCard: event.target.elements.graphicsCard.value,
        processor: event.target.elements.processor.value
    };
    computers.push(computerData);
    displayData();
});

//
activityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const activityName = event.target.elements.activityName.value;
    const activityDuration = parseFloat(event.target.elements.activityDuration.value);
    const activityComputer = event.target.elements.activityComputer.value;

    if (!isComputerExists(activityComputer)) {
        alert('Računalo ne postoji. Molimo unesite postojeće računalo.');
        return;
    }

    const activityData = {
        name: activityName,
        duration: activityDuration,
        computer: activityComputer
    };
    activities.push(activityData);
    displayData();
});


function displayData() {
    computerTable.innerHTML = ''; 
    activityTable.innerHTML = ''; 

    
    const computerHeaderRow = document.createElement('tr');
    computerHeaderRow.innerHTML = `
        <th>Vrsta Računala</th>
        <th>Model</th>
        <th>Godina Proizvodnje</th>
        <th>ROM Memorija</th>
        <th>RAM Memorija</th>
        <th>Operativni Sustav</th>
        <th>Grafička Kartica</th>
        <th>Procesor</th>
    `;
    computerTable.appendChild(computerHeaderRow);

    
    computers.forEach(computer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${computer.type}</td>
            <td>${computer.model}</td>
            <td>${computer.manufacturingYear}</td>
            <td>${computer.romMemory}</td>
            <td>${computer.ramMemory}</td>
            <td>${computer.operatingSystem}</td>
            <td>${computer.graphicsCard}</td>
            <td>${computer.processor}</td>
        `;
        computerTable.appendChild(row);
    });


    const activityHeaderRow = document.createElement('tr');
    activityHeaderRow.innerHTML = `
        <th>Aktivnost</th>
        <th>Trajanje (h)</th>
        <th>Računalo</th>
    `;
    activityTable.appendChild(activityHeaderRow);

    
    activities.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.name}</td>
            <td>${activity.duration}</td>
            <td>${activity.computer}</td>
        `;
        activityTable.appendChild(row);
    });
}

function isComputerExists(computerName) {
    return computers.some(computer => computer.model === computerName);
}
