// to segregate 0s and 1s in an array (all 0s on one side, all 1s on the other) without using built-in methods like sort(), filter(), etc.
function segregateZerosAndOnes(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // Move left pointer untill we find a 1
    while (arr[left] === 0 && left < right) {
      left++;
    }
    // Move right pointers untill we find a 0
    while (arr[right] === 1 && left < right) {
      right--;
    }
    // swap 1 on left with 0 on right
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}
console.log(segregateZerosAndOnes([0, 1, 1, 0, 1, 0]));
