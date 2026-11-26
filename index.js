let n = 153;
let original = n;
let digits = n.toString().length;
let sum = 0;

while( n > 0) {
    let digit = n%10;
    sum += digit ** digits;
    n = Math.floor(n/10);
}
if(sum == original) {
    console.log('Armstrong Number');
}
else {
    console.log("Not an Armstrong Number");
}