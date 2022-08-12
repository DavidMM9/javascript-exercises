const sumAll = function (first, second) {
    let res = 0;
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second))
        return "ERROR"
    if (first < second) {
        while (first <= second) {
            res += first;
            first++;
        }
    }
    else {
        while (second <= first) {
            res += second;
            second++;
        }
    }
    return res;
};

console.log(sumAll(10, "90"))

// Do not edit below this line
module.exports = sumAll;
