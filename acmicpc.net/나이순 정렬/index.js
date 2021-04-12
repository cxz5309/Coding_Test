const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
21 Junkyu
21 Dohyun
20 Sunyoung`
).split('\n');
 
// /*case 't'
// 21 Junkyu
// 21 Dohyun
// 20 Sunyoung
// ...*/

var testCase;

testCase = stdin[0];
stdin.shift();

var wordSplit = {};

for(let i=0; i<testCase; i++){
    wordSplit[i] = 
        {
            age: stdin[i].split(' ')[0], 
            name: stdin[i].split(' ')[1]
        };
}
console.log(wordSplit);

//--------------------------------------------------------

function solution(input){
   let answer = [];
   answer = input.age.sort(function(a,b){
       return a
   });
   return answer;
}


console.log(solution(wordSplit).join("\n"));