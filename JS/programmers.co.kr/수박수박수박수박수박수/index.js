const n = 3;

function solution(n) {
  var answer = '';
  const watermelon = '수박';
  for (let i = 0; i < n; i++) {
    answer += watermelon[i % 2];
  }
  return answer;
}

console.log(solution(n));