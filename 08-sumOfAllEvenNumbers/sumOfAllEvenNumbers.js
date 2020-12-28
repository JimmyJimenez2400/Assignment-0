function sumOfAllEvenNumbers(nums) {
    var counting = 0;
    for (var j in nums) {
        if (nums[j] % 2 == 0) {
            counting++;
        }
    }



    return counting;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;