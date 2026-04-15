// Maximum Subarray

function maxSubArray(nums){
    let currentSum=nums[0];
    let maxSum=nums[0];

    for(let i=1;i<nums.length;i++){
        if (currentSum + nums[i] > nums[i]){
            currentSum = currentSum + nums[i];
        }else{
            currentSum=nums[i];
        }
        if(currentSum > maxSum){
            maxSum=currentSum;
        }
    }
    return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));