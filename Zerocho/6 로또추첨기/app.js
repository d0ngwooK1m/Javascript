// const array = Array(45);
// console.log(array);

// const fillArray = array.fill();
// console.log(fillArray);

// const mapArray = fillArray.map(function (element, index) {
//   return 1;
// });
// console.log(mapArray);

const parameter = function (element, index) {
  return index + 1;
};

const balls = Array(45).fill().map(parameter);
console.log(balls);

const shuffle = [];
while (balls.length > 0) {
  const pick = balls.splice(Math.floor(Math.random() * balls.length), 1)[0];
  shuffle.push(pick);
}
console.log(shuffle);

const pick = shuffle.slice(0, 6);
const bonus = shuffle[shuffle.length - 1];
console.log(
  "당첨숫자",
  pick.sort(function (p, c) {
    return p - c; // p - c 오름차순 c - p 내림차순
  }),
  "보너스",
  bonus
);

const resultBall = document.getElementsByClassName("result")[0];
//마지막에 반드시 [0]을 넣어주어야 한다. 왜? 클래스는 중복이 될 수 있기 때문!
//클래스가 하나 밖에 없더라도 무조건 써야함. 아니면 오류 발생

function coloringBalls(num, resultBall) {
  const ballPicked = document.createElement("div");
  ballPicked.textContent = num;
  ballPicked.style.display = "inline-block";
  ballPicked.style.border = "1px solid black";
  ballPicked.style.borderRadius = "50%";
  //border-radius는 -연산자가 있기 따문에 js에서는 camelCase로 표기
  ballPicked.style.width = "20px";
  ballPicked.style.height = "20px";
  ballPicked.style.textAlign = "center";
  ballPicked.style.marginRight = "10px";
  ballPicked.style.fontSize = "12px";

  let backgroundColor;
  if (num <= 10) {
    backgroundColor = "red";
  } else if (num <= 20) {
    backgroundColor = "orange";
  } else if (num <= 30) {
    backgroundColor = "yellow";
  } else if (num <= 40) {
    backgroundColor = "lightBlue";
  } else {
    backgroundColor = "green";
  }
  ballPicked.style.backgroundColor = backgroundColor;
  //js로 css 스타일링도 할 수 있다!
  resultBall.appendChild(ballPicked);
}

setTimeout(function () {
  //이 때 function은 비동기(순서대로 일어나지 않음)
  //콜백함수(어떠한 조건이 있을 때 실행되는 함수, 여기서는 1000ms 가 지날 때 마다 작동)
  coloringBalls(pick[0], resultBall);
}, 1000);
setTimeout(function () {
  coloringBalls(pick[1], resultBall);
}, 2000);
setTimeout(function () {
  coloringBalls(pick[2], resultBall);
}, 3000);
setTimeout(function () {
  coloringBalls(pick[3], resultBall);
}, 4000);
setTimeout(function () {
  coloringBalls(pick[4], resultBall);
}, 5000);
setTimeout(function () {
  coloringBalls(pick[5], resultBall);
}, 6000);

setTimeout(function () {
  const resultBonus = document.querySelector(".bonus");
  //querySelector로 아이디 또는 클래스를 지정할 수 있다. 위의 방법과 클래스 지정에서 어떤 차이가 있는지 비교해 볼 것.
  coloringBalls(bonus, resultBonus);
}, 7000);
