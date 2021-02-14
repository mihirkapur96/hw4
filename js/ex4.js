/* Homework 4
Exercise 4 JavaScript code
*/
console.log("Mihir's output from Homework 4 Exercise 4");
let words = [];

let word = prompt("Enter a word");
while (word.toLowerCase()!== "stop") {
    words.push(word);
    word = prompt("Enter a word");
}
if (words.length>0){
    console.log("You entered the following words:");
    
    for(let i=0; i < words.length; i++) {
        console.log(words[i]);
    }

} else {
    console.log("No words to display, Stop was the first word entered.");
}
