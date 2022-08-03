const reverseString = function(word) {
    const myArray = word.split("");
    myArray.reverse();
    let myString = myArray.join("");
    return myString;

};

// Do not edit below this line
module.exports = reverseString;
