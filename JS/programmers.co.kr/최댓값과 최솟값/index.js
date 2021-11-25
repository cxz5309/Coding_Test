const s = '1 2 3 4';

function solution(s) {
  const sArr = s.split(' ').map(Number);
  return Math.min(...sArr) + ' ' + Math.max(...sArr);
}


console.log(solution(s));