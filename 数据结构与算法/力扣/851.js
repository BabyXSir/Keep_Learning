// /**
//  * @param {number[][]} richer
//  * @param {number[]} quiet
//  * @return {number[]}
//  */
//  var loudAndRich = function (richer, quiet) {
//   let sortRich = [];
//   // 生成person序号排序
//   for (var i = 0; i < quiet.length; i++) {
//     sortRich.push(i)
//   }
//   // 根据richer数组，生成富有排序
//   for (var i = 0; i < richer.length; i++) {
//     let b = sortRich.indexOf(richer[i][0]);
//     let s = sortRich.indexOf(richer[i][1])
//     // 当big在small后面，把它移到前面
//     if (b > s) {
//       sortRich.splice(b, 1)
//       sortRich.splice(s, 0, richer[i][0])
//     }
//   }
//   console.log(`sortRich`, sortRich)
//   // 富有值排序之后，再产生基于富有值的安静值排序
//   // 因为answer是person x更富有的人群中的最安静的人，所以可以从高往低推理
//   let quietBySortRich = [];
//   for (var i = 1; i < sortRich.length; i++) {
//     if (i = 0) {
//       quietBySortRich.push(quiet[sortRich[0]])
//       continue
//     }
//     if (quietBySortRich[sortRich[i]] > quietBySortRich[sortRich[i - 1]]) {
//       quietBySortRich.push(quiet[sortRich[i]])
//     } else {
//       quietBySortRich.push(quiet[sortRich[i - 1]])
//     }
//   }
//   // sortRich和quietBySortRich序号是一一对应的
//   // 让quietBySortRich的安静值转person序号，同时重新排序
//   let res = []
//   for (var i = 0; i < sortRich.length; i++) {
//     res[sortRich[i]] = quiet.indexOf(quietBySortRich[i])
//   }

//   return res
// };

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  // 找到比person i大的所有richer，再去比较所有更大rich的person的quiet
  let res = [];
  for (var i = 0; i < quiet.length; i++) {
    let quietest = quiet[i];
    for (var j = 0; j < richer.length; j++) {
      if (richer[j][1] == i) {
        // 继续找比richer[j][0]更大的
        if (quiet[richer[j][0]] > quietest) {
          quietest = quiet[richer[j][0]]
          console.log(i, j, quietest)
        }
      }
    }
    res.push(quietest)
  }
  return res;
};

let richer = [[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], quiet = [3, 2, 5, 4, 6, 1, 7, 0]
console.log(loudAndRich(richer, quiet));