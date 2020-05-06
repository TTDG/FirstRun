"use strict";

function modifiedArray(a,b) {
    var arr = [];
    for (var i = 0; i < a.length; i++){
        arr[i] = a[i];
    }
    var b;
    a.push(b);
    return a;
}
console.log(modifiedArray([2,3,4,5], 8));
console.log(modifiedArray([5,4,10], 8));

