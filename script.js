
const button = document.querySelector('#startbtn');

let num1 = 0;
let num2 = 0;
let operator = "";

function calc()
{
    let num1 = prompt(1);
    let num2 = prompt(2);
    let operator = prompt('operator');

    //console.log(eval(num1 + operator + num2));

    switch(parseInt(operator))
    {
        case 0:
            console.log(num1 + num2);
            break;

        case 1:
            console.log(num1 - num2);
            break;

        case 2:
            console.log(num1 / num2);
            break;

        case 3:
            console.log(num1 * num2);
        
        default:
            console.log('alma');
    }
}

button.addEventListener('click', () => {calc()});