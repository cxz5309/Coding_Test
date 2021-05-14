const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`
).split('\n');
 

let answer = [];

var pokeNum;
var testCase;
var lineSplit = [];
var shiftIdx = 0;

lineSplit = stdin[0 + shiftIdx].split(' ');
shiftIdx++;
//console.log(lineSplit);

pokeNum = Number(lineSplit[0]);
testCase = Number(lineSplit[1]);

let pokeIdx = [];

for(let i=1; i<=pokeNum; i++){
    pokeIdx.push({
        id : i,
        name: stdin[0 + shiftIdx]
    });
    shiftIdx++;
}
console.log(pokeIdx);

let test = [];
for(let i = 0;i<testCase;i++){
    test.push(stdin[0 + shiftIdx]);
    shiftIdx++;
}
//console.log(test);

function check(obj, idOrName){
    if(obj.name == idOrName || obj.id == idOrName){
        text = isNaN(idOrName) ? obj.id : obj.name;
        answer.push(text);
        return true;
    }
    return false;
}

function binery_search(startIdx, endIdx, idOrName){
    //pokeIdx 전역 객체배열을 인덱스만으로 접속하여 탐색
    const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    // console.log("start : " + startIdx + " end : " + endIdx);
    // console.log("middle : " + middleIdx);
    // console.log(idOrName);

    if(check(pokeIdx[middleIdx], idOrName)){
        //console.log("도착!" + middleIdx + "    " + pokeIdx[middleIdx]);
        return true;
    }

    if(startIdx == middleIdx || middleIdx == endIdx){
        return false;
    }

    if(binery_search(startIdx, middleIdx - 1, idOrName)){
        return true;
    }
    if(binery_search(middleIdx + 1, endIdx, idOrName)){
        return true;
    }

    return false;
}


//--------------------------------------------------------

function solution(){
    //전역으로 answer만듬
    //check에서 answer를 푸쉬한다
   for(var i = 0; i < test.length; i++){
       binery_search(0, pokeIdx.length - 1, test[i]);
   }
   return answer;
}

console.log(solution().join("\n"));
