const reverseString = function (string) {
    let res = "";
    for (let i = 0; i < string.length; i++) {
        res += string[string.length - i - 1];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
