const n = 5;
const lost = [2, 3, 4]
const reserve = [1, 2, 3]

//--------------------------------------------------------

function solution(n, lost, reserve) {
  let answer = n;
  let arr = new Array(n + 2).fill(1);
  let exceptList = [];
  reserve.sort();

  for (let l of lost) {
    arr[l] = 0;
  }

  for (let r of reserve) {
    if (arr[r] === 0) {
      arr[r]++;
      exceptList.push(r);
      continue;
    }
  }

  for (let r of reserve) {
    if (exceptList.includes(r)) { continue; }
    if (arr[r - 1] === 0) { arr[r - 1]++; continue; }
    if (arr[r + 1] === 0) { arr[r + 1]++; continue; }
  }
  for (let i = 1; i <= n; i++) {
    if (arr[i] === 0) answer--;
  }
  return answer;
}


console.log(solution(n, lost, reserve));