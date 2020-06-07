"use strict";
// A function to compare equality between two numbers
function checkEquality(a,b) {
    if (a > b) {
        return "First number is greater than second number";
    } else if (a < b) {
        return "Second number is greater than the first number";
    } else {
        return "The numbers are the same";
    }
}
console.log(checkEquality(2,5));
console.log(checkEquality(5,5));
console.log(checkEquality(10,5));