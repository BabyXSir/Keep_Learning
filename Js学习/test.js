let obj = {
  fn() {
    a = 1;
    b = 2;
    console.log('this',globalThis)
  }
}
obj. fn()
console.log('obj')