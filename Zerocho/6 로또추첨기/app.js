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
    return p - c;
  }),
  "보너스",
  bonus
);
