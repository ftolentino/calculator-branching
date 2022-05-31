// function add(number1, number2) {
//   return number1 + number2;
// }

// function subtract(number1, number2) {
//   return number1 - number2;
// }

// function multiply(number1, number2) {
//   return number1 * number2;
// }

// function remainder(number1, number2) {
//   return number1 % number2;
// }

// const number1 = parseInt(prompt("enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const addResult = add(number1, number2);
// const subtractResult = subtract(number1, number2);
// const multiplyResult = multiply(number1, number2);
// const remainderResult = remainder(number1, number2);

// alert(remainderResult);

// const userInput = prompt("What is the temperature in Celsius?");

// function convertToFa(temp) {
//   let conversion = (temp * 9) / 5 + 32;
//   alert("the temp is " + conversion + "°F");
// }

// convertToFa(userInput);

const userInput = prompt("Enter gallons");

function convertToLiters(gal) {
  let convertion = gal * 3.785412;
  alert(convertion + " liters");
}

convertToLiters(userInput);
