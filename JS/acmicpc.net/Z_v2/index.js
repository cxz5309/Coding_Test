const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 7 7`
).split('\n');
 
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

let matrix = [];
let prevMatrix = [];
let prevMatrix4 = [];

function matrixGenerator(){
    let pow2 = 1;
    prevMatrix.push(pow2);
    prevMatrix4.push(pow2);
    for(var i=0;i<n + 1;i++){
        pow2 *= 2;
        matrix.push(pow2)
        prevMatrix.push(pow2);
        prevMatrix4.push(pow2 * pow2);
    }
}

var nowAdder;
let x;
let y;
function logic(depth, adder){
    //console.log(depth);
    // console.log(adder);

    // console.log(Math.floor((c % matrix[depth])/prevMatrix[depth]));
    // console.log(Math.floor((r % matrix[depth])/prevMatrix[depth]));

    x = Math.floor((c % matrix[depth])/prevMatrix[depth]);
    y = Math.floor((r % matrix[depth])/prevMatrix[depth]);
    nowAdder = init[y][x] * prevMatrix4[depth];

    // console.log(nowAdder);
    // console.log("^^^^^^");
    
    adder += nowAdder;
    depth++;

    if(depth === n)
        return adder;
    
    return logic(depth, adder);
}
//console.log(arr);

function solution(){
   let answer;
   matrixGenerator();
   answer = logic(0, 0);
   return answer;
}


console.log(solution());