/* Homework 4
Exercise 3 JavaScript code
*/
console.log("Mihir's output from Homework 4 Exercise 3");
const values = [3,11,7,2,9,10];

let sum = 0;
for (let i = 0;i<values.length;i++) {
    sum += values[i];
}
console.log (sum);
console.log (Math.max(...values));
console.log (Math.min(...values));
