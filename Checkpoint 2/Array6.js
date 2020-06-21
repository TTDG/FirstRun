"use strict";
var str = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function findOdd(num) {
  // create a new object
  var count = {};
  // loop through the array
  num.forEach(function (item) {
    // count number of times each item appears in the array.
    // push it into the new object.
    count[item] = (count[item] || 0) + 1;
    console.log(count[item]);
  });
  return count;
}

console.log(findOdd(str));
// findOdd([1, 2, 1]);
