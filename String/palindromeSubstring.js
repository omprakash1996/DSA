function countPalindromSubstring(str) {
  let n = str.length;
  let count = 0;
  // Helper to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < n && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }
  }
  //   check all possible centers
  for (let i = 0; i < n; i++) {
    // odd length palindromes (center at i)
    expandAroundCenter(i,i);
    // Even length palindromes(centers between i and i+1)
    expandAroundCenter(i,i+1);
  }
  return count;
}
console.log(countPalindromSubstring('aaa'));
console.log(countPalindromSubstring('abc'));