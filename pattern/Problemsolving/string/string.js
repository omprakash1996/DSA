//1. reverse the string

// function reverseString(str){
// let result=[];
// for(let i=str.length-1;i>=0;i--){
//   result.push(str[i])
//  }
//  return result.join();
// }
// console.log(reverseString('omprakash'));

//2. ------------------------------------------------------------
// function reverseString(str){
//     let arr = str.split("");
//     let left=0;
//     let right=arr.length-1;

//     while(left < right){
//         let temp= arr[left];
//         arr[left]= arr[right];
//         arr[right]= temp;
//         left++;
//         right--;
//     }
//     return arr.join();
// }
// console.log(reverseString('omprakash'));
// ----------------------------------------------------------

//3. palindrome number

// function palindromStr(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]){
//         return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// const user = "madam";
// console.log(palindromStr(user));

// 4. manually substring searching.

// 5.string transformation logic

// 6. character classification

// 7 count frequency of each character

// function countFrequency(str) {
//   let frequency = {};
//   let left = 0;
//   let right = str.length - 1;
//   while (left <= right) {
//     let leftChar = str[left];
//     if (frequency[leftChar]) {
//       frequency[leftChar]++;
//     } else {
//       frequency[leftChar] = 1;
//     }
//     if (left !== right) {
//       let rightChar = str[right];
//       if (frequency[rightChar]) {
//         frequency[rightChar]++;
//       } else {
//         frequency[rightChar] = 1;
//       }
//     }
//     left++;
//     right--;
//   }
//   return frequency;
// }
// const user = "omprakash";
// console.log(countFrequency(user));
// ----------------------------------------------------------
// function countFrequency(str) {
//   let frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     frequency[str[i]] = (frequency[str[i]] || 0) + 1;
//   }
//   return frequency;
// }
// console.log(countFrequency("omprakash behera"));

// 8.find the most frequent charcter in the string.

// function findMostFrequentChar(str){
// let frequent={};
// let maxChar='';
// let maxCharCount=0;
// for(let i=0;i<str.length;i++){
//     const char= str[i];
//     frequent[char] = (frequent[char] || 0) + 1;
//     if (maxCharCount < frequent[char]){
//        maxChar= char;
//        maxCharCount= frequent[char];
//     }
//  }
//  return maxChar;
// }
// console.log(findMostFrequentChar('banana'));

// 9 . Anagram string

// function anagramString(str1, str2) {
//   if (str1.length !== str2.length) return 'length isnt matching';
//   let frequency = {};
//   for (let i = 0; i < str1.length; i++) {
//     frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     if (!frequency[str2[i]]) {
//       return "Not a anagram";
//     }
//     frequency[str2[i]]--;
//   }
//   return 'Anagram';
// }
// console.log(anagramString("listen", "silent"));

// 10. find the first non repeteing character.

// function firstNonRepeteChar(str) {
//   let frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     frequency[str[i]] = (frequency[str[i]] || 0) + 1;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (frequency[str[i]] === 1) {
//       return str[i];
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeteChar("oommppkk"));

// ----------------------------------------------------------

// 11. remove the duplicate char of string.

// 12.check If a string contains only Alphabets(No Regex).

// 13. Reverse only words of the sentence.

// 14.Find the longest word in the sentence.

// 15.count the number of words in a sentence.

// 16.Find all substring of a string.

// 17.compress a string. 'aaaabbc' op:'a4b2c1'
