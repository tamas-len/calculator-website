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
    const nrButtons = document.querySelectorAll(".nr");

    nrButtons.forEach(element => {
        element.addEventListener('click', () => {console.log('im a number button')});
    });
}
GenerateNumbers();


//create operator buttons
function GenerateOperators()
{
    let htmlToAdd = "";
    let operators = ["+", "-", "/", "*"];
    operators.forEach(element => {
        htmlToAdd += `<button class = "operator">${element}</button>`
    });

    btnContainer.innerHTML += htmlToAdd;

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
GenerateOperators();


function MakeNumbers(num)
{
    operatorPressed == false ? num1 += num : num2 += num;
}

//create buttons in js

const equalbtn = document.querySelector('#equal');
equalbtn.addEventListener('click', () => {console.log("equal button")});

const delbtn = document.querySelector('#del');
delbtn.addEventListener('click', () => {console.log("del button")});

const cbtn = document.querySelector('#cbtn');
cbtn.addEventListener('click', () => {MakeNumbers(1)});

function calc()
{
    let num1 = prompt(1);
    let num2 = prompt(2);
    let operator = prompt('operator');

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