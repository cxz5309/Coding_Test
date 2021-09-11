const weights = [60,70,60]
const head2head = ["NNN","NNN","NNN"]

const makeWinCnt=(arr)=>{
  const all = arr.filter((val)=>val!=='N').length;
  if(all === 0) return 0;
  const win = arr.filter((val)=>val==='W').length;
  return win / all;
}

const makeHeavyWinCnt = (arr, headNum)=>{
  return arr.reduce((cnt, val, idx)=>{
    const add = 
      (weights[headNum] < weights[idx] && val === 'W') ? 1 : 0;
    return cnt+add;
  }, 0)
}

function solution(weights, head2head) {
  var answer = [];
  for(let i=0;i<head2head.length;i++){
    const headSplit = head2head[i].split('');
    const idx = i+1;
    const WinCnt = makeWinCnt(headSplit);
    const HeavyWinCnt = makeHeavyWinCnt(headSplit, i);
    const weight = weights[i];
    answer.push([idx, WinCnt, HeavyWinCnt, weight]);
  }
  answer.sort((a,b)=>{
    if(a[1] === b[1]){
      if(b[2] === a[2]){
        if(b[3] === a[3]){
          return a[0] - b[0];
        }
        return b[3] - a[3];
      }
      return b[2] - a[2];
    }
    return b[1] - a[1];
  })
  return answer.map((val)=>val[0]);
}


console.log(solution(weights, head2head));