var findNthDigit = function (n) {
  if (n < 9) return n;
  // 10进制的指数
  let i = 0;
  let iMap = { 0: 9 }
  while (n >= iMap[i]) {
    i++;
    let currentTen = 10 ** i; // 当前10进制单位
    let nextTen = 10 ** (i + 1)  // 下一个10进制单位
    let numCount = nextTen - currentTen;
    let maxUnitNum = iMap[i - 1] + numCount * (i + 1); // 当前10进制单位的最大数字的最终位置

    if (n <= maxUnitNum) {
      let unit = i + 1; // 当前10进制单位数字的单个数字的长度
      let currentTenRangeIndex = Math.ceil((n - iMap[i - 1]) / unit) // 数字在当前10进制数字范围的位置
      let currentNum = (10 ** i - 1) + currentTenRangeIndex; // 当前n位置所对应的数字
      let currentNumIndex = iMap[i - 1] + currentTenRangeIndex * unit - n; // n在其数字中的位置 --从右往左,从0开始
      console.log('RangeIndex', currentTenRangeIndex)
      console.log('currentNum', currentNum)
      console.log('currentNumIndex', currentNumIndex)
      return getTenUnit(currentNum, currentNumIndex)
    } else {
      iMap[i] = maxUnitNum
    }
  }

  function getTenUnit(num, i) {
    return parseInt(num / (10 ** i)) % 10
  }
};

console.log(findNthDigit(502)) 