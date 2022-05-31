function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function remainder(number1, number2) {
  return number1 % number2;
}

const number1 = parseInt(prompt("enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const addResult = add(number1, number2);
const subtractResult = subtract(number1, number2);
const multiplyResult = multiply(number1, number2);
const remainderResult = remainder(number1, number2);

alert(remainderResult);
