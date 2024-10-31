const combinations = {
    // Basic combinations with emojis
    "fire+water": "🔥💧 Steam",
    "fire+earth": "🔥🌍 Lava",
    "fire+air": "🔥🌬️ Energy",
    "water+earth": "💧🌍 Mud",
    "water+air": "💧🌬️ Mist",
    "earth+air": "🌍🌬️ Dust",
    "fire+fire": "🔥🔥 Sun",
    "water+water": "💧💧 Ocean",
    "earth+earth": "🌍🌍 Mountain",
    "air+air": "🌬️🌬️ Sky",

    // Nature expansions
    "earth+water": "🌍💧 Swamp",
    "swamp+sun": "🦠☀️ Life",
    "swamp+plant": "🦠🌱 Algae",
    "sun+water": "☀️💧 Rainbow",
    "water+mountain": "💧🏔️ River",
    "mountain+sky": "🏔️🌬️ Peak",
    "sky+ocean": "🌬️🌊 Horizon",
    "horizon+sun": "🌅 Sunset",
    "sunset+ocean": "🌄 Reflection",
    "rainbow+sky": "🌈🌬️ Aurora",
    "swamp+life": "🐸 Frog",
    "ocean+volcano": "🌋🏝️ Island",
    "earth+sun": "🌍☀️ Desert",
    "mountain+river": "🏞️ Valley",
    
    // Life and biology elements
    "life+water": "🐟 Fish",
    "life+earth": "🌱 Plant",
    "plant+water": "🌳 Tree",
    "tree+earth": "🌲 Forest",
    "forest+fire": "🔥🌲 Wildfire",
    "life+life": "👤 Human",
    "human+life": "👶 Baby",
    "human+human": "👨‍👩‍👦 Family",
    "human+earth": "👩‍🌾 Farmer",
    "human+water": "🏊 Swimmer",
    "human+air": "🧑‍✈️ Pilot",
    "life+mountain": "🐐 Goat",
    "life+ocean": "🐋 Whale",

    // Expanded Animal Kingdom
    "life+sky": "🦅 Bird",
    "bird+earth": "🐓 Chicken",
    "bird+water": "🦆 Duck",
    "bird+fire": "🦅 Phoenix",
    "life+desert": "🐪 Camel",
    "water+fish": "🐠 Fish School",
    "forest+animal": "🐺 Wolf Pack",
    "ocean+shark": "🦈 Shark",
    "life+jungle": "🦍 Gorilla",
    "mountain+goat": "🐐 Mountain Goat",
    "bird+water": "🦢 Swan",
    
    // Mythical Creatures
    "animal+fire": "🐉 Dragon",
    "animal+magic": "🦄 Unicorn",
    "human+spirit": "👻 Ghost",
    "human+forest": "🧝 Elf",
    "sea+serpent": "🐉 Leviathan",
    "beast+magic": "🐉 Chimera",
    "forest+spirit": "🧚 Fairy",
    "human+wizard": "🧙 Sorcerer",
    "wizard+stone": "🗿 Golem",
    "fire+magic": "🔥 Phoenix",
    "life+spirit": "🧞 Genie",
    
    // Space Elements
    "star+sky": "🌌 Galaxy",
    "galaxy+energy": "⚫ Black Hole",
    "space+black hole": "🕳️ Wormhole",
    "astronaut+moon": "🚀🌕 Moon Landing",
    "moon+star": "🌠 Nebula",
    "nebula+energy": "🌠 Supernova",
    "galaxy+universe": "🌌 Cosmos",
    "sun+planet": "🌞 Solar System",
    "planet+moon": "🛰️ Satellite",
    "rocket+fuel": "🚀 Rocket Launch",
    "planet+life": "🌍 Earth",
    "star+time": "🕰️ Light Year",
    "planet+orbit": "🌍🌌 Orbit",
    
    // Expanded Human Elements
    "human+tree": "🏡 Treehouse",
    "human+forest": "🏕️ Camping",
    "human+city": "🏙️ Citizen",
    "city+electricity": "💡 Power Grid",
    "human+campfire": "🔥 Camping",
    "human+party": "🎉 Celebration",
    "celebration+music": "🎶 Festival",
    "festival+food": "🍔 Fair",
    "celebrity+fame": "⭐ Star",
    "celebrity+camera": "📸 Photograph",
    "human+robot": "🤖 Cyborg",
    
    // Technology Expansions
    "human+machine": "👷 Engineer",
    "human+metal": "🔨 Tool",
    "tool+metal": "⚙️ Machine",
    "machine+electricity": "🔋 Electric Device",
    "electricity+water": "⚡💧 Hydroelectric Power",
    "machine+fire": "🚂 Steam Engine",
    "engine+water": "🚂 Steam Train",
    "battery+sun": "🔋 Solar Panel",
    "AI+game": "♟️ Chess Bot",
    "AI+internet": "🌐 Data Stream",
    "data+cloud": "☁️ Cloud Storage",
    "AI+virtual reality": "🕶️ Simulated World",
    "robot+internet": "🤖📶 Network Bot",
    "robot+factory": "🏭 Assembly Line",
    "engineer+robot": "🤖 AI Assistant",
    
    // Elements Inspired by Mythology
    "human+lightning": "⚡ Zeus",
    "sea+horse": "🦄 Hippocampus",
    "sky+magic": "🦄 Pegasus",
    "earth+magic": "👹 Giant",
    "sea+magic": "🐉 Kraken",
    "forest+magic": "🧚 Druid",
    "fire+spirit": "🔥 Fire Spirit",
    "spirit+stone": "🧟 Zombie",
    "underworld+fire": "🔥 Demon",
    "storm+magic": "🌩️ Thor",
    
    // Fun Extras
    "human+internet": "🌐 Netizen",
    "network+data": "📂 Database",
    "battery+light": "🔋 Flashlight",
    "robot+AI": "🤖 Smart Robot",
    "network+AI": "🧠 Neural Network",
    "machine+car": "🚗 Car Engine",
    "human+drone": "🚁 Drone Pilot",
    "cloud+robot": "🤖 Cloud Bot",
    "cloud+internet": "☁️ Networked Cloud",
    
    // Expanded Fantasy and Creative Elements
    "human+magic": "🧙 Wizard",
    "wizard+fire": "🔥 Fire Spell",
    "wizard+water": "❄️ Ice Spell",
    "wizard+earth": "🪨 Stone Golem",
    "wizard+forest": "🧝 Druid",
    "life+mountain": "🐐 Mountain Goat",
    "bird+fire": "🦅 Phoenix",
    "dragon+ice": "🐉 Frost Dragon",
    "spirit+forest": "🧚 Wood Nymph",
    
    // Additional Space and Time Elements
    "star+moon": "🌌 Constellation",
    "black hole+time": "⏳ Time Warp",
    "star+life": "🌟 Celestial Being",
    "galaxy+planet": "🌠 Universe",
    "cosmos+galaxy": "🌌 Infinite Space",
    "planet+moon": "🛰️ Lunar Base",
    "cosmos+time": "🌌 Timeless Space",
    "star+nebula": "🌌 Milky Way",
    
    // Expanded Mystical and Experimental Combinations
    "spirit+time": "⏳ Eternal Spirit",
    "storm+forest": "🌲 Thunderstorm",
    "swamp+creature": "👹 Swamp Monster",
    "fire+beast": "🔥🐉 Fire Dragon",
    "spirit+ocean": "🌊 Water Spirit",
    "forest+ocean": "🏞️ Coastal Forest",
    "desert+magic": "🌵 Desert Mirage",
    "lightning+cloud": "🌩️ Storm Cloud",
    "sand+water": "🏖️ Beach",
    "mountain+desert": "🏜️ Rocky Desert",
};

// Initial elements to start with in the game
let discoveredElements = new Set(["🔥 Fire", "💧 Water", "🌍 Earth", "🌬️ Air"]);

document.addEventListener('DOMContentLoaded', () => {
    updateDiscoveryIndex();
    discoveredElements.forEach(addElementCard);
});

function updateDiscoveryIndex() {
    const discoveredList = document.getElementById('discovered-elements');
    discoveredList.innerHTML = '';

    discoveredElements.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element;
        discoveredList.appendChild(listItem);
    });
}

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

function handleDragStart(event) {
    draggedElement = event.target;
    console.log("Dragging started:", draggedElement.textContent);
}

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

            displayResult(result);

            if (result !== "Unknown" && !discoveredElements.has(result)) {
                discoveredElements.add(result);
                updateDiscoveryIndex();
                addElementCard(result);
            }
        }
    });
}

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

function displayResult(result) {
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = result;
}
