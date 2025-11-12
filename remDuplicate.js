// Remove duplicates from an array.
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[result.length] = arr[i];
    }
  }
  return result;
}
let input = [1, 2, 3, 4, 3, 5, 7, 2, 1];
console.log(removeDuplicates(input));
