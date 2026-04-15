// Number of 1 Bits

function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    if (n & 1) {
      count++;
    }
     n = n >>> 1;
  }
  return count;
}
console.log(hammingWeight(11));
