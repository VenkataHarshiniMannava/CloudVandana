document.addEventListener('DOMContentLoaded', function () {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('input[type="button"]');
    let currentInput = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.value === '=') {
                try {
                    currentInput = eval(currentInput);
                    resultInput.value = currentInput;
                } catch (error) {
                    resultInput.value = 'Error';
                }
            } else if (button.value === 'AC') {
                currentInput = ''; 
                resultInput.value = ''; 
            } else {
                currentInput += button.value;
                resultInput.value = currentInput;
            }
        });
    });
});
