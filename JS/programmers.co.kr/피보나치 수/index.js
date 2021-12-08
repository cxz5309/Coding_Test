const n = 10;

function solution(n) {
  const fi = [0, 1];
  for (let i = 2; i <= n; i++) {
    fi.push((fi[i - 2] + fi[i - 1]) % 1234567)
  }
  return fi.pop();
}


console.log(solution(n));