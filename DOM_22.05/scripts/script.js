// const info = document.querySelector(".info");

// const body = document.querySelector("body");

// const newInfoElement = info.cloneNode();

// newInfoElement.textContent = "Cloned P Node";

// body.append(newInfoElement);

// const container = document.querySelector(".container");

// container.innerHTML = "<h1>Hello HTML</h1>";

////////////////////////remove///////////////////
// const textElement = document.querySelector(".text");

// console.log(textElement);

// textElement.remove();

///////////////////////////

// const clsckBtn = document.querySelector(".clsckBtn");
// function renderLog() {
//   console.log("clicked button");
// }

// clsckBtn.addEventListener("click", () => {
//   console.log("Clickked");
// });

////////////////////////////////////

const clickBtn = document.querySelector(".clickBtn");
const body = document.querySelector("body");
clickBtn.addEventListener("click", () => {
  const el = document.createElement("h3");
  el.textContent = "HELLO CLICKED BUTTON";
  body.append(el);
});
////////////////////////////////////////////////
const clickBtn = document.querySelector(".clickBtn");
const body = document.querySelector("body");
clickBtn.addEventListener("click", () => {
  console.log("clicked button");
});
clickBtn.addEventListener("mouseover", () => {
  console.log("mouseover button");
});

/////////////////////////////////////////
const clickBtn = document.querySelector(".clickBtn");
const body = document.querySelector("body");
clickBtn.addEventListener("click", (event) => {
  if (event.timeStamp > 6000) {
    console.log("show ads");
  }
});