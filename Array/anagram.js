// Write a function to check if two strings are anagrams.
function areAnagrams(str1, str2) {
  // if lengths differ not an anagram
  if (str1.length !== str1.length) {
    return false;
  }
  //  create frequency counters manually
  let count1 = {};
  let count2 = {};
  // count for str1
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    if (count1[ch] === undefined) {
      count1[ch] = 1;
    } else {
      count1[ch]++;
    }
  }
  //   count for str2
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (count2[ch] === undefined) {
      count2[ch] = 1;
    } else {
      count2[ch]++;
    }
  }
  // compare frequency counters
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}
// test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
