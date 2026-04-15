function removeDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]!== "" && !result.includes(arr[i])){
        result.push(arr[i]);
    }
  }
  return result;
}
let str='Hello world';
console.log(removeDuplicate(str));
