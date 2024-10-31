const combinations = {
    // Basic Elements Remain
    "fire+water": "💨 Steam",
    "fire+earth": "🌋 Lava",
    "fire+air": "⚡ Plasma",
    "water+earth": "🥜 Clay",
    "water+air": "☁️ Cloud",
    "earth+air": "💨 Dust",
    
    // Meme Combinations
    "toilet+dance": "🚽 Skibidi Toilet",
    "skibidi toilet+skibidi toilet": "👾 Skibidi Army",
    "skibidi toilet+human": "🕺 Camera Man",
    "skibidi army+city": "🌆 Skibidi World",
    "toilet+music": "🎵 Toilet Beat",
    "toilet beat+dance": "💃 Toilet Groove",
    
    // Internet Culture
    "cat+keyboard": "😺 Keyboard Cat",
    "doge+money": "🐕 Dogecoin",
    "pepe+sad": "🐸 Sad Pepe",
    "nyan+cat": "🌈 Nyan Cat",
    "cat+bread": "🍞 Cat Bread",
    "cat+box": "📦 Boxy Cat",
    
    // Modern Memes
    "corn+kid": "🌽 It's Corn!",
    "rizz+human": "😎 Rizz Master",
    "cap+speech": "🧢 Cap Detected",
    "sus+person": "📮 Amogus",
    "amogus+group": "👥 Sus Crew",
    "chad+wisdom": "🗿 Gigachad",
    "cat+crying": "😿 Crying Cat",
    "dog+cheems": "🐕 Cheems",
    "bonk+dog": "🔨 Bonk Doge",
    
    // Viral Trends
    "backrooms+wall": "🏃 Backrooms Entity",
    "fnaf+pizza": "🐻 Freddy",
    "lean+purple": "💜 Lean Monster",
    "mcdonalds+grimace": "💜 Grimace Shake",
    "potato+camera": "📸 Bad Quality",
    "skill+issue": "💀 Skill Issue",
    
    // Gaming Memes
    "grass+gamer": "🌱 Touch Grass",
    "sweat+game": "💦 Sweaty Gamer",
    "toxic+game": "☢️ Toxic Lobby",
    "rage+quit": "😡 Ragequit",
    "gaming+chair": "💺 Pro Gamer",
    "l+ratio": "📉 L + Ratio",
    
    // TikTok Culture
    "brain+rot": "🧠 Brainrot",
    "brainrot+video": "🎥 POV Brainrot",
    "dance+trend": "💃 TikTok Dance",
    "filter+face": "👁️ Beauty Filter",
    "story+time": "⏰ Storytime",
    "npc+video": "🤖 NPC Stream",
    "dance+npc": "🕺 NPC Dance",
    
    // Youtube Culture
    "like+subscribe": "👍 Call to Action",
    "youtube+drama": "☕ Tea",
    "apology+video": "😢 Apology Video",
    "reaction+face": "😱 Thumbnail Face",
    "clickbait+arrow": "⭐ Youtube Clickbait",
    "minecraft+craft": "⛏️ Minecraft Steve",
    
    // Cursed Combinations
    "brainrot+skibidi": "🤯 Maximum Brainrot",
    "curse+image": "👻 Cursed Image",
    "meme+deep fry": "🍳 Deep Fried Meme",
    "cringe+post": "😬 Cringepost",
    "shitpost+quality": "💩 Quality Shitpost",
    
    // Modern Slang Elements
    "fr+fr": "💯 Fr Fr No Cap",
    "bussin+food": "😋 Bussin Food",
    "rizz+infinite": "✨ Infinite Rizz",
    "cap+detect": "🧢 Cap Detector",
    "real+true": "💯 Real",
    "slay+queen": "👑 Slay",
    
    // Meta Memes
    "meme+death": "💀 Dead Meme",
    "trend+speed": "⚡ Speed Run",
    "viral+die": "📉 Forgotten Trend",
    "comedy+homicide": "🪦 Comedy Cemetery",
    "random+humor": "🎲 Gen Z Humor",
    
    // Backrooms Related
    "backrooms+level": "🚪 Level 0",
    "level 0+danger": "👻 Entity",
    "backrooms+exit": "🏃 No-clip",
    "entity+human": "💀 Lost Soul",
    "backrooms+party": "🎉 Level Fun",
    
    // FNAF Elements
    "freddy+night": "🐻 Night Shift",
    "animatronic+pizza": "🍕 Pizza Time",
    "security+camera": "📹 Security Feed",
    "golden+freddy": "✨ Golden Freddy",
    "puppet+box": "🎁 Music Box",
    
    // Modern Internet Phenomena
    "ai+art": "🎨 AI Generated",
    "nft+money": "🐒 Bored Ape",
    "crypto+crash": "📉 Crypto Winter",
    "chad+virgin": "📊 Virgin vs Chad",
    "copium+cope": "😤 Copium Overdose",
    
    // Base Elements for Crafting
    "dance": "💃 Dance Move",
    "toilet": "🚽 Toilet",
    "music": "🎵 Music",
    "meme": "😂 Meme",
    "trend": "📈 Trend",
    "internet": "🌐 Internet",
    "gaming": "🎮 Gaming",
    "video": "📱 Video",
    "cat": "😺 Cat",
    "dog": "🐕 Dog",
    "human": "👤 Human",
    "brain": "🧠 Brain",
    "social": "📱 Social Media",
    "quality": "✨ Quality",
    
    // Extra Silly Combinations
    "skill issue+cope": "😭 Copium Factory",
    "npc+brainrot": "🤖 NPC Brainrot",
    "skibidi+backrooms": "🚽 Toilet Rooms",
    "freddy+toilet": "🐻 Freddy Toilet",
    "amogus+toilet": "📮 Sus Toilet",
    "lean+toilet": "💜 Lean Toilet",
    "rizz+toilet": "😎 Toilet Rizz",
    "real+toilet": "💯 Real Toilet",
    "brainrot+maximum": "🤯 Terminal Brainrot",
    "skibidi+ohio": "😱 Ohio Toilet",
    "toilet+peace": "☮️ Peaceful Toilet",
    "ohio+peace": "⚔️ Impossible",
    
    // Even More Base Elements
    "peace": "☮️ Peace",
    "ohio": "🏴 Ohio",
    "quality": "✨ Quality",
    "maximum": "⚡ Maximum",
    "deep fry": "🍳 Deep Fry",
    "cursed": "👻 Cursed",
    "sus": "📮 Sus",
    "real": "💯 Real",
    "cap": "🧢 Cap",
    "rizz": "😎 Rizz",
    "lean": "💜 Lean",
    "grimace": "💜 Grimace",
    "freddy": "🐻 Freddy",
    "backrooms": "🚪 Backrooms",
    "entity": "👻 Entity",
    "amogus": "📮 Amogus",
    
    // Extra Combinations
    "ohio+toilet": "😱 Ohio Toilet Invasion",
    "grimace+toilet": "💜 Grimace Toilet",
    "toilet+entity": "👻 Toilet Entity",
    "skibidi+real": "💯 Real Skibidi",
    "ohio+real": "💯 Real Ohio",
    "brainrot+quality": "✨ Quality Brainrot",
    "toilet+sus": "📮 Sus Toilet",
    "grimace+ohio": "💜 Purple Ohio",
    "freddy+ohio": "🐻 Ohio Freddy",
    "backrooms+ohio": "😱 Ohio Rooms",
    "entity+ohio": "👻 Ohio Entity",
    "amogus+ohio": "📮 Ohio Sus",
    
    // Absolutely Cursed Combinations
    "ohio+maximum": "😱 Maximum Ohio",
    "brainrot+ohio": "🤯 Ohio Brainrot",
    "toilet+maximum": "🚽 Maximum Toilet",
    "sus+maximum": "📮 Maximum Sus",
    "grimace+maximum": "💜 Maximum Grimace",
    "freddy+maximum": "🐻 Maximum Freddy",
    "entity+maximum": "👻 Maximum Entity",
    "amogus+maximum": "📮 Maximum Sus",
    "skibidi+maximum": "🕺 Maximum Skibidi",
    
    // Final Boss Combinations
    "maximum ohio+maximum toilet": "💀 Ohio Toilet Apocalypse",
    "maximum brainrot+ohio toilet": "🤯 Terminal Ohio Brainrot",
    "maximum sus+ohio toilet": "📮 Ultimate Ohio Sus",
    "maximum grimace+ohio toilet": "💜 Ultimate Grimace Ohio",
    "maximum freddy+ohio toilet": "🐻 Ultimate Ohio Freddy",
    "maximum entity+ohio toilet": "👻 Ultimate Ohio Entity",
    "maximum amogus+ohio toilet": "📮 Ultimate Ohio Sus",
    "maximum skibidi+ohio toilet": "🕺 Ultimate Ohio Skibidi"
};

// Initialize with basic elements
let discoveredElements = new Set([
    "🔥 Fire", "💧 Water", "🌍 Earth", "🌬️ Air",
    "🚽 Toilet", "💃 Dance", "🎵 Music",
    "🏴 Ohio", "📮 Sus", "💜 Lean",
    "😱 Maximum", "🤯 Brainrot", "🕺 Skibidi"
]);

let draggedElement = null;
let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    setupDragListeners();
});

function initializeGame() {
    updateDiscoveryList();
    discoveredElements.forEach(addElementCard);
}

function addElementCard(element) {
    const container = document.getElementById('element-container');
    const card = document.createElement('div');
    card.className = 'element-card';
    card.textContent = element;
    card.setAttribute('data-element', element);
    
    // Random position within visible area
    card.style.left = `${Math.random() * (container.clientWidth - 100)}px`;
    card.style.top = `${Math.random() * (container.clientHeight - 100)}px`;
    
    container.appendChild(card);
    setupCardDragging(card);
}

function setupCardDragging(card) {
    card.addEventListener('mousedown', startDragging);
    card.addEventListener('touchstart', startDragging, { passive: false });
}

function startDragging(e) {
    e.preventDefault();
    isDragging = true;
    draggedElement = e.target;
    
    const rect = draggedElement.getBoundingClientRect();
    const touch = e.type === 'touchstart' ? e.touches[0] : e;
    
    dragOffsetX = touch.clientX - rect.left;
    dragOffsetY = touch.clientY - rect.top;
    
    draggedElement.style.zIndex = 1000;
    draggedElement.style.cursor = 'grabbing';
}

function setupDragListeners() {
    const container = document.getElementById('element-container');
    
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    
    document.addEventListener('mouseup', endDragging);
    document.addEventListener('touchend', endDragging);
    
    container.addEventListener('mouseleave', endDragging);
    container.addEventListener('touchcancel', endDragging);
}

function onDrag(e) {
    if (!isDragging || !draggedElement) return;
    e.preventDefault();
    
    const touch = e.type === 'touchmove' ? e.touches[0] : e;
    const container = document.getElementById('element-container');
    const rect = container.getBoundingClientRect();
    
    let newX = touch.clientX - rect.left - dragOffsetX;
    let newY = touch.clientY - rect.top - dragOffsetY;
    
    // Boundary checking
    newX = Math.max(0, Math.min(newX, container.clientWidth - draggedElement.offsetWidth));
    newY = Math.max(0, Math.min(newY, container.clientHeight - draggedElement.offsetHeight));
    
    draggedElement.style.left = `${newX}px`;
    draggedElement.style.top = `${newY}px`;
    
    checkCollisions();
}

function endDragging() {
    if (!isDragging) return;
    
    isDragging = false;
    if (draggedElement) {
        draggedElement.style.zIndex = '';
        draggedElement.style.cursor = 'grab';
        draggedElement = null;
    }
}

function checkCollisions() {
    if (!draggedElement) return;
    
    const elements = document.querySelectorAll('.element-card');
    elements.forEach(targetElement => {
        if (targetElement !== draggedElement && isColliding(draggedElement, targetElement)) {
            combineElements(draggedElement, targetElement);
        }
    });
}

function isColliding(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();
    
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

function combineElements(elem1, elem2) {
    const element1 = elem1.getAttribute('data-element');
    const element2 = elem2.getAttribute('data-element');
    
    const combination1 = `${element1}+${element2}`;
    const combination2 = `${element2}+${element1}`;
    
    let result = combinations[combination1] || combinations[combination2];
    
    if (result && !discoveredElements.has(result)) {
        discoveredElements.add(result);
                addElementCard(result);
        updateDiscoveryList();
        showCombinationEffect(elem1, elem2, result);
    }
}

function showCombinationEffect(elem1, elem2, result) {
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = `Combined ${elem1.textContent} + ${elem2.textContent} = ${result}`;
    resultDisplay.style.opacity = 1;
    
    setTimeout(() => {
        resultDisplay.style.opacity = 0;
    }, 2000);
}

function updateDiscoveryList() {
    const list = document.getElementById('discovered-elements');
    list.innerHTML = '';
    
    Array.from(discoveredElements).sort().forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        list.appendChild(li);
    });
}
