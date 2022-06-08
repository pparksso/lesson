//함수

//함수선언문(function declation); 호이스트
function hello(name) {
  //parameter
  console.log(`${name} hello`);
}
hello("sohee"); //argument

//함수 표현식 (function expression) 익명함수, 호이스트X
const helloExpression = function (name) {
  console.log(`${name} hello`);
};
helloExpression("sohee");

//만약 함수를 값으로 인식 시키려면 return을 사용한다.
//리턴 밑은 실행되지않는다!!
// js의 모든 함수는 값으로 귀결되고, 리턴을 가지고 있다.(return undefined가 생략되어있어, 명시적으로 return이 사용되지 않았으면 undefined를 반환한다.)
const sum = function (a, b) {
  return a + b;
};

const avg = function (a, b, c) {
  return (a + b + c) / 3;
};

console.log(avg(5, 5, 5));

const result = sum(2, 4);
console.log(result);

const noReturn = function () {
  console.log("나는 리턴이 없는 함수입니다.");
};
console.log(noReturn());
//즉시실행함수 iife Immediately invoked function expression
const iife = (function () {
  return "나는 문자를 반환하는 함수표현식입니다.";
})();
// console.log(iife());
const myTemp = iife;
console.log(myTemp);

const return100 = function () {
  return 100;
};
function myCallBack(callBack) {
  // callBack();
  console.log(`나는 숫자 ${callBack()}을 출력합니다.`);
}
myCallBack(return100);
//콜백함수는 함수의 매개변수(파라미터)로 전달되어져 실행되는 함수(매개변수로 전달되서 실행되기때문에 따로 ()를 붙여 실행시키면 안됨)

const callBack02 = function () {
  console.log("callBack02");
};
// setInterval(callBack02, 1000);
