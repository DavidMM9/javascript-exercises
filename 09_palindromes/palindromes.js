const palindromes = function (string) {
    string = string.replace(/[.,!]/g, "");
    string = string.split(' ').join('');
    string = string.toLowerCase();
    let res = true;
    for (let i = 0; i < string.length && res; i++) {
        if (string[i] !== string[string.length - i - 1])
            res = false;
    }
    return res;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
module.exports = palindromes;
