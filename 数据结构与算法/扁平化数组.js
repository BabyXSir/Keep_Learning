// 1.递归方法
// function flatArr(arr) {
//   let flatedArr = [];
//   arr.forEach(item => {
//     if (item instanceof Array) {
//       // 递归
//       flatedArr.push(...flatArr(item))
//     } else {
//       flatedArr.push(item)
//     }
//   });
//   return flatedArr
// }

// 1*.精简版递归方法
function flatArr(arr) {
  arr = [].concat(...arr);
  return arr.some(item => Array.isArray(item)) ? flatArr(arr) : arr
}

// 2.循环concat
// function flatArr(arr) {
//   var hasArrayItem = true;
//   while (hasArrayItem) {
//     arr = [].concat(...arr)
//     hasArrayItem = arr.filter(item => item instanceof Array).length != 0;
//   }
//   return arr;
// }



let arr = [[122, 43, [123, 553, '32]', { abc: 'abc' }], 323, 53], 'abc', 'def', [121, 222]]
console.log(`flatArr(arr)`, flatArr(arr))