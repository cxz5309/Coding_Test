const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 7 7`
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
let arr = Array.from(Array(size), () => new Array(size));

for(var i = 0;i<2;i++){
    for(var j = 0;j < 2;j++){
        arr[i][j] = init[i][j];
    }
}

//console.log(init);
let matrix, prevMatrix, adder;

function logic(arr, x){
    matrix = Math.pow(2, (x));
    prevMatrix = Math.pow(2, (x-1));
    adder = prevMatrix * prevMatrix;
    
    // console.log(matrix);
    // console.log(prevMatrix);
    // console.log(adder);
    
    for(var i=0;i<matrix;i++){
        for(var j=0;j<matrix;j++){
            if(!arr[j][i]){
                arr[j][i] = arr[j%prevMatrix][i%prevMatrix] + (adder * init[Math.floor(j/prevMatrix)][Math.floor(i/prevMatrix)]) ;
            }
        }
    }

    // for(var i=0;i<size;i++){
    //     console.log(arr[i] + " ")
    // }    

    if(arr[r][c]){
        return arr[r][c];
    }

    if(n === x){
        return 0;
    }
    
    return logic(arr, ++x);
}

//console.log(arr);

function solution(){
   let answer;
   
   answer = logic(arr, 1);
   return answer;
}


console.log(solution());