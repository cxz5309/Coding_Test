const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
6
1 2
2 3
1 5
5 2
5 6
4 7`
).split('\n');
 

var computers;
var linkCount;
var linkSplit;
var links = {};
var linksR = {};

computers = Number(stdin[0]);
stdin.shift();

linkCount = Number(stdin[0]);
stdin.shift();

var key;
var val;

for(let i=0; i<linkCount; i++){
    linkSplit = (stdin[0].split(' '));
    key = linkSplit[0];
    val = linkSplit[1];
    if(!links[key]){
        links[key] = new Array(val);
    }
    else{
        links[key].push(val);
    }
    if(!links[val]){
        links[val] = new Array(key);
    }
    else{
        links[val].push(key);
    }
    stdin.shift();
}

// console.log(links);
// console.log(linksR);

//--------------------------------------------------------

let visited = [];
let unVisited = [];
let count = 0;
function DFS(startPoint){
    unVisited.push(startPoint);

    while (unVisited.length > 0){
        const current = unVisited.shift();
        if(!visited.includes(current)){
            visited.push(current);
            count++;
            if(links.hasOwnProperty(current)){
                unVisited.unshift(...links[current]);
            }
        }
    }
    return visited;
}

function solution(){
   let answer;
   DFS('1');
   answer = count - 1;
   return answer;
}


console.log(solution());