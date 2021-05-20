const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `3
0 0 0
0 0 0
0 9 0`
).split('\n');

/*case 't'
'1 1'
...*/

var n;
var lineSplit = [];

n = parseInt(stdin[0]);
stdin.shift();
var map=Array.from(Array(n), () => Array(n).fill(null))

for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        map[i][j] = stdin[i].split(" ")[j];
    }
}
console.log(map);

//--------------------------------------------------------

// let a = wordSplit[0];
// let b = wordSplit[1];

// function solution(input1, input2) {
//     let answer = [];
//     return answer;
// }


// console.log(solution(wordSplit[0], wordSplit[1]));