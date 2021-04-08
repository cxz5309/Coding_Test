const fs = require('fs');
const { format } = require('path');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5457
2
6 8`
).split('\n');
 

/*case 't'
'1 1'
...*/

var n;
var btnCount;
var brokenButtonArr = [];

nDest = stdin[0];
stdin.shift();

btnCount = stdin[0];
stdin.shift();

if(btnCount>0)
    brokenButtonArr = stdin[0].split(' ');

//--------------------------------------------------------

var nArr = n.split("");

function solution(n, bc, bbArr){
    let answer;

    //바로 누를 수 있는 경우
    
    let sol1Count;

    if(nArr.every((val)=>{
        return !bbArr.includes(val);
    })){
        sol1Count = nArr.length;
    }
    let downCount;
    let upCount;

    return answer;
}

function count(n, bbArr, accumulator){
    let nInt = n;
    let itor;
    while()
}


console.log(solution(n, btnCount, brokenButtonArr));