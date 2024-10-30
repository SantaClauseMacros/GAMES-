// Elemental Fusion Game Logic
const combinations = {
    // Basic elements
    "fire+water": "Steam",
    "fire+earth": "Lava",
    "fire+air": "Energy",
    "water+earth": "Mud",
    "water+air": "Mist",
    "earth+air": "Dust",
    "fire+fire": "Sun",
    "water+water": "Ocean",
    "earth+earth": "Mountain",
    "air+air": "Sky",

    // Life-related combinations
    "earth+life": "Human",
    "water+life": "Fish",
    "fire+life": "Phoenix",
    "life+earth": "Plant",
    "plant+water": "Tree",
    "tree+earth": "Forest",
    "forest+fire": "Wildfire",

    // Technology combinations
    "human+metal": "Robot",
    "robot+electricity": "AI",
    "human+electricity": "Engineer",
    "engineer+metal": "Tool",
    "tool+metal": "Machine",
    "machine+electricity": "Electric Car",
    "computer+internet": "Network",
    "network+computer": "Server",
    "electricity+metal": "Battery",
    "battery+machine": "Smartphone",
    "computer+AI": "Virtual Assistant",
    "robot+tool": "Factory",
    "factory+electricity": "Power Plant",
    "power plant+electricity": "City",
    "city+human": "Civilization",
    "civilization+internet": "Online World",
    "human+computer": "Programmer",
    "programmer+AI": "Tech Revolution",
    "human+toilet": "Skibidi Toilet",

    // Fun Combinations
    "man+toilet": "Skibidi Toilet",
    "skibidi toilet+human": "Chaos",
    "human+fire": "Campfire",
    "human+ocean": "Swimmer",
    "swimmer+shark": "Survivor",

    // Advanced tech and imaginative combinations
    "AI+internet": "Data Stream",
    "robot+AI": "Sentient Being",
    "city+robot": "Smart City",
    "battery+sun": "Solar Battery",
    "computer+solar battery": "Eco Computer",
    "AI+sentient being": "Super Intelligence",
    "computer+internet": "Web Server",
    "web server+data stream": "Streaming Platform",
    "streaming platform+AI": "Virtual World",
    "virtual world+human": "VR Experience",
    "AI+VR experience": "Immersive Reality",

    // Experimental combinations
    "fire+metal": "Alloy",
    "electricity+alloy": "Superconductor",
    "AI+superconductor": "Quantum Computer",
    "quantum computer+network": "Quantum Internet",
    "human+quantum computer": "Quantum Researcher",
    "battery+water": "Hydro Battery",
    "city+solar battery": "Eco City",

    // Add more creative combinations
};

let discoveredElements = new Set(Object.values(combinations)); // Start with known results

// Function to update Discovery Index
function updateDiscoveryIndex() {
    const discoveredList = document.getElementById('discovered-elements');
    discoveredList.innerHTML = ''; // Clear previous list

    discoveredElements.forEach((element) => {
        const listItem = document.createElement('li');
        listItem.textContent = element;
        discoveredList.appendChild(listItem);
    });
}

// Function to handle combinations
function combineElements() {
    const element1 = document.getElementById('element1').value;
    const element2 = document.getElementById('element2').value;
    const resultDisplay = document.getElementById('result');

    const key1 = `${element1}+${element2}`;
    const key2 = `${element2}+${element1}`; // Allow reverse combinations

    let result;
    if (combinations[key1]) {
        result = combinations[key1];
    } else if (combinations[key2]) {
        result = combinations[key2];
    } else {
        result = "Unknown";
    }

    resultDisplay.textContent = result;

    // Update discovered elements if it's a new find
    if (result !== "Unknown" && !discoveredElements.has(result)) {
        discoveredElements.add(result);
        updateDiscoveryIndex();
    }
}

// Event listener for the combine button
document.getElementById('combine-button').addEventListener('click', combineElements);

// Initialize Discovery Index on load
document.addEventListener('DOMContentLoaded', updateDiscoveryIndex);
