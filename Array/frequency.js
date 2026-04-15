//  Find frequency of each element

function countOccurrences(arr) {
  const count = {};
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (count[element]) {
      count[element] = count[element] + 1;
    } else {
      count[element] = 1;
    }
  }
  
  return count;
}

// Example usage
const array = [1, 2, 3, 2, 1, 4, 1, 5, 2];
console.log(countOccurrences(array)); 
// Output: { '1': 3, '2': 3, '3': 1, '4': 1, '5': 1 }
