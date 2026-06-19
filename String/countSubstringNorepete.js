function countNonRepetingSubstring(str) {
  let freq = {};
  let left = 0;
  let count = 0;
  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    if(freq[char] === undefined){
        freq[char] =0;
    }
    freq[char]++;
    while(freq[char] > 1){
        let leftChar = str[left];
        freq[leftChar]--;
        left++;
    }
    count += (right - left +1);
  }
  return count;
}
console.log(countNonRepetingSubstring('abc'));