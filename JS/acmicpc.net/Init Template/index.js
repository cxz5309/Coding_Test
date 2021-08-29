const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4
14 9 12 10
1 11 5 4
7 15 2 13
6 3 16 8`
).split('\n');
 
let testCase;
var lineSplit = [];

testCase = Number(stdin[0]);
stdin.shift();

for(let i=0; i<testCase; i++){
    lineSplit.push(stdin[i].split(' ').map(Number));
}

console.log(lineSplit);
//--------------------------------------------------------

function solution(t, map){
    let answer = [];
    return answer;
}


console.log(solution(testCase, lineSplit));