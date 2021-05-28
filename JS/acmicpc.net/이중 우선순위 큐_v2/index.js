const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `2
7
I 16
I -5643
D -1
D 1
D 1
I 123
D -1
9
I -45
I 653
D 1
I -642
I 45
I 97
D 1
D -1
I 333`
).split('\n');

let testCase;
let calculateNum = [];
let lineSplit;
let op = [];
let nums = [];
let shiftNum = 0;

testCase = Number(stdin[shiftNum]);
shiftNum++;
let answer = [];

for(let i=0; i<testCase; i++){
    answer = [];
    calculateNum.push(Number(stdin[shiftNum]));
    shiftNum++;

    op = [];
    nums = [];

    for(let j = 0; j < calculateNum[i]; j++){
        lineSplit = stdin[shiftNum].split(' ');
        shiftNum++;

        op.push(lineSplit[0]);
        nums.push(Number(lineSplit[1]));
    }

//--------------------------------------------------------
    for(let j = 0; j < calculateNum[i]; j++){
        if(op[j] === 'I'){
            answer.push(nums[j]);
            answer.sort((a, b) => {
                return a - b;
            });
        }
        else if(op[j] === 'D'){
            if (nums[j] === 1) {
                answer.pop();
              } else {
                answer.shift();
              }
        }
    }
    if (answer.length === 0) {
        console.log("EMPTY");
    }
    else{
        console.log(answer[answer.length - 1] + " " + answer[0])
    }
}
