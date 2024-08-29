
const button = document.querySelector('#startbtn');

let num1 = 0;
let num2 = 0;
let operator = "";

function calc()
{
    let num1 = prompt(1);
    let num2 = prompt(2);
    let operator = prompt('operator');

    console.log(eval(num1 + operator + num2));
}

button.addEventListener('click', () => {calc()});