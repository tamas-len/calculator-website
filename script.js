//generate number buttons so later they can be referenced in js
const btnContainer = document.querySelector('.button-container');
let htmlToAdd = "";

for(let i = 0; i < 10; i++)
{
    htmlToAdd += `<button class = "nr">${i}</button>`
}

btnContainer.innerHTML += htmlToAdd;



//add eventlistener for click to all number buttons
const nrButtons = document.querySelectorAll(".nr");

nrButtons.forEach(element => {
    element.addEventListener('click', () => {console.log('works')});
});


//create buttons in js

const equalbtn = document.querySelector('#equal');

equalbtn.addEventListener('click', () => {console.log("help")});

const addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => {console.log('nice')});



let num1 = 0;
let num2 = 0;
let operator = "";

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