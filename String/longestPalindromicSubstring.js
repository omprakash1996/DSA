// Longest Palindromic substring
function longestPalindrome(str) {
  let n = str.length;
  let maxLen = 0;
  let start = 0;
  // Helper to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < n && str[left] === str[right]) {
      left--;
      right++;
    }
    // After breaking, palindrome is between left+1 and right-1
    return [left + 1, right - 1];
  }
  for (let i = 0; i < n; i++) {
    // Odd length palindrome
    let [l1, r1] = expandAroundCenter(i, i);
    if (r1 - l1 + 1 > maxLen) {
      maxLen = r1 - l1 + 1;
      start = l1;
    }
    // Even length palindrome
    let [l2, r2] = expandAroundCenter(i, i + 1);
    if (r2 - l2 + 1 > maxLen) {
      maxLen = r2 - l2 + 1;
      start = l2;
    }
  }
  // Build substring manually (no substring/slice)
  let result = "";
  for (let i = start; i < start + maxLen; i++) {
    result += str[i];
  }
  return result;
}
// Example
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"

