let arr = [1, 2, 3, 'abc', 'def', { name: 1, age: 2 }]

// 1.filter
let filterArr = arr.filter(item => Object.prototype.toString.apply(item) === '[object Number]')
console.log(`filterArr`, filterArr)


// 2.find
let findItem = arr.find(item => item.name == 1);
console.log(`findItem`, findItem)


// 3.findIndex
let findIndex = arr.findIndex(item => item.name == 1);
console.log(`findIndex`, findIndex)


// 4.reduce
let reduceResult = arr.reduce((res,item,index) => {
  index == 1 && (res = "")
  typeof item == 'string' && (res += item);
  return res
})
console.log(`reduceResult`, reduceResult)


// 5.some
let hasObject = arr.some(item => Object.prototype.toString.apply(item) === '[object Object]')
console.log(`hasObject`, hasObject)


// 6.every
let isEveryNumber = arr.every(item => Object.prototype.toString.apply(item) === '[object Number]')
console.log(`isEveryNumber`, isEveryNumber)


// 7.includes
let hasAbc = arr.includes('abc')
console.log(`hasAbc`, hasAbc)


// 8.map
let mapArr = arr.map(item => typeof item == 'number' ? item : null);
console.log(`mapArr`, mapArr)


// 9.from
let arrFromObj = Array.from({0:'小明',1:18,2:"chess",length:3})
console.log(`arrFromObj`, arrFromObj)