function countOfAllIndexMatchingNumbers(nums) {
    var counting = 0;

    for (var j in nums) {
        if (j == nums[j]) {
            counting++;
        }
    }





    return counting;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;