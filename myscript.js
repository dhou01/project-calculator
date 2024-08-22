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
const digitBtn = document.querySelectorAll('.digit');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear')
//const equalBtn = document.querySelector('');



// function updateDisplay () {
//     displayValue.textContent = currentValue;
// }

function updateDisplay () {
    if (currentOperator){
        displayValue.textContent = `${firstNumber} ${currentOperator} ${currentValue}`
    } else {
        displayValue.text = currentValue;
    }
}

// Event listener for digit button
digitBtn.forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.textContent;

        if (currentValue === '0') {
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

        if (firstNumber === '') {
            firstNumber = parseFloat(currentValue);
        } else if (currentOperator) {
            secondNumber = parseFloat(currentValue);
            //firstNumber = operate(currentOperator, firstNumber. secondNumber);
        }

        currentOperator = button.textContent;
        currentValue = '0';
        updateDisplay();

        // if (currentOperator === '') {
        //     currentOperator = operator;
        // } else {
        //     currentOperator += operator;
        // }
    });
});

// Event listener for equals button
clearBtn.addEventListener('click', () => {

});


// Event listener for clear button
clearBtn.addEventListener('click', () => {
    firstNumber = '';
    secondNumber= '';
    currentOperator = '';
    currentValue = '0';
    updateDisplay();
});


