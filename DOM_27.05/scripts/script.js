const myText = document.querySelector(".text");

myText.addEventListener("click", (event) => {
  console.log(event.target);
});

///////////////////////////////////////////
const logenForm = document.querySelector("form");

logenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("render");
}); // FORM

///////////////////////////////////////////////////

const form = document.querySelector("form");
const emailInput = document.querySelector(".email");
const statusMessage = document.querySelector(".statusMessage");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let found = null;
  for (let i = 0; i < emailInput.value.length; i++) {
    if (emailInput.value[i] === "@") {
      found = true;
    }
  }
  if (found === true) {
    statusMessage.textContent = "Valid email. Form send";
  } else {
    statusMessage.textContent =
      "Invalid email, pls add @ symbol. Form didn't send";
  }
});

//////////////////////////////////////
