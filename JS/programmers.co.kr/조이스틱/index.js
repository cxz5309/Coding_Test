const myname = "JAZ"

//--------------------------------------------------------

const chkMove = (from, to) => {
  return Math.min(Math.abs(to - from), 65 + 25 - to + 1);
}


let visited = [];
let maxZeroLen = 0;
let zeroLen = 0;
const DFS = (prev, now, direct, result, moveList) => {
  if (visited.length === myname.length) {
    return result;
  }
  if (prev === 0 && prev === now) {
    zeroLen++;
  }
  else {
    maxZeroLen = Math.max(maxZeroLen, zeroLen);
    zeroLen = 0;
  }
  result += moveList[now];
  const next = Math.abs(now + direct);
  if (!visited.includes(next)) {
    visited.push(now);
    const right = DFS(now, next, 1, result, moveList);
    visited.splice(visited.indexOf(now), 1);

    visited.push(now);
    const left = DFS(now, Math.abs(now + direct), -1, result, moveList);
    visited.splice(visited.indexOf(now), 1);
  }
}

function solution(name) {
  var answer = 0;
  let moveList = [];
  for (let i = 0; i < name.length; i++) {
    const move = chkMove('A'.charCodeAt(0), name.charCodeAt(i));
    moveList.push(move);
  }

  const name2 = name.concat(name);
  let maxALen = 0;
  let maxAList = [];
  let aLen = 0;
  let aList = [];
  for (let i = 1; i < name2.length; i++) {
    if (name2.charAt(i - 1) === 'A' && name2.charAt(i) === 'A') {
      aLen++;
      aList.push(i);
    }
    else {
      if (maxALen < aLen) {
        maxALen = Math.max(maxALen, aLen);
        maxAList = aList;
      } else {
        aLen = 0;
        aList = [];
      }
    }
  }

  answer--;
  return answer;
}


console.log(solution(myname));