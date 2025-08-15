// script.js
class Smoothie {
    constructor(size, ingredients, sweetness, extras) {
        this.size = size;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
        this.extras = extras;
        this.price = this.calculatePrice();
        this.name = this.generateName();
    }

    calculatePrice() {
        let basePrice = 0;
        if (this.size === "Small") basePrice = 4;
        if (this.size === "Medium") basePrice = 6;
        if (this.size === "Large") basePrice = 8;

        let ingredientCost = this.ingredients.length * 1.5;
        let extrasCost = this.extras.length * 1;

        return basePrice + ingredientCost + extrasCost;
    }

    generateName() {
        const adjectives = ["Tropical", "Berry", "Green", "Power", "Sunshine", "Velvet", "Frozen"];
        const nouns = ["Blast", "Twist", "Dream", "Energy", "Splash", "Delight", "Boost"];
        return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
    }

    getDescription() {
        return `
            <h2>${this.name}</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(", ") || "None"}</p>
            <p><strong>Sweetness Level:</strong> ${this.sweetness}/10</p>
            <p><strong>Extras:</strong> ${this.extras.join(", ") || "None"}</p>
            <p><strong>Price:</strong> $${this.price.toFixed(2)}</p>
        `;
    }
}

// Handle form submit
document.getElementById("smoothieForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const size = document.getElementById("size").value;
    const ingredients = Array.from(document.querySelectorAll("input[name='ingredients']:checked")).map(el => el.value);
    const sweetness = document.getElementById("sweetness").value;
    const extras = Array.from(document.querySelectorAll("input[name='extras']:checked")).map(el => el.value);

    const smoothie = new Smoothie(size, ingredients, sweetness, extras);

    document.getElementById("orderSummary").innerHTML = smoothie.getDescription();

    // Show smoothie image based on first ingredient
    const smoothieImage = document.getElementById("smoothieImage");
    if (ingredients.includes("Banana")) {
        smoothieImage.src = "images/banana-smoothie.jpg";
    } else if (ingredients.includes("Strawberry")) {
        smoothieImage.src = "images/strawberry-smoothie.jpg";
    } else if (ingredients.includes("Mango")) {
        smoothieImage.src = "images/mango-smoothie.jpg";
    } else if (ingredients.includes("Spinach")) {
        smoothieImage.src = "images/green-smoothie.jpg";
    } else {
        smoothieImage.src = "images/default-smoothie.jpg";
    }
    smoothieImage.style.display = "block";
});
