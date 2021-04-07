const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
 
const lineSplit = input();
const wordSplit = lineSplit.split(' ').map(Number);

function solution(a, b){
   if(a === b)
      return "==";
   if(a>b)
      return ">";
   else
      return "<";
}


console.log(solution(wordSplit[0], wordSplit[1]));