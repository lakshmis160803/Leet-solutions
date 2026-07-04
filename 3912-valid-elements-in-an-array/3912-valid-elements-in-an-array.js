/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    const n = nums.length;
    const leftMax = new Array(n);
    const rightMax = new Array(n);
    leftMax[0] = -Infinity;
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
    }
    rightMax[n - 1] = -Infinity;
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i + 1]);
    }
    const ans = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > leftMax[i] || nums[i] > rightMax[i]) {
            ans.push(nums[i]);
        }
    }
    return ans;
};