const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3`
).split('\n');
 

var N;

N = Number(stdin[0]);
stdin.shift();

initShape = ["  *  ", " * * ", "*****"];

//--------------------------------------------------------

function makeStar(i, init){
    prev = i;
    now = i === 0 ? i + 3 : i * 2;

    if(N-now == 0){
        return init;
    }

    let newInit = [];
    let space = ""; 
    for(let j = 0; j < now; j++){
        space += " ";
    }

    for(let j = 0; j<now; j++){
        newInit.push(space + init[j] + space);
    }

    for(let j = 0; j<now; j++){
        newInit.push(init[j] + " " + init[j]);
    }

    return makeStar(now, newInit);
}

function solution(){
   let answer = [];
   answer = makeStar(0, initShape);
   return answer;
}


console.log(solution().join("\n"));