function reserve(num) {
  // ### program 1 转字符再反转
  // let numStr = num.toString();
  // let outputStr = "";
  // for (var i = numStr.length-1; i >= 0; i--) {
  //   outputStr += numStr[i]
  // }
  // return Number(outputStr)



  // ### program 2 数字方法
  let outputNum = 0;
  while (num > 0) {
    outputNum *= 10
    outputNum += num % 10
    num = (num - num % 10) / 10
  }
  return outputNum
}
console.log(`reserve(159482679)`, reserve(159482679))