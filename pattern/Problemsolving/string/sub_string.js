// 1. find if one string is a substring of another('hellothere','there')

// function oneStrIsSubstr(str,subStr){
//  return str.includes(subStr)
// }
// console.log(oneStrIsSubstr('helloom','lm'));

// function substringOfStr(str, subStr) {
//   if (str.length < subStr.length) return "sub string length is greter";
//   for (let i = 0; i < str.length - subStr.length; i++) {
//     let match = true;
//     for (let j = 1; j < subStr.length; j++) {
//       if (str[i + j] !== subStr[j]) {
//         match=false;
//         break;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// }
// console.log(substringOfStr("helloom", "oo"));

// 2.manual substring search index found.
// function findIndexOfSubStr(str, substr) {
//   if (str.length < substr.length)
//     return "substring length is greter then string";
//   for (let i = 0; i <= str.length - substr.length; i++) {
//     let match = true;
//     for (let j = 0; j < substr.length; j++) {
//       if (str[i + j] !== substr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return i;
//   }
//   return -1;
// }
// console.log(findIndexOfSubStr("helloom", "oo"));

// 3. check one string is rotation of another.

// function rotationStr(str, rStr) {
//   if (str.length !== rStr.length) return " false, string length mismatch";
//    str = str + str;
//   for (let i = 0; i < str.length; i++) {
//     let match = true;
//     for (let j = 0; j < rStr.length; j++) {
//       if (str[i + j] !== rStr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// }
// console.log(rotationStr("omprakash", "prakashom"));

// 4 . count the frequency of each word.

// 5. check if a string is a panagram.

// 6. Remove all duplicate words from a sentence.

// 7.Find the longest palindromic substring.

// 8.Find all anagram pairs ia an array of strings.

// 9. find the longest substring without repeating characters.


// 10.


// 11.

// 12.

// 13.