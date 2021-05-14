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
 


var pokeNum;
var testCase;
var lineSplit = [];
var shiftIdx = 0;

lineSplit = stdin[0 + shiftIdx].split(' ');
shiftIdx++;
//console.log(lineSplit);

pokeNum = Number(lineSplit[0]);
testCase = Number(lineSplit[1]);

let pokeIdxName = new Map();
let pokeNameIdx = new Map();

for(let i=1; i<=pokeNum; i++){
    pokeIdxName.set(i, stdin[0 + shiftIdx]);
    pokeNameIdx.set(stdin[0 + shiftIdx], i);
    shiftIdx++;
}
// console.log(pokeIdxName);
// console.log(pokeNameIdx);

let test = [];
for(let i = 0;i<testCase;i++){
    test.push(stdin[0 + shiftIdx]);
    shiftIdx++;
}
//console.log(test);

//--------------------------------------------------------

function solution(){
    let answer = [];

    for(var i = 0; i < test.length; i++){
        if(isNaN(test[i])){
            answer.push(pokeNameIdx.get(test[i]));
        }
        else{
            answer.push(pokeIdxName.get(Number(test[i])));
        }
    }
    return answer;
}

console.log(solution().join("\n"));
