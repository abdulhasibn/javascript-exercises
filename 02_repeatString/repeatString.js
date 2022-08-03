const repeatString = function(str, num) {
    let myString = str;
    for(i = 1; i < num; i++){
    myString += str;
    }
    if (num === 0){
    return "";
    } else if (num < 0){
    return 'ERROR';
    }
    else{
    return myString;
    
    }
    };
    
    // Do not edit below this line
    module.exports = repeatString;
    
    