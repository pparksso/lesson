// true/false number string boolean
let isTrue = true; //0,1
if (isTrue == true) {
  console.log("isTrue는 참입니다.");
} else {
  console.log("isTrue는 거짓입니다.");
}
//비교연산자 ===같다(타입까지 확인해줌), !== 다르다
console.log(3 !== 4);

// 문자의 코드 값을 알 수 있음
console.log("a".charCodeAt());

// &&(and)둘 다 true여야 true. ||(OR) 하나라도 true면 true
console.log(5 > 3 && 4 > 3);
