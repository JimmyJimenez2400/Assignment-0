function setUnionOfAnyAmountOfSets(...args) {
    let set1 = new Set();

    for (var a of args) {
        for (var b of a) {
            set1.add(b);
        }
    }
    return set1;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;