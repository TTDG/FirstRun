"use strict";
var array = ["big", "huge", "humongous", "small", "tiny", "little"];

// Loop through the array and print all elements to the console
const newFxn1 = (array) => {
  for (var i = 0; i < array.length; i++) console.log(array[i]);
};
newFxn1(array);

// Loop through the array, transform the strings

var newArray = [];
const newFxn2 = (array) => {
  for (var i = 0; i < array.length; i++)
    if (i < 3) {
      var a = array[i].toUpperCase() + "!";
      newArray.push(a);
    } else {
      var b = array[i].toLowerCase() + "...";
      newArray.push(b);
    }
  console.log(newArray);
};
newFxn2(array);

// filter the array using splice()
const newFxn3 = (newArray) => {
  var small = newArray.splice(3);
  console.log(small);
  var big = newArray.splice(0, 3);
  console.log(big);
};
newFxn3(newArray);

// using .forEach for newFxn1
const newFxn4 = (array) => {
  array.forEach((i) => {
    console.log(i);
  });
};
newFxn4(array);
// using .forEach for newFxn2
var newArry = [];
const newFxn5 = (array) => {
  array.forEach((item) => {
    if (array.indexOf(item) <= 2) {
      newArry.push(item.toUpperCase() + "!");
    } else if (array.indexOf(item) > 2) {
      newArry.push(item.toLowerCase() + "!");
    }
  });
  console.log(newArry);
};
newFxn5(array);
// using .forEach to filter
var newArry1 = [];
var newArry2 = [];
const newFxn6 = (array) => {
  array.forEach((item) => {
    if (array.indexOf(item) <= 2) {
      newArry1.push(item.toUpperCase() + "!");
    } else if (array.indexOf(item) > 2) {
      newArry2.push(item.toLowerCase() + "...");
    }
  });
  console.log(newArry1);
  console.log(newArry2);
};
newFxn6(array);
// using .forMap for newFxn1
