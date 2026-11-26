let mole = Math.floor(Math.random() * 3) + 1;
let guess = 2;

console.log("Whack-a-Mole!");
console.log("Choose a hole: 1, 2, or 3");
console.log("Mole is in hole: " + mole);
console.log("You chose hole: " + guess);

if(guess === mole){
    console.log("Yay! you hit the mole!");
}else {
    console.log("Oops! The mole escaped!");
}