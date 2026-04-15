// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    let seen = {};  // Object to track last index of each character

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        
        // If char is seen and its last index is in the current window
        if (seen[char] !== undefined && seen[char] >= left) {
            left = seen[char] + 1;  // Move left pointer to skip the repeat
        }
        
        seen[char] = right;  // Update last seen index
        
        // Update max length
        let currentLength = right - left + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));     // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));    // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));          // Output: 0
console.log(lengthOfLongestSubstring("dvdf"));      // Output: 3 ("vdf")
console.log(lengthOfLongestSubstring("au"));        // Output: 2 ("au")
console.log(lengthOfLongestSubstring("abba"));      // Output: 2 ("ab" or "ba")

