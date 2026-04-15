// Flartern Array

function flatArray(arr) {
  let result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...flatArray(i));
    } else {
      result.push(i);
    }
  }
  return result;
}
let arr1 = [1, [2, [3, 4]], 5,6];
console.log(flatArray(arr1));
