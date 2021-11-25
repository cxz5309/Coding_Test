const citations = [3, 0, 6, 1, 5];


function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a).forEach((val, idx) => {
    if (val >= idx + 1) {
      answer = idx + 1;
    }
  })

  return answer;
}


console.log(solution(citations));