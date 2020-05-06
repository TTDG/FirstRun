"use Strict";

const test1 = [{"principal": 2500, "time": 1.8,},
    {"principal": 1000, "time": 5,},
    {"principal": 3000, "time": 1,},
    {"principal": 2000, "time": 3,}
];

function interestCalculator(array) {
var rate = 0;
var interestData = [];
array.forEach(function(i) {
    if (i.principal >= 2500 && i.time > 1 && i.time < 3){
        rate = 3
    } else if (i.principal >= 2500 && i.time >= 3){
        rate = 4
    } else if (i.principal < 2500 || i.time <= 1){
        rate = 2
    } else {
        rate = 1}
    
const Interest = (i.principal * i.time * rate)/100;
interestData.push(
    {"principal": i.principal,
    "time": i.time,
    "rate": rate,
    "Interest": Interest
    });
});
console.log(interestData);
console.log(interestData[0]);
console.log(interestData[1]);
console.log(interestData[2]);
console.log(interestData[3]);
}
interestCalculator(test1);