const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
4
7
10`
).split('\n');
 
var testCase;
var nArr = [];

testCase = Number(stdin[0]);
stdin.shift();

for(let i=0; i<testCase; i++){
    nArr.push(Number(stdin[i]));
}


//--------------------------------------------------------

const elementNum = [1, 2, 3];

//n에서 1,2,3을 빼서 0으로 만드는 모든 과정
//'모든' 과정이므로 bfs또는 dfs 사용


let allWay = 0;

//DFS
function DFS(n, count){
    if(count > n){
        return;
    }
    if(count === n){
        allWay++;
        return;
    }

    for(var i=0;i<3;i++){
        DFS(n, count + elementNum[i]);
    }
}

function solution(){
   let answer = [];
   for(var i=0;i<testCase;i++){
        allWay = 0;
        DFS(nArr[i], 0);
        answer.push(allWay);
   }
   return answer;
}


console.log(solution().join("\n"));