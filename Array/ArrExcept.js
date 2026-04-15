// Product of Array Except Self
function productExceptSelf(nums){
    const n= nums.length;
    const answer=new Array(n);
    let prefix=1;
    for(let i=0;i<n;i++){
        answer[i]=prefix;
        prefix=prefix*nums[i];
    }
    let suffix=1;
    for(let i=n-1;i>=0;i--){
        answer[i]=answer[i]*suffix;
        suffix=suffix*nums[i];
    }
    return answer;
}
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]