"use strict";
var str = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// Write a JavaScript function to find the most frequent item of an array. Kinda Hard (Pseudocode pls)

// create a function to loop through each array.
const frequency = (array) => {
  // initialize a variable to check maximum number.
  let maxCount = 0;
  for (var i = 0; i < array.length; i++) {
    // initialise another variable to count each value
    let count = 0;
    for (var j = 1; j < array.length; j++) {
      // check if each value is repeated by equating the 2 loops
      if (array[i] === array[j]) {
        // if repeated, add one to count
        count += 1;
      }
    }
    // transfer count to max count if count is higher
    // and print the most frequent item and it's frequency.
    if (count > maxCount) {
      var item = array[i];
      maxCount = count;
    }
  }
  return item + " apprears " + maxCount + " times ";
};
console.log(frequency(str));
