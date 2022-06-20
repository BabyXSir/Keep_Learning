function* iter(num) {
  // setTimeout(() => {
  // while (num > 0) {
  //   let a = yield num--
  // }
  // }, 200)
  let a = yield 1;
  let b = yield 2
  return 3

}

let ite = iter(5);

console.log(`iter()`, ite.next())
console.log(`123`, 123)
console.log(`iter()`, ite.next())
console.log(`iter()`, ite.next())
console.log(`iter()`, ite.next())
console.log(`iter()`, ite.next())