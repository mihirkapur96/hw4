/* Homework 4
Exercise 5 JavaScript code
*/
console.log("Mihir's output from Homework 4 Exercise 5");
const word= prompt("Enter a word");
vowels= ["a","e","i","o","u","y"];

let numOfVowels = 0;

function getvowel (word) {
    var j=0;

    for (let i = 0;i< word.length;i++){
        if (vowels.includes(word.charAt(i).toLowerCase())) {
            j++;
        }
    }
    return j;
}

function isPalindrome(word) {
    let reversed = "";
    for (let i = 0;i< word.length;i++){
        reversed = word.charAt(i) + reversed;
    }
    return reversed === word;
}



numOfVowels = getvowel(word);

let palindrome = isPalindrome(word.toLowerCase());
if (palindrome) {
    console.log(`${word} contains ${numOfVowels} and is a palindrome`);
} else {
    console.log(`${word} contains ${numOfVowels} and is not a palindrome`);
}