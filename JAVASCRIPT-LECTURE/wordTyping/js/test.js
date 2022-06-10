const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 3, 5, 6, 7, 8, 6, 5, 3, 2, 4];
const set = new Set(arr);
const newArr = [...set];
//스프레드연산자로 배열로 만든 결과와, forEach문을 사용하여 빈 배열에 요소를 넣어주는 것은 결과가 같다.
// const newArr = [];
// set.forEach(function (item, index) {
//   newArr.push(item);
// });
console.log(newArr);

const spreadArr02 = Array.from(set);
console.log(spreadArr02);
