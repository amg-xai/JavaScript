function memoize(fn) {
    let cache = {};
    return function(num) {
        if(num in cache) {
            console.log("Fetching from cache...");
            return cache[num];
        }

        console.log("calculating result...");
        let result = fn(num);
        cache[num] = result;
        return result;
    };
}

function square(n){
    return n * n;
}

let memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(6));
console.log(memoizedSquare(6));