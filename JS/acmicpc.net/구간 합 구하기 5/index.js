const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 4
1 2
3 4
1 1 1 1
1 2 1 2
2 1 2 1
2 2 2 2`
).split('\n');
 
var N, M;
var lineSplit;
let shift = 0;

lineSplit = stdin[shift++].split(' ');;

N = lineSplit[0];
M = lineSplit[1];

var map = [];
var sumMap = [];

for(let i=0; i<N; i++){
    lineSplit = stdin[shift++].split(' ');
    let tmp = [];
    for(let j = 0; j < N; j++){
        tmp.push(Number(lineSplit[j]));
    }
    map.push(tmp);
}

sumMap = map.slice();

//--------------------------------------------------------

//시간초과 문제 발생 -> 확인결과 빠른 입출력 문제
//빠른 입출력 방법
//-> Node.js의 경우 매 번 console.log로 출력하면 시간초과를 받고, 하나의 문자열에 결과값과 개행문자를 저장해서 마지막에 출력했을 때 1496ms 받아서 통과했습니다.

function chkRange(isMap, y, x){
    if(y<0 || x<0){
        return 0;
    }
    if(isMap){
        return map[y][x];
    }
    else{
        return sumMap[y][x];
    }
}

for(let i = 0; i < N; i++){
    for(let j = 0; j< N ; j++){
        sumMap[i][j] = chkRange(true, i, j) + chkRange(false, i-1, j) + chkRange(false, i, j - 1) - chkRange(false, i-1, j-1);
    }
}

function solution(){
    let answer = "";
    //start[x, y], end[x, y]    
    let start = [];
    let end = [];
    for(let i = 0; i< M; i++){
        //메모리 초과땜에 testCase 배열 저장 삭제
        lineSplit = stdin[shift++].split(' ');

        start = [lineSplit[0] - 1, lineSplit[1] - 1];
        end = [lineSplit[2] - 1, lineSplit[3] - 1];

        //메모리 초과땜에 answer 배열 삭제
        answer += chkRange(false, end[0], end[1]) 
        - chkRange(false, end[0], start[1] - 1) 
        - chkRange(false, start[0] - 1, end[1]) 
        + chkRange(false, start[0] - 1, start[1] - 1);
        answer = i !== M-1 ? answer + "\n" : answer;
    }
    return answer;
}

console.log(solution());