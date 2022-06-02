const beverage = "cola";

switch (beverage) {
  case "cola":
    console.log("2000원");
    break;
  case "cyder":
    console.log("1800원");
    break;
  case "coffee":
    console.log("2500원");
    break;
}
// case에는 같다라는 값만 쓸 수 있음 >= 이런 조건값은 사용할 수 없다. 상수만 쓸 수 있다. 조건은 ()에 사용해야함

console.log(Math.ceil(92.4)); //올림
console.log(Math.floor(92.4)); //내림
console.log(Math.round(92.4)); //반올림
console.log(parseInt(92.4)); //Math.floor와 같음
