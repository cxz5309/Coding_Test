const n = 6;
const edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];


function makeGraph(arr){
    let graph = new Map();
    arr.forEach(val => {
        let newVal = !graph.has(val[0]) ? [val[1]] : graph.get(val[0]).concat(val[1])
        graph.set(val[0], newVal);
        newVal = !graph.has(val[1]) ? [val[0]] : graph.get(val[1]).concat(val[0])
        graph.set(val[1], newVal);
    });
    //console.log(graph);
    return graph;
}

function BFS(graph){
    const first = 1;
    let unVisited = [[first, 1]];//방문하는 노드, 깊이
    let visited = [first];
    let max = -1;
    let cnt = 0;
    while(unVisited.length>0){
        let curr = unVisited.shift();
        
        //console.log(curr);
        if(max < curr[1]){
            max = curr[1];
            cnt = 1;
        }
        else if(max === curr[1]){
            cnt++;
        }
        const next = graph.get(curr[0]);

        const depth = curr[1] + 1;
        for(let i=0; i<next.length; i++){
            if(visited.includes(next[i]))
                continue;

            visited.push(next[i]);
            unVisited.push([next[i], depth]);
        }
    }
    return cnt;
}

function solution() {
    let answer = [];
    const graph = makeGraph(edge);
    answer = BFS(graph);
    return answer;
}


console.log(solution());