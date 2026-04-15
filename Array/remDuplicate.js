// function remDuplicate(arr) {
//   let result = []; // store duplicates
//   let uniques = []; // store unique elements

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < uniques.length; j++) {
//       if (arr[i] == uniques[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       uniques[uniques.length] = arr[i]; // keep unique
//     } else {
//       // collect duplicates only once
//       if (!result.includes(arr[i])) {
//         result[result.length] = arr[i];
//       }
//     }
//   }
//   return result;
// }

// let input = [1, 2, 3, 4, 3, 5, 7, 2, 1];
// console.log(remDuplicate(input)); // [3, 2, 1]


function remDuplicate(arr) {
  let uniques = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniques.length; j++) {
      if (arr[i] === uniques[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniques[uniques.length] = arr[i]; // keep only first occurrence
    }
  }
  return uniques;
}

let input = [1, 2, 3, 4, 3, 5, 7, 2, 1];
console.log(remDuplicate(input)); // [1,2,3,4,5,7]

