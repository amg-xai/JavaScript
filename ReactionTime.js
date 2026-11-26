/* The screen turns green after a randome 2-5 seconds delay. The players has to click as fast as possible. after the player clicks, the screen returns to normal and shows the reaction time in ms and a flag like "too early" or "To Late" or "Perfect Timing" */


let startTime;
let timeout;
let state = "ready";

function startGame() {
    clearTimeout(timeout);

    document.body.style.backgroundColor = "#eeeeee";
    document.getElementById("message").textContent = "Wait for green...";
    document.getElementById("result").textContent = "";

    state = "waiting";

    
    let delay = Math.floor(Math.random() * 3000) + 2000;

    timeout = setTimeout(function () {
        document.body.style.backgroundColor = "green";
        document.getElementById("message").textContent = "CLICK NOW!";

        startTime = Date.now();
        state = "green";
    }, delay);
}

function handleClick() {
    
    if (state === "ready" || state === "finished") {
        return;
    }

    
    if (state === "waiting") {
        clearTimeout(timeout);

        document.body.style.backgroundColor = "#eeeeee";
        document.getElementById("message").textContent = "Too Early!";
        document.getElementById("result").textContent =
            "Wait until the screen turns green!";

        state = "finished";
    }

   
    else if (state === "green") {
        let reactionTime = Date.now() - startTime;

        document.body.style.backgroundColor = "#eeeeee";

        if (reactionTime < 250) {
            document.getElementById("message").textContent =
                "Perfect Timing!";
        } else {
            document.getElementById("message").textContent =
                "Too Late!";
        }

        document.getElementById("result").textContent =
            "Your reaction time: " + reactionTime + " ms";

        state = "finished";
    }
}
