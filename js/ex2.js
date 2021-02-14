/* Homework 4
Exercise 2 JavaScript output
*/

console.log("Mihir's output from Homework 4 Exercise 2");
const r= Number(prompt("Enter the circle radius"));
const circle = {
    circumference : 2*Math.PI*r ,
    area : Math.PI*r*r,
}
console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);