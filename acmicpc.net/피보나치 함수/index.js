const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `11
0
1
2
3
4
5
6
7
8
9
10`
).split('\n');
 
var testCase;
var fiboNums = [];

testCase = Number(stdin[0]);
stdin.shift();

for(let i=0; i<testCase; i++){
    fiboNums.push(Number(stdin[i]));
}

//console.log(fiboNums);

//--------------------------------------------------------

let zeroArr = [];
let oneArr = [];


function fibonacci(testCase, n){
    
    if(n == 0){
        zeroArr[testCase]++;
        return 0;
    }
    else if( n == 1){
        oneArr[testCase]++;
        return 1;
    }
    return fibonacci(testCase, n - 1) + fibonacci(testCase, n - 2);
}

function forFibonacci(testCase, n){
    var num = 0
    var numNext = 1;

    if(n>1){
        for(var i = 0;i<n - 1;i++){
            tmp = numNext;
            numNext = num + numNext;
            num = tmp;
        }
    }
    return numNext;
}

function result(n){
    let num, numNext;

    if(n == 0){
        num = 1;
        numNext = 0;
    }
    else{
        num = 0
        numNext = 1;
    }

    if(n > 1){
        for(var i = 0;i<n - 1;i++){
            tmp = numNext;
            numNext = num + numNext;
            num = tmp;
        }
    }
    return num + " " + numNext;
}
function solution(testCase, fiboNums){
   let answer = [];

   for(var i = 0; i < testCase; i++){
        // zeroArr.push(0);
        // oneArr.push(0);
        // console.log("피보나치값은: " + fibonacci(i, fiboNums[i]));
        // console.log("동일하면: " + forFibonacci(i, fiboNums[i]));

        //0의 값은 피보나치 -1값, 1의값은 피보나치값
        //answer.push(zeroArr[i] + " " + oneArr[i]);

        //따라서
        answer.push(result(fiboNums[i]));

   }
   return answer;
}

console.log(solution(testCase, fiboNums).join("\n"));