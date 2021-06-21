const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10`
).split('\n');
 

var n;

n = Number(stdin[0]);
stdin.shift();

//--------------------------------------------------------

let dp = Array(1000001).fill(987654321);

function solution(){
    dp[0] = 0;
    dp[1] = 0;
    let answer;
    for(let i = 2; i<=n; i++){
        //console.log(i);
        dp[i] = dp[i-1] + 1;
        dp[i] = i%2 === 0 ? Math.min(dp[i/2] + 1, dp[i]) : Math.min(dp[Math.floor(i/2)] + 2, dp[i]);
        //console.log("" + dp[i]);
        dp[i] = i%3 === 0 ? Math.min(dp[i/3] + 1, dp[i]) : Math.min((dp[Math.floor(i/3)] + 1 + (i % 3)), dp[i] );
        //console.log("" + dp[i]);
    }
    answer = dp[n];
    return answer;
}


console.log(solution());