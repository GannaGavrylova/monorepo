// const arr = [1, 2, 3];

// const result = arr.pop();

// console.log(result);
// console.log(arr);

// const numbers = [9, 12, 5, 18, 7, 24];

// const filterResult = numbers.filter((elem, ind, arr) => {
//   return elem % 3 === 0;
// });
// console.log(filterResult);

// const numbers = [-2, -5, -8, 2, 4, -6];
// const filterPositiveNumbers = numbers.filter((number) => {
//   return number > 0;
// });
// console.log(filterPositiveNumbers);

// const letters = ["ac", "ab", "d", "t"];

// letters.sort();
// console.log(letters);

// const colors = ["red", "green", "blue"];

// const newColors = colors.shift();

// console.log(colors);

// const fruits = ["banana", "orang"];

// fruits.unshift("appel", "grape");

// console.log(fruits);

// const numbers = [4, 5, 2, 1, 3, 2, 0];
// const result = numbers.reduce(() => {} 0);

// const numbers = [4, -5, 2, -1];
// const newArray = numbers.reduce();

// const arr = [4, 5, 2, 1];

// let num1 = arr.push(3); // [4, 5, 2, 1, 3]
// arr.pop();              // [4, 5, 2, 1]

// let num2 = arr.pop();   // [4, 5, 2]
// num2++; // 2

// arr.unshift(num2); // [2, 4, 5, 2]

// console.log(arr);
///////////////Praktik 1///////////////////
// const stack = [];

// stack.push(1, 2, 3);
// stack.pop();

// console.log(stack);

///////////////Praktik 2///////////////////

// const numbers = [4, 5, 2, 1, 3, 2, 0];
// function doubleEvenNumbers(list) {
//   const newNumbers = list.reduce((acc, elem) => {
//     if (elem % 2 === 0) {
//       acc.push(elem * 2);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, []);
//   return newNumbers;
// }

// const result = doubleEvenNumbers(numbers);
// console.log(result);

///////////////Praktik 5///////////////////
// const numbers = [3, 1, 4, 2];

// function addAndSort(list) {
//   list.unshift(5);

//   return list.sort((a, b) => a - b);
// }
// const result = addAndSort(numbers);
// console.log(result);
///////////////Praktik 3///////////////////

const phrases = ["Hello", "How are you", "Goodbye"];

function addExclamation(list) {
  list.forEach((elem) => {
    console.log(elem + "!");
  });
}
const result = addExclamation(phrases);
console.log(result);
