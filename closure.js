/*function outer () {
    let a = 5;
    function inner() {
        console.log(a);
    }

    inner();
}

outer();
*/
function manageCounter(){
    let counter = 0;
function increment(){
    counter++;
    console.log(counter);

}

function decrement(){
    counter++;
    console.log(counter);
}

return{increment: increment, decrement: decrement};

}
const a = manageCounter();
a.increment();