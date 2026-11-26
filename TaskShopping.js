let prices = [100, 200, 50, 150];
let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);
console.log(total);