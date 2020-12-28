function pairSum(nums, target) {
    if (nums.length <= 1) {
        throw "error";
    }

    for (var j in nums) {
        for (var i in nums) {
            if (nums[i] + nums[j] == target) {
                return true;
            }
        }
    }
    return false;

}

// Do not edit this line;
module.exports = pairSum;