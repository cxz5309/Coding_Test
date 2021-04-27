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
 

// /*case 't'
// '1 1'
// ...*/

var pokeNum;
var testCase;
var lineSplit = [];

lineSplit = stdin[0].split(' ');
stdin.shift();
console.log(lineSplit);

pokeNum = Number(lineSplit[0]);
testCase = Number(lineSplit[1]);

let pokeIdx = [];

for(let i=0; i<pokeNum; i++){
    pokeIdx.push({
        id : i,
        name: stdin[0]
    });
    stdin.shift();
}
console.log(pokeIdx);

let test = [];
for(let i = 0;i<testCase;i++){
    test.push(stdin[0]);
    stdin.shift();
}
console.log(test);

//--------------------------------------------------------

function solution(input1, input2){
   let answer = [];
   return answer;
}


// console.log(solution(wordSplit[0], wordSplit[1]).join("\n"));