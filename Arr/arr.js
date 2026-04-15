// Print all elements using for loop
/* function arrLoop(arr1) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
     return res;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(arrLoop(arr)); */
// --------------------------------------------------
// 2 //Print all elements using for each
/*let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((element)=>{
    console.log(element);
})  */
// ------------------------------------------
// 3 // Print all elements using for...of
/* let arr = [1, 2, 3, 4];
   for (let element of arr) {
  console.log(element);
}   */
// ------------------------------------------------
// 4// Iterate in reverse
/* function revArr(num){
    let res=[];
    for(let i=num.length-1;i>=0;i--){
        res.push(num[i]);
    }
    return res;
}
let arr = [1, 2, 3, 4];
console.log(revArr(arr)); */

// Searching ---------------------------------------------------
// Find if 5 exists in the array

/*function findEl(arr) {
  res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr === 5) {
      res.push(arr[i]);
    }
    return res.length > 0 ? res : "Element doesnot exist";
  }
}
let arr = [1, 2, 3, 4, 5];
console.log(findEl(arr)); */
// ------------------------------------------------------
// Find index of element 7
/*function findIndex(num) {
  let target = 7;
  let index = -1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findIndex(arr)); */
// ------------------------------------------------
// Find first element greater than 5
/*function findGreter(nums) {
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) {
      result = nums[i];
    }
  }
  return result;
}
let res = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findGreter(res)); */
// -------------------------------------------------------
// Find index of first element greater than 5
/*function findIndex(nums) {
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]>5){
      index=i;
      break;
    }
  }
  return index;
}
let result = [1, 2, 3, 4, 5, 6, 7];
console.log(findIndex(result)); */

// ----------------------------------------------
// Check if every element is positive
/*function positiveElement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0){
      result.push(arr[i])
    }
  }
  return result;
}
let poEl = [0, 1, 2, 0, 3, 4, -4, 6, -1];
console.log(positiveElement(poEl)); */
//Filtering --------------------------------------
// Get all even numbers
/*function getEvenNum(even) {
  let resEvenNum = [];
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0 && even[i] > 0) {
      resEvenNum.push(even[i]);
    }
  }
  return resEvenNum;
}
const result = [1, 2, 3, -9, 4, 5, 6, 0, -4];
console.log(getEvenNum(result)); */
// ---------------------------------------------
// Get all odd numbers
/*function oddNum(num) {
  result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0 && num[i] > 0) {
      result.push(num[i]);
    }
  }
    return result;
}
let val = [2, 3, 8, 23, 6, -3, -6];
console.log(oddNum(val)); */
// ---------------------------------------------------------
// Get numbers greater than 5
/* function getGreter(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 5) {
      result.push(num[i]);
    }
  }
  return result;
}
let res = [-4, 0, 2, 6, 1, 7, 4, 8];
console.log(getGreter(res));  */
// ------------------------------------------------------
// Remove a specific element 5 and 2
/*function remData(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] !==2 && arr[i] !==5){
      res.push(arr[i])
    }
  }
  return res;
}
let num = [9, -2, 0, 5, 3, 2, -5, -2, 11, 2];
console.log(remData(num)); */
// ------------------------------------------------------------

// map
// Double every element
/*let nums=[2,3,-3,5,6,7];
let res=nums.map((num,index)=>{
  return num*2;
})
console.log(res); */

// ------------------------------

// Square every element
/* let sqrEl=[3,5,-2,3,4,2];
   let result= sqrEl.map((num,index)=>{
   return num ** 2;
})
console.log(result); */
// -----------------------------------------------------------------------
// reduce
// Sum of all elements
/*function sumAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let res = [1, 2, 3, 3, 5, 6];
console.log(sumAll(res)); */
// ---------------------------------------------------------------------------------------
// Product of all elements

/*function productAll(arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }
  return prod;
}
let prod = [1, 2, 3, 4, 5];
console.log(productAll(prod)); */
// ----------------------------------------------------------------------------------------------
// Maximum element using reduce

/*function maxNum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {

  }
  return result;
}
let max = [-2, 2, 0, 3, 9, 45, 9, 34, -8];
console.log(maxNum(max)); */
// -------------------------------------------------------------------------------------------------------
// Find the maximum number
/*function maxNum(arr) {
  let left = 0;
  let right = arr.length - 1;
  max = [];
  while (left < right) {
    if (arr[left] > arr[right]) {
      max = arr[left];
    }
    if (arr[left] < arr[right]) {
      max = arr[right];
    }
    left++;
    right--;
  }
  return max;
}
let max = [-2, 2, 0, 3, 9, 45, 9, 34, -8];
console.log(maxNum(max)); */
// ------------------------------------------
// Count even numbers using reduce

/*function countEven(arr) {
  let left = 0;
  let right = arr.length - 1;
  count = 0;
  while (left < right) {
    if (arr[left] % 2 == 0) {
      count++;
    }
    if (arr[left] !== arr[right] && arr[right] % 2 === 0) {
      count++;
    }
    left++;
    right--;
  }
  return count;
}
const num = [1, 23, 4, 5, 6, 7, 88];
console.log(countEven(num)); */
// --------------------------------------------------------------------------
/*function countEven(arr) {
  result= [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ==0) {
      result.push(arr[i]);
    }
  }
  return result.length;
}
const num = [1, 23, 4, 5, 6, 7];
console.log(countEven(num)); */
// --------------------------------------------------------
// Sort ascending (default)
/*function sortAscending(arr) {
  // let result = [];
  let temp = undefined;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   result.push(arr[i]);
  // }

  // return result;
  return [...arr];
}

let res = [99, -8, 6, 1, 2, -3, 0, 5, 102, 2,123];
console.log(sortAscending(res));  */
// -----------------------------------------------
// Sort decending (default)

/*function decendingOrder(arr) {
  let result = [];
  let temp = undefined;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
let res = [99, -8, 6, 1, 2, -3, 0, 5, 102, 2, 123];
console.log(decendingOrder(res));  */
// --------------------------------------------------------------------------

// Shuffle the array

/* function shuffelArr(arr) {
   let result = [...arr];
   for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
}
let result = [12, 34, 0, -5, 4, 2, 7];
console.log(shuffelArr(result));   */
// ************** String -------------------------------------------------------------------
/* function reverseStr(str) {
  let arr= [];
  for (let i =0;i<str.length;i++){
    arr[i]= str[str.length-1-i];
  }
  let reversed="";
  for(i =0;i<arr.length;i++){
    reversed+= arr[i]
  }
  return reversed;

}
const rev = "omprakash behera";
console.log(reverseStr(rev)); */
// -------------------------------------------------
// function reverseString(str){
//   let arr= str.split('');
//   let left=0;
//   right= arr.length-1;
//   while(left< right){
//     // swap character
//     let temp= arr[left];
//     arr[left]= arr[right];
//     arr[right]= temp;
//     left++;
//     right--;
//   }
//   return arr.join();
// }
// const rev = "omprakash behera aranapal";
// console.log(reverseString(rev));

// -----------------------------------------------
// palindrome string
/* function palindromeStr(str) {
  let left = 0;
  right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }else{

    }
    left++
    right--;
  }
  return true;
}
console.log(palindromeStr('omprakash'));
console.log(palindromeStr('omprakas')); */

// --------------------------------------------

/*function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("cool")); */
// --------------------------------------------
// capitalize string
/* function capitalizeStr(str) {
   let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return result.join(" ");
}
console.log(capitalizeStr("omprakash behera"));  */
// -------------------------------------------------------------------
// Find the most frequent character in a string in javascript.

// --------------------------------------------------------------
// remove whitespace
// function removeWhitespace(str){
//   let result=[];
//   for(let i=0;i<str.length;i++){
//    if (str[i] !=='' && str[i] !== '\t' && str[i] !=='\n' && str[i] !== '\r'){
//       result += str[i]
//    }
//   }
// return result;
// }
// let val= 'ompr akash behera';
// console.log(removeWhitespace(val));
// --------------------------------------------
// Check if a string is a palindrome in javascript 2 pointer method

// function isPalindrome(str){
// let left=0;
// let right=str.length-1;
// while(left < right){
//   if (str[left] !== str[right]){
//     return false;
//   }
//   left++;
//   right--;
// }
// return true;

// }
// let val= 'madam';
// console.log(isPalindrome(val));
// ------------------------------------------------------
// Capitalize the first letter of each word in javascript ,2 pointer method.

/* function capitalizeWord(str){
   let result= " ";
   let i=0;
   while (i< str.length){
    while(i<str.length && str[i] == ' '){
      result+=str[i];
      i++;
    }
    if (i<str.length){
      result +=str[i].toUpperCase();
      i++;
    }
    while(i<str.length && str[i] !== ' '){
      result+= str[i];
      i++;
    }
  }
  return result;
}
console.log(capitalizeWord("hello om prakash behera")); */

//Array -----------------------------------------------------
// Find the largest number in an array

