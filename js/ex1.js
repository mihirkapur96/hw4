/* Homework 4
Exercise 1 JavaScript code
*/

console.log("Mihir's output from Homework 4 Exercise 1");

let number1= Number(prompt("Enter the 1st number"));
let number2= Number(prompt("Enter the 2nd number"));
let operation = prompt("Mathematical operation");
function calculation () {
    if (operation=="+") {
        console.log (` ${number1} + ${number2} = ${number1+number2}`);
    } else if (operation=="-"){
        console.log (` ${number1} - ${number2} = ${number1-number2}`);
    } else if (operation=="*"){
        console.log (` ${number1} * ${number2} = ${number1*number2}`);
    } else if (operation=="/"){
        console.log (` ${number1} / ${number2} = ${number1/number2}`);
    }
}
calculation();