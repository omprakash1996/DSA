// 4. sort array in ascending order.

function sortAscendingOrder(arr) {
  let result = [];
  let temp = undefined;
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    result.length = arr[i];
    // result.push(arr[i])     //alternative of above
  }
  return result;
  //    return [...arr];   // Es6+ code of above for loop
}

const res = [23, 89, 0, -3, 8, 12];
console.log(sortAscendingOrder(res));
