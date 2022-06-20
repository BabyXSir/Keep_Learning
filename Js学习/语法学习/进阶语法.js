// ??
let str = 'abc';
let nullStr = null;
let emptyStr = "";
console.log(nullStr || str); // abc
console.log(emptyStr || str); // abc
console.log(emptyStr ?? str); // ""

// ?.
let obj = {
  name:'object',
  age:1
}
console.log( obj.age?.current?.num) // undefined