"use strict";
var str = [1, 8, 9, 5, 6, 7, 2];
// Write a function that finds the highest number within an array. (Pseudocode pls)
// wrtie function that takes in any array
const highestValue = (array) => {
  // determine the length of the array
  let c = array.length;
  // arrange the array in acsending order then return the last element
  array.sort(function (a, b) {
    return b - a;
  });
  return array[0];
};
console.log(highestValue(str));
