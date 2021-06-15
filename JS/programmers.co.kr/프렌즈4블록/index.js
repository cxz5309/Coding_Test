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

//--------------------------------------------------------

const moveSquareX = [0, 1, 0, 1];
const moveSquareY = [0, 0, 1, 1];

let map = [];
let chk = [];
let M, N;

function range(x, y){
    if(x<0 || y<0 || x >= N || y >= M){
        return false;
    }
    return true;
}

function chkSquare(x, y){
    const character = map[y][x];
    if(character === null) return false;
        
    let nextX;
    let nextY;
    //console.log("xy : " + x + " " + y);

    for(let i = 1; i<4; i++){
        nextX = x + moveSquareX[i];
        nextY = y + moveSquareY[i];
        //console.log("next xy : " + nextX + " " + nextY)
        if(!range(nextX, nextY)) return false;
        if(map[nextY][nextX] !== character) return false;
    }

    for(let i = 0; i<4; i++){
        nextX = x + moveSquareX[i];
        nextY = y + moveSquareY[i];
        chk[nextY][nextX] = 1;
    }
    return true;
}

function change(x, y){
    if(chk[y][x] !== 1) return 0;
    
    for(let j = y - 1; j>=0; j--){
        map[j + 1][x] = range(x, y - 1) ? map[j][x] : null;
        map[j][x] = null;
    }
    
    chk[y][x] = 0;
    return 1;
}

function chain(){
    let cnt = 0;
    let isChange = true;

    while(isChange){
        //console.log("-------------------------------")
        isChange = false;
        //찾기
        for(let i = 0; i < M; i++){
            for(let j = 0; j < N; j++){
                if(chkSquare(j, i)){
                    isChange = true;
                }
            }
        }
        //console.log(map);
        //console.log(chk);

        //clear & down & cnt
        for(let i = 0; i < M; i++){
            for(let j = 0; j < N; j++){
                cnt += change(j, i);
            }
        }
        //console.log(map);
        //console.log(chk);
        if(!isChange){
            break;
        }
    }

    //최종 결과 계산
    return cnt;
}

function solution(m, n, board) {
    var answer = 0;
    M = m;
    N = n;
    for(let i = 0; i < m; i++){
        map.push(board[i].split(''));
    }
    chk = Array.from(Array(m), () => Array(n).fill(0))
    
    answer = chain();
    
    return answer;
}

console.log(solution(m, n, stdin));