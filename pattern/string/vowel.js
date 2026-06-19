// 2. count vowel and consonant.

function countVowel(str) {
  let result = [];
  let vowel = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        result.push(str[i]);
      }
    }
  }
  return result.length;
}
const string = "omprakash behera";
console.log(countVowel(string));
