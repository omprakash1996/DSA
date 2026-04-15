// Longest Repeating Character Replacement
function characterReplacement(s, k) {
    var freq = [];
    for (var i = 0; i < 26; i++) {
        freq[i] = 0;
    }

    var left = 0;
    var right = 0;
    var maxCount = 0;
    var result = 0;

    while (right < s.length) {
        var idx = s.charCodeAt(right) - 65; // 'A' = 65
        freq[idx] = freq[idx] + 1;

        // Update maxCount
        if (freq[idx] > maxCount) {
            maxCount = freq[idx];
        }

        var windowSize = right - left + 1;

        // If invalid window, shrink from left
        if (windowSize - maxCount > k) {
            var leftIdx = s.charCodeAt(left) - 65;
            freq[leftIdx] = freq[leftIdx] - 1;
            left = left + 1;
            windowSize = right - left + 1;
        }

        // Update result
        if (windowSize > result) {
            result = windowSize;
        }

        right = right + 1;
    }

    return result;
}

// Test cases
console.log(characterReplacement("ABAB", 2));     // Output: 4
console.log(characterReplacement("AABABBA", 1));  // Output: 4
