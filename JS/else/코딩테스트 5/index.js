const s = "Hello, World!?"

const reverseString = (str) => {
  return str.split("").reverse().join("");
}

function solution(s) {
  let answer = [];
  answer = s.split(/[.,!? ]/)
  .filter(val=>val.length>0)
  .map((val)=>{
    return reverseString(val);
  })
  return answer;
}

console.log(solution(s));