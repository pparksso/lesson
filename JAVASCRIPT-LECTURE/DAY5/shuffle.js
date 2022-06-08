const lotto = [];
const sortLotto = [];
for (let i = 1; i < 46; i++) {
  lotto.push(i);
}
for (let i = 0; i < lotto.length; i++) {
  let random = Math.floor(Math.random() * lotto.length);
  let a = lotto[i];
  lotto[i] = lotto[random];
  lotto[random] = a;
}
for (let i = 0; i < 6; i++) {
  sortLotto.push(lotto[i]);
}
sortLotto.sort(function (first, second) {
  return first - second;
});

console.log(sortLotto.join());

// let a = lotto[Math.floor(Math.random() * lotto.length)];
// let b = lotto[0];
// lotto[0] = a;
// lotto.splice(a - 1, 1, b);

// let a = lotto[1];
// lotto[1] = lotto[0];
// lotto[0] = a;
