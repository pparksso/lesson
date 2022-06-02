// 반복문
// while, for
// let i = 0;
// while (i < 101) {
//   console.log(i);
//   i++;
// }
// console.log("반복문이 끝났습니다.");

// let i = 0;
// while (i > 100) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// console.log("반복문이 끝났습니다.");

//for
for (i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i > 30) {
    break;
  }
  console.log(i);
}
console.log("반복문이 끝났습니다.");

const randomColor = Math.floor(Math.random() * 256 * 256 * 256);
console.log(randomColor);

const randomColor2 = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
