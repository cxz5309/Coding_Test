const s = "3people unFollowed me";

function solution(s) {
  var answer = '';
  const sArr = s.split(' ');
  answer = sArr.map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  }).join(' ');

  return answer;
}


console.log(solution(s));