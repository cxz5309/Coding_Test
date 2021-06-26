const n = 3;
var computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

//--------------------------------------------------------

let visited = [];

function DFS(prevNum, nowNum, link){
    //console.log(prevNum + "->" + nowNum);
    if(prevNum !== -1){
        visited.push(nowNum);
    }
    for(let i=0; i<n; i++){
        if(i === nowNum){
            continue;
        }
        if(!visited.indexOf(i) || link[i] == 0){
            continue;
        }
        DFS(nowNum, i, computers[i]);
    }
}

function solution() {
    let answer = 0;
    for(let i=0; i<n; i++){
        if(!visited.indexOf(i)){
            continue;
        }
        DFS(-1, i, computers[i]); 
        answer++;
    }
    return answer;
}


console.log(solution());