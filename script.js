let num1 = "";
let num2 = "";
let operator = "";
let operatorPressed = false;


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
            console.log("helo belo");
            operatorPressed == false ? num1 += element.textContent : num2 += element.textContent;
        });
    });


    const opButtons = document.querySelectorAll(".operator");
    var operatorIDs = {
        "+" : 0,
        "-" : 1,
        "/" : 2,
        "*" : 3
    };

    opButtons.forEach(element => {
        element.addEventListener('click', () => {
            operator = operatorIDs[element.textContent]
            operatorPressed = true;
        });
    });
}

GenerateNumbers();
GenerateOperators();
AttachEventListeners();

//create buttons in js

const equalbtn = document.querySelector('#equal');
equalbtn.addEventListener('click', () => {calc(parseFloat(num1), parseFloat(num2))});

const delbtn = document.querySelector('#del');
delbtn.addEventListener('click', () => {console.log("del button")});

const cbtn = document.querySelector('#cbtn');
cbtn.addEventListener('click', () => {MakeNumbers(1)});

function calc(num1, num2)
{
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
            break;
        
        default:
            console.log('alma');
    }
}