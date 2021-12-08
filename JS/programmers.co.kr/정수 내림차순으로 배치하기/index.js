const n = 118372;

function solution(n) {
  var answer = 0;
  const nArr = n.toString().split('');
  nArr.sort((a, b) => b - a);
  answer = Number(nArr.join(''));
  return answer;
}


console.log(solution(n));