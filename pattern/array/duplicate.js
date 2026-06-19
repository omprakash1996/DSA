// 2. Find the duplicate element of an array.

function findDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate) {
      //   result.push(arr[i]);
      result[result.length] = arr[i];
    }
  }
  return result;
}
const res = [1, -4, 0, 23, 0, 4, 8, 1, -4, 4, 23];
console.log(findDuplicate(res));
