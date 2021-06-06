const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 9
3 6
2 7
4 6
4 2
4 10
1 5`
).split('\n');
 
let N;
let weight;
let lineSplit;
let itemWeight = [];
let itemVal = [];

lineSplit = stdin[0].split(' ');
stdin.shift();

N = Number(lineSplit[0]);
weight = Number(lineSplit[1]);

for(let i=0; i<N; i++){
    lineSplit = stdin[i].split(' ').map(Number);
    itemWeight.push(lineSplit[0]);
    itemVal.push(lineSplit[1]);
}

let dp = Array.from(Array(N + 1), () => Array(weight + 1).fill(0))

//--------------------------------------------------------

function DP(){
    //dp[아이템 최대 갯수][가방 용량] = 조합된 아이템의 최대 가치
    for(let i = 1; i<= N; i++){
        for(let j = 1; j<=weight; j++){
            //가방에 현재 아이템을 추가하지 않은 경우, 추가한 경우 최대가치 비교
            if(j>=itemWeight[i-1]){
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-itemWeight[i-1]] + itemVal[i-1]);
            }
            else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
}
function solution(){
    let answer;
    DP();

    answer = dp[N][weight];
    return answer;
}


console.log(solution());