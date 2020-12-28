function countOfAllBooleans(arr) {
    var count = 0;
    for (var e in arr) {
        if (typeof(arr[e]) == "boolean") {
            count++;
        }

    }
    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;