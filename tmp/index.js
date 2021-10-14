const number = '1924'
const k = 2;


function solution(number, k) {
  var answer = '';
  let first = 0;
  let maxIdx = 0;
  let maxNum = '';
  for (let i = 0; i < number.length - k; i++) {
    maxNum = Number(number[first]);
    maxIdx = first;

    for (let j = first; j < i + k + 1; j++) {
      const num = Number(number[j]);
      if (maxNum < num) {
        maxNum = num;
        maxIdx = j;
      }
    }
    first = maxIdx + 1;
    answer += maxNum;
  }
  return answer;
}

console.log(solution(number, k));