// count the number of vowels in a string.
function countVowel(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}
const inputString="Hello World ,omprakash";
const vowelCount=countVowel(inputString);
console.log("Number of vowels:",vowelCount);
