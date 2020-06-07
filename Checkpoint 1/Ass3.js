"use strict";
function wordLength(word) {
    if (word.length >= 5){
        return "This word is long";
    }else {
        return "This word is short"
    }
}
console.log(wordLength("International"));
