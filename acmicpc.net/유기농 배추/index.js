const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`
).split('\n');
 
var testCase;
let width, height, count;
let map = [];
let visited = [];
const moveX= [ 1, 0, -1, 0 ];
const moveY= [ 0, 1, 0, -1 ];


var shiftNum = 0;
testCase = Number(stdin[0 + shiftNum]);
shiftNum++;

for(let i=0; i<testCase; i++){
    let tmpArr = stdin[0+shiftNum].split(' ');
    shiftNum++;

    width = Number(tmpArr[0]);
    height = Number(tmpArr[1]);
    count = Number(tmpArr[2]);

    //맵, 방문한 맵 이차원배열
    map =  Array.from(Array(width), () => Array(height).fill(0));
    visited =  Array.from(Array(width), () => Array(height).fill(0));

    let mapLine = [];

    for(let j = 0; j< count; j++){
        mapLine = stdin[0 + shiftNum].split(' ');
        shiftNum++;
        map[Number(mapLine[0])][Number(mapLine[1])] = 1
    }
    console.log(solution());
}

//BFS
function BFS(map, startX, startY){
    let nextX;
    let nextY;
    unVisitQ = [];
    unVisitQ.push([startX, startY]);

    while (unVisitQ.length > 0) {
        const current = unVisitQ.shift();
        for(var i = 0; i < 4; i++){
            nextX = current[0] + moveX[i];
            nextY = current[1] + moveY[i];

            //큐에 삽입 제외 조건
            if(!range(nextX, nextY))
                continue;

            if(map[nextX][nextY] == 0)
                continue;

            if(visited[nextX][nextY] == 1)
                continue;
            
            visited[nextX][nextY] = 1;
            unVisitQ.push([nextX, nextY])
        }
    }
    return visited;
}

function range(x, y){
    if (x<0||y<0||x>=width||y>=height){
        return false;
    }
    return true;
}

function solution(){
    let answer = 0;

    for(var i = 0;i< width;i++){
       for(var j = 0; j < height; j++){
           if(map[i][j] == 1 && !visited[i][j] == 1){
               BFS(map, i, j);
               answer++;
           }
       }
    }
    return answer;
}


