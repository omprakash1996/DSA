/*
function bubbleSort(arr) {
  let n = arr.length;                     // 1️⃣ store array length
  for (let i = 0; i < n - 1; i++) {       // 2️⃣ outer loop: number of passes
    for (let j = 0; j < n - i- 1; j++) {     // 3️⃣ inner loop: comparisons per pass
      if (arr[j] > arr[j + 1]) {          // 4️⃣ compare adjacent elements
        let temp = arr[j];                // 5️⃣ swap if left > right
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;                             // 6️⃣ return sorted array
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6]));

*/
// -------------------------------------------------------------------------------

// optimize way
/*

function bubbleSort(arr) {
  let n = arr.length;                    
  for (let i = 0; i < n - 1; i++) {      
    let swapped = false;
    for (let j = 0; j < n - i- 1; j++) {     
      if (arr[j] > arr[j + 1]) {         
        let temp = arr[j];                
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  return arr;                             
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6]));
*/

//Searching Algo -----------------------------------------------------

// Linear search

// function linearSearch(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] === target) return i;
//   }
//   return -1;
// }
// const numbers=[90,0,34,8,-4,8];
// console.log(linearSearch(numbers,8));

// --------------------------------------------
// Binary search

function binarySearch(arr,target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const numbers = [1,2,3,4,5,6,7];
console.log(binarySearch(numbers,-4));
