let height = 180;
let weight = 80;
let convertHeight = 180 / 10;

let result = (80 / convertHeight ** 2) * 100;

// console.log(result.toFixed(2));
console.log(Math.pow(2, 4)); //앞의 숫자를 뒤의 숫자로 제곱함
if (18.5 > result) {
  console.log("저체중");
} else if (result >= 18.5 && result < 22.9) {
  console.log("정상");
} else if (result >= 22.9 && result < 35) {
  console.log("과체중");
} else {
  console.log("비만");
}
// if (18.5 > result) {
//   console.log("저체중");
// } else if (18.5 <= result < 22.9) {
//   console.log("정상");
// } else if (22.9 <= result < 35) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }
