// 5 . sort decending order of array

function sortDecendingOrder(arr) {
  let result = [];
  let temp = undefined;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const res = [23, 89, 0, -3, 8, 12];
console.log(sortDecendingOrder(res));
