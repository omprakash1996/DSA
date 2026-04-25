// Find the first non-repeating character in a string
function firstNonRepetingChar(str) {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let isRepete = false;
    for (j = 0; j < n; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepete = true;
        break;
      }
    }
    if (!isRepete) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepetingChar('omprakash'));
