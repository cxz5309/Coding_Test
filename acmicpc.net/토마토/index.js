const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`
).split('\n');
 
/*case 't'
'1 1'
...*/

var horizontal;
var vertical;
var lineSplit = [];

lineSplit = stdin[0].split(' ');
vertical = Number(lineSplit[0]);
horizontal = Number(lineSplit[1]);
console.log(vertical);
console.log(horizontal);
stdin.shift();

var map = Array.from(Array(horizontal), () => new Array(vertical).fill(0));
var visited = [];

for(let i=0; i<horizontal; i++){
    lineSplit = stdin[0].split(' ');
    for(let j = 0;j<vertical;j++){
        if(Number(lineSplit[j]) == 1){
            map[i][j] = 1;
        }
    }
    stdin.shift();
}

console.log(map);

//--------------------------------------------------------

//BFS
function BFS(map, startX, startY){
    let nextX;
    let nextY;
    unVisitQ = [];
    unVisitQ.push([startX, startY, count]);

    let retu = 0;
    while (unVisitQ.length > 0) {
        const current = unVisitQ.shift();
        current.count++;

        if(retu<current.count){
            retu = current.count;
        }
        for(var i = 0; i < 4; i++){
            nextX = current[0] + moveX[i];
            nextY = current[1] + moveY[i];

            //큐에 삽입 제외 조건
            if(!range(nextX, nextY))
                continue;

            if(map[nextX][nextY] == -1)
                continue;

            if(visited[nextX][nextY] == 1)
                continue;
            
            visited[nextX][nextY] = 1;
            unVisitQ.push([nextX, nextY])
        }
    }
    return retu;
}

function range(x, y){
    if (x<0||y<0||x>=width||y>=height){
        return false;
    }
    return true;
}

function solution(map){
   let answer;
   for(let i = 0;i<horizontal;i++){
       for(let j = 0; j<vertical; j++){
           if(map[i][j] != -1 && visited[i][j] != 1){
               BFS(map, i, j);
           }
       }
   }
   return answer;
}

console.log(solution(map));