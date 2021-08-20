const game_board =[[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]
const table = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]

const moveX = [0,1,0,-1];
const moveY = [-1,0,1,0];

let squareSize = undefined;

const range = (x,y)=>{
    return (x>=0 && x<squareSize && y>=0 && y<squareSize);
}

const bfs = (startX, startY, map, blockNum, index)=>{
    let unvisited = [{x:startX, y:startY}];
    let tmpRoute = [];
    map[startY][startX] = -1;

    while(unvisited.length>0){
        const now = unvisited.shift();
        tmpRoute.push([now.x, now.y]);
        for(let i=0;i<4;i++){
            const next = {x:now.x + moveX[i], y:now.y + moveY[i]};
            if(!range(next.x, next.y))
                continue;
            if(map[next.y][next.x] === blockNum ||
                map[next.y][next.x] === -1)
                continue;
            map[next.y][next.x] = -1;
            unvisited.push(next);
        }
    }
    return {
        index: index,
        shape: tmpRoute,
    };
}

const changeCoordinate90 = (x, y, len) => {
    return [y, len-1-x];
}

const isSame = function (aArr, bArr, size){
    const ascXY = (a,b)=>{
        return (a[0] === b[0]) ? a[1]-b[1] : a[0] - b[0];
    }
    aArr.sort(ascXY);
    bArr.sort(ascXY);
    let abMinX = aArr[0][0] - bArr[0][0]
    let abMinY = aArr[0][1] - bArr[0][1]
    //aArr의 전체 x좌표와 bArr의 전체 x좌표의 차이가 같고,
    //aArr의 전체 y좌표와 bArr의 전체 y좌표의 차이가 같다면,
    //두 조각은 같다
    for(let i=0;i<size;i++){
        if(abMinX !== (aArr[i][0] - bArr[i][0]))
            return false;     
        if(abMinY !== (aArr[i][1] - bArr[i][1]))
            return false;
    }
    return true;
}

const compInfoWith4Infos = (info, compInfos, shapeNum, exceptIndex)=>{
    //조각 크기(좌표의 개수)가 같고, 이미 카운팅한 조각이 아니면 filter
    const compInfosFilter = compInfos.filter((compInfo)=>{
        return compInfo.shape.length === shapeNum && !exceptIndex.includes(compInfo.index);
    });
    
    for(let compInfo of compInfosFilter){
        console.log(compInfo);
        let shape = compInfo.shape;
        for(let i=0;i<4;i++){
            //index는 바뀌지 않고 좌표만 90도 변경되었기 때문에 같은 index면 같은 조각이다
            shape = shape.map((val)=>{
                return changeCoordinate90(val[0], val[1], squareSize);
            });
            if(isSame(info.shape, shape, shapeNum)){
                console.log(compInfo.index);
                exceptIndex.push(compInfo.index);
                return true;
            }
        }
    }
    return false;
}

function solution() {
    var answer = 0;
    squareSize = table.length;

    let tableInfos = [];
    let game_boardInfos = [];

    let cnt1 = 0;
    let cnt2 = 0;
    
    //bfs돌리기
    for(let i=0;i<squareSize;i++){
        for(let j=0;j<squareSize;j++){
            if(game_board[i][j] === 0){
                game_boardInfos.push(bfs(j, i, game_board, 1, 'main' + ++cnt2));
            }
            if(table[i][j] === 1){
                tableInfos.push(bfs(j, i, table, 0, ++cnt1));
            }
        }
    }

    let exceptIndex = [];
    for(let game_boardInfo of game_boardInfos){
        const shapeNum = game_boardInfo.shape.length;
        console.log('비교하기')
        console.log(game_boardInfo);

        if(compInfoWith4Infos(game_boardInfo, tableInfos, shapeNum, exceptIndex)){
            answer += shapeNum;
        }
    }
    
    return answer;
}

console.log(solution());