// Square of the sorted Array
function squareOfSortedArr(arr) {
  let n = arr.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let pos = n - 1;

  while (left <= right) {
    let leftVal = arr[left] * arr[left];
    let rightVal = arr[right] * arr[right];
    if (leftVal > rightVal) {
      result[pos] = leftVal;
      left++;
    } else {
      result[pos] = rightVal;
      right--;
    }
    pos--;
  }
  return result;
}
console.log(squareOfSortedArr([-7, -3, 2, 3, 11])); //[ 4, 9, 9, 49, 121 ]
