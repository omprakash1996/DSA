function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
const nums=[1,2,3,5,7];
const target=9;
console.log(twoSum(nums,target));
