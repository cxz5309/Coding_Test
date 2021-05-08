const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`
).split('\n');

const moveX = [0, 1, 0, -1];
const moveY = [1, 0, -1, 0];

var height;
var width;
var lineSplit = [];

var shift = 0;

lineSplit = stdin[0 + shift].split(' ');
width = Number(lineSplit[0]);
height = Number(lineSplit[1]);
// console.log(width);
// console.log(height);
shift++;

var map = Array.from(Array(height), () => new Array(width));
var visited = Array.from(Array(height), () => new Array(width));
unVisitQ = [];
let tmpNum;

for (let i = 0; i < height; i++) {
    lineSplit = stdin[0 + shift].split(' ');
    for (let j = 0; j < width; j++) {       
        tmpNum = Number(lineSplit[j]);    

        map[i][j] = tmpNum;
        visited[i][j] = tmpNum == -1 ? 1 : 0;

        if (tmpNum >= 1) {
            unVisitQ.push([j, i, 0]);
        }
    }
    shift++;
}

//console.log(map);
//--------------------------------------------------------

//BFS
function BFS(map) {
    let nextX;
    let nextY;
    let current;
    let retu = 0;

    while (unVisitQ.length > 0) {
        //망할 js shift 속도가 queue 구현한것보다 325배 느리단다..
        //그럼 큐를 만들어놓던가..
        current = unVisitQ.shift();
        visited[current[1]][current[0]] = 1;
        // console.log('현재위치 ' + current[0], ', ' + current[1]);
        // console.log('현재수 ' + current[2]);

        retu = retu < current[2] ? current[2] : retu;

        for (var i = 0; i < 4; i++) {
            nextX = current[0] + moveX[i];
            nextY = current[1] + moveY[i];
            nextCount = current[2] + 1;

            //큐에 삽입 제외 조건
            if (!range(nextX, nextY) || map[nextY][nextX] == -1 || visited[nextY][nextX] == 1)
                continue;

            visited[nextY][nextX] = 1;
            unVisitQ.push([nextX, nextY, nextCount])
        }
    }
    return retu;
}

function range(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) {
        return false;
    }
    return true;
}

function solution(map) {
    let answer;
    let flag = 123456789;

    answer = BFS(map);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(visited[i][j] != 1){
                flag = -1;
            }
        }
    }
    answer = flag < answer ? flag : answer
    return answer;
}

console.log(solution(map));