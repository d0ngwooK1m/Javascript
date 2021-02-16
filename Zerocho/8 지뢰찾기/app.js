const tbody = document.querySelector("#table tbody"); //스코프 때문에 그렇다고 한다. 자세한 설명 추가 필요
const dataSet = []; //스코프
document.querySelector("#exec").addEventListener("click", function () {
  const horizontal = parseInt(document.querySelector("#hor").value);
  const vertical = parseInt(document.querySelector("#ver").value);
  const mine = parseInt(document.querySelector("#mine").value);
  console.log(horizontal, vertical, mine);
  //querySelector의 가로 세로 지뢰값을 구하면 그 값을 parseInt로 문자열에서 숫자로 바꾸고, 실행 버튼을 눌렀을 때 console.log에서 확인할 수 있게 한다.

  const balls = Array(horizontal * vertical)
    .fill()
    .map(function (element, index) {
      return index;
    }); // 이 부분은 for문 없이 꽉 찬 array를 만들고 싶을 때 유용하게 쓰인다. Array fill map의 조합

  const shuffle = [];
  while (balls.length > horizontal * vertical - mine) {
    const pick = balls.splice(Math.floor(Math.random() * balls.length), 1)[0];
    shuffle.push(pick);
  } //로또 추첨기 활용 지뢰 위치 랜덤 선정 (피셔 예이츠 셔플)
  console.log(shuffle);

  for (i = 0; i < vertical; i += 1) {
    const arr = [];
    dataSet.push(arr);
    const tr = document.createElement("tr");
    for (j = 0; j < horizontal; j += 1) {
      arr.push(1);
      const td = document.createElement("td");
      td.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        const trParents = e.currentTarget.parentNode;
        const tbodyParents = e.currentTarget.parentNode.parentNode;
        const verNum = Array.prototype.indexOf.call(
          trParents.children,
          e.currentTarget
        );
        const horNum = Array.prototype.indexOf.call(
          tbodyParents.children,
          trParents
        ); //Array.prototype 부분은 나중에 설명 배열이 아닌 것들에게 indexOf를 쓸 수 있게 만들어 준다.
        console.log(trParents, tbodyParents, e.currentTarget, verNum, horNum);
        e.currentTarget.textContent = "!";
        dataSet[horNum][verNum] = "!";
      }); //오른쪽 클릭: contextmenu 깃발, 물음표 기능 추가
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  } //반복문이 2번 들어가면서 지뢰찾기 판을 만드는 부분 html구조상 테이블을 만들려면 tr(세로) 다음 td(가로)가 들어가는 구조라 다음처럼 반복문 작성.
  // 2중 반복문 작성 시 원소(i, j)는 다르게 지정 할 것!

  for (k = 0; k < shuffle.length; k += 1) {
    //59
    const verticalWhere = Math.floor(shuffle[k] / 10); //59 나누기 10 버림 답5
    const horizontalWhere = shuffle[k] % 10; //%는 몫으로 나눈 나머지 빼기1 답 8
    console.log(verticalWhere, horizontalWhere);
    tbody.children[verticalWhere].children[horizontalWhere].textContent = "X";
    dataSet[verticalWhere][horizontalWhere] = "X";
  }

  //   console.log(dataSet);
});

tbody.querySelectorAll("td").forEach(function (td) {});
