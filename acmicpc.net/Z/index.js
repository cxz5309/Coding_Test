const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 3 1`
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
let init = [[0, 1], [2, 3]];

//--------------------------------------------------------

let size = Math.pow(2, n);
let arr = Array.from(Array(size), () => new Array(size).fill(null));

function multiple2Arr(mul){
    return init.map((y) => {
        return y.map((x) =>{
            return x * mul;
        });
    });
}

//console.log(init);

function logic(arr, init, n, x){
    let matrix = Math.pow(2, (x));
    for(var i=0;i<matrix;i++){
        for(var j=0;j<matrix;j++){
            if(arr[j][i] == null){
                arr[j][i] = init[j%2][i%2] + Math.pow(2, (x));
            }
        }
    }
    init = arr.slice();
    console.log(arr);
    x++;

    if(n<x){
        return;
    }
    logic(arr, init, n, x);
}

logic(arr, init, n, 1);
//console.log(arr);

function solution(input1, input2){
   let answer = [];
   return answer;
}


//console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));