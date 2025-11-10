// Find the Duplicate Element in an array

function findAllDuplicates(arr) {
  const duplicates = [];
  const checked = [];

  for (let i = 0; i < arr.length; i++) {
    let isChecked = false;

    // Check if we've already processed this element
    for (let k = 0; k < checked.length; k++) {
      if (arr[i] === checked[k]) {
        isChecked = true;
        break;
      }
    }

    if (isChecked) continue;

    // Count occurrences
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > 1) {
      duplicates.push(arr[i]);
    }

    // Mark this element as checked
    checked.push(arr[i]);
  }

  return duplicates;
}

// Example usage:
const input = [3, 1, 4, 2, 5, 3, 2, 4];
console.log(findAllDuplicates(input)); // Output: [3, 4, 2]


function findAllDuplicates(arr) {
  const duplicates = [];
  let dupIndex = 0;
  const checked = [];
  let checkIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    let isChecked = false;

    // Check if already processed
    for (let k = 0; k < checkIndex; k++) {
      if (arr[i] === checked[k]) {
        isChecked = true;
        break;
      }
    }

    if (isChecked) continue;

    // Count occurrences
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > 1) {
      duplicates[dupIndex] = arr[i];
      dupIndex++;
    }

    checked[checkIndex] = arr[i];
    checkIndex++;
  }

  return duplicates;
}

// Example usage:
const input2= [3, 1, 4, 2, 5, 3, 2, 4,45,8,45];
console.log(findAllDuplicates(input2)); // Output: [3, 4, 2]
