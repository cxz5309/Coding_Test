const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
5
4
3
2
1`
).split('\n');


/*case 't'
'1
2
3
4
5'
...*/

var testCase;
var lineSplit = [];

testCase = stdin[0];
stdin.shift();

for (var i = 0; i < testCase; i++) {
    lineSplit.push(Number(stdin[i]));
}

//--------------------------------------------------------
function merge(left, right) {
    let answer = [];
    while (left.length != 0 && right.length != 0) {
        left[0] <= right[0] ? answer.push(left.shift()) : answer.push(right.shift());
    }
    if(left.length == 0){
        answer.push(...right);
    }
    if(right.length == 0){
        answer.push(...left);
    }
    return answer;
}

function mergeSort(arr) {
    const len = arr.length;

    if (len <= 1){
        return arr;
    }
    const mid = Math.floor(len / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function solution(input) {
    let answer = [];

    answer = mergeSort(input);

    return answer;
}


console.log(solution(lineSplit));