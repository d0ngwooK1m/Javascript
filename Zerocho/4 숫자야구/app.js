const body = document.body;

let numbers;
let numArr;

function pickNumber() {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numArr = [];
  for (i = 0; i < 4; i += 1) {
    let pick = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; // 마지막에 [0]을 붙이는 이유: 결과 배열이 4개 배열의 묶음으로 나오기 때문에 인자를 뽑아서 넣는 역할.
    numArr.push(pick);
  }
}

pickNumber();
console.log(numArr);

const result = document.createElement("h1");
body.append(result);

const form = document.createElement("form");
body.append(form);

const input = document.createElement("input");
input.type = "text";
input.maxLength = 4; //글자제한 텍스트에서만 적용된다.
form.append(input);

const button = document.createElement("button");
button.textContent = "스윙!";
form.append(button);

let wrong = 0;

form.addEventListener("submit", function asynchronousFunc(e) {
  e.preventDefault();
  let answer = input.value;
  //   console.log(answer, numArr, answer === numArr.join(""));
  if (Number(answer) === Number(numArr.join(""))) {
    //답이 맞으면
    result.textContent = "홈런!";
    input.value = "";
    wrong = 0;
    setTimeout(function () {
      location.reload();
    }, 5000);
    input.focus();
    pickNumber();
  } else {
    // 답이 틀리면
    let answerArr = answer.split("");
    let strike = 0;
    let ball = 0;
    wrong += 1;
    if (wrong > 10) {
      result.textContent = `10번 넘게 틀려서 실패!😭 답은 ${numArr.join(
        ""
      )}였습니다.`;
      input.value = "";
      input.focus();
      pickNumber();
      wrong = 0;
    } else {
      for (i = 0; i <= 3; i += 1) {
        if (Number(answerArr[i]) === Number(numArr[i])) {
          strike += 1;
        } else if (numArr.indexOf(Number(answerArr[i])) > -1) {
          ball += 1;
        }
      }
      result.textContent = `${strike}스트라이크 ${ball}볼입니다.`;
      input.value = "";
      input.focus();
    }
  }
});
