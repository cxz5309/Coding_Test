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

testCase = Number(stdin[0]);
stdin.shift();
for (var i = 0; i < testCase; i++) {
    lineSplit.push(Number(stdin[i]));
}

//--------------------------------------------------------
function merge(left, right) {
    let answer = [];
    let l = 0;
    let r = 0;
    while (left.length > l && right.length > r) {
        if(left[l] <= right[r]){
            answer.push(left[l]);
            l++;
        }else{
            answer.push(right[r]);
            r++;
        }
    }

    if(left.length == l){
        answer = answer.concat(right.slice(r));
    }
    if(right.length == r){
        answer = answer.concat(left.slice(l));
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


console.log(solution(lineSplit).join("\n"));