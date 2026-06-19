// squares of sorted array
// function sortedSquares(arr) {
//   var n = arr.length;
//   var result = new Array(n);
//   var left = 0;
//   var right = n - 1;
//   var pos = n - 1;
//   while (left <= right) {
//     var leftVal = arr[left];
//     var rightVal = arr[right];
//     var leftSq = leftVal * leftVal;
//     var rightSq = rightVal * rightVal;
//     if (leftSq > rightSq) {
//       result[pos] = leftSq;
//       left++;
//     } else {
//       result[pos] = rightSq;
//       right--;
//     }
//     pos--;
//   }
//   return result;
// }
// var input = [-7, -3, 2, 3, 11];
// var output = sortedSquares(input);
// console.log(output);


// ---------------------------------------------------------

function squareNum(arr){
   let result=[];
   let index=0;
   for(let i=0;i<arr.length;i++){
    //   result.push(arr[i]*arr[i]);
    result[index]= arr[i]*arr[i];
    index++;
   }
   for (let i=0;i<result.length;i++){
       for(let j=i+1;j<result.length;j++){
           if(result[i] > result[j]){
               let temp = result[i];
               result[i] = result[j];
               result[j] = temp;
           }
       }
   }
   return result;
}
const numbers=[8,2,3,-4,7,9,6];
console.log(squareNum(numbers));
