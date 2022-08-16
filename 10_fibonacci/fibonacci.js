const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    const a = 1;
    const b = 1;
    let myArray = [];
    myArray.push(a);
    myArray.push(b);
    for (i = 2; i < Number(num); i++){
        let c = myArray[i-1] + myArray[i-2];
        myArray.push(c);
    }
    return myArray[myArray.length-1];

};

// Do not edit below this line
module.exports = fibonacci;
