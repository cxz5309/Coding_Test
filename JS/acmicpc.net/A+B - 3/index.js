const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2`
).split('\n');
 
// //case '1 1'
// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();
 
// const lineSplit = input();
// const wordSplit = lineSplit.split(' ').map(Number);

//case 't'
//'1 1'
//...
var testCase;
var lineSplit = [];

testCase = stdin[0];
stdin.shift();

for(let i=0; i<testCase; i++){
    lineSplit.push(stdin[i]);
}


//--------------------------------------------------------

function solution(tc, line){
    let answer = [];
    for(var i=0;i<tc;i++){
        let word = line[i].split(' ').map(Number);
        let sum = word[0] + word[1];
        answer.push(sum);
    }
    return answer;
}


console.log(solution(testCase, lineSplit).join("\n"));