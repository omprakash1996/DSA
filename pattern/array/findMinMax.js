// 3. find the minimum and maximum of array.

function findMinMax(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };
}
const res = [12, 0, 2, -34, 99, 23, 123];
const Fres = findMinMax(res);
console.log("Largest", Fres.largest);
console.log("Smallest", Fres.smallest);
