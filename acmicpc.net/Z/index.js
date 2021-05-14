const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5`
).split('\n');
 

//case '1 1'

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
 
const lineSplit = input();
const wordSplit = lineSplit.split(' ').map(Number);

const n = wordSplit[0];
const r = wordSplit[1];
const c = wordSplit[2];

//--------------------------------------------------------

const size = Math.pow(2, n);
const arr = Array.from(Array(size), () => new Array(size));

function logic(arr, n){
    if(n === 1){
        arr[0 + (size/2)][0]
    }
}

function solution(input1, input2){
   let answer = [];
   return answer;
}


console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));