let word = "제로초";

while (true) {
  let answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    alert("Correct!😎");
    word = answer;
  } else {
    alert("Wrong!😫");
  }
}
