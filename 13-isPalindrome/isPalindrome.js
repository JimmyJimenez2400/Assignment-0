function isPalindrome(word) {
    var reversed = word.split("").reverse().join("");
    if (reversed == word) return true;

    return false;
}

// Do not edit this line;
module.exports = isPalindrome;