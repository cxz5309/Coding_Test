const answers = [1,3,2,4,2]	

const make1pick = (len)=>{
    let picks = [];
    let i = 1;
    while(picks.length<len){
        picks.push(i++);
        if(i>5)i=1;
    }
    return picks;
}
const make2pick = (len)=>{
    let picks = [];
    const nums = [1,3,4,5]
    let i = 0;
    while(picks.length<len){
        let pickNum
        if(picks.length%2 === 0){
            pickNum = 2;
        }
        else{
            pickNum = nums[i];
            i = (i+1)%nums.length;
        }
        picks.push(pickNum);
    }
    return picks;
}
const make3pick = (len)=>{
    let picks = [];
    const nums = [3,1,2,4,5]
    let i = 0;
    while(picks.length<len){
        let pickNum
        if(picks.length%2 === 0){
            pickNum = nums[i];
        }
        else{
            pickNum = nums[i];
            i = (i+1)%nums.length;
        }
        picks.push(pickNum);
    }
    return picks;
}

const compareCnt = (arr1, arr2)=>{
    let cnt = 0;
    arr1.forEach((val, idx)=>{
        if(val === arr2[idx]) cnt++;
    })
    return cnt;
}

function solution() {
    var answer = [];
    const len = answers.length;
    const a = compareCnt(answers, make1pick(len));
    const b = compareCnt(answers, make2pick(len));
    const c = compareCnt(answers, make3pick(len));
    
    const max = Math.max(a,b,c);
    if(max === a)
        answer.push(1);
    if(max === b)
        answer.push(2);
    if(max === c)
        answer.push(3);

    return answer;
}
console.log(solution());