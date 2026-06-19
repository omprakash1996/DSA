// 1 . find the maximum and minimum number of array

// function findMinMax(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let max = arr[0];
//   let min = arr[0];

//   while (left <= right) {
//     if (arr[left] < min) {
//       min = arr[left];
//     }
//     if (arr[left] > max) {
//       max = arr[left];
//     }
//     if (arr[right] < min) {
//       min = arr[right];
//     }
//     if (arr[right] > max) {
//       max = arr[right];
//     }
//     left++;
//     right--;
//   }

//   return { min, max };
// }

// const numbers = [12, 2, 0, 234, 90, -34];
// const result = findMinMax(numbers);

// console.log("Min:", result.min); // -34
// console.log("Max:", result.max); // 234
// ------------------------------------------------------------------
// function findMinMax(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min){
//       min = arr[i]
//     }
//     if (arr[i] > max){
//         max = arr[i]
//     }
//   }
//   return{min,max}
// }
// const numbers = [12, 2, 0, 234, 90, -34];
// const result = findMinMax(numbers);
// console.log(result.min)
// console.log(result.max)
// ------------------------------------------------------------
// 2.reverse an array
// function reverseArr(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr;
// }
// const name = [1,23,3,7];
// console.log(reverseArr(name));
// ------------------------------------------------------
// 3 // find sum of repete number

// function sumOfRepeteNum(arr) {
//   let count = {};
//   let sum = 0;

//   // Count occurrences
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     count[num] = (count[num] || 0) + 1;
//   }

//   // Add only numbers that repeat
//   for (let key in count) {
//     if (count[key] > 1) {
//       sum += Number(key);
//     }
//   }

//   return sum;
// }

// const arr = [1,2,3,2,6,2,6,6];
// console.log(sumOfRepeteNum(arr));
// -----------------------------------------------------------------
// 4. check the array is asscending order;

// function sortAscendingOrder(arr) {
//   let result = [];
//   let temp = undefined;
//   for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     // result.length = arr[i];
//     result.push(arr[i]); //alternative of above
//   }
//   return result;
//   //    return [...arr];   // Es6+ code of above for loop
// }

// const res = [23, 89, 0, -3, 8, 12];
// console.log(sortAscendingOrder(res));
// 5.-----------------------------------------------------------
// decending order
// function decendingOrder(arr){
//  let result=[];
//  let temp=undefined;
//  for (let i=0;i<arr.length;i++){
//      for (let j=0;j<arr.length-1;j++){
//          if(arr[j] < arr[j+1]){
//             temp= arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//          }
//      }
//  }
//  for(let i=0;i<arr.length;i++){
//      result.push(arr[i]);
//  }
//  return result;
// }
// let numbers=[6,3,0,-2,1,7,12];
// console.log(decendingOrder(numbers));

//6. Remove all duplicate in arr------------------------------------------------------------------------

// function removeDuplicate(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     // check if arr[i] is already in result
//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     // if not duplicate, add it
//     if (!isDuplicate) {
//       result[result.length] = arr[i]; // manual push
//     }
//   }

//   return result;
// }

// let numbers = [-2, 23, 12, 22, 23];
// console.log(removeDuplicate(numbers));
// // Output: [ -2, 23, 12, 22 ]

// 7.---------------------------------------------------------
// merge two array

// function mergeTwoArr(first, second) {
//   let result = [];
//   for (let i = 0; i < first.length; i++) {
//     //   result[result.length]= first[i];
//     result.push(first[i]);
//   }
//   for (let j = 1; j < second.length; j++) {
//     result.push(second[j]);
//   }

//   return result;
// }
// const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 5, 6, 7];
// console.log(mergeTwoArr(arr1, arr2));
// ---------------------------------------------

// 8.Find the second largest element in array.
// function findLargest(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] > largest) {
//         largest = arr[i];
//       }
//     }
//   }
//   return largest;
// }
// const numbers = [12, 2, 23, 34, 0, 5];
// console.log(findLargest(numbers));

// function findSecondLargest(arr) {
//   let result = [];
//   let temp = undefined;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   return arr[arr.length - 2];
// }
// const numbers = [12, 2, 23, 34, 0, 5];
// console.log(findSecondLargest(numbers));
// --------------------------------------------------------------------
// 9.rotate the array in k th element.

// function rotateArr(arr, k) {
//   let n = arr.length;
//   k = k % n; // normalize k

//   // helper: reverse part of array
//   function reverse(start, end) {
//     while (start < end) {
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//       start++;
//       end--;
//     }
//   }

//   // Step 1: reverse whole array
//   reverse(0, n - 1);

//   // Step 2: reverse first k elements
//   reverse(0, k - 1);

//   // Step 3: reverse remaining n-k elements
//   reverse(k, n - 1);

//   return arr;
// }

// // Example
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotateArr(numbers, 3));
// // Output: [5, 6, 7, 1, 2, 3, 4]

// 10.check if two array are equal in same order.-------------------------------------------------

// function equalArr(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//       if(arr1[i] !== arr2[i]){
//         return false;
//         break;
//       }
//     }
//   return true;
// }
// let arry1 = [1, 2, 3, 4];
// let arry2 = [1, 2, 3, 4];
// console.log(equalArr(arry1, arry2));
// ------------------------------------------------------------------------------
// 11.count even and odd number in an array.
// function countEvenOdd(arr) {
//   let oddCount = 0;
//   let evenCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   }
//   return { even: evenCount, odd: oddCount };
// }
// const numbers = [1, 2, 3, -9, 6, 5];
// console.log(countEvenOdd(numbers));
// ----------------------------------------------------------------------------
// 12. find all unique pairs whose sum equals a target.

// function targetSum(arr, target) {
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         pairs.push([i, j]);
//       }
//     }
//   }
//   return pairs.length > 0 ? pairs : null;
// }
// let numbers = [1, 2, 3, 4, 5, 9];
// let target = 7;
// console.log(targetSum(numbers, target));
// ------------------------------------------------------
// 13.left shift the array by one position.
// function leftShift(arr) {
//   if (arr.length === 0) return arr;
//   let first = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = first;
//   return arr;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(leftShift(numbers));

// ---------------------------------------------------------
// 14. count how many times an element appears in an array.

// function countElement(arr){
//   let count={};
//   for(let i =0;i<arr.length;i++){
//    let num = arr[i];
//    count[num]= (count[num] || 0) + 1;
//   }
//   return count;
// }
// let number=[1,3,4,5,6,7];
// console.log(countElement(number));
// ---------------------------------------------
// 15.find the missing number.

// function findMissingNum(arr) {
//   let result = [];
//   let num = arr.length + 1;
//   for (let i = 1; i <= num; i++) {
//     let isFind = false;
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[j] === i){
//             isFind=true;
//             break;
//         }
//     }
//     if(!isFind){
//         result.push(i);
//     }
//   }
//   return result;
// }
// const input = [1, 2, 4, 5, 6];
// console.log(findMissingNum(input));
// -----------------------------------------------------------
// 16. 