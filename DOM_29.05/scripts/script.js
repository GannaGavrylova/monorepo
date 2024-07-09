////////////////FOREACH() /////////////////////
// const numbers = [4, 2, 4, 5, 3, 7, 0];

// numbers.forEach((elem, ind, arr) => {
//   console.log(elem, ind, arr);
// });

// const numbers = [4, 2, 4, 5, 3, 7, 0];

// numbers.forEach((elem, ind, arr) => {
//   if (elem % 2 === 0) {
//     console.log(elem);
//   }
// });

// const numbers = [4, 2, 4, 5, 3, 7, 0];

// let sum = 0;

// numbers.forEach((elem) => {
//   sum = sum + elem;
// });
// console.log(sum);
// ////////////////////////////////////////////
// const numbers = [4, 2, 4, 5, 3, 7, 0];

// let sum = 0;

// numbers.forEach((_, ind) => {
//   sum = sum + ind;
// });
// console.log(sum);

////////////////////////MAP()///////////////

// const numbers = [4, 2, 4, 5, 3, 7, 0];

// const newArray = numbers.map((el, ind) => {
//   return el * 2;
//   //   return "hello";
// });
// console.log(newArray);

// const numbers = [4, 2, 4, 5, 3, 7, 0];
// //////////////////////////////////
// const newArray = numbers.map((el, ind) => {
//   if (el > 0) {
//     return "posititve";
//   } else {
//     return "negatove";
//   }
// });
// console.log(newArray);

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 15 },
// ];

const newPeople = people.map((el, ind) => {
  if (el.age > 18) {
    return { ...el, status: "adult" };
  } else {
    return { ...el, status: "child" };
  }
});
console.log(newPeople);

const movies = [
  { title: "Inception", rating: 4.9 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 4.8 },
  { title: " The Matrix", rating: 4.5 },
];

movies.forEach((el, ind) => {
  if (el.rating > 4.9) {
    console.log(el);
  }
});
