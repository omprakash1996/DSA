// 3. count all non repeteing sub-string in a string.

function countNonRepeteSubstring(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let freq = {};
    for (let j = i; j < str.length; j++) {
      let char = str[j];
      if (freq[char]) {
        break;
      }
      freq[char] = 1;
      count++;
    }
  }
  return count;
}
console.log(countNonRepeteSubstring("abc"));

// ------------------------------------------------------------------------------------------------------------

// get the non-repete substring value
function getNonRepeatingSubstrings(str) {
  let result = [];
  
  // Generate all substrings
  for (let i = 0; i < str.length; i++) {
    let freq = {};
    let substring = "";

    for (let j = i; j < str.length; j++) {
      let char = str[j];

      // stop if duplicate found
      if (freq[char]) {
        break;
      }

      freq[char] = 1;

      // build substring manually
      substring += char;

      // store valid substring
      result.push(substring);
    }
  }

  return result;
}

console.log(getNonRepeatingSubstrings("abc"));
