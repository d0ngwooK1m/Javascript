document.querySelector("#exec").addEventListener("click", function () {
  const horizontal = parseInt(document.querySelector("#hor").value);
  const vertical = parseInt(document.querySelector("#ver").value);
  const mine = parseInt(document.querySelector("#mine").value);
  console.log(horizontal, vertical, mine);
  //querySelector의 가로 세로 지뢰값을 구하면 그 값을 parseInt로 문자열에서 숫자로 바꾸고, 실행 버튼을 눌렀을 때 console.log에서 확인할 수 있게 한다.

  const dataSet = [];
  const tbody = document.querySelector("#table tbody");
  for (i = 0; i < vertical; i += 1) {
    const arr = [];
    dataSet.push(arr);
    const tr = document.createElement("tr");
    for (j = 0; j < horizontal; j += 1) {
      arr.push(1);
      const td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = 1;
    }
    tbody.appendChild(tr);
  } //반복문이 2번 들어가면서 지뢰찾기 판을 만드는 부분 html구조상 테이블을 만들려면 tr(세로) 다음 td(가로)가 들어가는 구조라 다음처럼 반복문 작성.
  // 2중 반복문 작성 시 원소(i, j)는 다르게 지정 할 것!
  console.log(dataSet);
});
