"use strict";

function multiplyArray(a) {
var arr = [];
    for (var i = 0; i < a.length; i++){
            arr[i] = a[i] * 2;
    }
    return arr;
}
console.log(multiplyArray([2,3,1,5]));
console.log(multiplyArray([2,5,10]));
