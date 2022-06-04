const animals = []; //객체 리터널
const animalList = new Array(); //객체 생성
const fruits = ["apple", "banana", "berry", "pear", "grape", "tomato"];
const fruitsList = new Array("melon", "kiwi", "orange");

animals.push("lion");
animals.push("tiger");
animals.push("bear");

animalList[0] = "rabbit";
animalList[1] = "dear";
animalList[2] = "cow";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// for (let i = 0; i < 3; i++) {
//   console.log(fruits[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//원시 데이터 (primitive type) - 메모리상 자리를 차지함
const num = 10;
const str = "소희";
const isTrue = true;

//참조데이터 (reference type)
let arr = fruits;
arr.push("peach");
// console.log("🚀 ~ file: array.js ~ line 31 ~ arr", arr);
// console.log("🚀 ~ file: array.js ~ line 31 ~ fruits", fruits);

//배열의 모든 요소를 연결해서 하나의 문자열로 만들어줌
animals.join();
// console.log(animals.join());

//배열의 맨 앞에 추가(앞으로 추가되기때문에 순서가 바뀌게됨.. 비추)
animals.unshift("pish");

//배열의 맨 뒤의 요소를 제거한다.
animals.pop();

//그만큼 도려내주고 원본 배열에 영향을 미친다
const spliceItem = animals.splice(1, 1, "monkey");

//원본 배열에 영향을 미치지 않는다. 복사
const sliceItem = animals.slice(1, 2);

//배열을 연결하여 새로운 배열로 만들어줌(불변성:원본을 해치지않기위해)
const concatAnimals = animals.concat(animalList); //얕은 복사

const copyAnimals = animals.concat();

copyAnimals.push("dog");

//spread연산자
const copyAnimals02 = ["zebra", ...animals, "dog"];

//object 객체 - 참조데이터
const sohee = {
  name: "sohee park",
  height: 180,
  weight: 40,
  iq: 140,
  speak: function () {
    //익명함수(Anonymous):이름이 없는 함수
    console.log("말을 합니다.");
  },
};
//기명함수: 이름이 있는 함수
