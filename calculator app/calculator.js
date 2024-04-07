let result = document.getElementById('result');
let expression = '';

function appendValue(value) {
    expression += value;
    result.value = expression;
}

function calculateResult() {
    try {
        let calculatedResult = eval(expression);
        result.value = calculatedResult;
        expression = calculatedResult.toString();
    } catch (error) {
        result.value = 'Error';
        expression = '';
    }
}

function clearResult() {
    result.value = '';
    expression = '';
}

