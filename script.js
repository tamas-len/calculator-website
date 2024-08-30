let num1 = "";
let num2 = "";
let operator = "";
let operatorPressed = false;

const display = document.querySelector(".display");


//generate number buttons so later they can be referenced in js
const btnContainer = document.querySelector('.button-container');

function GenerateNumbers()
{
    let htmlToAdd = "";

    for(let i = 0; i < 10; i++)
    {
        htmlToAdd += `<button class = "nr">${i}</button>`
    }

    btnContainer.innerHTML += htmlToAdd;


    //add eventlistener for click to all number buttons
}

//create operator buttons
function GenerateOperators()
{
    let htmlToAdd = "";
    let operators = ["+", "-", "/", "*"];
    operators.forEach(element => {
        htmlToAdd += `<button class = "operator">${element}</button>`
    });

    btnContainer.innerHTML += htmlToAdd;
}

function AttachEventListeners() //event listeners are attached separately, to ensure the dom is fully loaded before looking for the button elements
{
    const nrButtons = document.querySelectorAll(".nr");

    nrButtons.forEach(element => {
        element.addEventListener('click', () => {
            operatorPressed == false ? num1 += element.textContent : num2 += element.textContent;
            display.textContent = `${num1} ${operator} ${num2}`;
        });
    });


    const opButtons = document.querySelectorAll(".operator");

    opButtons.forEach(element => {
        element.addEventListener('click', () => {

            if (operatorPressed) 
            {
                calc(parseFloat(num1), parseFloat(num2));
            }

            operator = element.textContent;
            operatorPressed = true;
            display.textContent = `${num1} ${operator} ${num2}`;
        });
    });
}

GenerateNumbers();
GenerateOperators();
AttachEventListeners();

//create buttons in js

const equalbtn = document.querySelector('#equal');
equalbtn.addEventListener('click', () => {
    if (num1 && num2 && operator) {
        calc(parseFloat(num1), parseFloat(num2));
        num2 = "";
        operatorPressed = "";
        operator = "";
    }
});

const delbtn = document.querySelector('#del');
delbtn.addEventListener('click', () => {
    if (operatorPressed && num2 === "") 
    {
        operator = "";
        operatorPressed = false;
    } else if (operatorPressed) {
        num2 = num2.slice(0, -1);
    } else {
        num1 = num1.slice(0, -1);
    }
    display.textContent = `${num1} ${operator} ${num2}`;
});

const cbtn = document.querySelector('#cbtn');
cbtn.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = "";
    operatorPressed = false;
    display.textContent = "__";
});

function calc(firstNr, secondNr)
{
    let result;

    switch(operator)
    {
        case "+":
            result = firstNr + secondNr;
            break;

        case "-":
            result = firstNr - secondNr;
            break;

        case "/":
            result = firstNr / secondNr;
            break;

        case "*":
            result = firstNr * secondNr;
            break;
        
        default:
            console.log('alma');
    }

    num1 = result;
    num2 = "";
    operator = "";
    operatorPressed = false;
    display.textContent = `${num1}`;
}