// Write a function to check if a number is a palindrome.
function palindromeNum(num) {
  if (num < 0) return false;
  let original = num;
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = (num - digit) / 10;
  }
  return original === reversed;
}
console.log(palindromeNum(121));
console.log(palindromeNum(123));
