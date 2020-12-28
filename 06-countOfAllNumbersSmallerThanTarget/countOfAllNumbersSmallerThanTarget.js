function countOfAllNumbersSmallerThanTarget(nums, target) {
    var counting = 0;
    for (var i in nums) {
        if (nums[i] < target) {
            counting++;
        }
    }
    return counting;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;