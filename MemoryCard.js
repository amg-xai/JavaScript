
let icons = ["🍎", "🍌", "🍇", "🍒", "🍕", "🚀", "🐱", "⭐"];

let cards = [];
let firstCard = null;
let secondCard = null;
let score = 0;
let locked = false;

function startGame() {
    // Create matching pairs
    cards = [...icons, ...icons];

    // Shuffle the cards randomly
    cards.sort(() => Math.random() - 0.5);

    // Reset game values
    score = 0;
    firstCard = null;
    secondCard = null;
    locked = false;

    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent =
        "Find the matching pairs!";

    // Clear the old grid
    let game = document.getElementById("game");
    game.innerHTML = "";

    // Create 16 cards
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement("div");

        card.className = "card";
        card.textContent = "?";
        card.dataset.icon = cards[i];

        card.onclick = function () {
            revealCard(card);
        };

        game.appendChild(card);
    }
}

function revealCard(card) {
    // Ignore clicks while checking a pair
    if (locked) {
        return;
    }

    // Ignore already revealed or matched cards
    if (card.classList.contains("matched")) {
        return;
    }

    if (card.textContent !== "?") {
        return;
    }

    // Reveal the icon
    card.textContent = card.dataset.icon;

    if (firstCard === null) {
        firstCard = card;
    } else {
        secondCard = card;
        locked = true;

        // Check if the icons match
        if (firstCard.dataset.icon === secondCard.dataset.icon) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");

            score++;
            document.getElementById("score").textContent = score;

            firstCard = null;
            secondCard = null;
            locked = false;

            if (score === 8) {
                document.getElementById("message").textContent =
                    "🎉 Congratulations! You found all pairs!";
            } else {
                document.getElementById("message").textContent =
                    "It's a match!";
            }
        } else {
            document.getElementById("message").textContent =
                "Not a match! Try again.";

            // Hide both icons after a short delay
            setTimeout(function () {
                firstCard.textContent = "?";
                secondCard.textContent = "?";

                firstCard = null;
                secondCard = null;
                locked = false;
            }, 800);
        }
    }
}

// Start the game when the page loads
startGame();
