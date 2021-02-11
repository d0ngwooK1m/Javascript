let left = 0;
setInterval(function () {
  if (left === 0) {
    left = "-250px";
  } else if (left === "-250px") {
    left = "-500px";
  } else {
    left = 0;
  }
  document.querySelector(
    "#computer"
  ).style.background = `url(https://thumb.ac-illust.com/02/028c32e022c0165725eaa79cbeb23e05_w.jpeg) ${left} 0`;
}, 100);

document.querySelectorAll(".btn").forEach(function (btn) {
  //다른 메소드는 for을 이용해서 반복하는 방법도 있는 모양이다.
  //여기서는 querySelectorAll에 forEach(함수)를 넣어서 버튼 마다 함수를 적용
  btn.addEventListener("click", function () {
    console.log(this.textContent, left);
    //이벤트 핸들러 안에서 쓴 this는 HTML 요소를 가리킨다. btn의 텍스트 콘텐트를 표시하라는 뜻
  });
});
