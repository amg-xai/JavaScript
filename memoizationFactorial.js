function memoize(fn) {
    let cache = {};
    return function(n){
        if(n in cache){
            console.log("Fetching from cache...");
            return cache[n];
        }

        console.log("Calculating factorial...");
        let result = fn(n);
        cache[n] = result;
        return result;
    };
}

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n-1);
}

let memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(4));