// squares of sorted array
function sortedSquares(arr) {
  var n = arr.length;
  var result = new Array(n);
  var left = 0;
  var right = n - 1;
  var pos = n - 1;
  while (left <= right) {
    var leftVal = arr[left];
    var rightVal = arr[right];
    var leftSq = leftVal * leftVal;
    var rightSq = rightVal * rightVal;
    if (leftSq > rightSq) {
      result[pos] = leftSq;
      left++;
    } else {
      result[pos] = rightSq;
      right--;
    }
    pos--;
  }
  return result;
}
var input = [-7, -3, 2, 3, 11];
var output = sortedSquares(input);
console.log(output);
