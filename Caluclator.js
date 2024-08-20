document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                operand1 = '';
                operand2 = '';
                display.innerText = '0';
                return;
            }

            if (value === '=') {
                operand2 = currentInput;
                const result = calculate(operand1, operator, operand2);
                display.innerText = result;
                currentInput = result;
                operator = '';
                operand1 = '';
                operand2 = '';
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                operand1 = currentInput;
                currentInput = '';
                return;
            }

            currentInput += value;
            display.innerText = currentInput;
        });
    });

    function calculate(operand1, operator, operand2) {
        let result;
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }

        return result.toString();
    }
});
