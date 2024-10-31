const elements = [
    "Fire", "Water", "Earth", "Air", "Metal", "Wood", "Stone", "Glass", "Steam", "Lava",
    // ... Add more elements up to 1000
];

let combinedElements = [];

function createElements() {
    const container = document.getElementById('elements-container');
    elements.forEach(element => {
        const div = document.createElement('div');
        div.className = 'element';
        div.textContent = element;
        div.draggable = true;
        div.ondragstart = (e) => e.dataTransfer.setData('text/plain', element);
        container.appendChild(div);
    });
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const element1 = e.dataTransfer.getData('text/plain');
    const element2 = e.target.textContent;

    const newElement = combineElements(element1, element2);
    if (newElement) {
        combinedElements.push(newElement);
        displayResult(newElement);
    }
}

function combineElements(el1, el2) {
    // Define combinations here
    if (el1 === "Fire" && el2 === "Water") return "Steam";
    if (el1 === "Fire" && el2 === "Earth") return "Lava";
    // ... Add more combinations
    return null;
}

function displayResult(newElement) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = `You created: ${newElement}`;
}

document.addEventListener('DOMContentLoaded', () => {
    createElements();
    const elementsContainer = document.getElementById('elements-container');
    elementsContainer.addEventListener('dragover', allowDrop);
    elementsContainer.addEventListener('drop', drop);
});
