"use strict";
var array = ["big", "huge", "humongous", "small", "tiny", "little"];

// 1. Loop through the array and print all elements to the console
const newFxn1 = (array) => {
  for (var i = 0; i < array.length; i++) console.log(array[i]);
};
newFxn1(array);

// 2. Loop through the array, transform the strings

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

// 3&4. filter the array using splice()
const newFxn3 = (newArray) => {
  var small = newArray.splice(3);
  console.log(small);
  var big = newArray.splice(0, 3);
  console.log(big);
};
newFxn3(newArray);
// 3&4.
var small = ["small", "tiny", "little"];
var big = ["big", "huge", "humongous"];
var bigArray = [];
const fxn1 = (array) => {
  console.log(array.includes(big, 0));
};
fxn1(array);

// 4. using .forEach for question1
const newFxn4 = (array) => {
  array.forEach((i) => {
    console.log(i);
  });
};
newFxn4(array);

// 4.1 using .forEach for newFxn2
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

// 4.2 using .forEach to filter
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

// 2. using .forMap to loop through the Array
var newArray1 = array.map(newFxn7);
function newFxn7(value) {
  if (array.indexOf(value) < 3) {
    return value.toUpperCase() + "!";
  } else {
    return value.toLowerCase() + "...";
  }
}
console.log(newArray1);

// 3. using .filter to filter the Array
var newFxn8 = (value) => {
  return value == value.toLowerCase();
};
var newArray2 = newArray1.filter(newFxn8);
console.log(newArray2);

// 3.1 using .filter to ilter the Array
var newFxn9 = (value) => {
  return value == value.toUpperCase();
};
var newArray3 = newArray1.filter(newFxn9);
console.log(newArray3);
