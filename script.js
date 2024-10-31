    const combinations = {
    // Basic element combinations
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

    // Nature and environment expansions
    "earth+water": "Swamp",
    "swamp+sun": "Life",
    "swamp+plant": "Algae",
    "sun+water": "Rainbow",
    "water+mountain": "River",
    "mountain+sky": "Peak",
    "sky+ocean": "Horizon",
    "horizon+sun": "Sunset",
    "sunset+ocean": "Reflection",
    "rainbow+sky": "Aurora",
    "swamp+life": "Frog",
    "ocean+volcano": "Island",
    "earth+sun": "Desert",
    "mountain+river": "Valley",

    // Life and biology elements
    "life+water": "Fish",
    "life+earth": "Plant",
    "plant+water": "Tree",
    "tree+earth": "Forest",
    "forest+fire": "Wildfire",
    "life+life": "Human",
    "human+life": "Baby",
    "human+human": "Family",
    "human+earth": "Farmer",
    "human+water": "Swimmer",
    "human+air": "Pilot",
    "life+mountain": "Goat",
    "life+ocean": "Whale",

    // Animal kingdom expansion
    "bird+water": "Duck",
    "fish+air": "Flying Fish",
    "whale+life": "Orca",
    "tree+bird": "Nest",
    "tree+insect": "Beehive",
    "forest+bird": "Hawk",
    "hawk+sky": "Eagle",
    "whale+shark": "Megalodon",
    "life+swamp": "Crocodile",
    "water+frog": "Tadpole",

    // Human and culture combos
    "human+fire": "Campfire",
    "campfire+food": "Cookout",
    "human+campfire": "Camping",
    "camping+fire": "S’mores",
    "human+forest": "Explorer",
    "human+tree": "Treehouse",
    "human+stone": "House",
    "house+stone": "Castle",
    "castle+human": "Knight",
    "knight+horse": "Cavalry",
    "human+ocean": "Sailor",
    "human+city": "Citizen",

    // Technology and tools
    "human+metal": "Tool",
    "tool+metal": "Machine",
    "machine+electricity": "Electric Car",
    "electricity+metal": "Battery",
    "electricity+water": "Hydroelectric Power",
    "machine+fire": "Engine",
    "engine+water": "Steam Engine",
    "human+machine": "Engineer",
    "engineer+electricity": "Circuit",
    "engineer+metal": "Robot",
    "robot+electricity": "AI",
    "AI+internet": "Data Stream",
    "data stream+cloud": "Cloud Storage",
    "cloud+internet": "Network",
    "network+data": "Database",
    "AI+virtual reality": "Simulated World",
    "human+robot": "Cyborg",

    // Space elements
    "star+sky": "Galaxy",
    "galaxy+energy": "Black Hole",
    "space+black hole": "Wormhole",
    "wormhole+human": "Astronaut",
    "astronaut+moon": "Moon Landing",
    "moon+star": "Nebula",
    "nebula+energy": "Supernova",
    "galaxy+universe": "Cosmos",
    "sun+planet": "Solar System",
    "planet+moon": "Satellite",

    // Fantasy and magic elements
    "human+magic": "Wizard",
    "wizard+fire": "Fireball",
    "wizard+water": "Ice Spell",
    "wizard+earth": "Stone Golem",
    "wizard+air": "Levitation",
    "wizard+forest": "Druid",
    "druid+animal": "Beastmaster",
    "animal+fire": "Dragon",
    "water+dragon": "Sea Serpent",
    "human+stone": "Golem",
    "fire+magic": "Phoenix",
    "sky+magic": "Spirit",
    "earth+magic": "Giant",
    "tree+magic": "Ent",
    "spirit+human": "Ghost",
    "soul+magic": "Necromancer",

    // Science and advanced tech
    "electricity+air": "Lightning",
    "water+lightning": "Storm",
    "storm+energy": "Thunderstorm",
    "lightning+metal": "Conductor",
    "conductor+electricity": "Superconductor",
    "AI+internet": "Data Stream",
    "battery+sun": "Solar Battery",
    "electricity+robot": "Android",
    "android+AI": "Sentient Robot",
    "city+robot": "Smart City",
    "robot+factory": "Assembly Line",
    "robot+human": "Hybrid",
    "internet+AI": "Intelligent Web",
    "human+computer": "Programmer",
    "programmer+AI": "Developer",
    "cloud+virtual reality": "Virtual World",
    "virtual world+human": "Avatar",

    // Elements inspired by mythology
    "human+lightning": "Zeus",
    "sea+horse": "Hippocampus",
    "sky+magic": "Pegasus",
    "sea+serpent": "Leviathan",
    "underworld+spirit": "Wraith",
    "fire+underworld": "Demon",
    "human+demon": "Warlock",
    "sky+storm": "Thor",
    "forest+beast": "Werewolf",
    "wizard+beast": "Chimera",
    "human+serpent": "Medusa",
    "earth+giant": "Titan",

    // Experimental and creative elements
    "human+internet": "Netizen",
    "netizen+network": "Influencer",
    "influencer+fame": "Celebrity",
    "celebrity+scandal": "Gossip",
    "celebrity+camera": "Photograph",
    "camera+art": "Photography",
    "art+data": "NFT",
    "computer+AI": "Virtual Assistant",
    "battery+sun": "Solar Panel",
    "AI+quantum computing": "Quantum AI",
    "human+virtual world": "Gamer",
    "gamer+competition": "eSports",

    // Nature meets tech
    "city+tree": "Urban Forest",
    "electricity+city": "Power Grid",
    "internet+light": "Fiber Optic",
    "solar panel+city": "Eco City",
    "storm+power grid": "Blackout",
    "battery+forest": "Eco Battery",
    "robot+forest": "Logging Machine",
    "machine+ocean": "Submarine",
    "human+submarine": "Explorer",

    // Fun extras
    "human+campfire": "Camping",
    "human+party": "Celebration",
    "celebration+music": "Festival",
    "festival+food": "Fair",
    "human+coffee": "Awake",
    "coffee+morning": "Energy",
    "human+society": "Community",
    "community+city": "Metropolis",
    "water+robot": "Underwater Bot",
    "AI+data": "Machine Learning",
    "internet+community": "Forum",
    "forum+discussion": "Debate",
    "AI+game": "Chess Bot",
    
    // Add more if needed to reach exact total
};

let discoveredElements = new Set(["Fire", "Water", "Earth", "Air"]);

document.addEventListener('DOMContentLoaded', () => {
    updateDiscoveryIndex();
    discoveredElements.forEach(addElementCard);
});

// Function to update Discovery Index
function updateDiscoveryIndex() {
    const discoveredList = document.getElementById('discovered-elements');
    discoveredList.innerHTML = '';

    discoveredElements.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element;
        discoveredList.appendChild(listItem);
    });
}

// Function to add element card dynamically and enable dragging
function addElementCard(element) {
    const elementContainer = document.getElementById('element-container');
    const newCard = document.createElement('div');
    newCard.className = 'element-card';
    newCard.textContent = element;
    newCard.setAttribute("data-element", element);
    elementContainer.appendChild(newCard);

    newCard.style.left = `${Math.random() * 80}vw`; // Random position
    newCard.style.top = `${Math.random() * 60}vh`; // Random position

    newCard.draggable = true;
    newCard.ondragstart = handleDragStart;
    newCard.ondragend = handleDragEnd;
}

let draggedElement = null;

// Drag start event handler
function handleDragStart(event) {
    draggedElement = event.target;
    console.log("Dragging started:", draggedElement.textContent);
}

// Drag end event handler with collision detection for mixing elements
function handleDragEnd(event) {
    console.log("Dragging ended:", draggedElement.textContent);
    const elements = document.querySelectorAll('.element-card');

    elements.forEach(targetElement => {
        if (targetElement !== draggedElement && isTouching(draggedElement, targetElement)) {
            const element1 = draggedElement.getAttribute("data-element");
            const element2 = targetElement.getAttribute("data-element");

            const key1 = `${element1}+${element2}`;
            const key2 = `${element2}+${element1}`;
            let result;

            if (combinations[key1]) {
                result = combinations[key1];
            } else if (combinations[key2]) {
                result = combinations[key2];
            } else {
                result = "Unknown";
            }

            console.log("Elements combined:", element1, "+", element2, "=", result);
            displayResult(result);

            if (result !== "Unknown" && !discoveredElements.has(result)) {
                discoveredElements.add(result);
                updateDiscoveryIndex();
                addElementCard(result);
            }
        }
    });
}

// Collision detection function
function isTouching(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    return !(
        rect1.top > rect2.bottom ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right ||
        rect1.right < rect2.left
    );
}

// Display result of fusion
function displayResult(result) {
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = result;
}
