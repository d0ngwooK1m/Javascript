let whereImage = 0;

const rsp = {
  rock: 0,
  scissor: "-250px",
  paper: "-500px",
};
//적절한 변수명과 딕셔너리(객체) 자료구조를 이용하여 사람이 좀 더 이해하기 쉽도록 작성했다.

console.log(Object.entries(rsp));
//Object.entries(객체)로 객체를 배열로 바꿀 수 있다.

function computerChoice(whereImage) {
  return Object.entries(rsp).find(function (x) {
    return x[1] === whereImage;
    //배열.find는 반복문이지만 원하는 것을 찾으면(return이 true라면) 멈춘다.
    //1차원 배열 찾기 -> indexOf 2차원 배열 찾기 -> find 나 findIndex 사용
  })[0];
}

let interval;
function intervalMaker() {
  interval = setInterval(function () {
    if (whereImage === rsp.rock) {
      whereImage = rsp.scissor;
    } else if (whereImage === rsp.scissor) {
      whereImage = rsp.paper;
    } else {
      whereImage = rsp.rock;
    }
    document.querySelector(
      "#computer"
    ).style.background = `url(https://thumb.ac-illust.com/02/028c32e022c0165725eaa79cbeb23e05_w.jpeg) ${whereImage} 0`;
  }, 100);
}

intervalMaker();

const score = {
  rock: -1,
  scissor: 0,
  paper: 1,
};

document.querySelectorAll(".btn").forEach(function (btn) {
  //다른 메소드는 for을 이용해서 반복하는 방법도 있는 모양이다.
  //여기서는 querySelectorAll에 forEach(함수)를 넣어서 버튼 마다 함수를 적용
  btn.addEventListener("click", function () {
    clearInterval(interval);
    setTimeout(function () {
      intervalMaker();
    }, 1000);
    const myChoice = this.textContent;
    if (score[myChoice] - score[computerChoice(whereImage)] === 0) {
      console.log("Draw😕");
    } else if (
      score[myChoice] - score[computerChoice(whereImage)] === 1 ||
      score[myChoice] - score[computerChoice(whereImage)] === 2
    ) {
      console.log("You Win😎");
    } else {
      console.log("You Lose😭");
    }
    //자료구조를 통해서 코드를 이렇게 많이 줄일 수 있다!!!
    console.log(myChoice, computerChoice(whereImage));
    //이벤트 핸들러 안에서 쓴 this는 HTML 요소를 가리킨다. btn의 텍스트 콘텐트를 표시하라는 뜻
  });
});
