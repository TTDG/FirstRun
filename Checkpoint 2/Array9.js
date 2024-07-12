"use strict";
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var array3 = [];
var array3 = array2.map((a, i) => a + (array1[i] || 0));

console.log(array3);
