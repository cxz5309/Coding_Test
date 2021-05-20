const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
21 Junkyu
21 Dohyun
20 Sunyoung
21 Cohyun
20 Junyoung
21 Junkyu
21 Dohyun
`
).split('\n');
 
// /*case 't'
// 21 Dohyun
// 21 Junkyu
// 20 Sunyoung
// ...*/

let testCase;

testCase = stdin[0];
stdin.shift();

let wordSplit = [];

for(let i=0; i<testCase; i++){
    wordSplit[i] = 
        {
            age: parseInt(stdin[i].split(' ')[0]), 
            name: stdin[i].split(' ')[1],
            index: i,
        };
}
//console.log(wordSplit);

//--------------------------------------------------------

function solution(input){
   let answer = [];
   answer = input.sort(function(a,b){
       return a.age<b.age ? -2 : a.age > b.age ? 2 : function (a,b){
           a.index < b.index ? -1 : 1
       }
   });
   return answer;
}

const sol = solution(wordSplit);

for(let i = 0; i<testCase; i++){
    console.log(sol[i].age + ' ' + sol[i].name);
}