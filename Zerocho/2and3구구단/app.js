//make gugudan and html tag with js
let number1 = Math.ceil(Math.random() * 9);
let number2 = Math.ceil(Math.random() * 9);
let answer = number1 * number2;

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   number1 = Math.floor(Math.random() * 10); 여기에 먼저 넣으면 맞았을 때 새로운 문제를 내는게 아니라 무조건 새 문제를 낸다.
  //   number2 = Math.floor(Math.random() * 10);
  //   answer = number1 * number2;
  //   word.textContent = `${number1} times ${number2}?`;
  console.log(answer, input.value);
  if (answer === Number(input.value)) {
    result.textContent = "Correct!";
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    answer = number1 * number2;
    word.textContent = `${number1} times ${number2}?`;
    input.value = "";
    input.focus();
  } else {
    result.textContent = "Wrong!";
    input.value = "";
    input.focus();
  }
});
