const answers = [1, 2, 3, 4, 5]

const a = [1, 2, 3, 4, 5];
const b = [2, 1, 2, 3, 2, 4, 2, 5];
const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  var answer = [];
  const scores = new Array(3).fill(0);
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % 5]) scores[0]++;
    if (answers[i] === b[i % 8]) scores[1]++;
    if (answers[i] === c[i % 10]) scores[2]++;
  }
  const max = Math.max(...scores);
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}


console.log(solution(answers));