const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1 1
2 3
3 4
9 8
5 2
0 0`
).split('\n');
 
// //case '1 1'
// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();
 
// const lineSplit = input();
// const wordSplit = lineSplit.split(' ').map(Number);

//'1 1'
//...
//--------------------------------------------------------

function solution(){
    let answer = [];
    let i = 0;

    while(true){
        let word = stdin[i].split(' ').map(Number);
        if(word[0] === 0 && word[1] === 0){
            return answer;
        }
        let sum = word[0] + word[1];
        answer.push(sum);
        i++;
    }
    return answer;
}


console.log(solution().join("\n"));