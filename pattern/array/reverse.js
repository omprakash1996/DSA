//1. Reverve the array

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
const result = [1, -3, 0, 9, 8, 2, 233];
console.log(reverseArray(result));
