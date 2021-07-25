const board = [[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [1, 0, 0, 0, 1], [0, 1, 1, 0, 0]];

//--------------------------------------------------------

const isRange = (x, y, len) => {
    if(x<0 || x>len-1 || y<0 || y>len-1){
        return false;
    }
    return true;
}

const BFS = (field)=>{
    const len = field.length;
    let chk = field.map(arr1 => arr1.slice().fill([0,0]]));
    let unVisited = [];

    const start = [0,0];
    const end = [len-1, len-1];
    const mX = [0,1,0,-1];
    const mY = [1,0,-1,0];

    let min = Infinity;
    
    unVisited.push({total: 0, dir:0, loc:start});
    unVisited.push({total: 0, dir:1, loc:start});
    chk[0][0] = [0,0];

    while(unVisited.length>0){
        const now = unVisited.shift();
        
        // console.log(now.loc);
        // console.log(chk[now.loc[1]][now.loc[0]]);
        if(now.loc[0] === len-1 && now.loc[1] === len-1){
            min = Math.min(min, now.total);
            //console.log('fin');
        }
        for(let i=0;i<4;i++){
            const nX = now.loc[0] + mX[i];
            const nY = now.loc[1] + mY[i];
            if((now.dir + 2)%4 === i) continue;
            if(!isRange(nX, nY, len)) continue;
            if(field[nY][nX] === 1) continue;

            const nTotal = now.dir === i ? now.total + 100 : now.total + 600;
            if(chk[nY][nX] !== 0 && chk[nY][nX] + 500<nTotal) continue;
            if((i===0||i===2)&&chk[nY][nX][0] < nTotal)

            const next= {total:nTotal, dir:i, loc:[nX, nY]};
            unVisited.push(next);
            chk[nY][nX] = nTotal;
        }
    }
    return min;
}

function solution() {
    var answer = 0;
    answer = BFS(board);

    return answer;
}

console.log(solution());