let computerChoice = 0;

const rsp = {
  rock: 0,
  scissor: "-250px",
  paper: "-500px",
};
//적절한 변수명과 딕셔너리 자료구조를 이용하여 사람이 좀 더 이해하기 쉽도록 작성했다.

const rspReverse = {
  0: rock,
  "-250px": scissor,
  "-500px": paper,
};

setInterval(function () {
  if (computerChoice === rsp.rock) {
    computerChoice = rsp.scissor;
  } else if (computerChoice === rsp.scissor) {
    computerChoice = rsp.paper;
  } else {
    computerChoice = rsp.rock;
  }
  document.querySelector(
    "#computer"
  ).style.background = `url(https://thumb.ac-illust.com/02/028c32e022c0165725eaa79cbeb23e05_w.jpeg) ${computerChoice} 0`;
}, 100);

document.querySelectorAll(".btn").forEach(function (btn) {
  //다른 메소드는 for을 이용해서 반복하는 방법도 있는 모양이다.
  //여기서는 querySelectorAll에 forEach(함수)를 넣어서 버튼 마다 함수를 적용
  btn.addEventListener("click", function () {
    const myChoice = this.textContent;
    console.log(myChoice, rspReverse[computerChoice]);
    //이벤트 핸들러 안에서 쓴 this는 HTML 요소를 가리킨다. btn의 텍스트 콘텐트를 표시하라는 뜻
  });
});
