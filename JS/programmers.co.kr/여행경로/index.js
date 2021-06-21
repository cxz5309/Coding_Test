const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `8
ICN BOO
ICN COO
COO DOO
DOO COO
BOO DOO
DOO BOO
BOO ICN
COO BOO`
).split('\n');


/*case 't'
'1 1'
...*/

var testCase;
var lineSplit = [];
var ticket = [];
testCase = stdin[0];
stdin.shift();

for(let i=0; i<testCase; i++){
    lineSplit = stdin[i].split(' ');
    ticket.push(
        {
            start: lineSplit[0],
            end: lineSplit[1],
            idx: i
        })
}

function cmp(a, b){
    if(a.start === b.start){
        if(a.end < b.end)
            return -1;
        return 1;
    }
}

ticket.sort(cmp);

//--------------------------------------------------------
console.log(ticket);
console.log("===============")
var unVisited = [];
var visited = [];
let cities = [];
function DFS(){
    
    unVisited = ticket.filter((val)=>{
        if(val.start === 'ICN'){
            return true;
        }
        return false;
    });
    while(unVisited.length>0){
        var now = unVisited.shift();
        console.log(now);
        console.log(visited);
        cities.push(now.idx);
        var next = ticket.filter((val)=>{
            if(val.start == now.end && !visited.includes(val.idx)){
                return true;
            }
            return false;
        });
        if(next.length === 0){
            visited.pop();
        }
        next.sort(cmp);

        if(next.length>0){
            
            next.forEach((val) =>{
                visited.push(val.idx);
            })
            unVisited = next.concat(unVisited);
        }
    }
}

function solution() {
    let answer = [];
    DFS();
    answer = cities;
    return answer;
}


console.log(solution());