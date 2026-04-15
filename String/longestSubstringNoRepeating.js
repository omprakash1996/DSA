//  Longest Substring Without Repeating Characters
function longestSubstringNoRepeating(str) {
  var maxLength = 0;
  for (var i = 0; i < str.length; i++) {
    var visited = {};
    var currentLength = 0;
    for (var j = i; j < str.length; j++) {
      var char = str[j];
      if (visited[char] === true) {
        break;
      }
      visited[char] = true;
      currentLength++;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
  }
  return maxLength;
}
console.log(longestSubstringNoRepeating("abcabcbb"));
