const removeFromArray = function (arr, ...args) {
    return res = arr.filter(r => !args.includes(r));
};

// Do not edit below this line
module.exports = removeFromArray;
