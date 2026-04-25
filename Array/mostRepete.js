// most repeteing character in string in javascript without inbuild method.

function mostRepete(str) {
  var freq = {};
  var maxChar = "";
  var maxCount = 0;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch] += 1;
    }
    if (freq[ch] > maxCount){
        maxCount= freq[ch];
        maxChar= ch;
    }
  }
  return { char: maxChar, count: maxCount };
}
console.log(mostRepete("javascript"));