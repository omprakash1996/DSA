// Reverse a string

// function reverseString(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = str[str.length - 1 - i];
//   }
//   let reversed = "";
//   for (let i = 0; i < arr.length; i++) {
//     reversed += arr[i];
//   }
//   return reversed;
// }
// console.log(reverseString("hello world omprakash"));

function reverseString(str){
  let arr= str.split('');
  let left=0;
  let right=arr.length-1;
  while(left < right){
    let temp= arr[left];
    arr[left]= arr[right];
    arr[right]=temp;
    left++;
    right--;
  }
  return arr.join('');
}
console.log(reverseString('omprakash'));
