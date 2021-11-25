const n = 12;


function solution(n) {
  for (let i = 2; i < n; i++) {
    if ((n - 1) % i === 0) {
      return i;
    }
  }
  return 0;
}

console.log(solution(n));