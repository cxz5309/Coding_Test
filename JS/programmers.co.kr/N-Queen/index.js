const n = 4;
//--------------------------------------------------------

let visited = [];
let cnt = 0;


const DFS = function(x, y, check, n){
    y = y+1;
    if(y === n){
        //console.log(visited);
        cnt++;
        return;
    }
    //console.log("x : " + x + " y : " + y);
    for(let i = 0;i<n;i++){

        if(isPosible(i, y, check, n)){
            check[y][i] = 1;
            visited.push([i, y])
            DFS(i, y, check, n);
            check[y][i] = 0;
            visited.pop();
        }
    }
}


const isPosible = function(x, y, check, n){
    if(x>=n||y>=n){
        return false;
    }
    //x축 검사
    if(check[y].includes(1))
        return false;
    //y축 검사
    const rowMap = check.map((val)=>{
        return val[x];
    })
    if(rowMap.includes(1))
        return false;
    //대각선 검사 (x의 좌표차이 === y의 좌표차이)
    for(let val of visited){
        if(Math.abs(val[0] - x) === Math.abs(val[1] - y)){
            return false;
        }
    }
    //console.log("isPosible x : " + x + " y : " + y);
    return true;
}



function solution() {
    var answer = 0;
    let check = Array.from(Array(n), ()=>new Array(n).fill(0));
    DFS(-1, -1, check, n);
    answer = cnt;
    return answer;
}


console.log(solution());