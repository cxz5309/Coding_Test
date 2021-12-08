const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4
0 3
1 5
45 50
0 9`
).split('\n');

let testCase;
var lineSplit = [];

testCase = Number(stdin[0]);
stdin.shift();

for (let i = 0; i < testCase; i++) {
  lineSplit.push(stdin[i].split(' ').map(Number));
}
//--------------------------------------------------------

const range = (now, end) => {
  return now > 0 && now <= end;
}

const bfs = (start, end) => {
  const move = [-1, 0, 1];
  let visited = [];
  const newEnd = end - start;
  let unvisited = [{ location: 0, distance: 0, cnt: 0 }];
  while (unvisited.length > 0) {
    const now = unvisited.shift();
    console.log(now);
    if (now.location === newEnd && now.distance === 1) {
      return now.cnt;
    }
    for (let i = 0; i < 3; i++) {
      const nextDist = now.distance + move[i];
      const nextLoc = now.location + nextDist;
      const nextCnt = now.cnt + 1;
      if (range(nextLoc, newEnd) && nextDist > 0) {
        visited.push(nextLoc);
        unvisited.push({ location: nextLoc, distance: nextDist, cnt: nextCnt });
      }
    }
  }
  return false;
}

function solution(t, map) {
  let answer = [];
  for (let i = 0; i < t; i++) {
    answer.push(bfs(map[i][0], map[i][1]));
  }
  return answer;
}


console.log(solution(testCase, lineSplit).join('\n'));