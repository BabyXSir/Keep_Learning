function Father(name) {
  this.name = name
}
Father.prototype.age = 50;

// 组合式
// function Child(name) {
//   Father.call(this, name)
// }
// Child.prototype = new Father

// 原型式
function Child(name) { 
  function createChild(obj) { 
    function F() { }
    F.prototype = obj 
    return new F()
  }
  return createChild(new Father(name)) 
}
let child =  new Child(1)

console.log('Chil31d',child.name)