const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
26 40 83
49 60 57
13 89 99`
).split('\n');
 

const N = Number(stdin[0]);
stdin.shift();
let rgbHouse = [];
for(let i=0; i<N; i++){
    rgbHouse.push(stdin[i].split(' ').map(Number));
}
let dp = rgbHouse.slice();

//--------------------------------------------------------

function solution(){
    let answer;
    for(let i = 1; i<N; i++){
        dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + rgbHouse[i][0];
        dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + rgbHouse[i][1];
        dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + rgbHouse[i][2];
    }
    let Min = 987654321;
    for(let i = 0; i<3; i++){
        if(Min> dp[N-1][i]){
            Min = dp[N-1][i];
        }
    }
    answer = Min;
    return answer;
}


console.log(solution());