let board = [[1,0,0,3],[2,4,5,0],[0,5,4,2],[3,0,1,0]];
const r = 1;
const c = 0;
let len = undefined;
let verLen = undefined;

const BFS = (startX, startY, nextX, nextY)=>{
    
}

const findNext = (start, next)=>{
    const startX = Math.min(start[0],start[1]);
    const startY = Math.max(start[0],start[1]);
    const nextX = Math.min(next[0],next[1]);
    const nextY = Math.max(next[0],next[1]);
    let edge;
    edge = Math.abs(nextY - startY) + Math.abs(nextX - startX);
    let xBlock1 = board[startY].filter((val,idx)=>{return idx<=nextX && idx>=startX});
    let xBlock2 = board[nextY].filter((val,idx)=>{return idx<=nextX && idx>=startX});
    let yBlock1 = makeYLine(startX).filter((val,idx)=>{return idx<=nextY && idx>=startY});
    let yBlock2 = makeYLine(nextX).filter((val,idx)=>{return idx<=nextY && idx>=startY});
    console.log('block')
    console.log(xBlock1);
    console.log(xBlock2);
    console.log(yBlock1);
    console.log(yBlock2);
    
    return edge;
}

const makeYLine = (x)=>{
    return board.map((arr)=>{
        return arr[x];
    })
}

const makeMap = (thisMap)=>{
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(board[i][j]!==0){
                if(thisMap.has(board[i][j])){
                    let tmp = [thisMap.get(board[i][j])];
                    tmp.push([j,i]);
                    thisMap.set(board[i][j], tmp);
                }
                else{
                    thisMap.set(board[i][j], [j,i]);
                }    
            }
        }
    }
    return thisMap;
}
function solution() {
    var answer = 0;
    let coordinateMap = new Map();
    len = board.length;
    coordinateMap = makeMap(coordinateMap);
    verLen = coordinateMap.size;
    let allEdge = [];
    for(let i=1;i<=verLen;i++){
        const sn = coordinateMap.get(i);
        const thisEdge = findNext(sn[0], sn[1]);
        allEdge.push(thisEdge);
    }
    
    console.log(coordinateMap);
    console.log(allEdge);

    return answer;
}


console.log(solution());