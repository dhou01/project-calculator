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

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let currentValue = '';
let result = '';

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

const displayValue = document.querySelector('#display-value');
const displayCurrentValue = document.querySelector('#display-current-value');
const digitBtn = document.querySelectorAll('.digit');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equals');
const dotBtn = document.querySelector('.decimal-dot');
const delBtn = document.querySelector('.delete');


function updateDisplay () {
    if (currentOperator){
        displayValue.textContent = `${firstNumber} ${currentOperator} ${currentValue}`
    } else if (isNaN(currentValue)) {
        displayValue.textContent = "Error";
    }
    else {
       displayValue.textContent = currentValue;
    }
}

// Event listener for digit button
digitBtn.forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.textContent;

        if (currentValue === '') {
            currentValue = digit;
        } else {
            currentValue += digit;
        }

        updateDisplay();
    });
});

// Event listener for operator button
operatorBtn.forEach(button => {
    button.addEventListener('click', () => {

        if (currentValue !== '') { 
            currentOperator = button.textContent;

            if (firstNumber === '') {
                firstNumber = parseFloat(currentValue);
            } else if (currentOperator) {
                secondNumber = parseFloat(currentValue);
                firstNumber = operate(currentOperator, firstNumber, secondNumber);
            }
        }

        if (firstNumber !== null) {
            currentOperator = button.textContent;
        }
        
            currentValue = '';
            updateDisplay();
    });
});

// Event listener for equals button
equalBtn.addEventListener('click', () => {
    if (currentOperator && firstNumber && currentValue !== null) {
        secondNumber = parseFloat(currentValue);
        currentValue = operate(currentOperator, firstNumber, secondNumber).toString();

        firstNumber = '';
        secondNumber = '';
        currentOperator = '';
    
    } else {
        firstNumber = '';
        secondNumber = '';
        currentOperator = '';
        currentValue = '';
        return
        
    }
    updateDisplay();
});

// Event listener for clear button
clearBtn.addEventListener('click', () => {
    firstNumber = '';
    secondNumber= '';
    currentOperator = '';
    currentValue = '';
    updateDisplay();
});

// Event listener for delete button
delBtn.addEventListener('click', () => {
    if (displayValue.textContent.length === 1 || displayValue.textContent === "Error: cannot divide by zero") {
        displayValue.textContent = "0";
    } else {
        displayValue.textContent = displayValue.textContent.slice(0, -1);
    }
});