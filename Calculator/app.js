const calculatorScreen = document.querySelector('#calculator-screen');
let currentInput = '';
let previousInput = '';
let operator = '';

const updateScreen = (value) => {
    calculatorScreen.value = value;
};

const handleNumberClick = (number) => {
    if (currentInput.length < 10) {
        currentInput += number;
        updateScreen(currentInput);
    }
};

const handleOperatorClick = (selectedOperator) => {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
};

const handleEqualClick = () => {
    if (previousInput === '' || currentInput === '') return;
    calculate();
    operator = '';
};

const calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    updateScreen(currentInput);
};

const handleClearClick = () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateScreen('');
};

const handleDecimalClick = () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen(currentInput);
    }
};

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        const { value } = event.target;
        if (!isNaN(value)) {
            handleNumberClick(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperatorClick(value);
        } else if (value === '=') {
            handleEqualClick();
        } else if (value === 'all-clear') {
            handleClearClick();
        } else if (value === '.') {
            handleDecimalClick();
        }
    });
});
