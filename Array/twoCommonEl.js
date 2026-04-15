// find the common elements between two arrays.
function findCommonElements(arr1, arr2) {
  let common = [];
  // Loop through first array
  for (let i = 0; i < arr1.length; i++) {
    // Loop through second array
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Check if already added to avoid duplicates
        let alreadyExists = false;
        for (let k = 0; k < common.length; k++) {
          if (common[k] === arr1[i]) {
            alreadyExists = true;
            break;
          }
        }
        if (!alreadyExists) {
          common.push(arr1[i]);
        }
      }
    }
  }
  return common;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2));
