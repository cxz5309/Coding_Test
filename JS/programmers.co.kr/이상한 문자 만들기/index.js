const s = "try hello world"

//--------------------------------------------------------

function solution(s) {
  var answer = '';
  const newS = s.split(' ');
  newS.forEach((val, idx) => {
    for (let i = 0; i < val.length; i++) {
      const chr = i % 2 === 0 ? val.charAt(i).toUpperCase() : val.charAt(i).toLowerCase();
      answer += chr;
    }
    answer += idx !== newS.length - 1 ? ' ' : '';
  })
  return answer;
}

console.log(solution(s));