"use strict";

// given array below
var colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const myFunction = (colors) => {
  colors.forEach((item, i) => {
    var a;
    a = i + 1;
    console.log(a + " choice " + "is " + item);
  });
};
myFunction(colors);
