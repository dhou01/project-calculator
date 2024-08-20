function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    if (b === 0) {
        return "Error: cannot divide by zero"
    }
    return a / b;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+' : return add(firstNumber, secondNumber);
        case '-' : return subtract(firstNumber, secondNumber);
        case '*' : return multiply(firstNumber, secondNumber);
        case '/' : return divide(firstNumber, secondNumber);
        default:
            return "Error, invalid operator";
    }
}
