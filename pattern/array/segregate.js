//8. to segregate 0s and 1s in an array (all 0s on one side, all 1s on the other) without using built-in methods like sort(), filter(), etc.

function segregate(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0 && left < right) {
      left++;
    }
    while (arr[right] === 1 && left < right) {
      right--;
    }
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
const res = [0, 1, 1, 0, 1, 0];
console.log(segregate(res));
