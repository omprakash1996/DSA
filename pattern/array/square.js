// 9. square of sorted array

// function sortedSquare(arr) {
//   let n = arr.length;
//   let result = new Array(n);
//   let left = 0;
//   let right = n - 1;
//   let pos = n - 1;
//   while (left <= right) {
//     let leftSquare = arr[left] * arr[left];
//     let rightSquare = arr[right] * arr[right];
//     if (leftSquare > rightSquare) {
//       result[pos] = leftSquare;
//       left++;
//     } else {
//       result[pos] = rightSquare;
//       right--;
//     }
//     pos--;
//   }
//   return result;
// }
// let arr = [-7, -3, 0, 2, 5];
// console.log(sortedSquare(arr)); // [0, 4, 9, 25, 49]


function sortedSquare(arr) {
  let n = arr.length;
  let result = [];
  let left = 0;
  let right = n - 1;

  // Collect squares in descending order
  while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      //   result.push(leftSquare);   // use push
      result[result.length] = leftSquare;

      left++;
    } else {
      //   result.push(rightSquare);  // use push
      result[result.length] = rightSquare;

      right--;
    }
  }

  // Reverse to get ascending order
  let finalResult = [];
  for (let i = result.length - 1; i >= 0; i--) {
    // finalResult.push(result[i]); // manual reverse with push
    finalResult[finalResult.length] = result[i];

  }

  return finalResult;
}

let arr = [-7, -3, 0, 2, 5];
console.log(sortedSquare(arr)); // [0, 4, 9, 25, 49]
