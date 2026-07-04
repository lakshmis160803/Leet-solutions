/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const n=nums.length;
    const ans=new Array(2*n)
    for(let i=0;i<n;i++){
        ans[i]=nums[i];
        ans[i+n]=nums[n-1-i]
    }
    return ans
};