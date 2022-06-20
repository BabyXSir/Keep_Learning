/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)

  let res = new Set();
  for (var i = 0; i < nums.length; i++) {
    let n1 = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      let n2 = nums[j];
      if (nums.slice(j + 1).indexOf(0 - n2 - n1) != -1) {
        res.add(`${n1.toString()},${n2.toString()}`)
      }
    }
  }
  console.log(res)

  res = [...res].map(item => {
    item = item.split(',');
    return [item[0], item[1], 0 - item[0] - item[1]]
  })
  return res
};

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums));