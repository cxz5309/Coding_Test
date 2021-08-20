const table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]];

function solution() {
    let answer = [];
    let len = table.length;
    console.log(table);
    const table1 = Array.from(Array(len), ()=>Array(len).fill(0));
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            table1[i][j] = table[j][len-1-i];
        }
    }
    console.log(table1)
    return answer;
}


console.log(solution());