"use strict";
// create function that takes in a parameter
const myFunction = (input) => {
  // create an empty array
  var value = [];
  // start loop
  for (var i = 1; i <= input; i++) {
    //   divide by all three figures
    let first = i % 2;
    let second = i % 3;
    let third = i % 5;
    // state conditions
    // check it it is divisible by all
    if (first == 0 && second == 0 && third == 0) {
      value.push("Yu-gi-oh");
      // first check if it is divisible by 2
    } else if (first == 0) {
      if (second == 0 && third == 1) {
        value.push("yu-gi");
      } else if (third == 0 && second == 1) {
        value.push("yu-oh");
      } else {
        value.push("yu");
      }
      // then check if it is divisible by 3
    } else if (second == 0) {
      if (first == 0 && third == 1) {
        value.push("yu-gi");
      } else if (third == 0 && first == 1) {
        value.push("gi-oh");
      } else {
        value.push("gi");
      }
      // then check if it is divisible by 5
    } else if (third == 0) {
      if (second == 0 && first == 1) {
        value.push("yu-oh");
      } else if (first == 0 && second == 1) {
        value.push("yu-oh");
      } else {
        value.push("oh");
      }

      // if all the above check fails
    } else {
      value.push(i);
    }
  }
  console.log(value);
};
myFunction(100);
