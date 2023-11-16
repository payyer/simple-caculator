const display = document.querySelector('.display');
const clickSound = document.getElementById('clickSound');

const onClickButton = (input) => {
    clickSound.play();
    display.textContent += input;
}

// stroge varible
let a = 0;
let operator = '';

const sum = () => {
    a = +display.textContent;
    operator = '+';
    display.textContent = '';
    clickSound.play();
}

const subtraction = () => {
    a = +display.textContent;
    operator = '-';
    display.textContent = '';
    clickSound.play();
}

const multiply = () => {
    a = +display.textContent;
    operator = '*';
    display.textContent = '';
    clickSound.play();
}

const division = () => {
    a = +display.textContent;
    operator = '/';
    display.textContent = '';
    clickSound.play();
}

const equal = () => {
    let result = 0;
    let b = +display.textContent;
    switch (operator) {
        case '+':
            result = a + b;
            display.textContent = Math.round(result * 1000) / 1000;
            break;
        case '-':
            result = a - b;
            display.textContent = Math.round(result * 1000) / 1000;
            break;
        case '*':
            result = a * b;
            display.textContent = Math.round(result * 1000) / 1000;
            break;
        case '/':
            result = a / b;
            display.textContent = Math.round(result * 1000) / 1000;
            break;
        default:
            display.textContent = display.textContent;
    }
    clickSound.play();
}

const onClickAC = () => {
    a = 0;
    display.textContent = '';
    operator = '';
    clickSound.play();
}