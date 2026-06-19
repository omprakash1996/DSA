// 1. Find two sum / target element of an array.

/* function targetElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i]+ arr[j] == target){
            return [i,j]
        }
    }
  }
  return null;
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
target = [5];
console.log(targetElement(numbers,target)); */
// ------------------------------------------------------------------

// 2. Find the pair of two sum.

/*function pairSum(arr, target) {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        pair.push([i, j]);
      }
    }
  }
  return pair;
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
target = [9];
console.log(pairSum(numbers, target)); */
// ----------------------------------------------------

// 3 . Valid Parentheses .

/*function isValidParentheses(str) {
  const stack = [];
  top = -1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      top++;
      stack[top] = char;
    } else {
      if (top === -1) {
        return false;
      }
      let topChar = stack[top];
      if (
        (char === ")" && topChar === "(") ||
        (char === "}" && topChar === "{") ||
        (char === "]" && topChar === "[")
      ) {
        top--;
      } else {
        return false;
      }
    }
  }
  return top === -1;
}
console.log(isValidParentheses("()"));
console.log(isValidParentheses("[)"));
console.log(isValidParentheses("{}")); */
// --------------------------------------------------

// 4 .Merge Two Sorted Lists in array.

/*function mergeArr(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }
  return result;
}
let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];
console.log(mergeArr(num1, num2));  */
// --------------------------------------------------------

// 5.Remove Duplicates from Sorted Array.

/* function removeDuplicate(arr) {
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
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [9, 1, 2, 9, 7, 8];
console.log(removeDuplicate(numbers)); */

// --------------------------------------------------------------------------
// 6.find Duplicates from Sorted Array.

/*function findDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push(arr[i]);
        break;
      }
    }
  }
  return result;
}

let number = [-1, 2, 3, 2, 4, 5, 1,9,3,-1];
console.log(findDuplicate(number));  */
// ----------------------------------------------------------

// 7. Remove Element

/*function removeElement(arr, val) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}
// const nums = [3, 2, 2, 3];
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// val = 3;
val3 = 2;
console.log(removeElement(nums, val3)); */
// -----------------------------------------------------------

// 8.Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/*function findTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
const numbers = [1, 2, 3];
console.log(findTwice(numbers)); */

// ----------------------------------------------

// 9.Flartern Array.

/*function flatArray(arr) {
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
let arr1 = [1, [2, [3, 4]], 5, 6];
console.log(flatArray(arr1));  */

// ----------------------------------------------
// 10.frequency of array.

/*function frequencyArr(arr) {
  let result ={};
  for (let i = 0; i < arr.length; i++) {
    let frq = arr[i];
    result[frq] = (result[frq] | 0) + 1;
  }
  return result;
}
const numbers = [8, 2, 1, 8, 2, 3, 5, 2, 3];
console.log(frequencyArr(numbers)); */
// ----------------------------------------------

// 11.most frequency element in an array.

/*function maxFrequency(arr) {
  let result = {};
  let maxNumber = null;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let freq = arr[i];
    result[freq] = (result[freq] | 0) + 1;
    if (result[freq] > maxCount) {
      maxCount = result[freq];
      maxNumber = freq;
    }
  }
  // return { maxNumber, maxCount };
  return maxNumber;
}
const data = [4, 5, 7, 8, 4, 6, 7, 9, 4, 2, 7, 6, 7];
console.log(maxFrequency(data)); */

// --------------------------------------------

// 12.Find the largest/smallest number in an array.
/*
function findLargestSmallest(arr) {
  let largest =arr[0];
  let smallest =arr[0];

  for (let i=0; i<arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };
}
const numbers = [-9, 5, 23, 9, 0, 123, 1, 7];
console.log(findLargestSmallest(numbers));

*/
// ----------------------------------------------------------------
// 13.square of sorted array

/*
function squareOfArr(arr) {
  let result = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    result[index] = arr[i] * arr[i];
    index++;
  }
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
}
const numbers = [-8, 0, 7, 3, 5];
console.log(squareOfArr(numbers));  */

// --------------------------------------------------
// 14. sum of positive number.
/*
function sumOfPosNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum = sum + arr[i];
    }
  }
  return sum > 0 ? sum : "All are -ve Numbers";
}
// const numbers= [9,-8,0,6,-3,7];
const numbers = [-9, -8, -6, -3, -7];

console.log(sumOfPosNum(numbers));   */

// sub array problem-----------------------------------------------------

// 15. find the sub array of an array.
/*
function findSubArray(arr) {
  let sub = [];
  let subIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = [];
      let tempIndex = 0;
      for (k = i; k <= j; k++) {
        temp[tempIndex] = arr[k];
        tempIndex++;
      }
      sub[subIndex] = temp;
      subIndex++;
    }
  }
  return sub;
}
const numbers = [9, -3, 7, 4, 9, 3];
console.log(findSubArray(numbers));
*/
// ---------------------------------------------
//16. find sum of max sub-array.
/*
function findSum(arr) {
  let curSum= arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (curSum + arr[i] > arr[i]) {
      curSum = curSum + arr[i];
    } else {
      curSum = arr[i];
    }
    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }
  return maxSum;
}
const numbers = [1, 9, -4, 6];
//  const numbers=[3,-6,7,4,8];
console.log(findSum(numbers));
*/
// -------------------------------------------------
// 17. min sum of subarray.
/*
function minSumSubArray(arr) {
  let curSum = arr[0];
  let minSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (curSum + arr[i] < arr[i]) {
      curSum = curSum + arr[i];
    } else {
      curSum = arr[i];
    }
    if (curSum < minSum) {
      minSum = curSum;
    }
  }
  return minSum;
}
const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(minSumSubArray(numbers));
*/
// -----------------------------------------------------------

// 18. Product of Array Except Self.
/*
function productExceptSelf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result[i]= product;
  }
  return result;
}
const numbers = [1, 2, 3, 4];
console.log(productExceptSelf(numbers));
*/
// ------------------------------------------
// 19.find the second largest element of an array.
/*
function secondLargestElement(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let item of arr) {
    if (largest < item) {
      secondLargest = largest;
      largest = item;
    } else if (secondLargest < item) {
      secondLargest = item;
    }
  }
  return secondLargest;
}
const numbers = [9, 0, -9, 43, 2, 12];
console.log(secondLargestElement(numbers));
*/
// ----------------------------------------------------------------------

// 20.Function to add two decimal numbers.
/*
function sumDecimalNum(num1, num2) {
  let sum = num1 + num2;
  return parseFloat(sum.toFixed(2));
}
const number1 = 4.78;
const number2 = 23.89;
console.log(sumDecimalNum(number1, number2));
*/
// --------------------------------------------------------
// 21.arrange 0 left side and 1 right side;
/*
function segregateZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while(arr[left] ===0 && left < right){
      left++;
    }
    while(arr[right] ===1 && left < right){
      right--
    }
    if(left < right){
      let temp=arr[left];
      arr[left]= arr[right];
      arr[right]= temp;
      left++;
      right--;
    }
  }
  return arr;
}
const numbers = [1, 0, 1, 0, 0, 1];
console.log(segregateZero(numbers));
*/

// -------------------------------------------------
// 22.arrange -ve left side and +ve right side;
/*
function leftPos(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] < 0 && left < right) {
      left++;
    }
    while (arr[right] > 0 && left < right) {
      right--;
    }
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}
const numbers = [9, -4, 8, -3, 0, 34];
console.log(leftPos(numbers));
*/
// ----------------------------------------------
// 23.Search in Rotated Sorted Array
/*
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let loopCount = 0;
  while (left <= right) {
    loopCount++;
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1; 
    }
  }
  console.log(loopCount);
  return -1; 
}

const numbers = [4,5,6,7,0,1,2];
console.log(binarySearch(numbers, 3));
*/
// ----------------------------------
// 24. Find miissing number.

function missingNumber(arr) {
  let result = [];
  let index = arr.length + 1;
  for (let i = 1; i <= index; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if(!found) return i;
  }
}
const misNum = [2, 1, 3];
console.log(missingNumber(misNum));

// Number problem ----------------------------------------------------

// 1. factorial of numbers.

/*function factorialNumber(fact) {
  if (fact < 0) return undefined;
  if (fact === 0 || fact === 1) return 1;
  return fact * factorialNumber(fact - 1);
}
console.log(factorialNumber(7)); */

// ------------------------------------------------

// 2.Write a function to find the Fibonacci sequence up to n.

/*function fibonacci(number){
  let arr=[];
  let a=0;
  let b=1;
  for(let i=0;i<number;i++){
    arr[i]= a;
    let next = a + b;
    a = b;
    b = next;
    
  }
  return arr;
}
console.log(fibonacci(5));  */

// ------------------------------------------

// 11.
