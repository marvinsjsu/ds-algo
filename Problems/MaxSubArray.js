
// O(n^2)
var maxSubArray = function(nums) {
    if (nums.length === 0) return undefined;

    let maxSum = nums[0], sum;

    for (let i = 0; i <= nums.length; i++) {
        sum = nums[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
};


// O(n)
var maxSubArray = function(nums) {
    if (nums.length === 0) return undefined;

    let maxSum = nums[0];
    let currNum, sum = 0;

    for (let i = 0; i < nums.length; i++) {
        currNum = nums[i];
        sum += currNum;

        if (sum > maxSum) {
            maxSum = sum;
        }

        if (currNum > maxSum) {
            maxSum = currNum;
        }

        if (currNum > sum) {
            sum = currNum;
        }
    }

    return maxSum;
};


[[9,10],[4,9],[4,17]]