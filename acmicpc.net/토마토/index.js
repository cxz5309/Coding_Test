const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 4
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

lineSplit = stdin[0].split(' ');
vertical = Number(lineSplit[0]);
horizontal = Number(lineSplit[1]);
console.log(vertical);
console.log(horizontal);
stdin.shift();

var map = Array.from(Array(horizontal), () => new Array(vertical).fill(0));


for(let i=0; i<horizontal; i++){
    lineSplit = stdin[0].split(' ');
    for(let j = 0;j<vertical;j++){
        if(Number(lineSplit[j]) == 1){
            map[i][j] = 1;
        }
    }
    stdin.shift();
}

console.log(map);

//--------------------------------------------------------

function solution(input1, input2){
   let answer = [];
   return answer;
}

//console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));