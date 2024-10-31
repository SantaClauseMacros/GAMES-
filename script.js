// Initialize the combos object
const combos = {
    // Existing combos
    "fire+water": "Steam ☁️",
    "fire+earth": "Magma 🌋",
    "water+earth": "Mud 🏞️",
    "air+fire": "Lightning ⚡",
    "light+darkness": "Shadow 🌑",
    "water+air": "Cloud ☁️",
    "earth+air": "Dust 🌪️",
    "fire+electricity": "Plasma 🔥⚡",
    "nature+magic": "Life 🌿",
    "time+space": "Dimension 🌀",
    "soul+chaos": "Spiritual Energy 🌌",

    // Technology Memes
    "ai+meme": "🤖 AI Meme",
    "robot+human": "🤯 Uncanny Valley",
    "smartphone+brain": "📱 Tech Brain",
    "algorithm+life": "🧮 Life Algorithm",
    "qr code+face": "🔲 QR Face",
    "selfie+ego": "🤳 Selfie Culture",
    "streaming+gamer": "🎥 Content Creator",
    "blockchain+money": "💸 Crypto Hype",
    "vpn+location": "🌐 Fake Location",
    "drone+camera": "📸 Aerial Perspective",

    // Sports and Pop Culture
    "footballer+celebration": "🏆 Goal Dance",
    "celebrity+drama": "🌟 Tabloid Headline",
    "music+autotune": "🎤 Vocal Processor",
    "athlete+meme": "💪 Sports Moment",
    "actor+oscar": "🏆 Red Carpet Moment",
    "concert+viral": "🎵 Stage Fail",
    "karaoke+fail": "🎤 Cringe Performance",
    "movie+trailer": "🎬 Spoiler Alert",
    "award+speech": "🏆 Acceptance Ramble",
    "influencer+pose": "📸 Instagram Aesthetic",

    // Food and Culinary Culture
    "avocado+toast": "🥑 Millennial Meal",
    "ramen+instant": "🍜 Broke Student Cuisine",
    "tiktok+recipe": "👨‍🍳 Viral Cooking",
    "food+filter": "🍽️ Insta-worthy Dish",
    "mukbang+stream": "🍴 Eating Show",
    "chef+challenge": "🔪 Culinary Showdown",
    "smoothie+health": "🥤 Wellness Trend",
    "coffee+monday": "☕ Survival Juice",
    "street food+video": "🌭 Food Vlog",
    "pineapple+pizza": "🍍 Controversial Topping",

    // Fashion and Aesthetics
    "streetwear+logo": "👕 Hypebeast Style",
    "fashion+trend": "👗 Viral Look",
    "sneaker+limited": "👟 Collector's Item",
    "makeup+tutorial": "💄 Beauty Guru",
    "thrift+fashion": "👚 Sustainable Style",
    "cosplay+character": "🦸 Character Transformation",
    "vintage+filter": "📸 Retro Aesthetic",
    "outfit+mirror": "🪞 OOTD Post",
    "designer+knockoff": "👜 Inspired Design",
    "haul+shopping": "🛍️ Retail Therapy",

    // Environmental and Social Awareness
    "climate+protest": "🌍 Eco Movement",
    "sustainability+lifestyle": "♻️ Green Living",
    "activism+social media": "✊ Digital Protest",
    "volunteer+community": "🤝 Local Impact",
    "recycling+art": "🎨 Eco Creativity",
    "zero waste+challenge": "🌱 Sustainable Goal",
    "biodiversity+education": "🌿 Nature Awareness",
    "renewable+energy": "☀️ Clean Power",
    "conservation+wildlife": "🐘 Species Protection",
    "urban+gardening": "🌻 City Green Space",

    // Global and Cultural Phenomena
    "language+meme": "🌐 Global Humor",
    "translation+fail": "🗣️ Lost in Translation",
    "cultural+exchange": "🌈 Global Connection",
    "tradition+modern": "🌍 Cultural Fusion",
    "folklore+reboot": "📖 Mythical Update",
    "diaspora+identity": "🌎 Cultural Roots",
    "indigenous+wisdom": "🏹 Traditional Knowledge",
    "multilingual+joke": "🗣️ Polyglot Humor",
    "cultural+festival": "🎉 Global Celebration",
    "heritage+preservation": "🏛️ Cultural Legacy",

    // Science and Exploration
    "space+meme": "🚀 Cosmic Humor",
    "quantum+physics": "🔬 Mind-Bending Science",
    "mars+rover": "🛰️ Red Planet Exploration",
    "climate+research": "🌡️ Scientific Insight",
    "dna+technology": "🧬 Genetic Frontier",
    "astronomy+discovery": "🌌 Cosmic Wonder",
    "robotics+ai": "🤖 Technological Synergy",
    "neuroscience+mind": "🧠 Cognitive Frontier",
    "deep sea+exploration": "🌊 Ocean Mystery",
    "particle+physics": "⚛️ Atomic Insight",

    // Health and Wellness
    "meditation+app": "🧘 Digital Mindfulness",
    "fitness+challenge": "💪 Workout Motivation",
    "mental health+awareness": "💭 Emotional Support",
    "nutrition+science": "🥗 Dietary Insight",
    "sleep+technology": "😴 Rest Innovation",
    "therapy+online": "🗨️ Digital Counseling",
    "workout+motivation": "🏋️ Fitness Journey",
    "holistic+wellness": "🌈 Balanced Living",
    "stress+management": "🧘 Calm Technique",
    "self-care+routine": "💆 Personal Nurturing",

    // Educational and Learning
    "online+course": "📚 Digital Learning",
    "coding+kid": "💻 Tech Education",
    "language+app": "🌐 Global Communication",
    "stem+education": "🔬 Future Innovation",
    "podcast+learning": "🎧 Audio Knowledge",
    "documentary+insight": "🎥 Deep Dive",
    "science+communication": "🌍 Knowledge Sharing",
    "research+breakthrough": "🔍 Academic Discovery",
    "interdisciplinary+study": "🌈 Holistic Learning",
    "educational+technology": "💡 Smart Learning",

    // Creative Arts and Expression
    "digital+art": "🎨 Pixel Creativity",
    "street art+photography": "📸 Urban Canvas",
    "poetry+technology": "📝 Digital Verse",
    "music+algorithm": "🎵 Generative Sound",
    "performance+livestream": "🎭 Virtual Stage",
    "animation+storytelling": "🌈 Animated Narrative",
    "interactive+art": "🖌️ Participatory Creation",
    "virtual+reality+art": "🕶️ Immersive Experience",
    "collaborative+project": "🤝 Creative Synergy",
    "experimental+media": "🎬 Boundary-Pushing Art",

    // New combos with emojis
    "fire+ice": "Steam Explosion 💥",
    "light+fire": "Solar Flare ☀️🔥",
    "darkness+water": "Shadow Wave 🌊🌑",
    "earth+fire": "Volcano Eruption 🌋🔥",
    "electricity+metal": "Conductive Shock ⚡️🔩",
    "wind+fire": "Wildfire 🌪️🔥",
    "metal+earth": "Iron Mountain ⛰️🔩",
    "lightning+water": "Electrified Wave 🌊⚡",
    "time+wind": "Time Warp ⏳🌬️",
    "magic+chaos": "Chaos Magic 🎩✨",

    // More cultural combos
    "music+dance": "Groove Beat 🎶💃",
    "art+history": "Cultural Masterpiece 🎨📜",
    "travel+photography": "Wanderlust Capture 🌍📸",
    "book+movie": "Adaptation Twist 📖🎬",
    "food+history": "Culinary Legacy 🍽️🕰️",
    "language+culture": "Linguistic Fusion 🌐🌈",
    "science+art": "Scientific Creativity 🔬🎨",
    "tech+art": "Digital Creativity 💻🎭",
    "nature+science": "Natural Wonders 🌳🔍",
    "community+art": "Collaborative Creation 🤝🎨"
};

// Function to save combos to localStorage
function saveCombos() {
    localStorage.setItem("combos", JSON.stringify(combos));
    alert("Combos saved successfully!");
}

// Function to load combos from localStorage
function loadCombos() {
    const storedCombos = localStorage.getItem("combos");
    if (storedCombos) {
        Object.assign(combos, JSON.parse(storedCombos));
        updateComboList();
    }
}

// Function to update the displayed combo list
function updateComboList() {
    const comboList = document.getElementById("combo-list");
    comboList.innerHTML = '';
    for (const key in combos) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${combos[key]}`;
        li.draggable = true;
        li.ondragstart = (event) => event.dataTransfer.setData("text/plain", key);
        comboList.appendChild(li);
    }
}

// Function to create a new combo
function createCombo() {
    const key = prompt("Enter combo (e.g. fire+water):");
    const value = prompt("Enter description:");
    
    if (key && value && !(key in combos)) {
        combos[key] = value;
        updateComboList();
        saveCombos();
        alert("Combo added!");
    } else if (key in combos) {
        alert("Combo already exists!");
    }
}

// Function to delete selected combo
function deleteCombo() {
    const comboList = document.getElementById("combo-list");
    const selectedCombo = comboList.querySelector("li.selected");
    if (selectedCombo) {
        const comboKey = selectedCombo.textContent.split(":")[0];
        delete combos[comboKey];
        updateComboList();
        saveCombos();
        alert("Combo deleted!");
    } else {
        alert("Select a combo to delete.");
    }
}

// Function to handle drag and drop
function onDrop(event) {
    event.preventDefault();
    const comboKey = event.dataTransfer.getData("text/plain");
    if (comboKey in combos) {
        const droppedCombo = combos[comboKey];
        alert(`You dropped: ${comboKey} - ${droppedCombo}`);
    }
}

// Set up event listeners
document.getElementById("create-button").onclick = createCombo;
document.getElementById("delete-button").onclick = deleteCombo;
document.getElementById("combo-list").ondrop = onDrop;
document.getElementById("combo-list").ondragover = (event) => event.preventDefault();

// Load existing combos on startup
loadCombos();
