const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `0
9
0 1 3 4 5 6 7 8 9`
).split('\n');
 

/*case 't'
'1 1'
...*/

var nDest;
var btnCount;
var brokenButtonArr = [];

nDest = stdin[0];
stdin.shift();

btnCount = stdin[0];
stdin.shift();

if(btnCount>0)
    brokenButtonArr = stdin[0].split(' ');

//--------------------------------------------------------

function solution(n, bc, bbArr){
    //n은 string형태임
    var nArr = n.split("");
    let answer;

    //바로 누를 수 있는 경우
    let sol1Count;

    if(canDirectButton(nArr, bbArr)){
        sol1Count = nArr.length;
    }
    //채널이동이 더 빠른 경우
    let sol2Count;
    sol2Count = n < 100 ? 100 - n : n - 100;
    let downCount = count(parseInt(n), bbArr, -1);
    let upCount = count(parseInt(n), bbArr, 1);

    // console.log("sol1Count" + sol1Count);
    // console.log("sol2Count" + sol2Count);
    // console.log("downCount" + downCount);
    // console.log("upCount" + upCount);

    answer = 123456789;
    if(sol1Count<answer){
        answer = sol1Count;
    }
    if(sol2Count<answer){
        answer = sol2Count;
    }
    if(downCount<answer){
        answer = downCount;
    }
    if(upCount<answer){
        answer = upCount;
    }
    return answer;
}

function canDirectButton(nArr, bbArr){
    //이동하려는 채널 버튼이 하나라도 고장이면 false
    return nArr.every((val)=>
    {
        return !bbArr.includes(val);
    });
}

function count(n, bbArr, accumulator){
    let itor = n;
    let accSum = 0;
    let min = 123456789;
    while(itor>=0 && itor<=1000000){
        let returnCount = 0;

        //확인할 숫자 변경
        //1씩 변경된 숫자마다 1씩 카운트도 늘어난다
        itor = n;
        accSum += accumulator;
        itor += accSum;
        //console.log(itor);
        returnCount += Math.abs(accSum);

        let itorArr = itor.toString().split("");        
        //console.log(itorArr);   

        if(canDirectButton(itorArr, bbArr)){
            returnCount += itorArr.length;
        }
        else{
            //console.log("하나라도 없는 경우는 만들수 없는 숫자");
            continue;
        }
        //console.log(returnCount);
        if(min>returnCount){
            min = returnCount;
        }
    }
    return min;
}


console.log(solution(nDest, btnCount, brokenButtonArr));