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
