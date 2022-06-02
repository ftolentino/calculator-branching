
//Business Logic
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

//UI Logic

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const addResult = add(number1, number2);
  $("#output").text(addResult);
  });
  
  $("form#subtract").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#sub1").val());
  const number2 = parseInt($("#sub2").val());
  const subtractResult = subtract(number1, number2);
  $("#output").text(subtractResult);
});

$("form#multiply").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#mul1").val());
  const number2 = parseInt($("#mul2").val());
  const multiplyResult = multiply(number1, number2);
  $("#output").text(multiplyResult);
});

$("form#remainder").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#remain1").val());
  const number2 = parseInt($("#remain2").val());
  const remainderResult = remainder(number1, number2);
  $("#output").text(remainderResult);
});



});






// const subtractResult = subtract(number1, number2);
// const multiplyResult = multiply(number1, number2);
// const remainderResult = remainder(number1, number2);

// const userInput = prompt("What is the temperature in Celsius?");

// function convertToFa(temp) {
//   let conversion = (temp * 9) / 5 + 32;
//   alert("the temp is " + conversion + "°F");
// }

// convertToFa(userInput);

// const userInput = prompt("Enter gallons");

// function convertToLiters(gal) {
//   let convertion = gal * 3.785412;
//   alert(convertion + " liters");
// }

// convertToLiters(userInput);
