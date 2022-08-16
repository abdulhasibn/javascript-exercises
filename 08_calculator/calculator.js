const add = function(a, b, ...args) {
	return parseInt(a + b + Number(args));
};

const subtract = function(a, b, ...args) {
	return parseInt(a - b - Number(args));
};

const sum = function(myArr) {
  let sum = 0;
  myArr.map(myInt => sum += myInt);
  return sum;
};

const multiply = function(myArr) {
  let sum = 1;
  myArr.map(myInt => sum *= myInt);
  return sum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
	return num *= factorial(num -1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
