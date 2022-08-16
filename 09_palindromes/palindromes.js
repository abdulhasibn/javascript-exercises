const palindromes = function (str) {
    const oldStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const newStr = oldStr.split('').reverse().join('');
    return oldStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
