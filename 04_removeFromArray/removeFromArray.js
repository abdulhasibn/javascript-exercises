const removeFromArray = function (arr, ...num) {
    let myArray = arr;
    let mySecondArray = num;
    for(i = 0; i <mySecondArray.length ; i++){
        if (myArray.indexOf(mySecondArray[i]) >= 0){
            myArray.splice(myArray.indexOf(mySecondArray[i]), 1);
        } else{
            continue;
        }
    }
    return myArray;

    
};

// Do not edit below this line
module.exports = removeFromArray;
