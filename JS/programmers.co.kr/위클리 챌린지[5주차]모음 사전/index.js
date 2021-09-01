const word = "I";

let seq = 0;
let nowSeq = 0;

const dfs = (arr, target, nowWord, nowDep) =>{
  console.log(nowWord);
  if(nowWord === target){
    seq = nowSeq;
    return;
  }
  if(nowDep === 5)
    return;
  for(let i=0;i<5;i++){
    let nextWord = nowWord;
    nowSeq++;

    nextWord += arr[i];
    dfs(arr, target, nextWord, nowDep + 1);
  }
}

function solution(word) {
  var answer = 0;
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  dfs(vowels, word, '', 0);
  console.log(seq);
  answer = seq;
  return answer;
}


console.log(solution(word));