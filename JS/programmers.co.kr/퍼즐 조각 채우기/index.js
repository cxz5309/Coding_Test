const game_board = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]	
const table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]	

const moveX = [0,1,0,-1];
const moveY = [-1,0,1,0];

let squareSize = undefined;
let chkTable = undefined;
let chkGame_board = undefined;

const range = (x,y)=>{
    if(x<0 || x>=squareSize || y<0 || y>=squareSize){
        return false;
    }
    return true;
}

const bfs = (startX, startY, map, chkMap, blockNum, index)=>{
    let unvisited = [{x:startX, y:startY}];
    let tmpRoute = [];
    chkMap[startY][startX] = 1;

    while(unvisited.length>0){
        const now = unvisited.shift();
        tmpRoute.push([now.x, now.y]);
        map[now.y][now.x] = index;
        for(let i=0;i<4;i++){
            const next = {x:now.x + moveX[i], y:now.y + moveY[i]};
            if(!range(next.x, next.y))
                continue;
            if(map[next.y][next.x] === blockNum || chkMap[next.y][next.x] === 1)
            {
                continue;
            }
            chkMap[next.y][next.x] = 1;
            unvisited.push(next);
        }
    }
    let pieceInfo = {
        index: index,
        shape: tmpRoute,
    };
    return pieceInfo;
}

function changeCoordinate90(x, y, len){
    return [y, len-1-x];
}

function makeInfos90(infos){
    const newInfos = infos.map((info)=>{
        const newInfo = {};
        newInfo.index = info.index;
        newInfo.shape = info.shape.map((val)=>{
            return changeCoordinate90(val[0], val[1], squareSize);
        });
        return newInfo;
    })
    return newInfos;
}

const isSame = function (aArr, bArr, size){
    aArr.sort((a,b)=>{
        //a, b는 [x,y]로 구성됨
        return (a[0] === b[0]) ? a[1]-b[1] : a[0] - b[0];
    })
    bArr.sort((a,b)=>{
        return (a[0] === b[0]) ? a[1]-b[1] : a[0] - b[0];
    })
    // console.log(aArr);
    // console.log(bArr);
    let abMinX = undefined;
    let abMinY = undefined;
    //aArr의 전체 x좌표와 bArr의 전체 x좌표의 차이가 같고,
    //aArr의 전체 y좌표와 bArr의 전체 y좌표의 차이가 같다면,
    //두 조각은 같다
    for(let i=0;i<size;i++){
        if(!abMinX) abMinX = aArr[i][0] - bArr[i][0];
        else{
            if(abMinX !== aArr[i][0] - bArr[i][0])
            return false;
        }                        
        if(!abMinY) abMinY = aArr[i][1] - bArr[i][1];
        else{
            if(abMinY !== aArr[i][1] - bArr[i][1])
            return false;
        }
    }
    return true;
}

function findInfoIn4Infos(info, Infos4, shapeNum, exceptIndex){
    for(let thisTableInfos of Infos4){
        //조각 크기(좌표의 개수)가 같고, 이미 카운팅한 조각이 아니면 filter
        const tableInfosFilter = thisTableInfos.filter((tableInfo)=>{
            return tableInfo.shape.length === shapeNum && !exceptIndex.includes(tableInfo.index);
        });
        
        for(let tableInfo of tableInfosFilter){
            console.log(tableInfo);
            if(isSame(info.shape, tableInfo.shape, shapeNum)){
                // console.log('~~~~~~~~');
                // console.log(tableInfo.index);
                exceptIndex.push(tableInfo.index);
                return true;
            }
        }
    }
}

function solution() {
    var answer = 0;
    squareSize = table.length;
    chkTable = Array.from(Array(squareSize), ()=>Array(squareSize).fill(0));
    chkGame_board = Array.from(Array(squareSize), ()=>Array(squareSize).fill(0));

    let tableInfos = [];
    let game_boardInfos = [];

    let cnt1 = 0;
    let cnt2 = 0;
    
    //bfs돌리기
    for(let i=0;i<squareSize;i++){
        for(let j=0;j<squareSize;j++){
            if(table[i][j] === 1 && chkTable[i][j] === 0){
                cnt1++;
                tableInfos.push(bfs(j, i, table, chkTable, 0, cnt1));
                // console.log('cnt1 : ' + cnt1);
            }
            if(game_board[i][j] === 0 && chkGame_board[i][j] === 0){
                cnt2--;
                game_boardInfos.push(bfs(j, i, game_board, chkGame_board, 1, cnt2));
                // console.log('cnt2 : ' + cnt2);
            }
        }
    }
    //console.log(table); 
    //console.log(game_board);

    //index는 바뀌지 않고 좌표만 90도 변경되었기 때문에 같은 index면 같은 조각이다
    const tableInfos1 = makeInfos90(tableInfos);
    const tableInfos2 = makeInfos90(tableInfos1);
    const tableInfos3 = makeInfos90(tableInfos2);

    const AllTableInfos = [tableInfos,tableInfos1,tableInfos2,tableInfos3];
    let exceptIndex = [];

    for(let game_boardInfo of game_boardInfos){
        const shapeNum = game_boardInfo.shape.length;
        console.log('비교하기')
        console.log(game_boardInfo);

        if(findInfoIn4Infos(game_boardInfo, AllTableInfos, shapeNum, exceptIndex)){
            answer += shapeNum;
        }
    }
    
    return answer;
}

console.log(solution());