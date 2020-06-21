"use strict";

// given array below
var colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const myFunction = (colors) => {
  var a;
  var b;
  colors.forEach((item, i) => {
    a = i + 1;
    console.log(a + " choice " + "is " + item);
  });
};
myFunction(colors);
