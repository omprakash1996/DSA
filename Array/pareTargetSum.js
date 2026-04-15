// Find two num such that pair of target sum.

function pairSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return [arr[i],arr[j]];
            }
        }
    }
    return null;
}
let result=pairSum([2,7,11,15],9);
console.log(result);