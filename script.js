const elements = [
    "Fire", "Water", "Earth", "Air", // Basic elements
    // Add more elements up to 1000
];

const combinations = {
    "FireWater": "Steam",
    "WaterEarth": "Mud",
    // Add more combinations here
};

const elementsContainer = document.getElementById('elements-container');
const resultContainer = document.getElementById('result-container');

elements.forEach(element => {
    const div = document.createElement('div');
    div.className = 'element';
    div.textContent = element;
    div.draggable = true;
    div.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', element);
    };
    elementsContainer.appendChild(div);
});

elementsContainer.ondrop = (e) => {
    e.preventDefault();
    const element1 = e.dataTransfer.getData('text/plain');
    const element2 = e.target.textContent;

    const result = combinations[element1 + element2] || combinations[element2 + element1];
    if (result) {
        resultContainer.textContent = `You created: ${result}`;
    } else {
        resultContainer.textContent = 'No combination found.';
    }
};

elementsContainer.ondragover = (e) => {
    e.preventDefault();
};
