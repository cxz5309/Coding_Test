const key = [[0,0,0,0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 1]];	
const lock = [[1, 1, 1, 1], [1, 1, 0, 1], [1, 0, 1, 1], [1, 1, 1, 1]];
//--------------------------------------------------------

let cubeSize;

const makePattern = (lock) => {
    const lockLen = lock.length;
    let first = 0;
    while(true){
        const horizon = lock[first];
        const vertical = lock.map((val)=>val[first]);
        const isMale = new Array(lockLen).fill(1);
        if(JSON.stringify(horizon) !== JSON.stringify(vertical) || 
        JSON.stringify(vertical) !== JSON.stringify(isMale)){
            break;
        }
        first++;
    }
    let last = lockLen-1;
    while(true){
        const horizon = lock[last];
        const vertical = lock.map((val)=>val[last]);
        const isMale = new Array(lockLen).fill(1);
        if(JSON.stringify(horizon) !== JSON.stringify(vertical) || 
        JSON.stringify(vertical) !== JSON.stringify(isMale)){
            break;
        }
        last--;
    }
    const newCube = lock.filter((verVal, verIdx)=>(verIdx>=first && verIdx<=last))
        .map((verVal, verIdx)=>{
            return verVal.filter((horVal, horIdx)=>(horIdx>=first && horIdx<=last))
        });
        
    cubeSize = last - first + 1;
    return newCube;
}

const correctLine = (baseLine, compareLine) =>{
    for(let i=0;i<baseLine.length;i++){
        console.log(baseLine[i] + compareLine[i]);
        if(baseLine[i] + compareLine[i] > 1)
            return false;
    }
    return true;
}

const correctCube = (baseCube, compareCube) =>{
    for(let i = 0;i<baseCube.length;i++){
        if(!correctLine(baseCube[i], compareCube[i]))
            return false;
    }
    return true;
}

const CompareMoveCnt = (bigBaseCube, compareCube) => {
    const moveCnt = bigBaseCube.length - cubeSize  + 1;
    for(let i=0;i<moveCnt;i++){
        for(let j=0;j<moveCnt;j++){
            
            const keyCube = bigBaseCube.filter((verVal, verIdx)=>(verIdx>=i && verIdx<i+cubeSize))
            .map((verVal, verIdx)=>{
                return verVal.filter((horVal, horIdx)=>(horIdx>=j && horIdx<j+cubeSize))
            });
            console.log("===");
            console.log(keyCube);
            console.log(compareCube);
            console.log("===");
            if(correctCube(keyCube, compareCube)){
                return true;
            }
        }
    }
    return false;
}

function rotateArr(originalArr, rotateCount) {
    const n = originalArr.length;
    const rotatedArr = Array.from(Array(n), () => new Array(n).fill(null))
    rotateCount = rotateCount % 4
    if (rotateCount == 1 || rotateCount == -3) {
        
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                rotatedArr[col][n - 1 - row] = originalArr[row][col]
            }
        }
        
    } else if (rotateCount == 2 || rotateCount == -2) {
        
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                rotatedArr[n - 1 - row][n - 1 - col] = originalArr[row][col]
            }
        }
        
    } else if (rotateCount == 3 || rotateCount == -1) {
        
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                rotatedArr[n - 1 - col][row] = originalArr[row][col]
            }
        }
        
    } else {
        return originalArr
    }
    return rotatedArr
}

function solution( ) {
    var answer = false;
    const lockCube = makePattern(lock);
    if(key.length<cubeSize){
        return false;
    }

    console.log(key);
    if(CompareMoveCnt(key, lockCube)) return true;

    const key90 = rotateArr(key, 1);
    console.log(key90);
    if(CompareMoveCnt(key90, lockCube)) return true;
    
    const key180 = rotateArr(key, 2);
    console.log(key180);
    if(CompareMoveCnt(key180, lockCube)) return true;

    const key270 = rotateArr(key, 3);
    console.log(key270);
    if(CompareMoveCnt(key270, lockCube)) return true;
    
    return answer;
}


console.log(solution());