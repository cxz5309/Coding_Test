const n = 5;
const s = 'Snowball';
const t = 15;

function solution(n, s, t) {
  let answer;
  let dots = '.'.repeat(n);
  answer = dots + s + dots + s;
  answer = answer.substr(t % (n+s.length), n)
  return answer;
}


console.log(solution(n, s, t));