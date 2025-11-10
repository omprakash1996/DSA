// Find the largest/smallest number in an array.
function findLargestAndSmallest(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };
}
const numbers = [7, 9, 2, 7, 1, 5, 3, 11, 15, 6];
const result = findLargestAndSmallest(numbers);
console.log("Largest:", result.largest);
console.log("smallest:",result.smallest);
