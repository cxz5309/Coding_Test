const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
let visitedMaps = maps.slice();

//--------------------------------------------------------

let height = maps.length;
let width = maps[0].length;

let xMove = [0, 1, 0, -1];
let yMove = [1, 0, -1, 0];
let unVisited = [];

function range(x, y){
    if(x<0 || x>=width || y<0 || y>=height){
        return false;
    }
    return true;
}

function BFS(){
    unVisited.push([0,0,1]);
    visitedMaps[0][0] = 0;

    while(unVisited.length>0){
        let tmp = unVisited.shift();

        if(tmp[0] === width - 1 && tmp[1] === height - 1){
            return tmp[2];
        }

        //console.log(tmp[0] + " " + tmp[1] + " " + tmp[2]);
        //console.log(visitedMaps);
        let next = Array(3);
        for(let i = 0; i < 4;i++){
            next[0] = tmp[0] + xMove[i];
            next[1] = tmp[1] + yMove[i];
            next[2] = tmp[2] + 1;
            //console.log(next[0] + " " + next[1] + " " + next[2]);

            if(!range(next[0], next[1])){
                continue;
            }
            if(maps[next[1]][next[0]] == 0){
                continue;
            }
            if(visitedMaps[next[1]][next[0]] == 0){
                continue;
            }

            unVisited.push([next[0], next[1], next[2]]);
            visitedMaps[next[1]][next[0]] = 0;
        }
    }
    return -1;
}

function solution(){
   let answer = BFS();
   return answer;
}


console.log(solution());