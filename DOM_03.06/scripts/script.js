// const number = [1, 2, -3, 4, 5];

// const result = number.some((el, ind, arr) => {
//   return el < 0;
// });
// console.log(result);

// 1.Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
// let numbers = [1, 2, -3, 4, 5];
// 2.Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
let
strings = ["apple", "banana", "orange",
"watermelon"];

const strings = ["apple", "banana", "orange", "watermelon"];
const result = strings.some((item) => {
  return item.length > 10;
});
console.log(result);

////////////////////задача с some

let numbers = [1, 2, 3, 4, 5];

const result = numbers.every((elem, ind, arr) => {
  return elem > 0;
});
console.log(result);

let numbers = [2, 4, 6, 8, 10];

const result = numbers.every((elem, ind, arr) => {
  return elem % 2 === 0;
});

console.log(result);

// 1.Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
// let numbers = [1, 2, 3, 4, 5];
// 2.Проверьте, являются ли все элементы массива четными числами с помощью метода every().
// let numbers = [2, 4, 6, 8, 10];

////////////////////задача с every

// localStorage.setItem("name", "Anna");
// const myName = localStorage.getItem("name");
// console.log(myName);

// localStorage.clear();
// console.log(localStorage);

// const counter = document.querySelector(".counter");

// const plusOneBtn = document.querySelector(".plusOne");

// plusOneBtn.addEventListener("click", () => {
//   counter.textContent = Number(counter.textContent) + 1;
//   localStorage.setItem("counter", counter.textContent);
// });
// console.log(localStorage);

const counter = document.querySelector(".counter");

const plusOneBtn = document.querySelector(".plusOne");

const count = localStorage.getItem("count");
if (count) {
  counter.textContent = count;
}

plusOneBtn.addEventListener("click", () => {
  counter.textContent = Number(counter.textContent) + 1;
  localStorage.setItem("count", counter.textContent);
});
