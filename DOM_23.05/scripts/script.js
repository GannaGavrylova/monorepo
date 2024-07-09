// const text = document.querySelector("p");
// const userNameiInput = document.querySelector(".username");
// const body = document.querySelector("body");
// userNameiInput.addEventListener("input", () => {
//   const pValue = document.createElement("p");
//   pValue.textContent = userNameiInput.value;
//   body.append(pValue);
// });

// text.addEventListener("click", () => {
//   text.innerHTML = "feed cat";
// });

////////////////////////////////////
// const userNameiInput = document.querySelector(".username");
// const addBtn = document.querySelector("button");
// const body = document.querySelector("body");
// addBtn.addEventListener("click", () => {
//   const newText = document.createElement("p");
//   newText.textContent = userNameiInput.value;
//   body.append(newText);
//   userNameiInput.value = ""; //очищение инпута после ввода теста
// });

// const addBtn = document.querySelector("button");

// addBtn.addEventListener("mouseover", () => {});

// addBtn.style.color = "red";
// addBtn.style.width = "210px";
// // addBtn.style.background = "teal";

// addBtn.addEventListener("click", () => {
//   addBtn.setAttribute("class", "red");
//   console.log(addBtn);
// });

// addBtn.addEventListener("dblclick", () => {
//   addBtn.setAttribute("class", "blue");
//   console.log(addBtn);
// });

///////////////////////////////////////////// стилизация кнопки
// const addBtn = document.querySelector("button");
// addBtn.addEventListener("click", () => {
//   addBtn.setAttribute("class", "red");
// });
// addBtn.addEventListener("dblclick", () => {
//   addBtn.setAttribute("class", "green");
// });

/////////////////////////////////////////////

// const text = document.querySelector(".info");

// // console.log(text.classList.value);

// text.classList.add("document");
// text.classList.add("render");
//                                     метод add
// ///////////////////////////////////////

// const text = document.querySelector(".info");

// text.classList.remove("info");

// console.log(text.classList); //удаление класса

//////////////////////////////////////

// const text = document.querySelector(".highlight");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

// function removeClassHighLight() {
//   text.classList.remove("highlight");
// }

// btn1.addEventListener("click", removeClassHighLight);
// btn2.addEventListener("click", removeClassHighLight);
// btn3.addEventListener("click", removeClassHighLight);
//                         удаление класса при нажатии на одну из кнопок
// ////////////////////////////////////////////////////////

// btn1.addEventListener("click", () => {
//   text.classList.remove("highlight");
// });

// btn2.addEventListener("click", () => {
//   text.classList.remove("highlight");
// });
// btn3.addEventListener("click", () => {
//   text.classList.remove("highlight");
// });

// text.classList.remove("highlight");

// ////////////////////////////////////////////// replace()

// const myText = document.querySelector(".info");

// // myText.classList.replace("docs", "render");

// myText.classList.replace("info", "move");

// const text = document.querySelector(".info");
// const toggleClassBtn = document.querySelector(".toggle");

// toggleClassBtn.addEventListener("click", () => {
//   text.classList.toggle("highlight");
// });

// const addBtn = document.querySelector("button");
// addBtn.addEventListener("click", () => {
//   addBtn.setAttribute("class", "red");
// });
// addBtn.addEventListener("dblclick", () => {
//   addBtn.setAttribute("class", "green");
// });
// const myList = document.querySelector(".element");
// const btnPuch = document.querySelector(".myBtn");

// let i = 0;

// btnPuch.addEventListener("click", () => {
//   const liElement = document.createElement("li");
//   liElement.textContent = "Element" + i;
//   myList.append(liElement);

//   i++;
// });

// const text = document.querySelector(".caption");
// const btnPuch = document.querySelector(".myBtn");

// let count = 1;

// btnPuch.addEventListener("click", () => {
//   text.textContent = "New Text" + count;

//   count++;
// });

const list = document.querySelector("ul");
const removeBtn = document.querySelector("button");

removeBtn.addEventListener("click", () => {
  list.lastElementChild.remove();
});
