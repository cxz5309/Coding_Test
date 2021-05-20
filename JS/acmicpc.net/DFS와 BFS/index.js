const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 2 1
1 3
2 1`
).split('\n');
 

var n, m, v;
var graph = {};

var line1 = stdin[0].split(' ');
n = line1[0];
m = line1[1];
v = line1[2];

stdin.shift();

var key;
var value;

for(let i=0; i<m; i++){
    key = (stdin[i].split(' ')[0]);
    value = (stdin[i].split(' ')[1]);

    if (!graph[key]) {
        graph[key] = new Array(value)
    }
    else{
        graph[key].push(value);
    }
    //양방향 만들기  
    
    if (!graph[value]) {   
        graph[value] = new Array(key)
    }
    else{
        graph[value].push(key);
    }
}
for(var i in graph){
    graph[i].sort((a, b) =>{
        return a - b
    });
}

//console.log(graph);

//--------------------------------------------------------


//DFS
function DFS(graph, startNode){
    let unVisited = [];
    let visited = [];

    unVisited.push(startNode);

    while (unVisited.length > 0) {
        const current = unVisited.shift();
        if(!visited.includes(current)){
            visited.push(current);
            if(graph.hasOwnProperty(current)){
                unVisited.unshift(...graph[current]);
            }
        }
    }
    return visited;
}
//------------------------------------------------------

//BFS
function BFS(graph, startNode){
    let unVisited = [];
    let visited = [];

    unVisited.push(startNode);

    while (unVisited.length > 0) {
        const current = unVisited.shift();
        if(!visited.includes(current)){
            visited.push(current);
            if(graph.hasOwnProperty(current)){
                unVisited.push(...graph[current]);
            }
        }
    }
    return visited;
}
function solution(input, startNode){
   let answer = [];
   answer.push(DFS(input, startNode).join(" "));
   answer.push(BFS(input, startNode).join(" "));
   return answer;
}

console.log(solution(graph, v).join("\n"));