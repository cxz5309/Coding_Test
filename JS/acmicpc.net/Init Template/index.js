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

// /*case 't'
// '1 1'
// ...*/

// var testCase;
// var lineSplit = [];

// testCase = stdin[0];
// stdin.shift();

// for(let i=0; i<testCase; i++){
//     lineSplit.push(stdin[i]);
// }


//--------------------------------------------------------

let a = wordSplit[0];
let b = wordSplit[1];

function solution(input1, input2){
    let answer = [];
    return answer;
}


console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));