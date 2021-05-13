const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`
).split('\n');
 

let hearN;
let seeN;

const lineSplit = stdin[0];
stdin.shift();

hearN = Number(lineSplit.split(' ')[0]);
seeN = Number(lineSplit.split(' ')[1]);

let hearList = [];
let seeList = [];

for(let i=0; i<hearN; i++){
    hearList.push(stdin[i]);
}
for(let i=hearN; i< hearN + seeN; i++){
    seeList.push(stdin[i]);
}

hearList.sort();
seeList.sort();
// console.log(hearList);
// console.log(seeList);
//--------------------------------------------------------

//이진 탐색
let left = [];
let right = [];
let len;
let middle;

function binery_search(arr, des){
    //이미 정렬된 배열이어야함

    len = arr.length;
    middle = len/2;

    if(len === 1){
        if(arr[0] === des){
            return true;
        }
        return false;
    }
    
    left = arr.slice(0, middle);
    right = arr.slice(middle, len);

    if(binery_search(left, des)){
        return true;
    }
    if(binery_search(right, des)){
        return true;
    }
    return false;
}


function solution(input1, input2){
   let answer = [];
   for(let i = 0;i< input2.length;i++){
       if(binery_search(input1, input2[i])){
           answer.push(input2[i])
       }
   }
   console.log(answer.length);
   return answer;
}


console.log(solution(hearList, seeList).join("\n"));