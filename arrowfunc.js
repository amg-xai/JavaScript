let arr = [1,2,3,4,5];
console.log(arr);

let newArr = arr.map(n => n*n);
console.log(newArr);

let FilteredArr = arr.filter( n => n%2 == 0);
console.log(FilteredArr);

let foundArr = arr.find(n => n>3);
console.log(foundArr);