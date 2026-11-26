const promise1 = promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

promise.all([promise1, promise2, promise2]).then((values) => {
    console.log(values);
})


const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
setTimeout(reject, 100, "foo"));

const promises = [promise1, promise2];

promise.allSettled(promises).then((results) => results.forEach((result) =>
console.log(result.status)),);


const promise1 = Promise.resolve(new Error("error"))
const promise2 = new Promise((resolve) =>
setTimeout(resolve, 100, "quick" ));
const promise3 = new Promise((resolve) =>
setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

promise.any(promises).then((value) =>
console.log(value));