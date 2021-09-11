const city = [[1,0,1],[1,1,1],[1,1,1]];

const height = city.length;
const width = city[0].length;

let moveX = [1, 0, -1, 0];
let moveY = [0, 1, 0, -1];

let range = (x, y)=>{
  return x>=0 && y>=0 && x<width && y<height;
}


const BFS = (start)=>{
  let unVisit = [start];
  let visit = Array.from(Array(height), ()=>Array(width).fill(0));

  while(unVisit.length>0){
    const now = unVisit.shift();
    
    if(city[now[1]][now[0]] === 0){
      return now[2];
    }
    for(let i=0;i<4;i++){
      next = [now[0] + moveX[i], now[1] + moveY[i], now[2] + 1];
      if(!range(next[0], next[1]))continue;
      if(visit[next[1]][next[0]] === 1) continue;
      
      visit[next[1]][next[0]] = 1;
      unVisit.push(next);
    }
  }
}

function solution(city) {
  let answer = Array.from(Array(height), ()=>Array(width).fill(0));
  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      answer[i][j] = BFS([j, i, 0]);
    }
  }
  return answer;
}

console.log(solution(city));