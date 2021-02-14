/* Homework 4
Exercise 6 JavaScript code
*/
console.log("Mihir's output from Homework 4 Exercise 6");
const num= Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log (`${num}`);
let num1= Number(prompt("Guess a number"));
let counter=1;
while (num1!==num){
    if (num1>num){
        console.log ("Too high, guess again");
    } else if (num1<num){
        console.log ("Too low, guess again");
    } 
    num1= Number(prompt("Guess a number"));
    counter++

}
    console.log (`Correct! It took you ${counter} attempts to guess the correct number`);

