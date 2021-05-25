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

function makeOuterSpace(N, I){
    let star = "";
    for(let i=0;i<N - I;i++){
        star += " ";
    }
    return star;
}

function makeInitShape(n){
    //n은 3의 배수
    star = "";
    for(var i=0;i<n;i++){
        a = n - i;
        star += makeOuterSpace(n, i);
        for(var j = 0;j < 2*i + 1;j++){
            star += "*";
        }
        star += makeOuterSpace(n, i);
        star+="\n";
    }
    return star;
}

function makeStar(i, init){
    if(N-i == 0){
        console.log(init);
        return init;
    }


    let newInit = [];
    let space = ""; 
    for(let j = 0; j < i; j++){
        space += " ";
    }

    
    i = i === 0 ? i + 3 : i * 2;
    for(let j = 0; j<i; j++){
        newInit.push(space + init[j]);
    }

    makeStar(i, newInit);
}


console.log(makeStar(0, initShape))

function solution(){
   let answer = [];
   makeStar();
   return answer;
}


//console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));