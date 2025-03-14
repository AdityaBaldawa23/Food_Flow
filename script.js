document.addEventListener("DOMContentLoaded", function () {
    startChatbot();
});

let userResponses = {};
let selectedCategory = "";
let selectedSubcategory = "";
let currentQuestionIndex = -1;

const subcategories = {
    "Perishable": ["Dairy Products", "Fruits & Vegetables", "Meat & Poultry", "Seafood", "Eggs"],
    "Semi-Perishable": ["Bakery Items", "Cooked Food", "Soft Cheeses"]
};

const categoryQuestions = {
    "Dairy Products": [
        //{ key: "expiry_date", text: "What is the expiry date mentioned on the package?", type: "text" },
        { key: "stored_below_5C", text: "Has it been stored below 5°C (41°F)?", type: "yesno" },
        { key: "discoloration", text: "Any discoloration or mold?", type: "yesno" },
        { key: "curdling", text: "Is there any separation or curdling in milk-based products?", type: "yesno" },
        { key: "slimy", text: "Is the texture clumpy, slimy, or excessively thick", type: "yesno" },
        { key: "smell_test", text: "Does it smell sour or off?", type: "yesno" }
    ],
    "Fruits & Vegetables": [
        { key: "visible_mold", text: "Do you see any mold or unusual spots?", type: "yesno" },
        { key: "texture_soft", text: "Is the texture too soft, mushy, or slimy?", type: "yesno" },
        { key: "wrinkles", text: "Are there any wrinkles or excessive dryness?", type: "yesno" },
        { key: "packing", text: "Is there excessive moisture or condensation inside the packaging?", type: "yesno" },
        { key: "bad_smell", text: "Does it have a sour or unpleasant smell?", type: "yesno" }
    ],
    "Meat & Poultry": [
        { key: "stored_below_5C", text: "Has the meat been stored below 5°C (41°F)?", type: "yesno" },
        { key: "color_change", text: "Has the color changed to gray or green?", type: "yesno" },
        { key: "slimy_texture", text: "Does it feel slimy or sticky?", type: "yesno" },
        { key: "bloated", text: "Is the packaging bloated, leaking, or damaged?", type: "yesno" },
        { key: "bad_smell", text: "Does it have a strong, unpleasant smell?", type: "yesno" }
    ],
    "Seafood": [
        { key: "stored_below_5C", text: "Has the seafood been stored below 5°C (41°F)?", type: "yesno" },
        { key: "fishy_smell", text: "Does it have a strong, ammonia-like fishy smell?", type: "yesno" },
        { key: "texture_change", text: "Is the texture slimy or mushy?", type: "yesno" },
        { key: "thawed", text: "For frozen seafood: Was it thawed and refrozen?", type: "yesno" },
        { key: "color_change", text: "Has the color changed (e.g., grayish, dull, or yellowish)?", type: "yesno" }
    ],
    "Eggs": [
        { key: "egg_floats", text: "Does the egg float in water? (Fresh eggs sink, bad ones float)", type: "yesno" },
        { key: "smell_test", text: "Does it smell sulfuric or rotten?", type: "yesno" },
        { key: "boiled", text: "If boiled, does the egg still smell bad after peeling?", type: "yesno" },
        { key: "discolor", text: "Are there unusual colors inside (green, pink, or black spots)?", type: "yesno" },
        { key: "shell_cracks", text: "Is the shell cracked or leaking?", type: "yesno" }
    ],
    "Bakery Items": [
        { key: "mold_presence", text: "Any mold or unusual spots?", type: "yesno" },
        { key: "texture_change", text: "Is the texture unusually hard or soggy?", type: "hardsoggy" },
        { key: "airtight", text: "Has it been stored in an airtight container or wrapped properly? ", type: "airwrap" },
        { key: "old", text: "How many days old is it?", type: "twofive" },
        { key: "smell_test", text: "Does it have a stale or odd smell?", type: "yesno" }
    ],
    "Cooked Food": [
        { key: "refrigerated", text: "Has it been stored in the refrigerator within 2 hours of cooking?", type: "yesno" },
        { key: "unusual_smell", text: "Does it smell unusual?", type: "yesno" },
        { key: "taste_check", text: "If tasted, does it seem off?", type: "yesno" },
        { key: "roomtemp", text: "Was the food left at room temperature for more than 4 hours??", type: "yesno" },
        { key: "dry_moist", text: "Are the vegetables stored in a dry or moist environment inside the sealed container?", type: "drymoist"}
    ],
    "Soft Cheeses": [
        { key: "mold_presence", text: "Any mold (except for intentionally moldy cheeses like blue cheese)?", type: "yesno" },
        { key: "smell_test", text: "Does it smell strongly sour or ammonia-like?", type: "yesno" },
        { key: "color", text: "Has the cheese changed color?", type: "yesno" },
        { key: "liquid", text: "Is there excess liquid or separation in the container?", type: "yesno" },
        { key: "texture_change", text: "Has it become excessively slimy?", type: "yesno" }
    ]
};

function startChatbot() {
    document.getElementById("chat-box").innerHTML = "";
    userResponses = {};
    selectedCategory = "";
    selectedSubcategory = "";
    currentQuestionIndex = -1;

    addBotMessage("Welcome to the Food Quality Checker! First, select the food category.");
    updateMenu(Object.keys(subcategories));
}

function handleUserInput(response) {
    addUserMessage(response);

    if (!selectedCategory) {
        selectedCategory = response;
        addBotMessage(`Great! Now select the specific food type under ${selectedCategory}.`);
        updateMenu(subcategories[selectedCategory]);
        return;
    }

    if (!selectedSubcategory) {
        selectedSubcategory = response;
        addBotMessage(`You selected ${selectedSubcategory}. Let's check its quality.`);
        currentQuestionIndex = 0;
        setTimeout(askNextQuestion, 1000);
        return;
    }

    let currentQuestion = categoryQuestions[selectedSubcategory][currentQuestionIndex];
    userResponses[currentQuestion.key] = response;

    currentQuestionIndex++;
    if (currentQuestionIndex < categoryQuestions[selectedSubcategory].length) {
        setTimeout(askNextQuestion, 800);
    } else {
        setTimeout(evaluateQuality, 1000);
    }
}

function askNextQuestion() {
    let question = categoryQuestions[selectedSubcategory][currentQuestionIndex];
    addBotMessage(question.text);

    if (question.type === "yesno") {
        updateMenu(["Yes", "No"]);
    } 
    else if(question.type === "hardsoggy") {
        updateMenu(["Hard", "Soggy", "No"]);
    } else if(question.type === "drymoist") {
        updateMenu(["Dry", "Moist"]);
    } else if(question.type === "airwrap") {
        updateMenu(["Air", "Wrap", "No"]);
    } else if(question.type === "twofive") {
        updateMenu(["Less than 5 days", "More than 5 days"]);
    } else {
        createTextInput();
    }
}

function evaluateQuality() {
    let spoilageIndicators = 0;

    Object.keys(userResponses).forEach(key => {
        if (userResponses[key] === "Yes") spoilageIndicators++;
    });

    let resultMessage = "";

    if (spoilageIndicators >= 2) {
        resultMessage = "Warning! The food is likely unsafe to consume.";
    } else if (spoilageIndicators === 1) {
        resultMessage = "Caution! The food has some questionable signs. Inspect further before consuming.";
    } else {
        resultMessage = "Good to go! The food appears safe to consume.";
    }

    addBotMessage(resultMessage);
    updateMenu(["Restart Quality Check"]);
}

function addUserMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let msgDiv = document.createElement("div");
    msgDiv.className = "chat-bubble user";
    msgDiv.innerText = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let msgDiv = document.createElement("div");
    msgDiv.className = "chat-bubble bot";
    msgDiv.innerText = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function updateMenu(options) {
    let inputArea = document.querySelector(".input-area");
    inputArea.innerHTML = "";

    options.forEach(option => {
        let button = document.createElement("button");
        button.className = "menu-btn";
        button.innerText = option;
        button.onclick = () => handleUserInput(option);
        inputArea.appendChild(button);
    });

    if (options.length === 1 && options[0] === "Restart Quality Check") {
        document.querySelector(".menu-btn").onclick = startChatbot;
    }
}