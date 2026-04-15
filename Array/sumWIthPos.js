function sumOfPositiveNumbers(arr) {
  let sum = 0;
  // Loop through the array manually
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // check if the number is positive
      sum = sum + arr[i]; // add it to sum
    }
  }
  return sum;
}
let a = [5, 6, 3, 4, -3, 9];
let result = sumOfPositiveNumbers(a);
console.log("Sum of positive numbers: " + result);
