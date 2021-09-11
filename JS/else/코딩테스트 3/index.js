const num = -383000

let nums = [];
let cnt = 0;
const makeRecur = (num)=>{
  if(num < 1) return;
  cnt++;
  nums.push(num%10)
  makeRecur(Math.floor(num/10));
}

function solution(num) {
  let answer = 1;
  if(num < 0){
    answer = -1;
    num *= -1;
  }
  if(num>100000) return 0;
  
  makeRecur(num);
  
  let newNum = 0;
  for(let i=0;i<cnt;i++){
    newNum += nums[i] * Math.pow(10, cnt - 1 - i);
  }
  return answer * newNum;
}


console.log(solution(num));