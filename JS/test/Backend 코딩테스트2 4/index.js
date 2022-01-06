const v = [[1, 1, 0, 1, 1], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 1, 1], [1, 0, 1, 1, 1], [1, 0, 1, 1, 1]];

const moveX = [1, 0, -1, 0];
const moveY = [0, 1, 0, -1];
let visited;

const range = (x, y, xL, yL) => {
  return x >= 0 && x < xL && y >= 0 && y < yL;
}

const bfs = (unvisit, xL, yL, map) => {
  let cnt = 1;
  while (unvisit.length > 0) {
    const now = unvisit.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = now.x + moveX[i];
      const nextY = now.y + moveY[i];
      const next = { x: nextX, y: nextY }
      if (range(nextX, nextY, xL, yL) && !visited[nextY][nextX] && map[nextY][nextX] === 1) {
        cnt++;
        unvisit.push(next);
        visited[nextY][nextX] = true;
      }
    }
  }
  return cnt;
}

function solution(v) {
  const mapYLen = v.length;
  const mapXLen = v[0].length;
  visited = Array.from(Array(mapYLen), () => Array(mapXLen).fill(false));
  let area = 0;
  let maxCnt = 0;

  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v[i].length; j++) {
      if (v[i][j] === 1 && visited[i][j] === false) {
        visited[i][j] = true;
        maxCnt = Math.max(maxCnt, bfs([{ x: j, y: i }], mapXLen, mapYLen, v));
        area++;
      }
    }
  }
  const answer = [area, maxCnt];
  return answer;
}

console.log(solution(v))