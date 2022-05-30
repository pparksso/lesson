console.log(typeof 454545);
console.log(typeof null);
console.log(0b10); //2진수 앞에서 0b bite
console.log(0o10); //8진수 앞에서 0o oo
console.log(0x10); //16진수 앞에서 0x
console.log(10); //10진수

let num = new Number(10);
console.log(num.toString(2)); //2진수로 변환
console.log(num.toString(8)); //8진수로 변환
console.log(num.toString(16)); //16진수로 변환
console.log(num.toString());

//정수(-,+,0)-integer ,  float-실수

console.log(parseInt("182") - 10);
console.log(Number("182") - 10);

console.log(parseFloat("182.9") - 10);
console.log(parseInt("호호호"));

console.log(typeof NaN);
