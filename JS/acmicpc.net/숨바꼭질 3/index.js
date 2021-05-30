const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 17
    `
).split('\n');
 
const wordSplit = stdin[0].split(' ').map(Number);

let N = wordSplit[0];
let K = wordSplit[1];

//--------------------------------------------------------

let visited = Array(100001).fill(0);
const walk = [-1, 1];

function range(x){
    if(x<0 || x>100000)
        return false;
    return true;
}

//BFS
function BFS(start){
    visited[start] = 1;
    unVisitQ = [];
    unVisitQ.push([start, 0]);

    let nextX;
    let nextCnt;
    while (unVisitQ.length > 0) {
        const current = unVisitQ.shift();
        
        console.log(current[0] + " " + current[1]);

        if(current[0] === K){
            return current[1];
        }
        
        nextX = current[0] * 2;
        nextCnt = current[1];
        //큐에 삽입 제외 조건
        if(range(nextX) && visited[nextX] != 1){
            //우선순위대로 삽입
            visited[nextX] = 1;
            unVisitQ.unshift([nextX, nextCnt])
        }
        for(let i = 0; i < 2; i++){
            nextX = current[0] + walk[i];
            nextCnt = current[1] + 1;
            //큐에 삽입 제외 조건
            if(range(nextX) && visited[nextX] != 1){            
                //우선순위대로 삽입
                visited[nextX] = 1;
                unVisitQ.push([nextX, nextCnt]);
            }
        }
    }
    return -1;
}

function solution(){
    let answer;
    answer = BFS(N);
    return answer;
}


console.log(solution());