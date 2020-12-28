function frequencyCounter(word) {
    var freq = {};

    for (var j = 0; j < word.length; j++) {
        var character = word.charAt(j);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;