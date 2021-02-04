//make gugudan and html tag with js
let number1 = Math.floor(Math.random() * 10);
let number2 = Math.floor(Math.random() * 10);

const word = document.createElement("div");
document.body.append(word);
word.textContent = `${number1} times ${number2}?`;

const form = document.createElement("form");
document.body.append(form);

const input = document.createElement("input");
input.type = "number";
form.append(input);

const button = document.createElement("button");
form.append(button);
button.textContent = "Enter";

const result = document.createElement("div");
document.body.append(result);

form.addEventListener("click", function (e) {
  //   e.preventDefault();

  let answer = number1 * number2;
  word.textContent = `${number1} times ${number2}?`;

  console.log(answer, input.value);
  if (answer === Number(input.value)) {
    result.textContent = "Correct!";
    // let number1 = Math.floor(Math.random() * 10);
    // let number2 = Math.floor(Math.random() * 10);
    input.value = "";
    input.focus();
  } else {
    result.textContent = "Wrong!";
    input.value = "";
    input.focus();
  }
});
