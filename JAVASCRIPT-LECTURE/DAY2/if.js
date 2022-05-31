let score = "";
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//삼항연산자
const isTrue = true;
let msg = isTrue ? "참입니다." : "거짓입니다.";
console.log(msg);
