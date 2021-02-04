//make html tag with js

const body = document.body;
let word = document.createElement("div");
word.textContent = "제로초";
document.body.append(word);

let input = document.createElement("input");
document.body.append(input);

let button = document.createElement("button");
button.textContent = "입력!";
document.body.append(button);

let result = document.createElement("div");
document.body.append(result);

// let startWord = "제로초";

// while (true) {
//   let answer = prompt(word);
//   if (word[word.length - 1] === answer[0]) {
//     alert("Correct!😎");
//     word = answer;
//   } else {
//     alert("Wrong!😫");
//   }
// }
