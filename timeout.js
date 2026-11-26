let time = 15 * 60;
let interval =  setInterval(function() {
    let min = Math.floor(time/60);
    let sec = time % 60;

    console.log(min + ":" + String(sec).padStart(2, "0"));
    time--;

    if(time <0){
        clearInterval(interval);
        setTimeout(function() {
            console.log("time is up!");
        }, 100);
    }
}, 1000);
