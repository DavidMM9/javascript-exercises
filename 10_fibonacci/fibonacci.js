const fibonacci = function (num) {
    let prev = 1;
    let last = 1;
    let res = 0;
    if (num < 0)
        return "OOPS"
    if (num === 1 || num === 2 || num === "1" || num === "2")
        return 1;
    for (let i = 2; i < num; i++) {
        res = prev + last;
        prev = last;
        last = res;
    }
    return res;
};

console.log(fibonacci("2"))

// Do not edit below this line
module.exports = fibonacci;
