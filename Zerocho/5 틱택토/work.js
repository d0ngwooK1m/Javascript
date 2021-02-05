const body = document.body;

const table = document.createElement("table");

const lines = [];

const cells = [];

const result = document.createElement("div");

let turn = "X";

const AsynchFunc = function (e) {
  const whatLine = lines.indexOf(e.target.parentNode);
  console.log("whatLine", whatLine);
  const whatCell = cells[whatLine].indexOf(e.target);
  console.log("whatCell", whatCell);

  if (cells[whatLine][whatCell].textContent !== "") {
    //칸이 이미 채워져 있는가?
    console.log("빈칸이 아닙니다.");
  } else {
    console.log("빈칸입니다.");
    cells[whatLine][whatCell].textContent = turn;
    //세칸 다 채워졌는지 확인. 알고리즘을 배우게 되면 훨씬 효율적으로 코드를 짤 수 있다.
    let full = false;

    //가로줄 검사
    if (
      cells[whatLine][0].textContent === turn &&
      cells[whatLine][1].textContent === turn &&
      cells[whatLine][2].textContent === turn
    ) {
      full = true;
    }
    //세로줄 검사
    if (
      cells[0][whatCell].textContent === turn &&
      cells[1][whatCell].textContent === turn &&
      cells[2][whatCell].textContent === turn
    ) {
      full = true;
    }

    //대각선 검사
    if (whatLine - whatCell === 0) {
      //좌측 대각선 검사가 필요한 경우
      if (
        cells[0][0].textContent === turn &&
        cells[1][1].textContent === turn &&
        cells[2][2].textContent === turn
      ) {
        full = true;
      }
    }
    if (Math.abs(whatLine) + Math.abs(whatCell) === 2) {
      //우측 대각선 검사가 필요한 경우
      if (
        cells[0][2].textContent === turn &&
        cells[1][1].textContent === turn &&
        cells[2][0].textContent === turn
      ) {
        full = true;
      }
    }

    //다 찼으면
    if (full) {
      result.textContent = `${turn} 님의 승리!`;
      //초기화
      turn = "X";
      cells.forEach(function (line) {
        line.forEach(function (cell) {
          cell.textContent = "";
        });
      });
    } else {
      //다 안찼으면
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  }
};

for (i = 1; i <= 3; i += 1) {
  let line = document.createElement("tr");
  lines.push(line);
  cells.push([]);
  for (j = 1; j <= 3; j += 1) {
    let cell = document.createElement("td");
    cell.addEventListener("click", AsynchFunc);
    cells[i - 1].push(cell);
    line.appendChild(cell);
  }
  table.appendChild(line);
}
body.appendChild(table);
console.log("lines", lines, "cells", cells);
body.appendChild(result);
