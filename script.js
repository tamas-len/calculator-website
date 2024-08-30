
const equalbtn = document.querySelector('#equal');
const btnContainer = document.querySelector('.button-container');

let htmlToAdd = "";

for(let i = 0; i < 10; i++)
{
    htmlToAdd += `<button>${i}</button>`
}

btnContainer.innerHTML = htmlToAdd;



let num1 = 0;
let num2 = 0;
let operator = "";

function calc()
{
    let num1 = prompt(1);
    let num2 = prompt(2);
    let operator = prompt('operator');

/*
csinalj egy for loopot es azzal hozd letre a szam gombokat, majd a tartalmuk alapjan tudod mit nyomsz le es looppal adj hozzajuk eventlistenert is
az odin etch a sketch prjketemben van hasnonlo megoldas a gridhez
innerhtml es string
*/


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

equalbtn.addEventListener('click', () => {calc()});