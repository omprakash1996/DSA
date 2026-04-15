//Container With Most Water .
function maxArea(height) {
  var n = height.length;
  var left = 0;
  var right = n - 1;
  var maxAreaValue = 0;
  function myMin(a, b) {
    if (a < b) return a;
    return b;
  }
  function myMax(a, b) {
    if (a > b) return a;
    return b;
  }
  while (left < right) {
    var width = right - left;
    var h = myMin(height[left], height[right]);
    var area = width * h;
    maxAreaValue = myMax(maxAreaValue, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxAreaValue;
}
// --- Test Cases ---
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
