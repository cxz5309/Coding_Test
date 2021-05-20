const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`
).split('\n');

var testCase;
var oxArr = [];

testCase = stdin[0];
stdin.shift();

for(let i=0; i<testCase; i++){
    oxArr.push(stdin[i]);
}

//--------------------------------------------------------

function solution(t, oxArr){
   let answer = [];

    for(var i = 0; i<t; i++){
        let wordArr = oxArr[i].split("");
        let scoreArr = [];
        wordArr.forEach((val, idx, arr)=>{
            if(val === 'O'){
                if(scoreArr.length!==0){
                    scoreArr.push(scoreArr[idx-1] + 1);
                }
                else{
                    scoreArr.push(1);
                }
                return;
            }                
            scoreArr.push(0);
        });
        scoreSum = scoreArr.reduce((pre, cur)=>{
            return pre + cur;
        })
        answer.push(scoreSum);
    }
    return answer;
}


console.log(solution(testCase, oxArr).join("\n"));