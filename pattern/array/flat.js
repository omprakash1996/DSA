// 6. Flat Array
// function flatArray(arr) {
//   let result = [];
//   for (let i of arr) {
//     if (Array.isArray(i)) {
//       result.push(...flatArray(i));
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// }

// let res = [1, [2, [3, 4]], 5, 6];
// console.log(flatArray(res));
// ---------------------------------------------------------------------

function flatArray(arr) {
  let result = [];

  // Manual push implementation
  function addToResult(value) {
    result[result.length] = value; // instead of result.push()
  }

  // Recursive flatten
  function flatten(innerArr) {
    for (let i = 0; i < innerArr.length; i++) {
      let element = innerArr[i];

      // Check if element is an array (manual check)
      if (typeof element === "object" && element !== null && element.constructor === Array) {
        flatten(element); // recurse into nested array
      } else {
        addToResult(element); // add primitive value
      }
    }
  }

  flatten(arr);
  return result;
}

let res = [1, [2, [3, 4]], 5, 6];
console.log(flatArray(res)); // [1, 2, 3, 4, 5, 6]

