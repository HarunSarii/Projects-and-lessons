// function foo1(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     // alert(array[i]);
//     console.log(array[i]);
//   }
//   return sum;
// }
// //
// function foo2(array, callback) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     callback(array[i]);
//     // alert(array[i]);
//     //   console.log(array[i]);
//   }
//   return sum;
// }

// // foo2([2, 4, 6, 8], alert);
// foo2([2, 4, 6, 8], (x) => console.log(x));

// const payments = [100, 300, -500, 400, -100, 600];

// for ([i, item] of payments.entries()) {
//   item > 0
//     ? console.log(i, `You received ${item} USD`)
//     : console.log(i, `You paid ${Math.abs(item)} USD`);
// }

// payments.forEach(function (item, i, arr) {
//   item > 0
//     ? console.log(i, `You received ${item} USD`)
//     : console.log(i, `You paid ${Math.abs(item)} USD`);
// });

// const array1 = [1, 4, 9, 16];

// const double = array1.map((item) => item * 2);
// console.log(double);

// const people = [
//   { firstName: "Barry", lastName: "mitcell" },
//   { firstName: "Tins", lastName: "smith" },
// ];

// const words = ["sprayyyyy", "go", "limit", "caucasion", "elitePlus"];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

// reduce ()

const arr1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(arr1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(arr1.reduce(reducer, 5));

let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let unique = myArray.reduce(function (acc, item) {
  if (acc.indexOf(item) === -1) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(unique);
