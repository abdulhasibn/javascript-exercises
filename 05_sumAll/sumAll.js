const sumAll = function(num1, num2) {
    let sum = 0;
    let i = num1;
    if ((num1 < 0 || num2 < 0) || !(Number.isInteger(num1) &&  Number.isInteger(num2))){
        return "ERROR";
    } 
    else{
        if(num1 > num2){
            i = num2;
            do{
                sum += i;
                i++;
        } while(i < num1);
        }
        do{
            sum += i;
            i++;
        } while(i <= num2);
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
