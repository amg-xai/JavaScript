    let user = "rock";
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[Math.floor(Math.random() * 3)];
    console.log("You chose: " + user);
    console.log("Computer chose: " + computer);

    if(user === computer) {
        console.log("it's a tie");
    }else if(user === "rock" && computer === "scissors") {
        console.log("You win!");
    }else if (user === "paper" && computer === "rock"){
        console.log("You win!");
    }else if ( user === "scissors" && computer === "paper"){
        console.log("You win!");
    }else{
        console.log("Computer wins!");
    }