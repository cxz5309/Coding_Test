const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `4 5
CCBDE
AAADE
AAABF
CCBBF`
).split('\n');

const m = Number(stdin[0].split(' ')[0]);
const n = Number(stdin[0].split(' ')[1]);

stdin.shift();
let map = [];
let chk = [];

const moveCrossX = [0, 1, 0, -1];
const moveCrossY = [1, 0, -1, 0];
const moveSquareX = [0, 1, 0, 1];
const moveSquareY = [0, 0, 1, 1];

for(let i = 0; i < m; i++){
    map.push(stdin.shift().split(''));
    chk.push(new Array(n).fill(0));
}
console.log(map);
console.log(chk);
//--------------------------------------------------------

function chkSquare(x, y){
    if(x + 1 >= n || y + 1 >= m){
        return false;
    }

    const character = map[y][x];
    for(let i = 0; i<4; i++){
        if(map[y + moveSquareY[i]][x + moveSquareX[i]] !== character){
            return false;
        }
    }
    for(let i = 0; i<4; i++){
        chk[y + moveSquareY[i]][x + moveSquareX[i]] = 1;
    }
    return true;
}

function range(x, y){
    if(x<0 || y<0 || x>=n || y>=m){
        return false;
    }
    return true;
}

function BFS(x, y){
    unVisit = [];
    unVisit.push([x, y]);

    if(chkSquare(x, y)){
        chk[y][x] = 2;
    }
    else{
        chk[y][x] = -1;
    }

    while(unVisit.length > 0){
        let tmp = unVisit.shift();
        let next = [];//next[0] = x좌표, next[1] = y좌표

        if(chkSquare(tmp[0], tmp[1])){
            console.log("!!!!");
            chk[tmp[1]][tmp[0]] = 2;
        }
        else{
            chk[tmp[1]][tmp[0]] = -1;
        }

        console.log(tmp[0] + " " + tmp[1]);
        for(let i = 0; i<4; i++){
            next = [tmp[0] + moveCrossY[i], tmp[1] + moveCrossX[i]];

            if(!range(next[0], next[1])){
                continue;
            }
            if(chk[next[1]][next[0]] == -1 || chk[next[1]][next[0]] == 2 ){
                continue;
            }
            unVisit.push([next[0], next[1]]);
            chk[next[1]][next[0]] = -1;
        }
    }
}

function idiot(){
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            chkSquare(i, j);
        }
    }
}

function solution() {
    let answer = 0;
    idiot();
    
    console.log(map);
    console.log(chk);
    for(let i = 0;i<m;i++){
        answer += chk[i].reduce((cnt, now)=>{
            return cnt + now;
        }, 0);
    }
    return answer;
}

console.log(solution());