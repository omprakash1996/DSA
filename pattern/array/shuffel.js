// 7. shuffel the array

function shuffelArr(arr) {
//   let result = [...arr];
   let result = [];
   for (let i = 0; i < arr.length; i++) {
    result[result.length] = arr[i]; // manual push
  }
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
}
let result = [12, 34, 0, -5, 4, 2, 7];
console.log(shuffelArr(result));
