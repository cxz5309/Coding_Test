const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 3`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
 
const lineSplit = input();
const wordSplit = lineSplit.split(' ').map(Number);

//--------------------------------------------------------

let a = wordSplit[0];
let b = wordSplit[1];

function solution(a, b){
    let answer = [];
    answer.push(a+b);
    answer.push(a-b);
    answer.push(a*b);
    answer.push(parseInt(a/b));
    answer.push(a%b);
    return answer;
}


console.log(solution(a, b).join("\n"));