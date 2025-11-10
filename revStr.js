// Reverse a string

function reverseString(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[str.length - 1 - i];
  }
  let reversed = "";
  for (let i = 0; i < arr.length; i++) {
    reversed += arr[i];
  }
  return reversed;
}
console.log(reverseString("hello world omprakash"));
