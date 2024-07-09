const myText = document.querySelector("#text");

const myText = document.querySelector("p");
console.log(myText);

const myText = document.querySelector(".info");
console.log(myText);

const listOfParagraphs = document.querySelectorAll(".info");

// console.dir(listOfParagraphs[2].textContent);

for (let i = 0; i < listOfParagraphs.length; i++) {
  listOfParagraphs[i].textContent = "hello";
  console.log(listOfParagraphs[i]);
}
//////////////////////////////////////////////////////////////////////////////////////
const user = {
  username: "Alice",
};
user.username = "Mike";

console.log(user);
////////////////////////////////////////////////////////////////////////////////////////
const heading = document.querySelector(".heading");
heading.textContent = "Hello word";
console.log(heading);

const usernameInput = document.querySelector(".username");

console.log(usernameInput.value);

////////////////////////////////////////////////////////////////////////////////////////////
const myText = document.querySelector(".info");

myText.setAttribute("id", "text");

console.log(myText);
////////////////////////////////////////////////////////
const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdziZ25YPqQwmvDZmiA3hqDuboA1rAKBJxiSYzZdlIbfDWceX-FV61gHORVKV-2gyzfk&usqp=CAU";

const htmlImage = document.querySelector(".myImage");

if (1 === 1) {
  htmlImage.setAttribute("src", url);
  htmlImage.setAttribute("alt", "hello image");
} else {
  console.log("end");
}
console.log(htmlImage);
//////////////////////////////////////////////////////////////

const body = document.querySelector("body");

const myInfo = document.createElement("p");
myInfo.textContent = "This is first par!";
myInfo.setAttribute("id", "text");

const myContent = document.createElement("h1");
myContent.textContent = "I am cool";
myContent.setAttribute("id", "text1");

// console.log(myContent);

body.append(myContent);
body.append(myInfo);

const bodyContainer = document.querySelector("body");

const content = document.createElement("div");

const myBtn = document.createElement("button");

myBtn.textContent = "Click me";

content.append(myBtn);

bodyContainer.append(content);

const bodyContainer = document.querySelector("body");
const container = document.createElement("div");
const myBtn = document.createElement("button");
myBtn.textContent = "Click me";
container.append(myBtn);
bodyContainer.append(container);
