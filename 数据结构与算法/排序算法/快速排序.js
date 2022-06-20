let arr = [43, 65, 73, 24, 84, 13, 1,456,28,68,985,98,2,3,56,75]
function quickSort(arr) {
  function getMiddle(arr, i, j) {
    let middleNum = arr[i];
    let leftIndex = i;
    let rightIndex = j;
    let direction = 1;
    while (true) {
      if (leftIndex == rightIndex) {
        arr[leftIndex] = middleNum;
        break
      }
      if (direction) {
        if (arr[rightIndex] < middleNum) {
          arr[leftIndex] = arr[rightIndex];
          direction = 0
          leftIndex++;
        } else {
          rightIndex--;
        }
      } else {
        if (arr[leftIndex] >= middleNum) {
          arr[rightIndex] = arr[leftIndex];
          direction = 1
          rightIndex--;
        } else {
          leftIndex++;
        }
      }
    }
    return leftIndex
  }
  function sequence(arr, leftIndex = 0, rightIndex = arr.length - 1) {
    if (rightIndex > leftIndex) {
      let middleIndex = getMiddle(arr, leftIndex, rightIndex)
      sequence(arr, leftIndex, middleIndex - 1)
      sequence(arr, middleIndex + 1, rightIndex)
    }
    return arr;
  }
  return sequence(arr);
}
console.log(quickSort(arr));