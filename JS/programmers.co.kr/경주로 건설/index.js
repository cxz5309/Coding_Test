const board = [[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]]

//--------------------------------------------------------

const isRange = (x, y, len) => {
  if (x < 0 || x > len - 1 || y < 0 || y > len - 1) {
    return false;
  }
  return true;
}

const BFS = (field) => {
  const len = field.length;
  let chk = Array.from(Array(2), () => Array.from(Array(len), () => Array(len).fill(Infinity)));
  let unVisited = [];

  const start = [0, 0];
  const end = [len - 1, len - 1];
  const mX = [0, 1, 0, -1];
  const mY = [1, 0, -1, 0];

  let min = Infinity;

  unVisited.push([0, 0, start]);
  unVisited.push([0, 1, start]);
  chk[0][0][0] = 0;
  chk[1][0][0] = 0;

  while (unVisited.length > 0) {
    const now = unVisited.shift();

    if (now[2][0] === len - 1 && now[2][1] === len - 1) {
      min = Math.min(min, now[0]);
    }
    for (let i = 0; i < 4; i++) {
      const nX = now[2][0] + mX[i];
      const nY = now[2][1] + mY[i];
      if ((now[1] + 2) % 4 === i) continue;
      if (!isRange(nX, nY, len)) continue;
      if (field[nY][nX] === 1) continue;

      const nTotal = now[1] === i ? now[0] + 100 : now[0] + 600;
      if (chk[i % 2][nY][nX] <= nTotal) continue;

      const next = [nTotal, i, [nX, nY]];
      unVisited.push(next);
      chk[i % 2][nY][nX] = nTotal;
    }
  }
  return min;
}

function solution(board) {
  var answer = 0;
  answer = BFS(board);
  return answer;
}

console.log(solution(board));