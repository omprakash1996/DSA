// Find the second largest number in an array.
function secondLargestNum(arr) {
  if (arr.length < 2) return null;
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for(let i=0;i<arr.length;i++){
    const num=arr[i];
    if (num > largest){
        secondLargest=largest;
        largest=num;
    }else if(num>secondLargest && num < largest){
        secondLargest=num;
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}
const numbers=[3,5,20,8,15];
console.log(secondLargestNum(numbers)); // Output: 15
