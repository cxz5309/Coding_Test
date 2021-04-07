const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5`
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

function solution(input1, input2){
   let answer = [];
   return answer;
}


console.log(solution(wordSplit[0], wordSplit[1]));