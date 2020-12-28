function productOfAnyAmountOfNumbers(...args) {
    var a = 1;
    for (var i in args) {
        a *= args[i];
    }

    return a;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;