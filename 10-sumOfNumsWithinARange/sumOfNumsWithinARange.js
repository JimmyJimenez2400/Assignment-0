function sumOfNumsWithinARange(nums, start, end) {
    var counting = 0;
    for (var j in nums) {
        if (start <= nums[j] && end >= nums[j]) {
            counting++;
        }
    }




    return counting;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;