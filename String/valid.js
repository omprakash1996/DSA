// Valid anagram
function isValidAnagram(s, t) {
  // If length are different they cant be anagram
  if (s.length !== t.length) {
    return false;
  }
  // Create frequency counter for first string
  let charCount = {};
  // Count characters in first string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (charCount[char]) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }
  // Subtract characters from second string
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!charCount[char]) {
      return false;
    }
    charCount[char] = charCount[char] - 1;
  }
  // Check if all counts are zero
  for (let key in charCount) {
    if (charCount[key] !== 0) {
      return false;
    }
  }

  return true;
}
console.log(isValidAnagram("anagram", "nagaram"));
