const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `
6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`
).split('\n');
 
/*case 't'
'1 1'
...*/

var horizontal;
var vertical;
var lineSplit = [];

lineSplit = stdin[0];
vertical = Number(lineSplit[0]);
horizontal = Number(lineSplit[1]);
stdin.shift();
stdin.shift();

var map = Array.from(Array(horizontal), () => new Array(vertical).fill(0));


for(let i=0; i<vertical; i++){
    lineSplit = stdin[0];
    for(let j = 0;j<horizontal;j++){
        
    }
}


//--------------------------------------------------------

let a = wordSplit[0];
let b = wordSplit[1];

function solution(input1, input2){
   let answer = [];
   return answer;
}


console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));