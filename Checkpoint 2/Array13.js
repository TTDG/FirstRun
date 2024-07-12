"use strict";
//Array 13: Given an array, write a function that will check how many times a specified character shows up inside of the array. If there’s no occurrence of the character in the array, return null.

const charCount = function (a, b) {
  let count = 0;
  a.forEach((item) => {
    if (b === item) {
      count += 1;
    }
  });
  return `${b} appears ${count} times`;
};

console.log(charCount([2, 5, 3, 1, 3, 7, 8, 3], 3));

// Array 14: Write a function to check if 2 strings are palindromes of each other. I.e If the 2 strings are palindromes (e.g. ‘ella’, ‘alle’), return true
const palindromes = function (a) {
  let b = a.split("").reverse().join("");
  if (a === b) {
    return true;
  } else {
    return false;
  }
};
console.log(palindromes("level"));

// Array 15: Write a function that takes in a number and can add the appropriate ordinal indicator (st, nd, rd, th). So given a number 1, the return will be 1st and given a number 5, the return will be 5th. (Hint: Convert the number into a string to make it easier to work with)

const position = function (number) {
  let numberArray = number.toString().split("");
  let len = numberArray.length;
  let z = len - 1;
  if (numberArray[z] == 1) {
    return `${number}st`;
  } else if (numberArray[z] == 2) {
    return `${number}nd`;
  } else if (numberArray[z] == 3) {
    return `${number}rd`;
  } else {
    return `${number}th`;
  }
};

console.log(position(523));

//Array 16:Write a simple function to join all elements of the following array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"]; Expected Output : "Red Green White Black”

const joinFunction = function (sample) {
  return sample.join(" ");
};

console.log(joinFunction(["Red", "green", "white", "black"]));

// Using the array below for all functions following.
const myColor = ["Red", "green", "white", "black"];
// Array 17:Write a JavaScript function to remove a specific element from an array.done
// method 1 .filter
const deleteElement = function (array, item) {
  let newArray = array.filter((word) => word != item);

  return newArray;
};
console.log(deleteElement(myColor, "white"));

// Array 18:Write a JavaScript function to find if an array contains a specific element.done

const checking = function (array, item) {
  if (array.includes(item)) {
    return `The array contains ${item}`;
  } else {
    return `The array does not contain ${item}`;
  }
};
console.log(checking(myColor, "black"));

// Array 19:Write a function that takes in an array and returns random elements from the array
const randomElement = function (array) {
  let randomArray = Math.floor(Math.random() * array.length);
  return array[randomArray];
};
console.log(randomElement(myColor));

// Array 20: Write a function that takes in an array
// and returns another array with the first 2 items of the input array.
//  Constraint, the length of the input array should always be greater than 2
const firstTwo = function (array) {
  if (array.length > 2) {
    return array.splice(0, 2);
  } else {
    return "your array is not more than 2";
  }
};

console.log(firstTwo(myColor));
