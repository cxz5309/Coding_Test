const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `2 11`
).split('\n');

const wordSplit = stdin[0].split(' ').map(Number);
const N = wordSplit[0];
const number = wordSplit[1];

//--------------------------------------------------------

const num = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111];

function solution(N, number){
    var answer = -1;
    let dp = [new Set()];

    for(let i = 1; i<=8; i++){ 
    //i = N의 개수
        dp.push(new Set([num[i-1] * N]));

        for(let j = 1; j <= i; j++){ 
        //j 개를 사용해서 만든 값들
            dp[j].forEach((x)=>{
                dp[i-j].forEach((y)=>{
                    dp[i].add(x - y)
                    dp[i].add(x + y)
                    dp[i].add(x * y)
                    if (y != 0){
                        dp[i].add(Math.floor(x / y));
                    }
                });
            });
        }
        console.log(dp);

        if(dp[i].has(number)){
            answer = i;
            break;
        }
    }
    return answer
}

console.log(solution(N, number));