"use Strict";

const test1 = [
    {principal: 2500, time: 1.8,},
    {principal: 1000, time: 5,},
    {principal: 3000, time: 1,},
    {principal: 2000, time: 3,}
];

function interestCalculator(array) {
var rate = 0;
var interestData = [];
for (var i = 0; i < array.length; i++){
    if (principal >= 2500){
        if (time > 1 && time < 3){
        rate = 3}
    } else if (principal >= 2500 && time <= 3){
        rate = 4
    } else if (principal < 2500 || time <= 1){
        rate = 2
    } else {
        rate = 1}
    };

const Interest = (principal * time * rate)/100;
interestData.push(
    {principal : principal,
    time: time,
    rate: rate,
    Interest: Interest
    });
}
console.log(interestData);


console.log(interestCalculator(test1));