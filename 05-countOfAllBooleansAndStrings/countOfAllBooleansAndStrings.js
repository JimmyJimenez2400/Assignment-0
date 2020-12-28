function countOfAllBooleansAndStrings(arr) {
    var number = 0;
    for (var e in arr) {
        if (typeof(arr[e]) == "string" || typeof(arr[e]) == "boolean") {
            number++;
        }

    }
    return number;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;