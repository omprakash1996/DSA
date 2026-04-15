function totalFruit(fruits) {
  let start = 0;
  let maxLen = 0;
  let basket = {}; // object to store fruit counts

  for (let end = 0; end < fruits.length; end++) {
    let fruit = fruits[end];

    // Add fruit to basket
    if (basket[fruit] === undefined) {
      basket[fruit] = 0;
    }
    basket[fruit]++;

    // If more than 2 types, shrink window
    while (Object.keys(basket).length > 2) {
      let startFruit = fruits[start];
      basket[startFruit]--;
      if (basket[startFruit] === 0) {
        delete basket[startFruit];
      }
      start++;
    }

    // Update max length
    let windowLen = end - start + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  return maxLen;
}

// Example usage:
console.log(totalFruit([1, 2, 1])); // Output: 3
console.log(totalFruit([0, 1, 2, 2])); // Output: 3
console.log(totalFruit([1, 2, 3, 2, 2])); // Output: 4
